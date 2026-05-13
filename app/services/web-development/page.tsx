"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20need%20a%20website%20built.%20Can%20you%20share%20a%20quote%3F";
const syne = { fontFamily: "var(--font-syne)" };

const portfolio = [
  { title: "Mprofy Platform", desc: "Web3 platform for managing DAOs, communities, and reward systems.", image: "/images/morphy.png", tag: "Web App", link: "https://mprofy.com/" },
  { title: "Grabzy Platform", desc: "Feature-rich web application with real-time data updates and a modern dashboard UI.", image: "/images/grabzy.JPG", tag: "Web App", color: "#1C1C2E", link: "#" },
  { title: "LocalMention SaaS", desc: "Review management SaaS with analytics dashboard and automated response workflows.", image: "/images/localmention.JPG", tag: "SaaS", color: "#0D2137", link: "#" },
  { title: "Zimyo HR Platform", desc: "HR & payroll SaaS for Indian SMBs — onboarding, attendance, leaves, and salary processing.", color: "#1A2F5C", tag: "HR SaaS", link: "https://zimyo.com" },
  { title: "Yocket Study Abroad", desc: "Study abroad platform with university search, profile builder, and application tracker.", color: "#2A1A5C", tag: "EdTech Platform", link: "https://yocket.com" },
  { title: "Leegality Docs", desc: "Digital document signing and workflow automation SaaS for Indian businesses and legal teams.", color: "#0A3A3A", tag: "LegalTech", link: "https://www.leegality.com" },
];

const features = [
  { icon: "⚡", title: "Fast-Loading & SEO-Ready", desc: "Core Web Vitals optimised. 90+ PageSpeed scores. Google-friendly from day one." },
  { icon: "📱", title: "Mobile-First Responsive", desc: "Looks perfect on every device — phone, tablet, laptop, and desktop." },
  { icon: "🔒", title: "SSL + Security Hardened", desc: "HTTPS, CSP headers, input sanitisation, and regular security audits included." },
  { icon: "🔧", title: "CMS or Custom Backend", desc: "WordPress CMS for easy editing, or a custom Node.js / Python backend for complex logic." },
  { icon: "🔗", title: "Third-Party Integrations", desc: "CRM, WhatsApp Business API, Razorpay, Google Analytics, and any API you need." },
  { icon: "📈", title: "Analytics & Tracking", desc: "Google Analytics 4, Search Console, conversion tracking, and heatmaps configured." },
];

export default function WebDevPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#EBF5EF] text-[#1A7A4A] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A7A4A]" /> React, Next.js & WordPress Experts
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5" style={syne}>
              Websites That <em className="not-italic text-[#E8561A]">Win Clients</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] mb-8 max-w-2xl">
              Custom web development for MSMEs, startups, and enterprises. Fast, SEO-optimised, and built to generate leads for your business.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5">
                Get a Free Quote →
              </a>
              <Link href="/portfolio/" className="flex items-center gap-2 border border-[rgba(20,20,20,0.18)] hover:bg-[#141414] hover:text-white text-[#141414] font-semibold px-7 py-3.5 rounded-full transition-all">
                See Portfolio
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-5 gap-y-4">
              {[["₹20,000+", "Starting Price"], ["2–4 Weeks", "Delivery"], ["50+", "Sites Built"], ["5+", "Years Exp."]].map(([val, lbl]) => (
                <div key={lbl}>
                  <div className="text-lg font-extrabold text-[#141414] leading-none" style={syne}>{val}</div>
                  <div className="text-xs text-[#5A5A5A] mt-0.5">{lbl}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative w-full aspect-video bg-[#141414] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={(e) => {
                (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_WEBDEV_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,86,26,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">Website Build — Design to Deployment</div>
                  <div className="text-white/60 text-xs mt-1">Full development walkthrough</div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">▶ Watch Now</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">What You Get</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Everything Included — No Surprises</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <FadeItem key={f.title}>
                <div className="bg-[#F7F4EE] rounded-2xl p-6 border border-[rgba(20,20,20,0.07)] h-full">
                  <div className="text-3xl mb-4">{f.icon}</div>
                  <h3 className="font-bold text-[#141414] mb-2" style={syne}>{f.title}</h3>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{f.desc}</p>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Our Work</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Websites We&apos;ve Built</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <FadeItem key={p.title}>
                <a href={p.link && p.link !== "#" ? p.link : "#"} target={p.link && p.link !== "#" ? "_blank" : "_self"} rel="noopener noreferrer"
                  className="group block bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,20,0.1)] transition-all duration-300 h-full">
                  <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: p.color ?? "#EDE9E0" }}>
                    {p.image && <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />}
                    {!p.image && <span className="text-4xl font-extrabold text-white/20 tracking-tight" style={syne}>{p.title.split(" ")[0].toUpperCase()}</span>}
                    <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#141414] mb-1" style={syne}>{p.title}</h3>
                    <p className="text-sm text-[#5A5A5A] font-light">{p.desc}</p>
                    {p.link && p.link !== "#" && <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">View live site →</div>}
                  </div>
                </a>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Web Development FAQs</h2>
          </FadeUp>
          <FadeUpGroup className="space-y-0">
            {[
              { q: "How much does a business website cost in India?", a: "A basic business website starts from ₹20,000. E-commerce and custom web apps vary from ₹50,000–₹3,00,000+ based on features. We provide a detailed quote after a free consultation." },
              { q: "WordPress vs custom development — which is better?", a: "WordPress is great for business websites where content needs frequent updates. Custom development (Next.js, React) is better for web apps, SaaS, or anything with complex features. We recommend the right stack for your specific needs." },
              { q: "Will my website rank on Google?", a: "Every website we build follows SEO best practices — semantic HTML, fast load times, mobile responsiveness, meta tags, sitemap, and schema markup. We lay a strong SEO foundation; ongoing content and link building are separate." },
              { q: "Do you provide hosting?", a: "We help you set up hosting on AWS, Vercel, or shared hosting based on your needs and budget. We don't lock you into proprietary hosting — you own everything." },
              { q: "What happens after my website launches?", a: "All projects include 30 days of free post-launch support. We fix any issues, guide you on using the CMS, and ensure everything is running smoothly. Annual maintenance plans are available." },
            ].map((faq) => (
              <FadeItem key={faq.q}>
                <details className="border-b border-[rgba(20,20,20,0.08)] group">
                  <summary className="flex items-center justify-between gap-4 py-5 cursor-pointer list-none font-semibold text-sm text-[#141414]" style={syne}>
                    {faq.q}
                    <svg className="w-5 h-5 text-[#5A5A5A] shrink-0 transition-transform group-open:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14M5 12h14"/></svg>
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
              Ready for a <span className="text-[#E8561A]">New Website?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">WhatsApp us your requirements. We&apos;ll send a detailed quote within 2 hours.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp for Free Quote
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
