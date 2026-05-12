"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeUp, { FadeUpGroup, FadeItem } from "@/components/FadeUp";

const WA_LINK =
  "https://wa.me/918551944773?text=Hi%2C%20I%20am%20interested%20in%20your%20services.";
const syne = { fontFamily: "var(--font-syne)" };

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        "service_jg385g4",
        "template_ztccroi",
        {
          from_name: form.name,
          from_email: form.email,
          from_number: form.phone,
          message: `Service: ${form.service}\n\n${form.message}`,
          to_email: "sushant.work85@gmail.com",
        },
        "pz-2-lSUbcctexn6-"
      );
      setSubmitted(true);
    } catch {
      const text = `Hi! I filled the contact form.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nMessage: ${form.message}`;
      window.open(
        `https://wa.me/918551944773?text=${encodeURIComponent(text)}`,
        "_blank"
      );
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="pt-16 bg-[#F7F4EE]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 py-16 text-center">
          <FadeUp>
            <span className="text-xs font-semibold text-[#E8561A] uppercase tracking-widest block mb-3">
              Get In Touch
            </span>
            <h1
              className="text-[clamp(34px,4.5vw,52px)] font-extrabold leading-[1.1] tracking-[-1.2px] text-[#141414] mb-4"
              style={syne}
            >
              Let&apos;s Build Something Together
            </h1>
            <p className="text-lg text-[#5A5A5A] font-light max-w-xl mx-auto">
              The fastest way to reach us is WhatsApp. Or fill the form below
              and we&apos;ll reply within 2 hours.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — contact cards */}
            <div className="lg:col-span-2 space-y-4">
              {/* WhatsApp */}
              <FadeUp>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[#EBF5EF] border border-[rgba(26,122,74,0.2)] rounded-2xl p-5 hover:shadow-md transition-shadow group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#141414] text-sm" style={syne}>
                      WhatsApp (Fastest)
                    </div>
                    <div className="text-sm text-[#1A7A4A] font-semibold">
                      +91 85519 44773
                    </div>
                    <div className="text-xs text-[#5A5A5A] mt-0.5">
                      Usually replies in under 30 min
                    </div>
                  </div>
                </a>
              </FadeUp>

              {/* Phone */}
              <FadeUp delay={0.05}>
                <a
                  href="tel:+918551944773"
                  className="flex items-center gap-4 bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#141414] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#141414] text-sm" style={syne}>
                      Call Us
                    </div>
                    <div className="text-sm text-[#5A5A5A]">+91 85519 44773</div>
                    <div className="text-xs text-[#5A5A5A] mt-0.5">
                      Mon–Sat, 9am–8pm IST
                    </div>
                  </div>
                </a>
              </FadeUp>

              {/* Email */}
              <FadeUp delay={0.1}>
                <a
                  href="mailto:sushant.work85@gmail.com"
                  className="flex items-center gap-4 bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl p-5 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-[#E8561A] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#141414] text-sm" style={syne}>
                      Email
                    </div>
                    <div className="text-sm text-[#5A5A5A]">
                      sushant.work85@gmail.com
                    </div>
                    <div className="text-xs text-[#5A5A5A] mt-0.5">
                      Response within 4 hours
                    </div>
                  </div>
                </a>
              </FadeUp>

              {/* Location */}
              <FadeUp delay={0.15}>
                <div className="flex items-start gap-4 bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl p-5">
                  <div className="w-12 h-12 rounded-full bg-[#5A5A5A] flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-[#141414] text-sm" style={syne}>
                      Location
                    </div>
                    <div className="text-sm text-[#5A5A5A]">Delhi, India</div>
                    <div className="text-xs text-[#5A5A5A] mt-0.5">
                      Serving clients across India
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right — form */}
            <FadeUp delay={0.1} className="lg:col-span-3">
              {submitted ? (
                <div className="bg-[#EBF5EF] border border-[rgba(26,122,74,0.2)] rounded-2xl p-10 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h2
                    className="text-2xl font-bold text-[#141414] mb-2"
                    style={syne}
                  >
                    Message Sent!
                  </h2>
                  <p className="text-[#5A5A5A] font-light mb-6">
                    We&apos;ll get back to you within 2 hours. You can also reach us
                    directly on WhatsApp for a faster reply.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-full transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-[#F7F4EE] border border-[rgba(20,20,20,0.08)] rounded-2xl p-8 space-y-5"
                >
                  <h2
                    className="text-xl font-bold text-[#141414]"
                    style={syne}
                  >
                    Send Us a Message
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide mb-1.5">
                        Your Name *
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) =>
                          setForm({ ...form, name: e.target.value })
                        }
                        placeholder="Rahul Sharma"
                        className="w-full border border-[rgba(20,20,20,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-sm bg-white text-[#141414] outline-none transition-colors placeholder:text-[#B0ACA5]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) =>
                          setForm({ ...form, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full border border-[rgba(20,20,20,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-sm bg-white text-[#141414] outline-none transition-colors placeholder:text-[#B0ACA5]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide mb-1.5">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="rahul@yourcompany.com"
                      className="w-full border border-[rgba(20,20,20,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-sm bg-white text-[#141414] outline-none transition-colors placeholder:text-[#B0ACA5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full border border-[rgba(20,20,20,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-sm bg-white text-[#141414] outline-none transition-colors cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      {[
                        "Shopify Development",
                        "App Development",
                        "Landing Page",
                        "Web Development",
                        "ERP Solution",
                        "Other",
                      ].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] uppercase tracking-wide mb-1.5">
                      Tell us about your project
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) =>
                        setForm({ ...form, message: e.target.value })
                      }
                      rows={4}
                      placeholder="Brief description of what you need..."
                      className="w-full border border-[rgba(20,20,20,0.12)] focus:border-[#E8561A] rounded-xl px-4 py-3 text-sm bg-white text-[#141414] outline-none transition-colors resize-none placeholder:text-[#B0ACA5]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#E8561A] hover:bg-[#C44010] text-white font-semibold py-3.5 rounded-xl transition-colors text-sm"
                    style={syne}
                  >
                    Send Message →
                  </button>
                  <p className="text-xs text-[#B0ACA5] text-center">
                    Or just{" "}
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] font-semibold hover:underline"
                    >
                      WhatsApp us directly
                    </a>{" "}
                    — it&apos;s faster.
                  </p>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
