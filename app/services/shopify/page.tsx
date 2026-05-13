"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20want%20a%20Shopify%20store.%20Can%20you%20share%20a%20quote%3F";
const syne = { fontFamily: "var(--font-syne)" };

// WhatsApp screenshot–style testimonial
function WAReview({ name, role, message, time }: { name: string; role: string; message: string; time: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(20,20,20,0.08)] shadow-sm">
      <div className="bg-[#128C7E] px-4 py-3 flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-white/25 flex items-center justify-center text-white font-bold text-sm">{name[0]}</div>
        <div>
          <div className="text-white text-sm font-semibold leading-none">{name}</div>
          <div className="text-white/70 text-xs mt-0.5">{role}</div>
        </div>
        <svg className="ml-auto w-4 h-4 text-white/80" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
      </div>
      <div className="bg-[#ECE5DD] px-4 py-5 min-h-[100px]">
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

// Instagram DM–style testimonial
function IGReview({ handle, message }: { handle: string; message: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[rgba(20,20,20,0.08)] bg-white shadow-sm">
      <div className="border-b border-[rgba(20,20,20,0.06)] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#515BD4] flex items-center justify-center text-white font-bold text-xs">{handle[0].toUpperCase()}</div>
        <div className="text-sm font-semibold text-[#141414]">@{handle}</div>
        <svg className="ml-auto w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="url(#igGrad)" strokeWidth="1.8"><defs><linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F58529"/><stop offset="50%" stopColor="#DD2A7B"/><stop offset="100%" stopColor="#515BD4"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="url(#igGrad)" stroke="none"/></svg>
      </div>
      <div className="px-4 py-4">
        <div className="flex justify-end">
          <div className="bg-gradient-to-br from-[#F58529] to-[#DD2A7B] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[90%]">
            <p className="text-sm leading-relaxed">{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const portfolio = [
  { title: "Kathmandu Outdoor", desc: "Full adventure gear store — custom filters, Indian payments, pan-India shipping.", image: "/images/kathMandu.png", tag: "Shopify", link: "https://www.kathmanduoutdoor.com/" },
  { title: "Stealtho Store", desc: "Premium sneaker marketplace with lookbook pages and WhatsApp checkout.", image: "/images/steathoStore.png", tag: "Shopify", link: "https://stealtho.store/" },
  { title: "Giva Jewellery", desc: "D2C silver jewellery brand — clean editorial design with Instagram ad integration and fast checkout.", color: "#8B7355", tag: "Jewellery", link: "https://www.giva.co" },
  { title: "Zariin Handcrafted", desc: "Artisan gold-dipped jewellery store with story-driven product pages and gifting collections.", color: "#5C4A1E", tag: "Jewellery", link: "https://zariin.com" },
  { title: "Bombay Trousseau", desc: "Indian bridal and occasion wear brand with editorial lookbooks and festive campaign pages.", color: "#5C1A28", tag: "Fashion", link: "https://www.bombaytrousseau.com" },
  { title: "The Indus Valley", desc: "Clean-ingredient Ayurvedic personal care brand with subscription products and content marketing.", color: "#3D2B1F", tag: "Wellness", link: "https://www.theindusvalley.in" },
];

const features = [
  { icon: "🎨", title: "Custom Shopify Theme", desc: "100% custom design — no paid templates. Built to match your brand identity and convert Indian shoppers." },
  { icon: "💳", title: "Indian Payments Built-In", desc: "Razorpay, PayTM, UPI, Net Banking, COD — all configured. Customers pay how they want." },
  { icon: "💬", title: "WhatsApp Checkout", desc: "WhatsApp order notifications, abandoned cart recovery, and direct checkout via WhatsApp Business API." },
  { icon: "📱", title: "Mobile-First Design", desc: "60% of Indian shoppers buy on mobile. Every page is optimised for thumb-friendly mobile shopping." },
  { icon: "🔍", title: "SEO & Speed Optimised", desc: "Fast-loading stores rank higher. We optimise Core Web Vitals, meta tags, and product schema." },
  { icon: "📦", title: "Product & Inventory Setup", desc: "We upload your products, set up collections, variants, and link to your logistics provider." },
];

export default function ShopifyPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-14 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <div className="inline-flex items-center gap-2 bg-[#EBF5EF] text-[#1A7A4A] rounded-full px-4 py-1.5 text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A7A4A]" /> Most Popular Service
            </div>
            <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-5" style={syne}>
              Shopify Stores That <em className="not-italic text-[#E8561A]">Actually Sell</em>
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light leading-[1.75] mb-8 max-w-2xl">
              We build custom Shopify stores for Indian D2C brands and e-commerce businesses. Not templates — fully custom, conversion-optimised, with Indian payment gateways built in.
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
              {[["₹25,000+", "Starting Price"], ["7–14 Days", "Delivery"], ["50+", "Stores Built"], ["100%", "Satisfaction"]].map(([val, lbl]) => (
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
                (e.currentTarget as HTMLElement).innerHTML = `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_SHOPIFY_VIDEO_ID?autoplay=1" frameborder="0" allow="autoplay; fullscreen" style="position:absolute;inset:0;border-radius:16px;width:100%;height:100%;"></iframe>`;
              }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(232,86,26,0.5)] to-[rgba(20,20,20,0.78)] flex flex-col items-center justify-center gap-3 group-hover:opacity-90 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                  <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "10px 0 10px 18px", borderColor: "transparent transparent transparent #E8561A", marginLeft: 3 }} />
                </div>
                <div className="text-center">
                  <div className="text-white font-semibold text-sm">Shopify Store — Full Build Walkthrough</div>
                  <div className="text-white/60 text-xs mt-1">From design to first sale in 10 days</div>
                </div>
              </div>
              <div className="absolute top-3 left-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold px-2.5 py-1 rounded-full">▶ Watch Now</div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">What You Get</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Everything Your Store Needs to Succeed</h2>
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Shopify Stores We&apos;ve Built</h2>
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
                    <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{p.desc}</p>
                    <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">View live site →</div>
                  </div>
                </a>
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      {/* Testimonials — mix of card + WA screenshot + IG screenshot */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Client Reviews</span>
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>What Our Shopify Clients Say</h2>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;Our Shopify store went live in 10 days and we had our first order within 2 hours! The design looks premium and payments work seamlessly. Highly recommend Kreative Tech.&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#E8561A] flex items-center justify-center text-white font-bold text-sm">PS</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Priya Sharma</div>
                    <div className="text-xs text-[#5A5A5A]">D2C Fashion Brand, Delhi</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Rohit Agarwal"
                role="Founder, Organic Store"
                message="Bhai store ka design dekh ke dil khush ho gaya 🔥 Sales literally double ho gayi pehle mahine mein. Bahut sahi kaam kiya team ne 🙏🙏"
                time="11:42 AM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="priyaboutique_india"
                message="Omg the Shopify store looks AMAZING 😍 Our customers keep complimenting the design. Orders have been non-stop since launch! Kreative Tech is 🔥"
              />
            </FadeItem>
            <FadeItem>
              <div className="bg-white border border-[rgba(20,20,20,0.07)] rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-0.5 mb-4">{[...Array(5)].map((_, i) => <span key={i} className="text-[#F5A623]">★</span>)}</div>
                <p className="text-sm text-[#5A5A5A] italic font-light leading-relaxed flex-1 mb-5">&ldquo;Razorpay + UPI + COD — everything set up perfectly. No technical knowledge required on my end. They handled everything and trained me on managing the store. 10/10!&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#1A7A4A] flex items-center justify-center text-white font-bold text-sm">AM</div>
                  <div>
                    <div className="font-semibold text-[#141414] text-sm">Arjun Mehra</div>
                    <div className="text-xs text-[#5A5A5A]">FMCG Brand Owner, Mumbai</div>
                  </div>
                </div>
              </div>
            </FadeItem>
            <FadeItem>
              <WAReview
                name="Kavita Joshi"
                role="Owner, Jewellery Store"
                message="Meri jewellery ki website ek ekdum professional lag rahi hai ab! Customers WhatsApp se order kar rahe hain directly. Thank you so much Kreative Tech ✨"
                time="3:18 PM"
              />
            </FadeItem>
            <FadeItem>
              <IGReview
                handle="stealtho_sneakers"
                message="Kreative Tech delivered exactly what we needed — a premium streetwear store with a slick checkout. Sales are up 3x since launch. Absolute legends 🙌"
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
            <h2 className="text-[clamp(26px,2.8vw,36px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Transparent Shopify Pricing</h2>
            <p className="text-[#5A5A5A] font-light mt-3">No hidden costs. Fixed price, full delivery.</p>
          </FadeUp>
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                name: "Starter", price: "₹25,000", period: "one-time", badge: null,
                features: ["Up to 50 products", "Custom theme design", "Razorpay + UPI + COD", "Mobile optimised", "Basic SEO setup", "30 days support"],
              },
              {
                name: "Growth", price: "₹45,000", period: "one-time", badge: "Most Popular",
                features: ["Up to 200 products", "Premium custom design", "All payment gateways", "WhatsApp checkout", "Advanced SEO", "Instagram shop setup", "60 days support"],
              },
              {
                name: "Enterprise", price: "₹80,000+", period: "custom quote", badge: null,
                features: ["Unlimited products", "Multi-language support", "Custom app integrations", "ERP / inventory sync", "Analytics dashboard", "Dedicated support"],
              },
            ].map((plan) => (
              <FadeItem key={plan.name}>
                <div className={`rounded-2xl p-7 border h-full flex flex-col ${plan.badge ? "border-[#E8561A] shadow-[0_0_0_2px_rgba(232,86,26,0.15)]" : "border-[rgba(20,20,20,0.1)] bg-[#F7F4EE]"}`}>
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1.5 bg-[#E8561A] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 self-start">
                      ⭐ {plan.badge}
                    </div>
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
                    className={`w-full flex items-center justify-center gap-2 font-semibold py-3 rounded-xl text-sm transition-colors ${plan.badge ? "bg-[#E8561A] hover:bg-[#C44010] text-white" : "bg-[#141414] hover:bg-[#2a2a2a] text-white"}`}>
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
            <h2 className="text-[clamp(24px,2.5vw,32px)] font-bold text-[#141414] tracking-[-0.8px]" style={syne}>Shopify FAQs</h2>
          </FadeUp>
          <FadeUpGroup className="space-y-0">
            {[
              { q: "Do I need a Shopify subscription?", a: "Yes — Shopify charges a monthly fee (from ₹1,994/month). We help you choose the right plan and set everything up. The development cost is a one-time charge." },
              { q: "Can I manage the store myself after launch?", a: "Absolutely. Shopify's admin is beginner-friendly. We provide a training session and a video walkthrough so you can add products, manage orders, and run discounts on your own." },
              { q: "Do you integrate Razorpay and UPI?", a: "Yes, always. We set up Razorpay (which supports UPI, cards, net banking, wallets, and EMI), plus COD configuration for your fulfilment workflow." },
              { q: "How long does a Shopify store take to build?", a: "Most stores are live in 7–14 days. This includes design, product uploads, payment setup, and pre-launch testing. Complex projects may take up to 3 weeks." },
              { q: "Can you migrate my existing WooCommerce/website to Shopify?", a: "Yes. We migrate products, collections, customer data, and order history. SEO redirects are handled to preserve your Google rankings." },
            ].map((faq, i) => (
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

      {/* CTA */}
      <section style={{ background: "#141414" }} className="py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <h2 className="text-[clamp(28px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] mb-4" style={syne}>
              Ready for Your <span className="text-[#E8561A]">Shopify Store?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">WhatsApp us your product catalogue. We&apos;ll reply with a design concept and quote within 2 hours.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp for Free Quote
              </a>
              <Link href="/portfolio/" className="flex items-center justify-center gap-2 border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] text-white font-semibold px-8 py-4 rounded-full text-base transition-colors">
                View All Projects
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
