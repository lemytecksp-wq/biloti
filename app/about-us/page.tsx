import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  ShieldCheck, 
  ChevronRight, 
  Sparkles, 
  Users, 
  Leaf, 
  Phone, 
  ArrowRight, 
  CheckCircle,
  CalendarCheck,
  Sliders,
  Building,
  Home
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export const metadata: Metadata = {
  title: 'About Us | Biloti Property Care Auckland',
  description: 'Learn about Biloti Property Care — Auckland’s trusted partner for eco-friendly, professional cleaning, water blasting, pest control, and garden grounds maintenance.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* 1. Page Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#1F6F50] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-02_17_33-AM-5.png"
            alt="About Biloti Property Care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F6F50]/95 via-[#1F6F50]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white tracking-tight">
            About Us
          </h1>

          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center space-x-2 text-sm sm:text-base font-bold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-300 transition-colors">
              HOME
            </Link>
            <span className="text-[#E2B857] font-bold">&gt;</span>
            <span className="text-[#E2B857]">
              ABOUT US
            </span>
          </nav>
        </div>
      </section>

      {/* Main Body Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* 3 & 4. Biloti Introduction & Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Our Story & Purpose
            </span>
            <h2 className="text-3xl font-extrabold text-[#0F172A] leading-tight">
              Dedicated to Raising the Standard of Property Care in Greater Auckland
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              Biloti Property Care was established with a singular vision: to offer property owners, tenants, and commercial businesses across Auckland a seamless, professional, and reliable property maintenance service.
            </p>
            <p className="text-slate-600 leading-relaxed text-base">
              Whether restoring weathered house cladding, sanitizing corporate office floors, eradicating pests, or maintaining vibrant lawn landscapes, our team treats every building and garden with meticulous care. We combine advanced equipment, safe chemistry, and courteous service to deliver exceptional long-term results.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                <Home className="w-6 h-6 text-[#1F6F50] shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm">Residential Care</h3>
                  <p className="text-xs text-slate-500">Homes, villas, townhouses & apartments</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center gap-3">
                <Building className="w-6 h-6 text-[#1F6F50] shrink-0" />
                <div>
                  <h3 className="font-bold text-[#0F172A] text-sm">Commercial Solutions</h3>
                  <p className="text-xs text-slate-500">Offices, retail, warehouses & schools</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg border border-slate-200">
            <Image
              src="https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-7-2026-12_10_03-AM-e1783363280672-530x662.png"
              alt="Biloti Property Care Professional Cleaning Auckland"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md border border-slate-100 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-[#1F6F50] shrink-0" />
              <div>
                <p className="text-xs font-bold text-[#0F172A]">95% Client Satisfaction</p>
                <p className="text-xs text-slate-600">
                  We achieved 95% of our client satisfaction through our work across Auckland.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 5. Mission & Core Values */}
        <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Mission & Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Our Mission and Core Principles
            </h2>
            <p className="text-slate-600 text-sm">
              We operate under four non-negotiable principles on every project:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3EE] text-[#1F6F50] flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Reliability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We respect your time. Our team arrives as scheduled, completes work thoroughly, and maintains clear communication.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3EE] text-[#1F6F50] flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Environmental Safety</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We prioritize biodegradable soaps and safe biocide treatments that protect Auckland waterways, pets, and gardens.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3EE] text-[#1F6F50] flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Surface Protection</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Using tailored soft-wash pressure settings prevents high-pressure damage to cedar, plaster, weatherboards, and tiles.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-[#E8F3EE] text-[#1F6F50] flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-[#0F172A] text-base">Quality Assurance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every task is conducted against rigorous quality checklists to guarantee client satisfaction.
              </p>
            </div>

          </div>
        </div>

        {/* 8, 9 & 10. Easy Booking, Customised Plans, Eco-Friendly Tools */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              The Biloti Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Designed for Convenience and Long-Term Value
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl w-fit">
                <CalendarCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Easy Booking Process</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Request a free quote in minutes online or over the phone. We provide clear, itemized quotes with no hidden fees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl w-fit">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Customised Cleaning Plans</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Select one-off spring cleans, bond-back cleans, or scheduled recurring visits (weekly, fortnightly, monthly).
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
              <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl w-fit">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A]">Eco-Friendly Methods</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We employ advanced low-pressure soft-wash systems and non-toxic sanitizing agents that safeguard occupant health.
              </p>
            </div>

          </div>
        </div>

        {/* 11. Service Categories Grid */}
        <div className="bg-slate-900 text-white p-8 sm:p-12 rounded-3xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Our Four Main Service Pillars
            </h2>
            <p className="text-slate-300 text-sm">
              Discover how we keep Auckland homes and business premises immaculate:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <Link href="/service/water-blasting" className="p-5 rounded-2xl bg-white/10 hover:bg-[#1F6F50] border border-white/10 transition-all space-y-3 group">
              <h3 className="font-bold text-lg text-white group-hover:text-emerald-200">1. Water Blasting</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Pre-paint washing, house washing, roofs, decks, fences & driveways.
              </p>
              <span className="text-xs font-semibold text-emerald-400 group-hover:text-white flex items-center gap-1">
                Explore Water Blasting →
              </span>
            </Link>

            <Link href="/service/cleaning-services" className="p-5 rounded-2xl bg-white/10 hover:bg-[#1F6F50] border border-white/10 transition-all space-y-3 group">
              <h3 className="font-bold text-lg text-white group-hover:text-emerald-200">2. Cleaning Services</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Office cleaning, carpets, windows, mould remediation, builders & tenancy cleans.
              </p>
              <span className="text-xs font-semibold text-emerald-400 group-hover:text-white flex items-center gap-1">
                Explore Cleaning Services →
              </span>
            </Link>

            <Link href="/service/pest-control" className="p-5 rounded-2xl bg-white/10 hover:bg-[#1F6F50] border border-white/10 transition-all space-y-3 group">
              <h3 className="font-bold text-lg text-white group-hover:text-emerald-200">3. Pest Control</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Safe eradication of spiders, ants, cockroaches, flies, and rodents.
              </p>
              <span className="text-xs font-semibold text-emerald-400 group-hover:text-white flex items-center gap-1">
                Explore Pest Control →
              </span>
            </Link>

            <Link href="/service/garden-maintenance" className="p-5 rounded-2xl bg-white/10 hover:bg-[#1F6F50] border border-white/10 transition-all space-y-3 group">
              <h3 className="font-bold text-lg text-white group-hover:text-emerald-200">4. Garden Maintenance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Lawn mowing, hedge/tree trimming, landscaping & section clearing.
              </p>
              <span className="text-xs font-semibold text-emerald-400 group-hover:text-white flex items-center gap-1">
                Explore Garden Care →
              </span>
            </Link>

          </div>
        </div>

        {/* 12. Final Quote CTA */}
        <div className="bg-[#1F6F50] text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Ready to Work With Biloti Property Care?
            </h2>
            <p className="text-emerald-100 text-sm">
              Get in touch with our Auckland team today for a free, transparent service estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <Link
              href="/get-a-quote"
              className="px-6 py-3 bg-white text-[#1F6F50] hover:bg-slate-100 font-bold text-sm rounded-xl text-center shadow-md transition-colors"
            >
              Get a Free Quote
            </Link>
            <a
              href={siteConfig.contact.phoneLink}
              className="px-6 py-3 bg-[#0F172A] hover:bg-slate-900 text-white font-bold text-sm rounded-xl text-center shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>021 745 179</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
