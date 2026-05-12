"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const WA_LINK = "https://wa.me/918551944773?text=Hi%2C%20I%20am%20interested%20in%20your%20services.";

const services = [
  { label: "Shopify Development", href: "/services/shopify/" },
  { label: "App Development", href: "/services/app-development/" },
  { label: "Landing Pages", href: "/services/landing-pages/" },
  { label: "Web Development", href: "/services/web-development/" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(247,244,238,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderBottom: scrolled ? "1px solid rgba(20,20,20,0.1)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(20,20,20,0.07)" : "none",
        }}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-extrabold bg-[#E8561A]"
              style={{ fontFamily: "var(--font-syne)" }}>
              KT
            </div>
            <span className="font-bold text-lg text-[#141414]" style={{ fontFamily: "var(--font-syne)" }}>
              Kreative<span className="text-[#E8561A]">Tech</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
            <li><Link href="/#about" className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors">About</Link></li>
            <li className="relative">
              <button
                className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors flex items-center gap-1"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 10 6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1l4 4 4-4" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="bg-white border border-[rgba(20,20,20,0.1)] rounded-2xl shadow-xl p-2 min-w-[220px]">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href}
                        className="block px-4 py-2.5 text-sm text-[#5A5A5A] hover:text-[#141414] hover:bg-[#F7F4EE] rounded-xl transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
            <li><Link href="/portfolio/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors">Work</Link></li>
            <li><Link href="/about/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors">About Us</Link></li>
            <li><Link href="/#faq" className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors">FAQ</Link></li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a href="tel:+918551944773" className="text-sm font-medium text-[#5A5A5A] hover:text-[#141414] transition-colors">
              +91 85519 44773
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E8561A] hover:bg-[#C44010] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 shadow-sm">
              Free Consultation →
            </a>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-200 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-200 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-200 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col pt-16"
          style={{ background: "rgba(247,244,238,0.98)", backdropFilter: "blur(14px)" }}>
          <div className="flex flex-col px-6 pt-6">
            {[
              { label: "About", href: "/#about" },
              { label: "Portfolio", href: "/portfolio/" },
              { label: "About Us", href: "/about/" },
              { label: "FAQ", href: "/#faq" },
            ].map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="py-4 text-xl font-semibold text-[#141414] border-b border-[rgba(20,20,20,0.08)]"
                style={{ fontFamily: "var(--font-syne)" }}>
                {item.label}
              </Link>
            ))}
            <div className="py-4 border-b border-[rgba(20,20,20,0.08)]">
              <div className="text-xl font-semibold text-[#141414] mb-3" style={{ fontFamily: "var(--font-syne)" }}>Services</div>
              {services.map((s) => (
                <Link key={s.href} href={s.href} onClick={() => setMenuOpen(false)}
                  className="block py-2 pl-4 text-base text-[#5A5A5A] hover:text-[#141414]">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="px-6 mt-8 flex flex-col gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#E8561A] text-white font-semibold px-6 py-4 rounded-2xl text-base">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Us — Free Consultation
            </a>
            <a href="tel:+918551944773" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 border border-[rgba(20,20,20,0.18)] text-[#141414] font-semibold px-6 py-4 rounded-2xl text-base">
              Call +91 85519 44773
            </a>
          </div>
        </div>
      )}
    </>
  );
}
