"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA_LINK = "https://wa.me/918551944773?text=Hi%2C%20I%20am%20interested%20in%20your%20services.";
const WA_QUOTE = "https://wa.me/918551944773?text=Hi%2C%20I%20want%20to%20discuss%20a%20project%20and%20get%20a%20quote.";

const syne = { fontFamily: "var(--font-syne), 'Syne', system-ui, sans-serif" };

// ── Data ──────────────────────────────────────────────────────────────────────

const services = [
  { icon: "🌐", title: "Website Design & Development", desc: "Mobile-first, SEO-optimised websites that load in under 2 seconds and convert visitors into leads.", href: "/services/web-development/" },
  { icon: "📱", title: "iOS & Android App Development", desc: "Custom mobile apps with Flutter or React Native. One codebase, both platforms, native performance.", href: "/services/app-development/" },
  { icon: "🛒", title: "Shopify E-commerce Stores", desc: "Complete Shopify stores with Indian payments, WhatsApp checkout, and conversion-focused design.", href: "/services/shopify/" },
  { icon: "⚙️", title: "ERP & Business Software", desc: "Automate operations — inventory, HR, billing, and reports — in one custom system built for your workflow.", href: "/#contact" },
  { icon: "🚀", title: "Landing Pages & Ad Funnels", desc: "High-converting landing pages built for Instagram/Google Ads. A/B tested, fast-loading, lead-capture ready.", href: "/services/landing-pages/" },
  { icon: "☁️", title: "Cloud & DevOps", desc: "Scalable cloud infrastructure on AWS, GCP, or Azure. Setup, migration, monitoring, and cost optimisation.", href: "/#contact" },
  { icon: "🎨", title: "UI/UX Design", desc: "User-centred design that looks stunning and converts. Wireframes, prototypes, and final design assets.", href: "/#contact" },
  { icon: "🤖", title: "Telegram & WhatsApp Bots", desc: "Automate customer support, lead capture, and order notifications with intelligent messaging bots.", href: "/#contact" },
];

const portfolio = [
  { title: "Mprofy Platform", category: "Web App", color: "#1C1C2E", textColor: "rgba(255,255,255,0.18)", image: "/images/morphy.png", link: "https://mprofy.com/", tag: "Web3 Platform" },
  { title: "Kathmandu Outdoor", category: "E-commerce", color: "#0D2137", image: "/images/kathMandu.png", link: "https://www.kathmanduoutdoor.com/", tag: "Shopify" },
  { title: "Stealtho Store", category: "Marketplace", color: "#1E3A2F", image: "/images/steathoStore.png", link: "https://stealtho.store/", tag: "E-commerce" },
  { title: "Buki Vista App", category: "Mobile App", color: "#1A0D2E", image: "/images/portfolio-10.png", link: "https://play.google.com/store/apps/details?id=com.bukivista.bv_app", tag: "Android App" },
  { title: "Henry Heffernan", category: "Portfolio", color: "#0D2137", image: "/images/henry.png", link: "https://henryheffernan.com/", tag: "Landing Page" },
];

const testimonials = [
  { name: "Raina Gupta", role: "Small Business Owner, Delhi", initials: "RG", color: "#E8561A", text: "The support team was incredibly patient, guiding me through every step. Swift responses and seamless execution made this a stress-free experience. I've confidently recommended them to many colleagues." },
  { name: "Jitesh Bansal", role: "Entrepreneur, Mumbai", initials: "JB", color: "#1A7A4A", text: "Remarkable creativity, prompt responses, and attentiveness to every design preference. Their intuitive understanding and dedication to quality make them an absolute pleasure to work with." },
  { name: "Krishan Mahajan", role: "Business Owner, Pune", initials: "KM", color: "#1A4EE8", text: "Genuinely dedicated to understanding customer needs. They go above and beyond expectations, offering thoughtful insights. Their customer-focused attitude ensures every interaction is truly helpful." },
  { name: "Tushar Sharma", role: "MSME Owner, Noida", initials: "TS", color: "#8B44E8", text: "Very patient with someone new to all this! Quick response rate to every question. I have recommended this team to many colleagues — something that does not happen often with web development." },
  { name: "Arjun Kumar", role: "Startup Founder, Bangalore", initials: "AK", color: "#D4A017", text: "Creative flair, response times, sensitivity to design requests, communication, customer service — the collaborative approach and product quality are outstanding. I could go on and on!" },
  { name: "Nirendra Miglani", role: "D2C Brand Owner, Jaipur", initials: "NM", color: "#E81A5A", text: "Team Kreative Tech listens to their clients. More is always what we get — with friendly service and genuine eagerness to help. Highly recommended for any digital project." },
];

const faqs = [
  { q: "How much does a website cost in India?", a: "A basic business website starts from ₹15,000–₹30,000. E-commerce and custom web apps vary based on features. We provide a free detailed quote after understanding your requirements — no hidden charges." },
  { q: "How long does it take to build a website?", a: "A standard business website takes 2–4 weeks. E-commerce stores take 4–8 weeks. Custom applications can take 2–6 months. We share a clear timeline before we start." },
  { q: "Do you provide maintenance after launch?", a: "Yes — all projects include 30 days of free post-launch support. We also offer affordable annual maintenance covering updates, security patches, backups, and performance monitoring." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, improve UI/UX, boost SEO, and ensure mobile-friendliness — while preserving your existing content and SEO rankings wherever possible." },
  { q: "Will my website rank on Google?", a: "Every website we build follows SEO best practices — proper headings, semantic HTML, fast load times, mobile responsiveness, meta tags, and sitemap submission. We build a strong technical foundation." },
  { q: "Do you develop apps for both iOS and Android?", a: "Yes. We use Flutter and React Native to build cross-platform apps from a single codebase — significantly reducing cost while maintaining native-quality performance." },
  { q: "How do we communicate during the project?", a: "We work on WhatsApp for quick updates, schedule video calls for milestone reviews, and share progress via a shared project board. You'll always know exactly where your project stands." },
  { q: "Do you work with clients outside Delhi?", a: "Yes! We're based in Delhi but serve clients across India and internationally. We've delivered projects for clients in Mumbai, Bangalore, Jaipur, and abroad. Distance is never a barrier." },
];

const techStack = [
  { logo: "https://cdn.simpleicons.org/react/61DAFB", name: "React JS" },
  { logo: "https://cdn.simpleicons.org/flutter/02569B", name: "Flutter" },
  { logo: "https://cdn.simpleicons.org/nodedotjs/339933", name: "Node.JS" },
  { logo: "https://cdn.simpleicons.org/python/3776AB", name: "Python" },
  { logo: "https://cdn.simpleicons.org/shopify/7AB55C", name: "Shopify" },
  { logo: "https://cdn.simpleicons.org/amazonaws/FF9900", name: "AWS" },
  { logo: "https://cdn.simpleicons.org/firebase/FFCA28", name: "Firebase" },
  { logo: "https://cdn.simpleicons.org/mysql/4479A1", name: "MySQL" },
  { logo: "https://cdn.simpleicons.org/mongodb/47A248", name: "MongoDB" },
  { logo: "https://cdn.simpleicons.org/figma/F24E1E", name: "Figma" },
  { logo: "https://cdn.simpleicons.org/wordpress/21759B", name: "WordPress" },
  { logo: "https://cdn.simpleicons.org/typescript/3178C6", name: "TypeScript" },
];

// ── Component ─────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send("service_jg385g4", "template_ztccroi", {
        from_name: formData.name,
        from_email: formData.email,
        from_number: formData.phone,
        message: `Service: ${formData.service}\n\n${formData.message}`,
        to_email: "connect@kreativetech.in",
      }, "pz-2-lSUbcctexn6-");
      setFormSent(true);
    } catch {
      const text = `Hi! I filled the contact form.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`;
      window.open(`https://wa.me/918551944773?text=${encodeURIComponent(text)}`, "_blank");
    }
  };

  return (
    <>
      <Navbar />

      {/* ── HERO ── */}
      <section className="pt-16" aria-labelledby="hero-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-10 pb-12 md:pt-14 md:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="hero-animate">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF5EF] text-[#1A7A4A] rounded-full px-4 py-1.5 text-sm font-medium mb-7">
              <span className="w-2 h-2 rounded-full bg-[#1A7A4A] inline-block" />
              Currently accepting new projects
            </div>

            <h1 id="hero-heading" className="text-[clamp(38px,5vw,60px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-6" style={syne}>
              We Build Digital Products That{" "}
              <em className="not-italic text-[#E8561A]">Grow Your Business</em>
            </h1>

            <p className="text-lg text-[#5A5A5A] leading-[1.75] font-light mb-9 max-w-[480px]">
              Websites, mobile apps, and custom software for India&apos;s MSMEs and small businesses. From idea to launch — and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200 hover:-translate-y-0.5 shadow-md"
                style={{ fontFamily: "var(--font-dm-sans)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Get Free Consultation
              </a>
              <Link href="/portfolio/"
                className="flex items-center gap-2 border border-[rgba(20,20,20,0.18)] hover:bg-[#141414] hover:text-white text-[#141414] font-semibold px-7 py-3.5 rounded-full text-base transition-all duration-200">
                See Our Work →
              </Link>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap items-center">
              {[
                { num: "5+", label: "Years in Business" },
                { num: "80+", label: "Projects Delivered" },
                { num: "50+", label: "Happy Clients" },
                { num: "4.9★", label: "Client Rating" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center">
                  {i > 0 && <div className="w-px h-7 bg-[rgba(20,20,20,0.12)] mx-5" />}
                  <div>
                    <div className="text-2xl font-extrabold text-[#141414] leading-none" style={syne}>{s.num}</div>
                    <div className="text-xs text-[#5A5A5A] mt-1">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — video */}
          <FadeUp delay={0.1}>
            <div className="relative">
              <div className="relative w-full aspect-video bg-[#141414] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={(e) => {
                  (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
                }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,86,26,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                    <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-semibold text-sm">Watch Our Agency Showreel</div>
                    <div className="text-white/60 text-xs mt-1">See what we build — 2 min</div>
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">▶ Play Demo</div>
              </div>
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "5+", sub: "Years Exp." },
                  { label: "80+", sub: "Projects" },
                  { label: "4.9★", sub: "Rating" },
                ].map((b) => (
                  <div key={b.label} className="bg-white border border-[rgba(20,20,20,0.08)] rounded-xl p-3 text-center">
                    <div className="font-extrabold text-[#141414] text-sm leading-none mb-1" style={syne}>{b.label}</div>
                    <div className="text-[11px] text-[#5A5A5A]">{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── CLIENT LOGOS STRIP ── */}
      <div className="border-t border-b border-[rgba(20,20,20,0.08)] bg-white py-6">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <span className="text-xs font-medium text-[#B0ACA5] tracking-wide uppercase">Trusted by</span>
          {["Mprofy", "Kathmandu Outdoor", "Stealtho Store", "Buki Vista", "Henry Heffernan", "LocalMention"].map((c) => (
            <span key={c} className="text-sm font-bold text-[#B0ACA5] hover:text-[#5A5A5A] transition-colors cursor-default"
              style={syne}>{c}</span>
          ))}
        </div>
      </div>

      {/* ── ABOUT + VIDEO ── */}
      <section id="about" className="py-24 bg-[#F7F4EE]" aria-labelledby="about-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard card */}
          <FadeUp>
            <div className="relative">
              {/* Main card */}
              <div className="bg-[#141414] rounded-2xl p-6 shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <div className="text-white font-bold text-sm" style={syne}>Project Dashboard</div>
                    <div className="text-white/40 text-xs mt-0.5">Live overview · 2025</div>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                  </div>
                </div>
                {/* Stat pills */}
                <div className="grid grid-cols-3 gap-2.5 mb-5">
                  {[
                    { val: "80+", label: "Projects", color: "#E8561A" },
                    { val: "50+", label: "Clients", color: "#1A7A4A" },
                    { val: "4.9★", label: "Rating", color: "#1A4EE8" },
                  ].map((s) => (
                    <div key={s.label} className="bg-[rgba(255,255,255,0.07)] rounded-xl p-3 text-center">
                      <div className="font-extrabold text-base leading-none mb-1" style={{ ...syne, color: s.color }}>{s.val}</div>
                      <div className="text-[10px] text-white/40">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* Progress bars */}
                <div className="space-y-3.5">
                  {[
                    { label: "Web Development", pct: 92, color: "#E8561A" },
                    { label: "App Development", pct: 85, color: "#1A7A4A" },
                    { label: "Shopify Stores", pct: 78, color: "#1A4EE8" },
                    { label: "Landing Pages", pct: 95, color: "#8B44E8" },
                  ].map((s) => (
                    <div key={s.label}>
                      <div className="flex justify-between text-[11px] mb-1.5">
                        <span className="text-white/60">{s.label}</span>
                        <span className="text-white/40">{s.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-[rgba(255,255,255,0.08)] rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${s.pct}%`, background: s.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Floating card — bottom right */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_40px_rgba(20,20,20,0.15)] border border-[rgba(20,20,20,0.08)]">
                <div className="text-2xl font-extrabold text-[#141414] leading-none mb-0.5" style={syne}>100%</div>
                <div className="text-xs text-[#5A5A5A]">On-Time Delivery</div>
              </div>
              {/* Floating card — top right */}
              <div className="absolute -top-5 -right-5 bg-[#EBF5EF] rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(26,122,74,0.15)] border border-[rgba(26,122,74,0.15)]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1A7A4A] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#141414]">Project Delivered</div>
                    <div className="text-[10px] text-[#5A5A5A]">Client approved ✓</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Text */}
          <FadeUp delay={0.1}>
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">About Us</span>
            <h2 id="about-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] leading-[1.2] tracking-[-0.8px] mb-5" style={syne}>
              Your Trusted Digital Partner for Business Growth
            </h2>
            <p className="text-base text-[#5A5A5A] leading-[1.75] font-light mb-6">
              At Kreative Tech, we help India&apos;s MSMEs and small businesses compete digitally. We don&apos;t just build websites — we craft experiences that convert visitors into customers.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Dedicated team that truly understands MSME challenges and budgets",
                "End-to-end ownership — strategy, design, development, and launch",
                "Transparent communication with quick response on WhatsApp",
                "Post-launch support and maintenance included in all packages",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#5A5A5A] leading-relaxed">
                  <div className="w-5 h-5 mt-0.5 rounded-full bg-[#EBF5EF] flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-6" stroke="#1A7A4A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5">
                Work With Us →
              </a>
              <Link href="/about/"
                className="flex items-center gap-2 border border-[rgba(20,20,20,0.18)] hover:bg-[#141414] hover:text-white text-[#141414] font-semibold px-6 py-3 rounded-full transition-all">
                Our Story
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <FadeUp>
              <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">What We Do</span>
              <h2 id="services-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] leading-[1.2] tracking-[-0.8px]" style={syne}>
                Services Built for<br />Real Business Results
              </h2>
            </FadeUp>
            <FadeUp delay={0.1} className="lg:max-w-xs">
              <p className="text-base text-[#5A5A5A] font-light leading-relaxed">
                Every service is tailored to your goals. No cookie-cutter packages — just solutions that work.
              </p>
            </FadeUp>
          </div>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <FadeItem key={s.title}>
                <Link href={s.href}
                  className="group block bg-[#F7F4EE] hover:bg-white border border-[rgba(20,20,20,0.08)] hover:border-transparent hover:shadow-[0_12px_40px_rgba(20,20,20,0.1)] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden h-full">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#E8561A] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <div className="w-12 h-12 rounded-xl bg-[#FDF0E8] flex items-center justify-center text-2xl mb-5">{s.icon}</div>
                  <h3 className="font-bold text-[#141414] text-base mb-2.5" style={syne}>{s.title}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">{s.desc}</p>
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-semibold text-[#E8561A] group-hover:gap-2.5 transition-all">
                    Learn more <span>→</span>
                  </div>
                </Link>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="py-24 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Why Kreative Tech</span>
            <h2 className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>What Makes Us Different</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "⚡", title: "7–14 Day Delivery", desc: "Most projects delivered in 1–2 weeks. No months-long wait and endless back-and-forths." },
              { icon: "💰", title: "Transparent Pricing", desc: "Fixed-price packages with no hidden costs. You know the total before we write a line of code." },
              { icon: "📲", title: "WhatsApp-First Support", desc: "Direct access to your developer on WhatsApp. Replies within 30 minutes during business hours." },
              { icon: "📈", title: "Results, Not Just Design", desc: "Every site we build is optimised to generate leads and convert visitors — not just look pretty." },
            ].map((item) => (
              <FadeItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 border border-[rgba(20,20,20,0.08)] h-full">
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-[#141414] text-base mb-2" style={syne}>{item.title}</h3>
                  <p className="text-sm text-[#5A5A5A] leading-relaxed font-light">{item.desc}</p>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-white" aria-labelledby="process-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">How We Work</span>
            <h2 id="process-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>
              From Idea to Launch in 5 Simple Steps
            </h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-2 md:grid-cols-5 gap-8 relative">
            {[
              { num: "01", title: "Discovery Call", desc: "Free 30-min consultation to understand your goals and requirements." },
              { num: "02", title: "Strategy & Planning", desc: "Architecture, tech stack, and clear timeline with milestones." },
              { num: "03", title: "Design", desc: "Wireframes and high-fidelity designs refined with your feedback." },
              { num: "04", title: "Development & QA", desc: "Clean code, thorough testing across devices. Zero surprises at launch." },
              { num: "05", title: "Launch & Support", desc: "Go live with confidence. We stay on as your ongoing tech partner." },
            ].map((step) => (
              <FadeItem key={step.num} className="text-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-[rgba(20,20,20,0.15)] hover:bg-[#E8561A] hover:border-[#E8561A] flex items-center justify-center font-extrabold text-lg text-[#5A5A5A] hover:text-white mx-auto mb-4 transition-all duration-300 hover:scale-110 cursor-default"
                  style={syne}>{step.num}</div>
                <h3 className="font-bold text-[#141414] text-sm mb-2" style={syne}>{step.title}</h3>
                <p className="text-xs text-[#5A5A5A] leading-relaxed font-light">{step.desc}</p>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="work" className="py-24 bg-[#F7F4EE]" aria-labelledby="portfolio-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <FadeUp>
              <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Our Work</span>
              <h2 id="portfolio-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>
                Recent Projects
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link href="/portfolio/"
                className="inline-flex items-center gap-2 border border-[rgba(20,20,20,0.18)] hover:bg-[#141414] hover:text-white text-[#141414] font-semibold px-5 py-2.5 rounded-full text-sm transition-all">
                View All Projects →
              </Link>
            </FadeUp>
          </div>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <FadeItem key={p.title}>
                <a href={p.link} target="_blank" rel="noopener noreferrer"
                  className="group block bg-white border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(20,20,20,0.1)] transition-all duration-300">
                  <div className="relative h-48 overflow-hidden" style={{ background: p.color }}>
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                    <div className="absolute top-3 left-3 bg-[rgba(255,255,255,0.12)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {p.tag}
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-wide">{p.category}</span>
                    <h3 className="font-bold text-[#141414] mt-1 mb-0" style={syne}>{p.title}</h3>
                    <div className="flex items-center gap-1 mt-2 text-xs font-semibold text-[#5A5A5A] group-hover:text-[#E8561A] group-hover:gap-2 transition-all">
                      View live site <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                </a>
              </FadeItem>
            ))}
            {/* CTA card */}
            <FadeItem>
              <div className="bg-[#FDF0E8] border border-[rgba(232,86,26,0.2)] rounded-2xl flex flex-col items-center justify-center text-center p-10 min-h-[240px]">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-[#141414] text-lg mb-2" style={syne}>Your Project Next?</h3>
                <p className="text-sm text-[#5A5A5A] mb-5 font-light">Join 50+ businesses that chose Kreative Tech to go digital.</p>
                <a href={WA_QUOTE} target="_blank" rel="noopener noreferrer"
                  className="bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
                  Start a Project →
                </a>
              </div>
            </FadeItem>
          </FadeUpGroup>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" className="py-24 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Client Reviews</span>
            <h2 id="testimonials-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>
              What Our Clients Say
            </h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <FadeItem key={t.name}>
                <div className="bg-[#F7F4EE] border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 hover:shadow-[0_8px_32px_rgba(20,20,20,0.07)] transition-shadow h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623] text-base">★</span>)}
                  </div>
                  <p className="text-sm text-[#5A5A5A] leading-[1.8] italic font-light mb-5 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ background: t.color }}>{t.initials}</div>
                    <div>
                      <div className="font-semibold text-[#141414] text-sm">{t.name}</div>
                      <div className="text-xs text-[#5A5A5A]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-20 bg-[#F7F4EE]" aria-labelledby="tech-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Technologies</span>
            <h2 id="tech-heading" className="text-[clamp(28px,3vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>
              Built with Modern Tech Stack
            </h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {techStack.map((t) => (
              <FadeItem key={t.name}>
                <div className="bg-white border border-[rgba(20,20,20,0.08)] hover:border-[#E8561A] hover:shadow-[0_4px_16px_rgba(232,86,26,0.12)] rounded-xl p-4 text-center transition-all duration-200 cursor-default">
                  <img src={t.logo} alt={t.name} width={32} height={32} className="mx-auto mb-2" />
                  <span className="text-xs font-medium text-[#5A5A5A]">{t.name}</span>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">FAQs</span>
            <h2 id="faq-heading" className="text-[clamp(28px,3vw,40px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>
              Frequently Asked Questions
            </h2>
          </FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-0 max-w-5xl mx-auto">
            {[faqs.slice(0, 4), faqs.slice(4)].map((col, ci) => (
              <div key={ci}>
                {col.map((faq, i) => {
                  const idx = ci * 4 + i;
                  return (
                    <div key={faq.q} className="border-b border-[rgba(20,20,20,0.08)] py-6 cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-semibold text-[#141414] text-sm leading-snug" style={syne}>{faq.q}</span>
                        <div className={`w-7 h-7 shrink-0 rounded-full flex items-center justify-center transition-all duration-200 ${openFaq === idx ? "bg-[#E8561A]" : "bg-[#EDE9E0]"}`}>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke={openFaq === idx ? "white" : "#141414"} strokeWidth="2">
                            <path strokeLinecap="round" d={openFaq === idx ? "M2 6h8" : "M6 2v8M2 6h8"} />
                          </svg>
                        </div>
                      </div>
                      {openFaq === idx && (
                        <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mt-3">{faq.a}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + CONTACT ── */}
      <section id="contact" style={{ background: "#141414" }} className="py-24" aria-labelledby="cta-heading">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <FadeUp>
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Get Started</span>
            <h2 id="cta-heading" className="text-[clamp(32px,3.5vw,48px)] font-extrabold text-white leading-[1.15] tracking-[-1px] mb-5" style={syne}>
              Ready to Build Something <em className="not-italic text-[#E8561A]">Great?</em>
            </h2>
            <p className="text-base text-[rgba(255,255,255,0.55)] font-light leading-relaxed mb-8">
              Tell us about your project and we&apos;ll get back to you within 2 hours with a free consultation and rough estimate — no strings attached.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-[#E8561A] hover:text-white text-[#141414] font-semibold px-6 py-3.5 rounded-full transition-all duration-200">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp Us Now
              </a>
              <a href="tel:+918551944773"
                className="flex items-center gap-2 border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] text-[rgba(255,255,255,0.7)] hover:text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200">
                Call Us
              </a>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[rgba(255,255,255,0.08)]">
              {[
                { label: "Phone", value: "+91 85519 44773", href: "tel:+918551944773" },
                { label: "Email", value: "connect@kreativetech.in", href: "mailto:connect@kreativetech.in" },
                { label: "Location", value: "Delhi, India", href: undefined },
              ].map((c) => (
                <div key={c.label}>
                  <div className="text-xs text-[rgba(255,255,255,0.4)] uppercase tracking-wide mb-1">{c.label}</div>
                  {c.href ? (
                    <a href={c.href} className="text-white text-sm font-medium hover:text-[#E8561A] transition-colors">{c.value}</a>
                  ) : (
                    <span className="text-white text-sm font-medium">{c.value}</span>
                  )}
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Right — contact form */}
          <FadeUp delay={0.15}>
            <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-2xl p-8">
              {formSent ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-white mb-2" style={syne}>Message Sent!</h3>
                  <p className="text-[rgba(255,255,255,0.55)] text-sm mb-6">We&apos;ll reply within 2 hours.</p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full">
                    Also chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <h3 className="text-lg font-bold text-white mb-6" style={syne}>Send Us a Message</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wide mb-2">Name *</label>
                      <input required type="text" placeholder="Rahul Sharma" value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-[rgba(255,255,255,0.3)] transition-colors" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wide mb-2">Phone *</label>
                      <input required type="tel" placeholder="+91 98765 43210" value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-[rgba(255,255,255,0.3)] transition-colors" />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wide mb-2">Email *</label>
                    <input required type="email" placeholder="you@company.com" value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-[rgba(255,255,255,0.3)] transition-colors" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wide mb-2">Service Needed</label>
                    <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors cursor-pointer">
                      <option value="" className="bg-[#141414]">Select a service</option>
                      {["Website Development", "Mobile App", "Shopify Store", "Landing Page", "ERP Solution", "Other"].map((s) => (
                        <option key={s} value={s} className="bg-[#141414]">{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-5">
                    <label className="block text-xs font-medium text-[rgba(255,255,255,0.5)] uppercase tracking-wide mb-2">Tell us about your project</label>
                    <textarea rows={3} placeholder="Brief description of what you need..." value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-white text-sm outline-none placeholder:text-[rgba(255,255,255,0.3)] transition-colors resize-none" />
                  </div>
                  <button type="submit"
                    className="w-full bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold py-3.5 rounded-xl text-sm transition-colors flex items-center justify-center gap-2">
                    Send Message →
                  </button>
                  <p className="text-xs text-[rgba(255,255,255,0.3)] text-center mt-3">
                    Or <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">WhatsApp us directly</a> — it&apos;s faster.
                  </p>
                </form>
              )}
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
