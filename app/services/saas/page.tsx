"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";
import VideoPlayer from "@/components/VideoPlayer";
import CountUp from "@/components/CountUp";
import { getProjects } from "@/lib/projects";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20want%20to%20build%20or%20launch%20a%20SaaS%20product.%20Can%20you%20share%20a%20quote%3F";
const syne = { fontFamily: "var(--font-syne)" };
const portfolio = getProjects("saas");

const features = [
  { icon: "🏢", title: "Multi-tenant Architecture", desc: "One product, many customers. Isolated data, custom domains, and role-based workspaces built to scale from day one." },
  { icon: "💳", title: "Subscriptions & Billing", desc: "Plans, trials, invoices, GST, and Razorpay / Stripe billing so you can charge monthly without a separate finance tool." },
  { icon: "📊", title: "Admin Dashboards", desc: "Usage, revenue, churn, and support queues in one place — so you run the product, not a pile of spreadsheets." },
  { icon: "🔐", title: "Auth & Permissions", desc: "Email, Google, and phone login with org-level roles. Admins invite teams; you stay in control of access." },
  { icon: "⚙️", title: "APIs & Integrations", desc: "REST APIs, webhooks, WhatsApp, Slack, and CRM hooks so your SaaS fits into how Indian businesses already work." },
  { icon: "☁️", title: "Cloud-ready Launch", desc: "AWS or GCP hosting, CI/CD, backups, and monitoring. We ship a live product — not a folder of code." },
];

const productTypes = [
  { title: "CRM & Sales OS", desc: "Pipelines, follow-ups, and WhatsApp-first lead tracking for agencies and field teams." },
  { title: "Booking & Operations", desc: "Appointments, staff roster, and customer portals for clinics, salons, and service brands." },
  { title: "Internal Tools", desc: "HR, inventory, vendor, and finance portals that replace messy Excel and WhatsApp groups." },
  { title: "Marketplace SaaS", desc: "Two-sided products — vendors, buyers, commissions, and payouts under one login." },
  { title: "Analytics Products", desc: "Dashboards, reports, and alerts your customers pay to watch every month." },
  { title: "AI-powered SaaS", desc: "Photo, content, or support products with usage-based plans and a clean onboarding flow." },
];

const testimonials = [
  { name: "Raina Gupta", role: "Small Business Owner, Delhi", initials: "RG", color: "#E8561A", text: "The support team was incredibly patient, guiding me through every step. Swift responses and seamless execution made this a stress-free experience. I've confidently recommended them to many colleagues." },
  { name: "Jitesh Bansal", role: "Entrepreneur, Mumbai", initials: "JB", color: "#1A7A4A", text: "Remarkable creativity, prompt responses, and attentiveness to every design preference. Their intuitive understanding and dedication to quality make them an absolute pleasure to work with." },
  { name: "Arjun Kumar", role: "Startup Founder, Bangalore", initials: "AK", color: "#D4A017", text: "Creative flair, response times, sensitivity to requests, communication, customer service — the collaborative approach and product quality are outstanding. I could go on and on!" },
  { name: "Nirendra Miglani", role: "D2C Brand Owner, Jaipur", initials: "NM", color: "#E81A5A", text: "Team Kreative Tech listens to their clients. More is always what we get — with friendly service and genuine eagerness to help. Highly recommended for any digital project." },
];

const faqs = [
  { q: "Do you only build custom SaaS, or do you sell products too?", a: "Both. We build custom SaaS for founders and businesses, and we also help launch productised tools — subscription billing, tenant accounts, and a public marketing site included." },
  { q: "How is this different from an ERP?", a: "ERP is usually one company running its own operations. SaaS is a product many customers pay you for. We design tenancy, plans, onboarding, and usage from the start." },
  { q: "How long does a SaaS MVP take?", a: "A focused MVP — auth, one core workflow, billing, and an admin panel — typically ships in 6–10 weeks. Broader platforms take 3–4 months in phases." },
  { q: "Who owns the product after launch?", a: "You do. Source code, infrastructure, and domains stay in your name. We can stay on for feature sprints and monthly maintenance." },
  { q: "Can you help with pricing and launch?", a: "Yes. We set up plans, trials, GST-ready invoices, and a landing page so you can start collecting paying users — not just a demo." },
];

export default function SaasPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#141414] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <FadeUp className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 border border-[rgba(232,86,26,0.35)] bg-[rgba(232,86,26,0.12)] text-[#E8561A] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E8561A]" /> Our own product · KT CRM
              </div>
              <h1 className="text-[clamp(34px,4.6vw,54px)] font-extrabold leading-[1.08] tracking-[-1.5px] text-white mb-5" style={syne}>
                SaaS we build.<br />
                <em className="not-italic text-[#E8561A]">SaaS we sell.</em>
              </h1>
              <p className="text-base md:text-lg text-white/55 font-light leading-[1.75] mb-6 max-w-xl">
                Watch KT CRM — the subscription product we designed, built, and run. Same stack we use to ship custom SaaS for founders who want recurring revenue.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Pipelines", "WhatsApp follow-ups", "Team roles", "Monthly billing"].map((chip) => (
                  <span key={chip} className="text-xs font-medium text-white/75 border border-white/12 bg-white/5 rounded-full px-3 py-1.5">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5">
                  Build my SaaS →
                </a>
                <a href="#kt-crm-demo"
                  className="flex items-center gap-2 border border-white/20 hover:bg-white hover:text-[#141414] text-white font-semibold px-7 py-3.5 rounded-full transition-all">
                  Watch KT CRM
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.1} className="lg:col-span-7">
              <div id="kt-crm-demo" className="relative">
                <div className="absolute -inset-4 rounded-[28px] bg-[#E8561A]/15 blur-2xl pointer-events-none" />
                <div className="relative rounded-[22px] border border-white/10 bg-[#1C1C1C] p-2.5 shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                  <div className="flex items-center gap-2 px-3 pb-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
                    <span className="ml-2 text-[11px] font-medium text-white/40 tracking-wide">kreativetech.in/kt-crm</span>
                  </div>
                  <VideoPlayer
                    src="/videos/KT_crm-demo_compressed.mp4"
                    title="KT CRM — Our SaaS Walkthrough"
                    subtitle="Live product demo from the Kreative Tech stack"
                    badge="▶ Product Demo"
                  />
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={0.15} className="grid grid-cols-3 gap-3 md:gap-5 mt-12">
            {[
              { to: 12, suffix: "+", lbl: "SaaS shipped" },
              { val: "6–10 wks", lbl: "MVP timeline" },
              { val: "₹1.2L+", lbl: "Starting price" },
            ].map((s) => (
              <div key={s.lbl} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 md:px-5 md:py-5">
                <div className="text-lg md:text-xl font-extrabold text-white leading-none" style={syne}>
                  {"to" in s && s.to !== undefined ? <CountUp to={s.to} suffix={s.suffix ?? ""} /> : s.val}
                </div>
                <div className="text-[11px] md:text-xs text-white/45 mt-1.5">{s.lbl}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">How We Work</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Build it for you. Or launch it with us.</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FadeItem>
              <div className="bg-[#F7F4EE] rounded-2xl p-8 border border-[rgba(20,20,20,0.07)] h-full">
                <div className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest mb-3">Custom SaaS</div>
                <h3 className="text-2xl font-bold text-[#141414] mb-3" style={syne}>Your product, your brand</h3>
                <p className="text-sm text-[#5A5A5A] font-light leading-relaxed mb-6">
                  You have the idea. We turn it into a multi-tenant product with plans, onboarding, and an admin you can run. Code and cloud stay in your name.
                </p>
                <ul className="space-y-2.5 text-sm text-[#141414]">
                  {["Discovery to MVP in weeks", "Your domain and branding", "You own the codebase"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#E8561A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
            <FadeItem>
              <div className="bg-[#141414] rounded-2xl p-8 h-full text-white">
                <div className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest mb-3">Productised SaaS</div>
                <h3 className="text-2xl font-bold mb-3" style={syne}>A product you can sell</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed mb-6">
                  Need a sellable tool — CRM, booking, internal OS, or AI workflow? We package the product, billing, and marketing site so you can start charging.
                </p>
                <ul className="space-y-2.5 text-sm text-white/90">
                  {["Subscription-ready from launch", "Public site + app in one build", "Handover or we stay as product partner"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#E8561A] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeItem>
          </FadeUpGroup>
        </div>
      </section>

      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">What You Get</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Everything a real SaaS needs</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <FadeItem key={f.title}>
                <div className="bg-white rounded-2xl p-6 border border-[rgba(20,20,20,0.07)] h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-[#141414] mb-2" style={syne}>{f.title}</h3>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{f.desc}</p>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Products We Ship</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>SaaS types we build and sell</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {productTypes.map((p) => (
              <FadeItem key={p.title}>
                <div className="rounded-2xl p-6 border border-[rgba(20,20,20,0.08)] h-full hover:border-[#E8561A]/40 hover:shadow-[0_12px_40px_rgba(20,20,20,0.08)] transition-all">
                  <h3 className="font-bold text-[#141414] mb-2" style={syne}>{p.title}</h3>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{p.desc}</p>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {portfolio.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 md:px-8">
            <FadeUp className="mb-12">
              <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Our Work</span>
              <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>SaaS products we&apos;ve shipped</h2>
            </FadeUp>
            <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {portfolio.map((p) => (
                <FadeItem key={p.id}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="group block bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,20,0.1)] transition-all duration-300 h-full">
                    <div className="relative h-48 overflow-hidden" style={{ background: p.color ?? "#EDE9E0" }}>
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                      <div className="absolute top-3 left-3 bg-white/90 text-xs font-semibold text-[#141414] px-2.5 py-1 rounded-full">{p.tag}</div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-[#141414] mb-1" style={syne}>{p.title}</h3>
                      <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{p.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">View live product →</div>
                    </div>
                  </a>
                </FadeItem>
              ))}
            </FadeUpGroup>
          </div>
        </section>
      )}

      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Client Reviews</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>What Our Clients Say</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <FadeItem key={t.name}>
                <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623] text-base">★</span>)}</div>
                  <p className="text-sm text-[#5A5A5A] leading-[1.8] italic font-light mb-5 flex-1">&ldquo;{t.text}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0" style={{ background: t.color }}>{t.initials}</div>
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

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>SaaS FAQs</h2>
          </FadeUp>
          <FadeUpGroup className="space-y-0">
            {faqs.map((faq) => (
              <FadeItem key={faq.q}>
                <details className="border-b border-[rgba(20,20,20,0.08)] group">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-sm text-[#141414]" style={syne}>
                    {faq.q}
                    <svg className="w-5 h-5 text-[#5A5A5A] shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14" /></svg>
                  </summary>
                  <p className="pb-5 text-sm text-[#5A5A5A] font-light leading-relaxed">{faq.a}</p>
                </details>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      <section style={{ background: "#141414" }} className="py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <h2 className="text-[clamp(28px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] mb-4" style={syne}>
              Ready to <span className="text-[#E8561A]">Ship a Product?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">
              WhatsApp us the SaaS you want to sell. We&apos;ll tell you what to build first and what it costs to launch.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp for Free Quote
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
