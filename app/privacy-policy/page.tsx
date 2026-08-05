import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, ShieldCheck, FileText, Lock } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: 'Privacy Policy | Biloti Property Care',
  description: 'Privacy Policy outlining how Biloti Property Care collects, protects, and uses customer information in New Zealand.',
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
            Last Updated: August 2026 • Biloti Property Care Auckland
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
            <li><a href="#overview" className="text-[#1F6F50] hover:underline">Privacy Overview</a></li>
            <li><a href="#collection" className="text-[#1F6F50] hover:underline">Information We Collect</a></li>
            <li><a href="#use" className="text-[#1F6F50] hover:underline">How We Use Your Information</a></li>
            <li><a href="#sharing" className="text-[#1F6F50] hover:underline">Data Storage, Security and Third Parties</a></li>
            <li><a href="#rights" className="text-[#1F6F50] hover:underline">Your Privacy Rights under NZ Law</a></li>
            <li><a href="#contact" className="text-[#1F6F50] hover:underline">Privacy Officer Contact</a></li>
          </ol>
        </div>

        {/* Legal Body */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <section id="overview" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              1. Privacy Overview
            </h2>
            <p>
              At Biloti Property Care, we are committed to respecting and protecting the personal information of our clients, property managers, and website visitors. This Privacy Policy explains how we collect, store, use, and disclose personal information in accordance with the New Zealand Privacy Act 2020.
            </p>
          </section>

          <section id="collection" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              2. Information We Collect
            </h2>
            <p>
              When you fill out our Get a Quote form, contact us, or request property services, we may collect the following information:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Full name, job title, and company name</li>
              <li>Contact details including phone numbers and email addresses</li>
              <li>Site address, city region, and property details</li>
              <li>Specific property care requirements and scheduling preferences</li>
              <li>IP addresses and anonymous website usage analytics</li>
            </ul>
          </section>

          <section id="use" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              3. How We Use Your Information
            </h2>
            <p>
              We collect personal information solely for legitimate operational purposes, including:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
              <li>Preparing accurate service estimates and commercial cleaning quotes</li>
              <li>Scheduling technicians and carrying out requested property care work</li>
              <li>Communicating job progress, invoicing, and service updates</li>
              <li>Improving our website navigation, service offerings, and customer care</li>
            </ul>
          </section>

          <section id="sharing" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              4. Data Storage, Security and Third Parties
            </h2>
            <p>
              We hold your personal data securely in password-protected electronic systems with restricted employee access. We do not sell, rent, or trade customer lists or personal data to third parties. We may disclose personal information only when required by New Zealand law or to authorized service partners necessary to complete requested work.
            </p>
          </section>

          <section id="rights" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              5. Your Privacy Rights under NZ Law
            </h2>
            <p>
              Under the New Zealand Privacy Act 2020, you have the right to request access to any personal information we hold about you and request correction if it is inaccurate or out of date.
            </p>
          </section>

          <section id="contact" className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-[#0F172A]">
              6. Privacy Officer Contact
            </h2>
            <p>
              To exercise your rights or ask any questions regarding our Privacy Policy, please contact our Privacy Officer:
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1.5 text-sm">
              <p className="font-bold text-[#0F172A]">Biloti Property Care — Privacy Officer</p>
              <p>Auckland, New Zealand</p>
              <p>Email: <a href={siteConfig.contact.emailLink} className="text-[#1F6F50] font-semibold underline">{siteConfig.contact.email}</a></p>
              <p>Phone: <a href={siteConfig.contact.phoneLink} className="text-[#1F6F50] font-semibold underline">{siteConfig.contact.phone}</a></p>
              <div className="pt-2 flex items-center gap-4 text-xs">
                <Link href="/terms-of-use" className="text-[#1F6F50] font-bold underline">
                  Terms of Use
                </Link>
                <span>•</span>
                <Link href="/contact" className="text-[#1F6F50] font-bold underline">
                  Contact Page
                </Link>
              </div>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
