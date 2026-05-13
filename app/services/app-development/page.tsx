"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20want%20to%20build%20a%20mobile%20app.%20Can%20you%20share%20a%20quote%3F";
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

const features = [
  { icon: "📱", title: "iOS & Android", desc: "One Flutter/React Native codebase for both platforms. Native performance, 60% lower cost than building separately." },
  { icon: "🎨", title: "Custom UI/UX Design", desc: "Figma-designed, pixel-perfect interfaces. We prototype and validate before writing code." },
  { icon: "🔔", title: "Push Notifications", desc: "FCM-powered push notifications for order updates, offers, and re-engagement campaigns." },
  { icon: "💳", title: "Payment Integration", desc: "Razorpay, PayTM, Stripe — integrated with subscription billing, refunds, and split payments." },
  { icon: "📊", title: "Admin Dashboard", desc: "Web-based admin panel to manage users, content, orders, and analytics in real time." },
  { icon: "🚀", title: "App Store Submission", desc: "We handle Play Store and App Store submission, metadata, screenshots, and review cycle." },
];

const portfolio = [
  { title: "Clinicea", desc: "End-to-end clinic management — patient EMR, appointment scheduling, billing automation, and doctor workflows.", image: "https://image.thum.io/get/width/800/https://www.clinicea.com/", tag: "Healthcare SaaS", link: "https://www.clinicea.com/" },
  { title: "SuperProcure", desc: "Enterprise logistics platform with real-time shipment tracking, vendor coordination, and supply chain analytics.", image: "https://image.thum.io/get/width/800/https://superprocure.com/", tag: "Logistics SaaS", link: "https://superprocure.com/" },
  { title: "Dawn Health", desc: "AI-powered sleep therapy app with CBT-I protocols, personalised session tracking, and minimalist mobile UI.", image: "https://image.thum.io/get/width/800/https://www.dawn.health/", tag: "Health App", link: "https://www.dawn.health/" },
  { title: "Vyapar App", desc: "GST billing and accounting for SMEs — inventory management, digital ledger, payment tracking, and financial analytics.", image: "https://image.thum.io/get/width/800/https://vyaparapp.in/", tag: "Business App", link: "https://vyaparapp.in/" },
  { title: "Boldo Telemedicine", desc: "Flutter-built telemedicine app with doctor appointment booking, digital health records, and secure video consultations.", color: "#0A3D5E", tag: "Telemedicine", link: "https://play.google.com/store/apps/details?id=py.com.psa.boldo", playStore: true },
];

export default function AppDevPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#EBF5EF] text-[#1A7A4A] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A7A4A]" /> Flutter & React Native Experts
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5" style={syne}>
              Mobile Apps That <em className="not-italic text-[#E8561A]">Users Love</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] mb-8 max-w-2xl">
              Custom iOS and Android apps for startups and SMBs. We design, build, and launch — handling everything from Figma prototype to Play Store submission.
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
              {[["₹60,000+", "Starting Price"], ["4–8 Weeks", "Delivery Time"], ["20+", "Apps Launched"]].map(([val, lbl]) => (
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
                (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_APP_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,86,26,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">App Build — Design to Play Store</div>
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Everything Included — Zero Surprises</h2>
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Apps We&apos;ve Built</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolio.map((p) => (
              <FadeItem key={p.title}>
                <a href={p.link ?? "#"} target={p.link ? "_blank" : "_self"} rel="noopener noreferrer"
                  className="group block bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(20,20,20,0.1)] transition-all duration-300 h-full">
                  <div className="relative h-48 flex items-center justify-center overflow-hidden" style={{ background: p.color ?? "#EDE9E0" }}>
                    {p.image && <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />}
                    {!p.image && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-extrabold text-white/20 tracking-tight" style={syne}>{p.title.split(" ")[0].toUpperCase()}</span>
                      </div>
                    )}
                    <div className="absolute top-3 left-3 bg-white/15 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">{p.tag}</div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-[#141414] mb-1" style={syne}>{p.title}</h3>
                    <p className="text-sm text-[#5A5A5A] font-light">{p.desc}</p>
                    {p.link && <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">{(p as {playStore?: boolean}).playStore ? "View on Play Store →" : "View live site →"}</div>}
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>What Our App Clients Say</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;Buki Vista went from idea to Play Store in 6 weeks. The app handles thousands of daily users without a single crash. Kreative Tech built something we&apos;re genuinely proud of.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8561A] flex items-center justify-center text-white font-bold text-sm">RK</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Rajan Kumar</div>
                    <div className="text-xs text-[#5A5A5A]">Co-Founder, Buki Vista</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Vikram Nair"
                role="Startup Founder, Bangalore"
                message="App launch ke baad pehle din hi 500 downloads! UI bahut smooth hai aur payments bhi perfectly kaam kar rahe hain. Team is the best 🙌"
                time="2:30 PM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="fittracker_app"
                message="We launched our fitness app with Kreative Tech and already have 10k+ downloads in 2 months! The UI is beautiful and the backend is rock solid. 5 stars easily 💪"
              />
            </FadeItem>
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;They delivered both Android and iOS from a single codebase — exactly as promised. The admin dashboard is a bonus we didn&apos;t expect. Incredible value for the price.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A7A4A] flex items-center justify-center text-white font-bold text-sm">SG</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Suresh Gupta</div>
                    <div className="text-xs text-[#5A5A5A]">MSME Owner, Hyderabad</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Anjali Verma"
                role="EdTech Founder"
                message="Hamara learning app 3 mahine mein complete hua aur 4.8 rating mili Play Store pe! Students bahut khush hain. Kreative Tech rocks! 🎓"
                time="10:15 AM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="grabzy_official"
                message="Kreative Tech understood our vision from day one. The app design is clean, fast, and our users love it. Worth every rupee invested. Highly recommend! 🚀"
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>App Development Packages</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Basic", price: "₹60,000", period: "one-time", badge: null,
                features: ["iOS + Android (Flutter)", "Up to 8 screens", "Basic UI design", "1 payment gateway", "Push notifications", "Play Store submission", "30 days support"],
              },
              {
                name: "Business", price: "₹1,20,000", period: "one-time", badge: "Most Popular",
                features: ["iOS + Android (Flutter)", "Unlimited screens", "Premium UI/UX design", "All payment gateways", "Admin dashboard", "Real-time features", "App Store + Play Store", "3 months support"],
              },
              {
                name: "Enterprise", price: "Custom", period: "get a quote", badge: null,
                features: ["Custom architecture", "Microservices backend", "AI/ML features", "Multi-language", "Analytics + BI", "Dedicated team", "SLA-backed support"],
              },
            ].map((plan) => (
              <FadeItem key={plan.name}>
                <div className={`rounded-2xl p-7 border h-full flex flex-col ${plan.badge ? "border-[#E8561A] shadow-[0_0_0_2px_rgba(232,86,26,0.15)]" : "border-[rgba(20,20,20,0.1)] bg-[#F7F4EE]"}`}>
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 bg-[#E8561A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">⭐ {plan.badge}</div>
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
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>App Development FAQs</h2>
          </FadeUp>
          <FadeUpGroup className="space-y-0">
            {[
              { q: "Flutter vs React Native — which do you recommend?", a: "We recommend Flutter for most projects. It has better performance, a richer widget library, and consistent UI across iOS and Android. React Native is ideal if you need deep JavaScript/web ecosystem integration." },
              { q: "How long does app development take?", a: "A basic app (8–10 screens) takes 4–6 weeks. A full-featured app with backend, admin dashboard, and payment integration typically takes 8–12 weeks." },
              { q: "Do I own the source code?", a: "Yes, 100%. You receive full source code, all credentials, and are added as owner to the Play Store / App Store accounts. Nothing is locked to us." },
              { q: "Do you handle App Store submission?", a: "Yes — we handle both Google Play and Apple App Store submission, including screenshots, descriptions, age ratings, and any review cycle responses." },
              { q: "What about post-launch bugs?", a: "All packages include 30–90 days of post-launch support. We fix any bugs that arise from our code for free. Ongoing maintenance plans are available monthly." },
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
              Got an App <span className="text-[#E8561A]">Idea?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">WhatsApp us your idea — no technical knowledge needed. We&apos;ll turn it into an app spec and quote within 24 hours.</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Your Idea
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
