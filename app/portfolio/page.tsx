"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA = "https://wa.me/919082706169?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20similar%20project.";
const syne = { fontFamily: "var(--font-syne)" };

const projects = [
  { title: "MPROFY Platform", category: "Web App", tag: "Web Development", desc: "A comprehensive platform for managing organisations and communities, featuring user dashboards, analytics, and real-time collaboration tools.", image: "/images/morphy.png", link: "https://mprofy.com/" },
  { title: "Fourmula AI", category: "AI SaaS", tag: "3D Website", desc: "AI product photography platform — cinematic 3D-rendered hero visuals, scroll-triggered animations, and a high-converting premium dark layout.", image: "https://image.thum.io/get/width/800/https://fourmula.ai/", link: "https://fourmula.ai/", color: "#0D0D1A" },
  { title: "Kathmandu Outdoor", category: "E-commerce", tag: "Shopify", desc: "Full e-commerce store for outdoor and adventure gear — custom product filtering, bundle offers, and integrated shipping for pan-India delivery.", image: "/images/kathMandu.png", link: "https://www.kathmanduoutdoor.com/" },
  { title: "Stealtho Store", category: "Shopify Store", tag: "Shopify", desc: "Premium sneakers and streetwear marketplace with lookbook-style collection pages and WhatsApp checkout.", image: "/images/steathoStore.png", link: "https://stealtho.store/" },
  { title: "Maguire Shoes", category: "D2C E-commerce", tag: "Shopify", desc: "Women's leather footwear DTC brand — European-crafted collections, smart size filtering, and a clean minimalist aesthetic.", image: "https://image.thum.io/get/width/800/https://maguireshoes.com/", link: "https://maguireshoes.com/", color: "#2C1F14" },
  { title: "Solace Jewellery", category: "Jewellery Brand", tag: "Shopify", desc: "Hypoallergenic jewellery store — allergy certifications, automated review imports, waterproof product badges, and lifetime guarantee messaging.", image: "https://image.thum.io/get/width/800/https://solacejewellery.co.uk/", link: "https://solacejewellery.co.uk/", color: "#1A1A2E" },
  { title: "Maison Miru", category: "Modular Jewellery", tag: "Shopify", desc: "Boutique modular jewellery with a 'build your own' product system, high-fidelity visuals, and a premium DTC shopping flow.", image: "https://image.thum.io/get/width/800/https://www.maisonmiru.com/", link: "https://www.maisonmiru.com/", color: "#1C1410" },
  { title: "Aadyaa Silver", category: "Jewellery", tag: "Shopify", desc: "Premium 92.5 certified silver jewellery — handcrafted collections, niche India audience targeting, and mobile-first product browsing.", image: "https://image.thum.io/get/width/800/https://aadyaa.com/", link: "https://aadyaa.com/", color: "#1A1A1A" },
  { title: "Buki Vista App", category: "Mobile App", tag: "App Development", desc: "Android marketplace app built in Flutter — real-time product listings, in-app chat, location-based search, and Razorpay payments.", image: "/images/portfolio-10.png", link: "https://play.google.com/store/apps/details?id=com.bukivista.bv_app" },
  { title: "Boldo Doctor App", category: "Telemedicine", tag: "App Development", desc: "Flutter-built telemedicine app with appointment booking, digital health records, patient profiles, and secure video consultations.", image: undefined, link: "https://play.google.com/store/apps/details?id=py.com.psa.boldo", color: "#0A3D5E" },
  { title: "Clinicea", category: "Healthcare SaaS", tag: "App Development", desc: "End-to-end clinic management — patient EMR, appointment scheduling, billing automation, and doctor workflow tools.", image: "https://image.thum.io/get/width/800/https://www.clinicea.com/", link: "https://www.clinicea.com/", color: "#0A3D5E" },
  { title: "SuperProcure", category: "Logistics SaaS", tag: "Web Development", desc: "Enterprise logistics platform with real-time shipment tracking, vendor coordination, and analytics for supply chain operations.", image: "https://image.thum.io/get/width/800/https://superprocure.com/", link: "https://superprocure.com/", color: "#0D1A2E" },
  { title: "Dawn Health", category: "AI Health App", tag: "App Development", desc: "AI-powered sleep therapy app using CBT-I protocols with personalised session tracking and a minimalist high-conversion mobile UI.", image: "https://image.thum.io/get/width/800/https://www.dawn.health/", link: "https://www.dawn.health/", color: "#0A0E1A" },
  { title: "Vyapar App", category: "Business App", tag: "App Development", desc: "GST billing and accounting for SMEs — inventory management, digital ledger, payment tracking, and real-time financial analytics.", image: "https://image.thum.io/get/width/800/https://vyaparapp.in/", link: "https://vyaparapp.in/", color: "#0D1E3A" },
  { title: "Henry Heffernan Portfolio", category: "Brand Page", tag: "Landing Page", desc: "Personal portfolio website for a software developer — fast-loading, clean design with strong above-the-fold CTA and project showcase.", image: "/images/henry.png", link: "https://henryheffernan.com/" },
];

const colors: Record<string, string> = {
  "#1C1C2E": "#1C1C2E",
  "#0D2137": "#0D2137",
  "#1E3A2F": "#1E3A2F",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">Our Work</span>
            <h1 className="text-[clamp(36px,5vw,52px)] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#141414] mb-4" style={syne}>
              50+ Projects Delivered
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light max-w-xl mx-auto">
              Real businesses. Real results. Here&apos;s a sample of what we&apos;ve built for clients across India.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <FadeUpGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((p) => (
              <FadeItem key={p.title}>
                {(p.link && p.link !== "#") ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="group block bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(20,20,20,0.1)] transition-all duration-300 h-full">
                    <div className="relative h-52 overflow-hidden flex items-center justify-center" style={{ background: p.color ?? "#EDE9E0" }}>
                      {p.image
                        ? <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" unoptimized />
                        : <span className="text-5xl font-extrabold text-white/20 tracking-tight" style={syne}>{p.title.split(" ")[0].toUpperCase()}</span>
                      }
                      <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold text-[#141414] px-2.5 py-1 rounded-full">{p.tag}</div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-wide">{p.category}</span>
                      <h3 className="font-bold text-[#141414] mt-1 mb-2 text-base" style={syne}>{p.title}</h3>
                      <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{p.desc}</p>
                      <div className="flex items-center gap-1 mt-3 text-xs font-semibold text-[#E8561A] group-hover:gap-2 transition-all">
                        View live site <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl overflow-hidden h-full">
                    <div className="relative h-52 overflow-hidden" style={{ background: p.color ?? "#EDE9E0" }}>
                      <Image src={p.image} alt={p.title} fill className="object-cover" unoptimized />
                      <div className="absolute top-3 right-3 bg-white/90 text-xs font-semibold text-[#141414] px-2.5 py-1 rounded-full">{p.tag}</div>
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-wide">{p.category}</span>
                      <h3 className="font-bold text-[#141414] mt-1 mb-2 text-base" style={syne}>{p.title}</h3>
                      <p className="text-sm text-[#5A5A5A] font-light leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                )}
              </FadeItem>
            ))}
          </FadeUpGroup>
        </div>
      </section>

      <section style={{ background: "#141414" }} className="py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <FadeUp>
            <h2 className="text-[clamp(28px,3vw,40px)] font-extrabold text-white tracking-[-0.8px] mb-4" style={syne}>
              Want Something <span className="text-[#E8561A]">Similar?</span>
            </h2>
            <p className="text-[rgba(255,255,255,0.55)] font-light mb-8">
              WhatsApp us a project you like and we&apos;ll tell you what it would cost to build for you.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white font-bold px-8 py-4 rounded-full text-base transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Discuss Your Project
            </a>
          </FadeUp>
        </div>
      </section>

      <Footer />
    </>
  );
}
