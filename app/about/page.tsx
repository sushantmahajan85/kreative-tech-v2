"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20want%20to%20work%20with%20Kreative%20Tech.";
const syne = { fontFamily: "var(--font-syne)" };

const values = [
  { icon: "🤝", title: "Client First", desc: "Every decision — design, pricing, timelines — is guided by what's best for the client's business, not ours." },
  { icon: "⚡", title: "Move Fast", desc: "We believe in shipping quickly. Most projects in 7–14 days. No endless back-and-forths or months of waiting." },
  { icon: "🔍", title: "Transparent", desc: "Fixed pricing, honest timelines, direct communication. No agency jargon, no hidden costs, ever." },
  { icon: "📈", title: "Results-Driven", desc: "We're not just building pretty websites. We're building tools that get more clients for your business." },
];

const milestones = [
  { year: "2019", event: "Founded Kreative Tech in Delhi. First 5 clients — all referrals from happy customers." },
  { year: "2020", event: "Expanded into mobile app development. First Flutter app launched on Google Play Store." },
  { year: "2021", event: "Hit 25 clients. Started specialising in Shopify stores for D2C brands." },
  { year: "2022", event: "Launched ERP development practice. First enterprise client onboarded." },
  { year: "2023", event: "50+ projects milestone. Expanded team. WhatsApp-first support model launched." },
  { year: "2024", event: "Serving clients across 10+ Indian cities. 100% client satisfaction maintained." },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Cities Served" },
  { value: "4.9★", label: "Client Rating" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-20 md:py-28 text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-4">About Us</span>
            <h1
              className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5"
              style={syne}
            >
              We&apos;re a Digital Agency That{" "}
              <em className="not-italic text-[#E8561A]">Actually Cares</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] max-w-2xl mx-auto">
              Kreative Tech was founded with one goal: help Indian small businesses compete online with the same tools big brands use — at a price that makes sense.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — story */}
            <FadeUp>
              <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Our Story</span>
              <h2
                className="text-[clamp(26px,3vw,36px)] font-bold text-[#141414] tracking-[-0.8px] mb-5"
                style={syne}
              >
                Built from the Ground Up
              </h2>
              <div className="space-y-4 text-[#5A5A5A] text-sm leading-[1.8] font-light">
                <p>
                  Kreative Tech started in 2019 in Delhi with a simple belief — Indian small businesses deserve professional digital solutions, not cheap templates.
                </p>
                <p>
                  We&apos;ve spent 5+ years working directly with MSMEs, startups, and D2C brands across India, understanding what actually works for Indian customers and what doesn&apos;t.
                </p>
                <p>
                  Today, we&apos;re a team of developers, designers, and strategists who communicate entirely over WhatsApp — because that&apos;s how Indian business works. No fancy offices, no bloated agency fees. Just results.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
                >
                  Work With Us →
                </a>
                <Link
                  href="/portfolio/"
                  className="flex items-center gap-2 border border-[rgba(20,20,20,0.18)] hover:bg-[#141414] hover:text-white text-[#141414] font-semibold px-6 py-3 rounded-full transition-all"
                >
                  See Our Work
                </Link>
              </div>
            </FadeUp>

            {/* Right — stats grid */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F7F4EE] rounded-2xl p-7 text-center border border-[rgba(20,20,20,0.07)]"
                  >
                    <div
                      className="text-4xl font-extrabold text-[#E8561A] mb-1"
                      style={syne}
                    >
                      {s.value}
                    </div>
                    <div className="text-sm text-[#5A5A5A] font-light">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">
              How We Work
            </span>
            <h2
              className="text-[clamp(26px,3vw,36px)] font-bold text-[#141414] tracking-[-0.8px]"
              style={syne}
            >
              Our Values
            </h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <FadeItem key={v.title}>
                <div className="bg-white rounded-2xl p-6 border border-[rgba(20,20,20,0.08)] h-full">
                  <div className="text-3xl mb-4">{v.icon}</div>
                  <h3
                    className="font-bold text-[#141414] text-base mb-2"
                    style={syne}
                  >
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">
              Our Journey
            </span>
            <h2
              className="text-[clamp(26px,3vw,36px)] font-bold text-[#141414] tracking-[-0.8px]"
              style={syne}
            >
              5 Years of Building
            </h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[rgba(20,20,20,0.1)]" />
            <div className="space-y-6">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.07}>
                  <div className="flex items-start gap-6 pl-2">
                    <div className="relative z-10 w-12 h-12 rounded-full bg-[#E8561A] flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-white" />
                    </div>
                    <div className="bg-[#F7F4EE] border border-[rgba(20,20,20,0.07)] rounded-2xl p-5 flex-1">
                      <span
                        className="text-[#E8561A] font-bold text-sm"
                        style={syne}
                      >
                        {m.year}
                      </span>
                      <p className="text-[#5A5A5A] text-sm font-light mt-1 leading-relaxed">
                        {m.event}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#141414" }} className="py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <h2
              className="text-[clamp(28px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] mb-4"
              style={syne}
            >
              Ready to Work <span className="text-[#E8561A]">Together?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">
              WhatsApp us your project brief. We&apos;ll reply with a quote within 2 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
              <Link
                href="/portfolio/"
                className="flex items-center gap-2 border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] text-white font-semibold px-7 py-4 rounded-full text-base transition-colors"
              >
                See Our Work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
