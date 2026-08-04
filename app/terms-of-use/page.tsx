import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, FileText, ShieldCheck, Mail, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: 'Terms of Use | Biloti Property Care',
  description: 'Terms of Use and conditions for Biloti Property Care services and website usage in Auckland, New Zealand.',
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
            Last Updated: August 2026 • Biloti Property Care Auckland
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
          <ol className="list-decimal list-inside text-sm text-slate-600 space-y-1.5 font-medium">
            <li><a href="#acceptance" className="text-[#1F6F50] hover:underline">1. Acceptance of Terms</a></li>
            <li><a href="#services" className="text-[#1F6F50] hover:underline">2. Services and Quotes</a></li>
            <li><a href="#booking" className="text-[#1F6F50] hover:underline">3. Booking, Cancellation and Scheduling</a></li>
            <li><a href="#access" className="text-[#1F6F50] hover:underline">4. Property Access, Water and Power Utilities</a></li>
            <li><a href="#payment" className="text-[#1F6F50] hover:underline">5. Payment Terms and Invoicing</a></li>
            <li><a href="#liability" className="text-[#1F6F50] hover:underline">6. Limitation of Liability and Surface Conditions</a></li>
            <li><a href="#contact" className="text-[#1F6F50] hover:underline">7. Contact Information</a></li>
          </ol>
        </div>

        {/* Legal Sections */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <section id="acceptance" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              Welcome to the website of Biloti Property Care (&quot;Biloti&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or using our website at <Link href="/" className="text-[#1F6F50] font-semibold underline">biloti.co.nz</Link> or engaging our water blasting, cleaning, pest control, or garden maintenance services, you agree to be bound by these Terms of Use and all applicable New Zealand laws.
            </p>
          </section>

          <section id="services" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              2. Services and Quotes
            </h2>
            <p>
              All service estimations, quotes, and descriptions provided via our website or written communication are subject to physical site inspection or verification. Quotes remain valid for 30 days from issuance unless specified otherwise. We reserve the right to revise quotes if site conditions differ materially from initial client disclosures.
            </p>
          </section>

          <section id="booking" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              3. Booking, Cancellation and Scheduling
            </h2>
            <p>
              Clients may reschedule or cancel confirmed bookings by notifying us at least 24 hours prior to the scheduled start time. Cancellations made with less than 24 hours notice may incur a reasonable administrative or travel fee. In the event of severe weather conditions impacting safety (such as heavy rain or high winds for roof treatments and exterior washing), Biloti reserves the right to reschedule services to the next available date.
            </p>
          </section>

          <section id="access" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              4. Property Access, Water and Power Utilities
            </h2>
            <p>
              Clients must ensure safe and unobstructed access to the property at the agreed appointment time. For exterior water blasting, house washing, and carpet cleaning, clients must provide access to an adequate supply of clean running water and standard mains electrical power unless prior arrangements have been made.
            </p>
          </section>

          <section id="payment" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              5. Payment Terms and Invoicing
            </h2>
            <p>
              Invoices for completed residential services are due upon completion of work unless credit terms have been approved in writing. Commercial invoices are payable strictly within 7 or 20 calendar days from invoice date as stated on the invoice document. Late payments may accrue interest at standard bank overdraft rates plus collection fees.
            </p>
          </section>

          <section id="liability" className="space-y-3">
            <h2 className="text-xl font-bold text-[#0F172A] border-b border-slate-200 pb-2">
              6. Limitation of Liability and Surface Conditions
            </h2>
            <p>
              While Biloti takes extreme care using soft-wash low-pressure techniques and bio-safe chemistry, we are not responsible for pre-existing structural defects, rotted timber weatherboards, degraded window rubber seals, loose paint, or unsealed brick work. Clients are required to advise us of any fragile or damaged building materials prior to service commencement.
            </p>
          </section>

          <section id="contact" className="space-y-3 pt-4 border-t border-slate-200">
            <h2 className="text-xl font-bold text-[#0F172A]">
              7. Contact Information
            </h2>
            <p>
              If you have any questions regarding these Terms of Use, please contact us:
            </p>
            <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200 space-y-1.5 text-sm">
              <p className="font-bold text-[#0F172A]">Biloti Property Care</p>
              <p>Auckland, New Zealand</p>
              <p>Email: <a href={siteConfig.contact.emailLink} className="text-[#1F6F50] font-semibold underline">{siteConfig.contact.email}</a></p>
              <p>Phone: <a href={siteConfig.contact.phoneLink} className="text-[#1F6F50] font-semibold underline">{siteConfig.contact.phone}</a></p>
            </div>
          </section>

        </div>

      </div>

    </div>
  );
}
