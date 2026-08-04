import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';
import { 
  getCategoryBySlug, 
  getServiceBySlug, 
  getServicesByCategory, 
  serviceCategories, 
  allServices 
} from '@/lib/data/servicesData';
import { generalFaqs } from '@/lib/data/faqData';
import { siteConfig } from '@/lib/data/siteConfig';
import { 
  ChevronRight, 
  Sparkles, 
  Check, 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  FileText, 
  Calendar 
} from 'lucide-react';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categorySlugs = serviceCategories.map((c) => ({ slug: c.slug }));
  const serviceSlugs = allServices.map((s) => ({ slug: s.slug }));
  
  // Combine unique slugs
  const allSlugsMap = new Set<string>();
  categorySlugs.forEach((c) => allSlugsMap.add(c.slug));
  serviceSlugs.forEach((s) => allSlugsMap.add(s.slug));

  return Array.from(allSlugsMap).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const category = getCategoryBySlug(slug);
  const service = getServiceBySlug(slug);

  if (service) {
    return {
      title: `${service.title} | ${service.categoryTitle} Auckland`,
      description: service.shortDescription,
    };
  }

  if (category) {
    return {
      title: `${category.title} Auckland | Biloti Property Care`,
      description: category.shortDescription,
    };
  }

  return {
    title: 'Service | Biloti Property Care Auckland',
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const category = getCategoryBySlug(slug);
  const service = getServiceBySlug(slug);

  if (!category && !service) {
    notFound();
  }

  // Determine if it's rendered as a category hub page
  const isCategoryPage = Boolean(category && (!service || category.slug === slug));

  if (isCategoryPage && category) {
    const childServices = getServicesByCategory(category.slug);

    // Schema.org structured data for Category
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: category.title,
      provider: {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Auckland',
          addressCountry: 'NZ',
        },
      },
      areaServed: 'Auckland, New Zealand',
      description: category.shortDescription,
    };

    return (
      <div className="bg-[#F8FAFC] min-h-screen pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 1. Inner-Page Hero Banner */}
        <section className="relative py-20 sm:py-24 bg-[#1F6F50] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={category.image}
              alt={category.title}
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
              {category.title}
            </h1>

            {/* Breadcrumbs Navigation */}
            <nav className="flex items-center space-x-2 text-sm sm:text-base font-bold uppercase tracking-wider">
              <Link href="/" className="text-white hover:text-amber-300 transition-colors">
                HOME
              </Link>
              <span className="text-[#E2B857] font-bold">&gt;</span>
              <span className="text-[#E2B857]">
                {category.title.toUpperCase()}
              </span>
            </nav>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
          
          {/* 3. Category Introduction */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-4 max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
              Overview
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
              Professional {category.title} Solutions Across Greater Auckland
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {category.introText}
            </p>
          </div>

          {/* 4. Child Services Grid */}
          {childServices.length > 0 && (
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                  Our Specialized {category.title} Services
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  Select a specific service below to learn details, benefits, and view exact service options:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {childServices.map((serv) => (
                  <div
                    key={serv.slug}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={serv.image}
                        alt={serv.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/60 via-transparent to-transparent" />
                    </div>

                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-[#0F172A] group-hover:text-[#1F6F50] transition-colors">
                          {serv.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-2 line-clamp-3">
                          {serv.shortDescription}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-slate-100">
                        <Link
                          href={`/service/${serv.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F6F50] group-hover:text-emerald-700"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5 & 6. Benefits & Why Choose Biloti */}
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Key Benefits of Choosing Biloti for {category.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {category.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#F8FAFC] border border-slate-100">
                  <Check className="w-5 h-5 text-[#1F6F50] shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-[#0F172A]">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 7. Work Process */}
          <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-[#0F172A]">
              Our Simple Four-Step Service Process
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#1F6F50] uppercase">Step 01</span>
                <h3 className="font-bold text-base text-[#0F172A]">1. Request Quote</h3>
                <p className="text-xs text-slate-600">Select your required service and submit details online.</p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#1F6F50] uppercase">Step 02</span>
                <h3 className="font-bold text-base text-[#0F172A]">2. Inspection & Plan</h3>
                <p className="text-xs text-slate-600">We issue a transparent, no-obligation estimate for your site.</p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#1F6F50] uppercase">Step 03</span>
                <h3 className="font-bold text-base text-[#0F172A]">3. Schedule Service</h3>
                <p className="text-xs text-slate-600">Choose a convenient date and time aligned with your calendar.</p>
              </div>
              <div className="p-5 rounded-xl bg-white border border-slate-200 space-y-2">
                <span className="text-xs font-bold text-[#1F6F50] uppercase">Step 04</span>
                <h3 className="font-bold text-base text-[#0F172A]">4. Biloti Execution</h3>
                <p className="text-xs text-slate-600">Our technicians arrive on time and complete work impeccably.</p>
              </div>
            </div>
          </div>

          {/* 8. Relevant FAQs */}
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-1">
              <h2 className="text-2xl font-bold text-[#0F172A]">
                Frequently Asked Questions — {category.title}
              </h2>
            </div>
            <FaqAccordion faqs={generalFaqs} allowMultiple={true} />
          </div>

          {/* 9. Final Quote CTA */}
          <div className="bg-[#1F6F50] text-white p-8 sm:p-12 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <h2 className="text-2xl font-extrabold text-white">
                Need Professional {category.title} in Auckland?
              </h2>
              <p className="text-emerald-100 text-sm">
                Get a free quote today from the Biloti Property Care team.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/get-a-quote"
                className="px-6 py-3 bg-white text-[#1F6F50] font-bold text-sm rounded-xl text-center shadow-md hover:bg-slate-100 transition-colors"
              >
                Get a Free Quote
              </Link>
              <a
                href={siteConfig.contact.phoneLink}
                className="px-6 py-3 bg-[#0F172A] text-white font-bold text-sm rounded-xl text-center shadow-md hover:bg-slate-900 transition-colors flex items-center justify-center gap-2"
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

  // INDIVIDUAL SERVICE PAGE TEMPLATE
  if (service) {
    const parentCategory = getCategoryBySlug(service.categorySlug);
    const peerServices = getServicesByCategory(service.categorySlug);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      serviceType: service.title,
      category: service.categoryTitle,
      provider: {
        '@type': 'LocalBusiness',
        name: siteConfig.name,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Auckland',
          addressCountry: 'NZ',
        },
      },
      areaServed: 'Auckland, New Zealand',
      description: service.shortDescription,
    };

    return (
      <div className="bg-[#F8FAFC] min-h-screen pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* 2. Service Hero Banner */}
        <section className="relative py-20 sm:py-24 bg-[#1F6F50] text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={service.image}
              alt={service.title}
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
              {service.title}
            </h1>

            {/* Breadcrumbs Navigation */}
            <nav className="flex items-center space-x-2 text-sm sm:text-base font-bold uppercase tracking-wider">
              <Link href="/" className="text-white hover:text-amber-300 transition-colors">
                HOME
              </Link>
              <span className="text-[#E2B857] font-bold">&gt;</span>
              <span className="text-[#E2B857]">
                {service.title.toUpperCase()}
              </span>
            </nav>
          </div>
        </section>

        {/* Main Content + Sidebar Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* LEFT / MAIN COLUMN */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 5. Main Service Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* 6. Detailed Service Description */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-2xl font-bold text-[#0F172A]">
                  About Our {service.title} Service
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {service.detailedDescription}
                </p>
              </div>

              {/* 7. What the Service Includes */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  What Our {service.title} Includes
                </h2>
                <ul className="space-y-3 text-slate-700 text-sm sm:text-base">
                  {service.whatItIncludes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-[#1F6F50] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 8 & 9. Benefits & Why Choose Biloti */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Benefits of Professional {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#E8F3EE] text-[#0F172A] font-semibold text-xs sm:text-sm flex items-center gap-2">
                      <Check className="w-4 h-4 text-[#1F6F50] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 10. Biloti Service Process */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Our {service.title} Process
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-[#1F6F50]">01. Assessment</span>
                    <h3 className="font-bold text-sm text-[#0F172A]">Site Inspection & Plan</h3>
                    <p className="text-xs text-slate-600">We inspect surface conditions and formulate the safest cleaning approach.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-[#1F6F50]">02. Preparation</span>
                    <h3 className="font-bold text-sm text-[#0F172A]">Surface Pre-Treatment</h3>
                    <p className="text-xs text-slate-600">Apply eco-friendly cleaning solutions to break down grime and moss safely.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-[#1F6F50]">03. Execution</span>
                    <h3 className="font-bold text-sm text-[#0F172A]">Precision Wash / Clean</h3>
                    <p className="text-xs text-slate-600">Execute work using soft-wash or commercial extraction equipment.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-100 space-y-1">
                    <span className="text-xs font-bold text-[#1F6F50]">04. Review</span>
                    <h3 className="font-bold text-sm text-[#0F172A]">Final Inspection</h3>
                    <p className="text-xs text-slate-600">Check all results against Biloti quality standards for 100% satisfaction.</p>
                  </div>
                </div>
              </div>

              {/* 11. Relevant FAQs */}
              <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Frequently Asked Questions
                </h2>
                <FaqAccordion faqs={generalFaqs.slice(0, 4)} allowMultiple={true} />
              </div>

            </div>

            {/* RIGHT SIDEBAR (DESKTOP) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Service Navigation List */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4 sticky top-28">
                <h3 className="font-bold text-lg text-[#0F172A] border-b border-slate-100 pb-3">
                  {service.categoryTitle} Services
                </h3>
                
                <ul className="space-y-1.5 text-sm">
                  {peerServices.map((peer) => {
                    const isActive = peer.slug === service.slug;
                    return (
                      <li key={peer.slug}>
                        <Link
                          href={`/service/${peer.slug}`}
                          className={`block px-3.5 py-2.5 rounded-lg font-medium transition-colors ${
                            isActive
                              ? 'bg-[#1F6F50] text-white font-bold'
                              : 'text-slate-700 hover:bg-[#E8F3EE] hover:text-[#1F6F50]'
                          }`}
                        >
                          {peer.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Call Now Card */}
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="p-4 rounded-xl bg-[#0F172A] text-white space-y-2">
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Speak with Our Team</span>
                    </div>
                    <h4 className="font-bold text-base text-white">Need a Fast Estimate?</h4>
                    <p className="text-xs text-slate-300">
                      Call Biloti Property Care directly for friendly advice and scheduling across Auckland.
                    </p>
                    <a
                      href={siteConfig.contact.phoneLink}
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-[#1F6F50] hover:bg-emerald-600 text-white font-bold text-xs rounded-lg transition-colors mt-2"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call 021 745 179</span>
                    </a>
                  </div>

                  <Link
                    href="/get-a-quote"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 bg-[#1F6F50] hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
                  >
                    <span>Get a Free Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    );
  }

  notFound();
}
