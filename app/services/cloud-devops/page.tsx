"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";
import CountUp from "@/components/CountUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20need%20Cloud%20%26%20DevOps%20services.%20Can%20you%20share%20a%20quote%3F";
const syne = { fontFamily: "var(--font-syne)" };

const heroStats: Array<{ val?: string; to?: number; suffix?: string; lbl: string }> = [
  { val: "₹30,000+", lbl: "Starting Price" },
  { val: "7–14 Days", lbl: "Setup Time" },
  { to: 30, suffix: "+", lbl: "Cloud Projects" },
];

const features = [
  { icon: "☁️", title: "Cloud Setup & Migration", desc: "AWS, GCP, or Azure — we set up your infrastructure from scratch or migrate your existing servers with zero downtime and minimal disruption." },
  { icon: "🔄", title: "CI/CD Pipeline Automation", desc: "Automated build, test, and deploy pipelines using GitHub Actions, GitLab CI, or Jenkins. Ship features faster with confidence." },
  { icon: "📈", title: "Monitoring & Alerting", desc: "Real-time dashboards, uptime monitoring, log aggregation, and PagerDuty-style alerts so you know about issues before your users do." },
  { icon: "🔐", title: "Security & Compliance", desc: "IAM policies, secrets management, VPC configuration, SSL, and security audits. Built to meet SOC 2, ISO 27001, and GDPR requirements." },
  { icon: "💰", title: "Cost Optimisation", desc: "Cloud bills spiralling? We audit your usage, right-size instances, set up auto-scaling, and implement reserved pricing to cut costs by 30–60%." },
  { icon: "⚡", title: "Auto-scaling & High Availability", desc: "Load balancers, multi-AZ deployments, and auto-scaling groups so your app handles traffic spikes without manual intervention." },
];

const testimonials = [
  { name: "Raina Gupta", role: "Small Business Owner, Delhi", initials: "RG", color: "#E8561A", text: "The support team was incredibly patient, guiding me through every step. Swift responses and seamless execution made this a stress-free experience. I've confidently recommended them to many colleagues." },
  { name: "Jitesh Bansal", role: "Entrepreneur, Mumbai", initials: "JB", color: "#1A7A4A", text: "Remarkable creativity, prompt responses, and attentiveness to every design preference. Their intuitive understanding and dedication to quality make them an absolute pleasure to work with." },
  { name: "Krishan Mahajan", role: "Business Owner, Pune", initials: "KM", color: "#1A4EE8", text: "Genuinely dedicated to understanding customer needs. They go above and beyond expectations, offering thoughtful insights. Their customer-focused attitude ensures every interaction is truly helpful." },
  { name: "Tushar Sharma", role: "MSME Owner, Noida", initials: "TS", color: "#8B44E8", text: "Very patient with someone new to all this! Quick response rate to every question. I have recommended this team to many colleagues — something that does not happen often with software development." },
  { name: "Arjun Kumar", role: "Startup Founder, Bangalore", initials: "AK", color: "#D4A017", text: "Creative flair, response times, sensitivity to requests, communication, customer service — the collaborative approach and product quality are outstanding. I could go on and on!" },
  { name: "Nirendra Miglani", role: "D2C Brand Owner, Jaipur", initials: "NM", color: "#E81A5A", text: "Team Kreative Tech listens to their clients. More is always what we get — with friendly service and genuine eagerness to help. Highly recommended for any digital project." },
];

const faqs = [
  { q: "Which cloud provider do you recommend?", a: "AWS is our default recommendation for most Indian businesses — best regional availability and the widest service catalogue. We also work with GCP and Azure, and can advise based on your team's existing tools and budget." },
  { q: "Can you migrate our existing on-premise servers?", a: "Yes. We plan the migration in phases — audit, lift-and-shift, optimise. We target zero downtime using blue-green deployments and DNS cutover strategies." },
  { q: "How much can cloud optimisation save us?", a: "Typically 30–60% on compute costs. We start with a free audit of your current bill and present a detailed savings projection before any work begins." },
  { q: "Do you handle Kubernetes and containerisation?", a: "Yes — Docker, Kubernetes (EKS/GKE/AKS), and Helm chart deployments. We also set up container registries and automated image build pipelines." },
  { q: "What does ongoing support look like?", a: "We offer monthly retainer plans covering monitoring, patching, incident response, and advisory. Retainers start at ₹15,000/month depending on infrastructure complexity." },
];

export default function CloudDevOpsPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#EBF0FF] text-[#1A4EE8] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A4EE8]" /> Cloud & DevOps Engineering
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5" style={syne}>
              Cloud Infrastructure <em className="not-italic text-[#E8561A]">That Scales With You</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] mb-8 max-w-2xl">
              AWS, GCP, and Azure setup, CI/CD automation, monitoring, and cost optimisation — end-to-end DevOps for startups and growing businesses.
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
            <div className="grid grid-cols-3 gap-x-5 gap-y-4">
              {heroStats.map((s) => (
                <div key={s.lbl}>
                  <div className="text-lg font-extrabold text-[#141414] leading-none" style={syne}>
                    {s.to !== undefined ? <CountUp to={s.to} suffix={s.suffix ?? ""} /> : s.val}
                  </div>
                  <div className="text-xs text-[#5A5A5A] mt-0.5">{s.lbl}</div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="relative w-full aspect-video bg-[#141414] rounded-2xl overflow-hidden cursor-pointer group"
              onClick={(e) => {
                (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,78,232,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">Cloud & DevOps — See It in Action</div>
                  <div className="text-white/60 text-xs mt-1">Watch a live pipeline demo</div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">▶ Watch Demo</div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">What You Get</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>End-to-End Cloud Engineering</h2>
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

      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Client Reviews</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>What Our Clients Say</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Cloud & DevOps FAQs</h2>
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
              Ready to <span className="text-[#E8561A]">Move to the Cloud?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">Tell us about your current setup. We&apos;ll design the right cloud architecture and give you a free cost projection.</p>
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
