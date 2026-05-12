import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Kreative Tech",
  description: "Thank you for contacting Kreative Tech. We'll get back to you shortly.",
};

const WA_LINK =
  "https://wa.me/918551944773?text=Hi%2C%20I%20just%20filled%20your%20contact%20form%20and%20wanted%20to%20follow%20up.";

const syne = { fontFamily: "var(--font-syne)" };

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-[#F7F4EE] flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-white rounded-2xl border border-[rgba(20,20,20,0.08)] p-10 max-w-md w-full shadow-[0_20px_60px_rgba(20,20,20,0.08)]">
        <div className="text-6xl mb-5">🎉</div>
        <h1
          className="text-2xl font-bold text-[#141414] mb-3"
          style={syne}
        >
          Thank You!
        </h1>
        <p className="text-[#5A5A5A] font-light mb-6 leading-relaxed text-sm">
          We&apos;ve received your message and will get back to you within 2 hours.
          For a faster response, chat with us on WhatsApp.
        </p>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-colors mb-4 w-full text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Chat on WhatsApp
        </a>
        <Link
          href="/"
          className="text-[#E8561A] text-sm font-medium hover:underline"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
