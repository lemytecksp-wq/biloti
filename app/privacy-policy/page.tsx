import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, ShieldCheck, FileText, Lock, Mail, Phone, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Biloti',
  description: 'Privacy Policy outlining how Biloti (Great33 Limited) collects, protects, and uses information in New Zealand.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Hero Header */}
      <section className="py-12 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <nav className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-emerald-400 font-semibold">Privacy Policy</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Privacy Policy
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
            <Lock className="w-5 h-5 text-[#1F6F50]" />
            Table of Contents
          </h2>
          <ol className="list-decimal list-inside text-sm text-slate-600 space-y-2 font-medium">
            <li><a href="#collection" className="text-[#1F6F50] hover:underline">Information We Collect</a></li>
            <li><a href="#use" className="text-[#1F6F50] hover:underline">How We Use Your Information</a></li>
            <li><a href="#sharing" className="text-[#1F6F50] hover:underline">Sharing Your Information</a></li>
            <li><a href="#storage" className="text-[#1F6F50] hover:underline">Storage and Security</a></li>
            <li><a href="#rights" className="text-[#1F6F50] hover:underline">Your Rights</a></li>
            <li><a href="#cookies" className="text-[#1F6F50] hover:underline">Cookies</a></li>
            <li><a href="#contact" className="text-[#1F6F50] hover:underline">Contact Us</a></li>
          </ol>
        </div>

        {/* Legal Body */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div className="space-y-3 border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1F6F50]">
              Effective Date: 12 July 2026
            </p>
            <p className="text-base sm:text-lg text-[#0F172A] font-medium leading-relaxed">
              Biloti is a trading name of Great33 Limited (&quot;Biloti&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are committed to protecting your privacy and handling your personal information responsibly.
            </p>
          </div>

          <section id="collection" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              1. Information We Collect
            </h2>
            <p>
              When you submit an enquiry or contact us, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Company name</li>
              <li>Contact person&apos;s name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Site name and address</li>
              <li>City</li>
              <li>Property details</li>
              <li>Services requested</li>
              <li>Additional information you provide</li>
              <li>Any files or photos you choose to upload</li>
            </ul>
          </section>

          <section id="use" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-slate-600">
              <li>Respond to your enquiry</li>
              <li>Prepare quotations and proposals</li>
              <li>Arrange site inspections</li>
              <li>Deliver our cleaning and facilities management services</li>
              <li>Communicate with you regarding your request</li>
              <li>Improve our services and customer experience</li>
              <li>Meet our legal and regulatory obligations</li>
            </ul>
          </section>

          <section id="sharing" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              3. Sharing Your Information
            </h2>
            <p>
              We do not sell your personal information.
            </p>
            <p>
              We may share your information with trusted employees, contractors, suppliers, or service providers where necessary to deliver our services or operate our business. We may also disclose information where required by law.
            </p>
          </section>

          <section id="storage" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              4. Storage and Security
            </h2>
            <p>
              We take reasonable steps to protect your information from unauthorised access, loss, misuse, or disclosure. While we use appropriate security measures, no method of electronic transmission or storage is completely secure.
            </p>
          </section>

          <section id="rights" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              5. Your Rights
            </h2>
            <p>
              You may request access to, or correction of, the personal information we hold about you in accordance with the New Zealand Privacy Act 2020.
            </p>
          </section>

          <section id="cookies" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              6. Cookies
            </h2>
            <p>
              Our website may use cookies or similar technologies to improve website functionality and understand website usage.
            </p>
          </section>

          <section id="contact" className="space-y-4 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-[#0F172A]">
              7. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or your personal information, please contact us using the details below:
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
                <Link href="/terms-of-use" className="text-[#1F6F50] font-bold underline">
                  Terms of Use
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

