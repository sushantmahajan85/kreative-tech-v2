import Link from "next/link";

const WA_LINK =
  "https://wa.me/918551944773?text=Hi%2C%20I%20am%20interested%20in%20your%20services.";

export default function Footer() {
  return (
    <footer style={{ background: "#0D0D0D", color: "rgba(255,255,255,0.45)" }}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[rgba(255,255,255,0.08)]">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-lg bg-[#E8561A] flex items-center justify-center text-white text-xs font-extrabold"
                style={{ fontFamily: "var(--font-syne)" }}>KT</div>
              <span className="font-bold text-lg text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Kreative<span className="text-[#E8561A]">Tech</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-5 max-w-[260px]">
              Helping India&apos;s MSMEs build powerful digital products — websites, apps, Shopify stores. Done right.
            </p>
            <div className="flex gap-2">
              <a href="https://www.linkedin.com/in/sushant-mahajan-3933b5184/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] hover:bg-[#E8561A] flex items-center justify-center text-white/50 hover:text-white transition-all text-xs font-bold">
                in
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] hover:bg-[#25D366] flex items-center justify-center text-white/50 hover:text-white transition-all"
                aria-label="WhatsApp">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a href="mailto:sushant.work85@gmail.com"
                className="w-9 h-9 rounded-lg bg-[rgba(255,255,255,0.07)] hover:bg-[#E8561A] flex items-center justify-center text-white/50 hover:text-white transition-all text-sm font-bold">
                @
              </a>
            </div>
          </div>

          {/* Services */}
          <nav aria-label="Service links">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Services</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: "Shopify Development", href: "/services/shopify/" },
                { label: "App Development", href: "/services/app-development/" },
                { label: "Landing Pages", href: "/services/landing-pages/" },
                { label: "Web Development", href: "/services/web-development/" },
                { label: "ERP Solutions", href: "/#services" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Company</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              {[
                { label: "About Us", href: "/about/" },
                { label: "Portfolio", href: "/portfolio/" },
                { label: "Testimonials", href: "/#testimonials" },
                { label: "FAQ", href: "/#faq" },
                { label: "Contact", href: "/contact/" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Contact</h4>
            <ul className="space-y-3 list-none p-0 m-0">
              <li>
                <a href="tel:+918551944773" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">
                  +91 85519 44773
                </a>
              </li>
              <li>
                <a href="mailto:sushant.work85@gmail.com" className="text-sm text-[rgba(255,255,255,0.45)] hover:text-white transition-colors">
                  sushant.work85@gmail.com
                </a>
              </li>
              <li className="text-sm">Delhi, India</li>
              <li>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 bg-[#E8561A] hover:bg-[#C44010] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors">
                  WhatsApp Us →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-[rgba(255,255,255,0.3)]">
          <span>© 2024 Kreative Tech. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
