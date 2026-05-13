"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20need%20a%20landing%20page%20for%20my%20Instagram%20Ads.%20Can%20you%20help%3F";
const syne = { fontFamily: "var(--font-syne)" };

function WAReview({ name, role, message, time }: { name: string; role: string; message: string; time: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(20,20,20,0.08)] shadow-sm">
      <div className="bg-[#128C7E] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-sm">{name[0]}</div>
        <div>
          <div className="text-white text-sm font-semibold">{name}</div>
          <div className="text-white/70 text-xs">{role}</div>
        </div>
      </div>
      <div className="bg-[#ECE5DD] px-4 py-5">
        <div className="flex justify-end">
          <div className="bg-[#DCF8C6] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
            <p className="text-sm text-[#141414] leading-relaxed">{message}</p>
            <div className="text-[10px] text-[#667781] text-right mt-1.5">{time} ✓✓</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function IGReview({ handle, message }: { handle: string; message: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(20,20,20,0.08)] bg-white shadow-sm">
      <div className="border-b border-[rgba(20,20,20,0.06)] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center text-white font-bold text-xs">{handle[0].toUpperCase()}</div>
        <div className="text-sm font-semibold text-[#141414]">@{handle}</div>
      </div>
      <div className="px-4 py-4 flex justify-end">
        <div className="bg-gradient-to-br from-[#F58529] to-[#DD2A7B] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%]">
          <p className="text-sm leading-relaxed">{message}</p>
        </div>
      </div>
    </div>
  );
}

const portfolio = [
  { title: "Scalewell", desc: "Wellness business coaching page — bold headline, pain-point copy, video CTA, and testimonials built for Indian SME audiences.", image: "https://image.thum.io/get/width/800/https://scalewell.in/", tag: "Business Coaching", link: "https://scalewell.in/" },
  { title: "Vivek Advantage", desc: "Freelance Meta Ads consultant page — ROI-first copy, ₹ ad spend credibility, pain-point sections, and direct book-a-call CTA.", image: "https://image.thum.io/get/width/800/https://vivekadvantage.in/", tag: "Consultant Page", link: "https://vivekadvantage.in/" },
  { title: "Base Shgala", desc: "Indian entrepreneur and MSME business coach — bold transformation copy, programme showcase, and consultation CTA flow.", image: "https://image.thum.io/get/width/800/https://baseshgala.com/", tag: "MSME Coaching", link: "https://baseshgala.com/" },
  { title: "Fourmula AI", desc: "AI product photography platform — 3D-rendered hero visuals, scroll-triggered feature animations, and premium dark layout.", image: "https://image.thum.io/get/width/800/https://fourmula.ai/", tag: "AI SaaS", link: "https://fourmula.ai/" },
  { title: "Relace AI", desc: "AI infrastructure startup — cinematic 3D dark visuals, motion typography, rapid-scan modular sections, and bold above-the-fold.", image: "https://image.thum.io/get/width/800/https://relace.ai/", tag: "AI Startup", link: "https://relace.ai/" },
];

const features = [
  { icon: "⚡", title: "Sub-3 Second Load Time", desc: "Google penalises slow pages. We build for speed — every landing page scores 90+ on PageSpeed." },
  { icon: "📱", title: "Mobile-First for Instagram Ads", desc: "70% of ad clicks happen on mobile. Pages are designed thumb-first with single-column layouts." },
  { icon: "🎯", title: "Conversion-Focused Design", desc: "Every element is placed to drive one action — a lead, a WhatsApp click, or a purchase. No distractions." },
  { icon: "💬", title: "WhatsApp Lead Capture", desc: "Visitors land on your page and tap to WhatsApp directly. Zero friction, instant lead capture." },
  { icon: "🔍", title: "SEO + Ads Optimised", desc: "Meta pixel, Google Analytics, UTM tracking, and on-page SEO all set up for you." },
  { icon: "🔄", title: "A/B Testing Ready", desc: "We build pages in variants so you can test headlines, CTAs, and offers to maximise ROAS." },
];

export default function LandingPagesPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#EBF5EF] text-[#1A7A4A] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A7A4A]" /> Perfect for Instagram & Google Ads
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5" style={syne}>
              Landing Pages That <em className="not-italic text-[#E8561A]">Convert Clicks Into Customers</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] mb-8 max-w-2xl">
              High-converting landing pages built specifically for Instagram and Google Ads. Designed for Indian audiences, optimised for WhatsApp lead capture.
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
              {[["₹15,000+", "Starting Price"], ["3–7 Days", "Delivery"], ["15–20%", "Avg Conversion"], ["100%", "Mobile-First"]].map(([val, lbl]) => (
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
                (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_LP_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,86,26,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">Landing Page — 18% Conversion Rate</div>
                  <div className="text-white/60 text-xs mt-1">Full case study walkthrough</div>
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Built to Make Your Ad Spend Work</h2>
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Landing Pages We&apos;ve Built</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <FadeItem key={p.title}>
                <a href={p.link ?? "#"} target="_blank" rel="noopener noreferrer"
                  className="group block bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,20,0.1)] transition-all duration-300 h-full">
                  <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: p.color ?? "#EDE9E0" }}>
                    {p.image && <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />}
                    {!p.image && <span className="text-4xl font-extrabold text-white/20 tracking-tight" style={syne}>{p.title.split(" ")[0].toUpperCase()}</span>}
                    <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#141414] mb-1" style={syne}>{p.title}</h3>
                    <p className="text-sm text-[#5A5A5A] font-light">{p.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">View live site →</div>
                  </div>
                </a>
              </FadeItem>
            ))}
            <FadeItem>
              <div className="bg-[#FDF0E8] border border-[rgba(232,86,26,0.2)] rounded-2xl flex flex-col items-center justify-center text-center p-8 h-full min-h-[260px]">
                <div className="text-4xl mb-4">💡</div>
                <h3 className="font-bold text-[#141414] text-lg mb-2" style={syne}>Your Project Next?</h3>
                <p className="text-sm text-[#5A5A5A] mb-5 font-light">WhatsApp us your idea and get a free quote within 24 hours.</p>
                <a href={WA} target="_blank" rel="noopener noreferrer"
                  className="bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold px-6 py-2.5 rounded-full text-sm transition-colors">
                  Start a Project →
                </a>
              </div>
            </FadeItem>
          </FadeUpGroup>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Client Reviews</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Real Results from Real Clients</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;Our real estate landing page got 47 leads in the first week of Instagram Ads. Cost per lead dropped from ₹800 to ₹220. Best ROI decision we&apos;ve made.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8561A] flex items-center justify-center text-white font-bold text-sm">MK</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Manish Khanna</div>
                    <div className="text-xs text-[#5A5A5A]">Real Estate Consultant, NCR</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Deepak Mishra"
                role="Insurance Advisor, Lucknow"
                message="Ek din mein 23 WhatsApp leads! Page load bhi fast hai aur design professional lag raha hai. Clients trust karte hain ab mujhpe. Bahut shukriya! 🙏"
                time="6:45 PM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="fitnesspro_india"
                message="We ran ₹5000 in Instagram Ads on the landing page Kreative Tech built and got 90+ leads! Our cost per lead is insane. These guys know what they're doing 🎯🔥"
              />
            </FadeItem>
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;They built my course sales page in 5 days. The design looks world-class and the WhatsApp CTA works brilliantly for Indian students. Conversion is at 22%!&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A7A4A] flex items-center justify-center text-white font-bold text-sm">SP</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Sangeeta Patel</div>
                    <div className="text-xs text-[#5A5A5A]">Online Coach, Ahmedabad</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Rahul Gupta"
                role="D2C Brand Founder"
                message="Landing page se pehle hamare Instagram Ads waste ho rahe the. Ab 18% conversion hai! Kreative Tech ne sach mein game change kar diya 💯"
                time="9:20 AM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="realestatesuccess_in"
                message="Finally a web agency that understands ad funnels! Our page loads in 2 seconds and the WhatsApp button placement is perfect for lead capture. 200% ROI! 🏠"
              />
            </FadeItem>
          </FadeUpGroup>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Pricing</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Landing Page Packages</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Basic", price: "₹15,000", period: "one-time", badge: null,
                features: ["Single-page design", "Mobile + desktop", "WhatsApp CTA button", "Meta Pixel setup", "Contact form", "3 days delivery", "30 days support"],
              },
              {
                name: "Campaign", price: "₹28,000", period: "one-time", badge: "Best for Ads",
                features: ["Multi-section landing page", "A/B test variant", "WhatsApp lead capture", "Google Analytics", "Razorpay payment link", "Countdown timer", "5 days delivery", "60 days support"],
              },
              {
                name: "Brand Website", price: "₹45,000+", period: "one-time", badge: null,
                features: ["Multi-page brand site", "Blog / news section", "SEO fully optimised", "Google Search Console", "WhatsApp chat widget", "CRM integration", "7–10 days delivery"],
              },
            ].map((plan) => (
              <FadeItem key={plan.name}>
                <div className={`rounded-2xl p-7 border h-full flex flex-col ${plan.badge ? "border-[#E8561A] shadow-[0_0_0_2px_rgba(232,86,26,0.15)]" : "border-[rgba(20,20,20,0.1)] bg-[#F7F4EE]"}`}>
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 bg-[#E8561A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">🎯 {plan.badge}</div>
                  )}
                  <div className="font-bold text-[#141414] mb-1" style={syne}>{plan.name}</div>
                  <div className="text-3xl font-extrabold text-[#141414] mb-0.5" style={syne}>{plan.price}</div>
                  <div className="text-xs text-[#5A5A5A] mb-5">{plan.period}</div>
                  <ul className="space-y-2.5 flex-1 mb-7">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-[#5A5A5A] font-light">
                        <svg className="w-4 h-4 text-[#1A7A4A] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 16 16"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l3 3 7-7"/></svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    className={`w-full flex items-center justify-center font-semibold py-3 rounded-xl text-sm transition-colors ${plan.badge ? "bg-[#E8561A] hover:bg-[#C44010] text-white" : "bg-[#141414] hover:bg-[#2a2a2a] text-white"}`}>
                    Get Started →
                  </a>
                </div>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-10">
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Landing Page FAQs</h2>
          </FadeUp>
          <FadeUpGroup className="space-y-0">
            {[
              { q: "What's the difference between a landing page and a website?", a: "A website has multiple pages (about, services, blog, contact). A landing page is a single focused page with ONE goal — capturing a lead, selling a product, or getting a WhatsApp enquiry. Landing pages convert better for paid ads." },
              { q: "Will this work for my Instagram Ads?", a: "Yes — our pages are specifically designed for Instagram ad traffic. Fast load, mobile-first, WhatsApp CTA, Meta pixel — everything an Indian ads campaign needs." },
              { q: "Can you set up the ads too?", a: "We focus on building the landing page. For running ads, we can refer you to trusted digital marketing partners who specialise in Instagram and Google Ads for Indian businesses." },
              { q: "How do I get leads from the page?", a: "Leads come in via WhatsApp click, contact form, or Razorpay payment. We set up all these channels and connect them to your email and CRM if needed." },
              { q: "Can you update the page later?", a: "Yes. We provide 30–60 days of changes post-launch. Beyond that, we offer maintenance packages. Most clients update headlines and offers seasonally for new ad campaigns." },
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
              Ready to Run <span className="text-[#E8561A]">Profitable Ads?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">Share your ad campaign goals on WhatsApp. We&apos;ll build the perfect landing page for your audience.</p>
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
