import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import FaqAccordion from '@/components/FaqAccordion';
import { homepageFaqs } from '@/lib/data/faqData';
import { serviceCategories } from '@/lib/data/servicesData';
import { siteConfig } from '@/lib/data/siteConfig';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  CalendarCheck, 
  Sliders, 
  Leaf, 
  Phone, 
  ArrowRight, 
  Sparkles, 
  Shield, 
  Clock, 
  Wrench, 
  ShieldCheck, 
  Check,
  MousePointerClick,
  FileText,
  Calendar,
  CheckCircle
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      
      {/* SECTION 1: HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2: TRUST OR PERFORMANCE HIGHLIGHTS */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Expert Cleaners */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs group">
              <div className="p-3.5 bg-[#E8F3EE] rounded-xl text-[#1F6F50] group-hover:bg-[#1F6F50] group-hover:text-white transition-colors shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-[#0F172A]">Expert Cleaners</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We have an amazing expert cleaners for professional cleaning
                </p>
              </div>
            </div>

            {/* Card 2: Years Experience */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs group">
              <div className="p-3.5 bg-[#E8F3EE] rounded-xl text-[#1F6F50] group-hover:bg-[#1F6F50] group-hover:text-white transition-colors shrink-0 font-bold text-lg">
                7+
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-[#0F172A]">Years Experience</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We have an extensive industry experience in professional cleaning
                </p>
              </div>
            </div>

            {/* Card 3: Project Complete */}
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-emerald-300 transition-all shadow-xs group">
              <div className="p-3.5 bg-[#E8F3EE] rounded-xl text-[#1F6F50] group-hover:bg-[#1F6F50] group-hover:text-white transition-colors shrink-0 font-bold text-lg">
                100+
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-medium text-[#0F172A]">Project Complete</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We achieved 95% of our client satisfaction through our work
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: ABOUT BILOTI */}
      <section className="py-20 bg-[#F8FAFC] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="relative">
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-7-2026-12_10_03-AM-e1783363280672-530x662.png"
                  alt="Biloti Property Care Professional Cleaning in Auckland"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center gap-4">
                  <div className="p-3 bg-[#1F6F50] text-white rounded-lg shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0F172A] text-sm sm:text-base">95% Client Satisfaction</h4>
                    <p className="text-xs text-slate-600">We achieved 95% of our client satisfaction through our work.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="space-y-6">
              
              <div>
                <span className="text-xs font-medium uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1 rounded-full">
                  About Company
                </span>
                <h2 className="text-3xl sm:text-4xl font-medium text-[#0F172A] mt-3 leading-tight">
                  Your Trusted Partner in Delivering Spotless and Fresh Spaces
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                At Biloti Property Care, we go beyond standard cleaning. We provide total exterior and interior maintenance solutions across Auckland, engineered to enhance comfort, protect structural investments, and uphold the highest standard of hygiene for families, employees, and customers.
              </p>

              {/* 3 Core Pillars */}
              <div className="space-y-4 pt-2">
                
                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="p-2 bg-[#E8F3EE] text-[#1F6F50] rounded-lg shrink-0 mt-0.5">
                    <CalendarCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] text-sm">Easy Booking Process</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Fast online quotes, responsive communication, and flexible scheduling tailored to your schedule.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="p-2 bg-[#E8F3EE] text-[#1F6F50] rounded-lg shrink-0 mt-0.5">
                    <Sliders className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] text-sm">Customised Cleaning Plans</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Tailored service packages whether you require a one-off deep restore or ongoing routine maintenance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <div className="p-2 bg-[#E8F3EE] text-[#1F6F50] rounded-lg shrink-0 mt-0.5">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#0F172A] text-sm">Eco-Friendly Cleaning Tools</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Safe, non-toxic products and advanced soft-wash equipment safe for pets, gardens, and indoor air.</p>
                  </div>
                </div>

              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/get-a-quote"
                  id="about-get-quote-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0F172A] hover:bg-[#1F6F50] text-white font-medium text-sm rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
                >
                  <span>Get a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.contact.phoneLink}
                  id="about-call-now-btn"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 hover:bg-[#1F6F50] hover:text-white text-[#0F172A] font-medium text-sm rounded-full border border-slate-200 shadow-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#1F6F50]" />
                  <span>Call 021 745 179</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: MAIN SERVICES */}
      <section id="services" className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F172A]">
              Complete Property Care Solutions for Every Space
            </h2>
            <p className="text-slate-600 text-base">
              Comprehensive property maintenance services tailored for homes, offices, commercial sites, and industrial facilities across Auckland.
            </p>
          </div>

          {/* 4 Large Service Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((cat) => (
              <div 
                key={cat.slug}
                className="group rounded-2xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col"
              >
                {/* Image Header */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-medium text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {cat.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    {cat.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#1F6F50] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Explore Service Link */}
                  <div className="pt-2 border-t border-slate-200/80">
                    <Link
                      href={`/service/${cat.slug}`}
                      id={`main-service-link-${cat.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1F6F50] hover:text-[#0F172A] transition-colors"
                    >
                      <span>Explore {cat.title} Services</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: WHY CHOOSE US */}
      <section className="py-20 bg-[#F4F7F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8F3EE] border border-[#1F6F50]/20 text-[#1F6F50] text-xs font-semibold uppercase tracking-wider">
                  <span>WHY CHOOSE US</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#1F6F50]" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-[#0F172A] leading-[1.15]">
                  Why choose us<br />for cleaning your<br />space
                </h2>

                <div>
                  <Link
                    href="/get-a-quote"
                    id="why-choose-get-quote-btn"
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1F6F50] hover:bg-[#0F172A] text-white font-medium text-sm rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <span>Get a quote</span>
                  </Link>
                </div>
              </div>

              {/* Left Image with Overlaid Stat Card */}
              <div className="relative pt-2">
                <div className="relative w-full h-[320px] sm:h-[380px] rounded-[32px] overflow-hidden shadow-sm border border-slate-200 bg-white">
                  <Image
                    src="https://lemyteck.com/wp-content/uploads/2026/08/Untitled-design.jpg"
                    alt="Why Choose Biloti Property Care Cleaner"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  
                  {/* Floating Stat Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-4 max-w-[260px]">
                    <div className="w-12 h-12 rounded-xl bg-[#1F6F50] text-white flex items-center justify-center shrink-0">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-[#0F172A] leading-none">50+</p>
                      <p className="text-xs text-slate-600 font-medium mt-1 leading-snug">
                        Happy Clients Trusted Us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: 4 Sequence Cards */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Item 01 */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group">
                <div className="relative w-full sm:w-[200px] h-[160px] sm:h-[150px] rounded-[18px] overflow-hidden shrink-0">
                  <Image
                    src="https://biloti.co.nz/wp-content/uploads/2026/07/Residential-Window-Cleaning-200x240.png"
                    alt="Residential Window Cleaning"
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 sm:-right-1 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 rounded-full bg-[#1F6F50] text-white font-bold text-sm flex items-center justify-center shadow-md z-10">
                    01
                  </div>
                </div>
                <div className="flex-1 py-1 pr-2">
                  <h3 className="text-lg sm:text-xl font-medium text-[#1F6F50] group-hover:text-[#0F172A] transition-colors">
                    Professional-Quality Results
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    Our trained Biloti team uses the right cleaning methods, equipment, and attention to detail to deliver a deeper, longer-lasting clean for homes, offices, and commercial spaces.
                  </p>
                </div>
              </div>

              {/* Item 02 */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group">
                <div className="relative w-full sm:w-[200px] h-[160px] sm:h-[150px] rounded-[18px] overflow-hidden shrink-0">
                  <Image
                    src="https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-01_46_36-AM-200x240.png"
                    alt="Consistent Cleaning Schedule"
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 sm:-right-1 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 rounded-full bg-[#0F172A] text-white font-bold text-sm flex items-center justify-center shadow-md z-10">
                    02
                  </div>
                </div>
                <div className="flex-1 py-1 pr-2">
                  <h3 className="text-lg sm:text-xl font-medium text-[#0F172A] group-hover:text-[#1F6F50] transition-colors">
                    Consistent Cleaning Schedule
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    We provide flexible cleaning plans that fit your routine, whether you need weekly, fortnightly, monthly, or one-off service. Our goal is to keep your space clean without any stress.
                  </p>
                </div>
              </div>

              {/* Item 03 */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group">
                <div className="relative w-full sm:w-[200px] h-[160px] sm:h-[150px] rounded-[18px] overflow-hidden shrink-0">
                  <Image
                    src="https://biloti.co.nz/wp-content/uploads/2026/07/Lawn-Mowing-200x240.jpeg"
                    alt="Access to Professional Tools & Products"
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 sm:-right-1 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 rounded-full bg-[#1F6F50] text-white font-bold text-sm flex items-center justify-center shadow-md z-10">
                    03
                  </div>
                </div>
                <div className="flex-1 py-1 pr-2">
                  <h3 className="text-lg sm:text-xl font-medium text-[#1F6F50] group-hover:text-[#0F172A] transition-colors">
                    Access to Professional Tools & Products
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    We use professional cleaning tools, quality equipment, and safe cleaning products to achieve better results on floors, windows, carpets, surfaces, and hard-to-reach areas.
                  </p>
                </div>
              </div>

              {/* Item 04 */}
              <div className="bg-white rounded-[24px] border border-slate-200/80 shadow-xs hover:shadow-md transition-all p-3 sm:p-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 relative overflow-hidden group">
                <div className="relative w-full sm:w-[200px] h-[160px] sm:h-[150px] rounded-[18px] overflow-hidden shrink-0">
                  <Image
                    src="https://biloti.co.nz/wp-content/uploads/2026/07/Residential-Carpet-Cleaning-200x240.png"
                    alt="Eco-Friendly & Safe Options"
                    fill
                    sizes="(max-width: 640px) 100vw, 200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Number Badge */}
                  <div className="absolute top-3 right-3 sm:-right-1 sm:top-1/2 sm:-translate-y-1/2 w-10 h-10 rounded-full bg-[#1F6F50] text-white font-bold text-sm flex items-center justify-center shadow-md z-10">
                    04
                  </div>
                </div>
                <div className="flex-1 py-1 pr-2">
                  <h3 className="text-lg sm:text-xl font-medium text-[#0F172A] group-hover:text-[#1F6F50] transition-colors">
                    Eco-Friendly & Safe Options
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2">
                    Our cleaning approach is safe for families, pets, staff, and customers. We use suitable eco-friendly solutions wherever possible to keep your property fresh, hygienic, and well maintained.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* SECTION 6: WORK PROCESS */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-medium uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Work Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F172A]">
              Four Simple Steps to Clean & Pristine Spaces
            </h2>
            <p className="text-slate-600 text-base">
              Getting your property cleaned or maintained with Biloti is quick, transparent, and hassle-free.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F6F50] text-white flex items-center justify-center shadow-md">
                <MousePointerClick className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-medium text-[#1F6F50] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">Step 01</span>
              <h3 className="text-lg font-medium text-[#0F172A]">1. Select a Service</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Browse our water blasting, cleaning, pest control, or garden services and pick what your property needs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F6F50] text-white flex items-center justify-center shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-medium text-[#1F6F50] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">Step 02</span>
              <h3 className="text-lg font-medium text-[#0F172A]">2. Request a Free Quote</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fill out our quick 4-step online form or give us a call. We issue transparent, no-obligation quotes promptly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F6F50] text-white flex items-center justify-center shadow-md">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-medium text-[#1F6F50] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">Step 03</span>
              <h3 className="text-lg font-medium text-[#0F172A]">3. Confirm Your Schedule</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choose an appointment time that aligns with your household schedule or business operating hours.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#1F6F50] text-white flex items-center justify-center shadow-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <span className="inline-block text-xs font-medium text-[#1F6F50] uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full">Step 04</span>
              <h3 className="text-lg font-medium text-[#0F172A]">4. Biloti Completes Work</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our professional team arrives on time, executes high-standard work, and leaves your space sparkling clean.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-medium uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-medium text-[#0F172A]">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Find clear answers regarding our booking process, quotes, cleaning schedules, and service guarantees.
            </p>
          </div>

          <FaqAccordion faqs={homepageFaqs} allowMultiple={true} />

        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="relative py-20 bg-[#0F172A] text-white overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://biloti.co.nz/wp-content/uploads/2026/08/01-Water-Blasting.png"
            alt="Biloti Property Care Auckland"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#1F6F50]/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F6F50] text-emerald-200 text-xs font-medium uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-emerald-300" />
            <span>Ready for Clean & Fresh Spaces?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-medium text-white leading-tight max-w-3xl mx-auto">
            Reliable Property Care for a Healthier, Brighter Tomorrow
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Select a service and schedule an appointment with the Biloti team today. We service residential homes and commercial sites across all Auckland regions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/get-a-quote"
              id="final-cta-get-quote-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0F172A] hover:bg-[#1F6F50] text-white font-medium text-base rounded-full shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </Link>

            <a
              href={siteConfig.contact.phoneLink}
              id="final-cta-call-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-[#1F6F50] text-white border border-white/30 font-medium text-base rounded-full backdrop-blur-xs transition-all"
            >
              <Phone className="w-5 h-5 text-emerald-400" />
              <span>Call 021 745 179</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
