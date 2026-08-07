import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Use | Biloti',
  description: 'Terms of Use governing the use of the Biloti website and services throughout New Zealand.',
};

export default function TermsOfUsePage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="py-12 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-semibold">Terms of Use</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms of Use
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: 12 July 2026 • Biloti (Great33 Limited)
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        {/* Table of Contents */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
          <h2 className="font-bold text-lg text-[#0F172A] flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#1F6F50]" />
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2 font-medium">
            <li><a href="#about" className="text-[#1F6F50] hover:underline">About Us</a></li>
            <li><a href="#enquiries" className="text-[#1F6F50] hover:underline">Enquiries</a></li>
            <li><a href="#accuracy" className="text-[#1F6F50] hover:underline">Accuracy of Information</a></li>
            <li><a href="#quotations" className="text-[#1F6F50] hover:underline">Quotations</a></li>
            <li><a href="#intellectual-property" className="text-[#1F6F50] hover:underline">Intellectual Property</a></li>
            <li><a href="#availability" className="text-[#1F6F50] hover:underline">Website Availability</a></li>
            <li><a href="#liability" className="text-[#1F6F50] hover:underline">Limitation of Liability</a></li>
            <li><a href="#changes" className="text-[#1F6F50] hover:underline">Changes to These Terms</a></li>
            <li><a href="#governing-law" className="text-[#1F6F50] hover:underline">Governing Law</a></li>
            <li><a href="#contact" className="text-[#1F6F50] hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* Legal Sections */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F6F50]">
              Effective Date: 12 July 2026
            </p>
            <p className="text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed">
              These Terms of Use govern your use of the Biloti website and services. By using our website or submitting an enquiry, you agree to these terms.
            </p>
          </div>

          <section id="about" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              1. About Us
            </h2>
            <p>
              Biloti is a trading name of Great33 Limited, providing commercial cleaning and facilities management services throughout New Zealand.
            </p>
          </section>

          <section id="enquiries" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              2. Enquiries
            </h2>
            <p>
              Submitting an enquiry or requesting a quote does not create a contract for services. All quotations are subject to review and acceptance.
            </p>
          </section>

          <section id="accuracy" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              3. Accuracy of Information
            </h2>
            <p>
              You agree to provide accurate and complete information when submitting enquiries. We are not responsible for delays or incorrect quotations resulting from inaccurate information.
            </p>
          </section>

          <section id="quotations" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              4. Quotations
            </h2>
            <p>
              All quotations are provided based on the information supplied and may be revised following a site inspection or additional information.
            </p>
          </section>

          <section id="intellectual-property" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              5. Intellectual Property
            </h2>
            <p>
              All content on this website, including text, graphics, logos, branding, and images, is owned by or licensed to Great33 Limited and may not be copied, reproduced, or distributed without prior written permission.
            </p>
          </section>

          <section id="availability" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              6. Website Availability
            </h2>
            <p>
              We aim to keep our website available and up to date but do not guarantee uninterrupted access or that the website will always be free from errors.
            </p>
          </section>

          <section id="liability" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by New Zealand law, Great33 Limited shall not be liable for any indirect, incidental, or consequential loss arising from the use of this website or reliance on information provided on it.
            </p>
          </section>

          <section id="changes" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              8. Changes to These Terms
            </h2>
            <p>
              We may update these Terms of Use from time to time. The latest version will always be published on our website.
            </p>
          </section>

          <section id="governing-law" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              9. Governing Law
            </h2>
            <p>
              These Terms of Use are governed by the laws of New Zealand, and any disputes shall be subject to the exclusive jurisdiction of the New Zealand courts.
            </p>
          </section>

          <section id="contact" className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-[#0F172A]">
              10. Contact Us
            </h2>
            <p>
              If you have any questions regarding these Terms of Use, please contact us:
            </p>
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 space-y-3 text-sm">
              <p className="font-bold text-base text-[#0F172A]">Biloti</p>
              <p className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-[#1F6F50] shrink-0" />
                Auckland, New Zealand
              </p>
              <p className="flex items-center gap-2 text-slate-700">
                <Phone className="w-4 h-4 text-[#1F6F50] shrink-0" />
                Phone: <a href="tel:021745179" className="text-[#1F6F50] font-semibold hover:underline">021 745 179</a>
              </p>
              <p className="flex items-center gap-2 text-slate-700">
                <Mail className="w-4 h-4 text-[#1F6F50] shrink-0" />
                Email: <a href="mailto:info@biloti.co.nz" className="text-[#1F6F50] font-semibold hover:underline">info@biloti.co.nz</a>
              </p>
              <div className="pt-3 border-t border-slate-200 flex items-center gap-4 text-xs">
                <Link href="/privacy-policy" className="text-[#1F6F50] font-bold underline">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/get-a-quote" className="text-[#1F6F50] font-bold underline">
                  Get a Quote
                </Link>
                <span>•</span>
                <Link href="/contact" className="text-[#1F6F50] font-bold underline">
                  Contact Us
                </Link>
              </div>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
