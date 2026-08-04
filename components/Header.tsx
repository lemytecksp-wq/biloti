'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Droplets, 
  Bug, 
  Trees, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes via click handler or microtask
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const toggleMobileAccordion = (key: string) => {
    setMobileAccordion(mobileAccordion === key ? null : key);
  };

  const waterBlastingItems = [
    { name: 'Pre Paint Washing', href: '/service/pre-paint-washing' },
    { name: 'Deck & Fence Wash', href: '/service/deck-fence-wash' },
    { name: 'Driveway Wash', href: '/service/driveway-wash' },
    { name: 'Gutter Cleaning', href: '/service/gutter-cleaning' },
    { name: 'Roof Treatment', href: '/service/roof-treatment' },
    { name: 'Commercial Building Wash', href: '/service/commercial-building-wash' },
    { name: 'House Wash', href: '/service/house-wash' },
  ];

  const cleaningServicesItems = [
    { name: 'Office Cleaning', href: '/service/office-cleaning' },
    { name: 'Graffiti Cleaning Services', href: '/service/graffiti-cleaning-services' },
    { name: 'Mould Remediation', href: '/service/mould-remediation' },
    { name: 'Residential Window Cleaning', href: '/service/residential-window-cleaning' },
    { name: 'Builders Cleaning', href: '/service/builders-cleaning' },
    { name: 'End of Tenancy Cleaning', href: '/service/end-of-tenancy-cleaning' },
    { name: 'Residential Carpet Cleaning', href: '/service/residential-carpet-cleaning' },
    { name: 'Commercial Window Cleaning', href: '/service/commercial-window-cleaning' },
    { name: 'Commercial Carpet Cleaning', href: '/service/commercial-carpet-cleaning' },
    { name: 'Carpet Spot and Stain Treatment', href: '/service/carpet-spot-and-stain-treatment' },
    { name: 'Upholstery Cleaning', href: '/service/upholstery-cleaning' },
  ];

  const gardenMaintenanceItems = [
    { name: 'Lawn Mowing', href: '/service/lawn-mowing' },
    { name: 'Hedge / Tree Trimming', href: '/service/hedge-tree-trimming' },
    { name: 'Landscaping', href: '/service/landscaping' },
    { name: 'Section / Yard Clean Up', href: '/service/section-yard-clean-up' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">

      {/* Main Navbar */}
      <nav 
        className={`w-full bg-white border-b border-slate-200 shadow-xs transition-all duration-200 ${
          isScrolled ? 'py-2.5 shadow-md' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" id="header-logo-link" className="flex items-center shrink-0">
            <div className="relative h-12 w-48 sm:h-14 sm:w-56">
              <Image 
                src={siteConfig.logo} 
                alt="Biloti Property Care Logo" 
                fill 
                sizes="(max-width: 640px) 192px, 224px"
                className="object-contain object-left"
                priority
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            
            {/* Water Blasting Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('water-blasting')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/service/water-blasting"
                id="nav-water-blasting"
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname.includes('water-blasting') 
                    ? 'text-[#1F6F50] bg-emerald-50' 
                    : 'text-[#0F172A] hover:text-[#1F6F50] hover:bg-slate-50'
                }`}
              >
                <Droplets className="w-4 h-4 text-[#1F6F50]" />
                Water Blasting
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {activeDropdown === 'water-blasting' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/50">
                    <Link href="/service/water-blasting" className="text-xs font-medium text-[#1F6F50] hover:underline flex items-center justify-between">
                      Water Blasting Overview <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {waterBlastingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-[#E8F3EE] hover:text-[#1F6F50] ${
                        pathname === item.href ? 'text-[#1F6F50] font-medium bg-[#E8F3EE]' : 'text-[#0F172A]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cleaning Services Dropdown (Mega Menu) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('cleaning-services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/service/cleaning-services"
                id="nav-cleaning-services"
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname.includes('cleaning-services') || pathname.includes('cleaning')
                    ? 'text-[#1F6F50] bg-emerald-50' 
                    : 'text-[#0F172A] hover:text-[#1F6F50] hover:bg-slate-50'
                }`}
              >
                <Sparkles className="w-4 h-4 text-[#1F6F50]" />
                Cleaning Services
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {activeDropdown === 'cleaning-services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-white rounded-2xl shadow-xl border border-slate-100 p-4 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-3 py-1.5 mb-2 border-b border-slate-100 bg-slate-50/50 rounded-xl flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-medium text-slate-500">All Cleaning Solutions</span>
                    <Link href="/service/cleaning-services" className="text-xs font-medium text-[#1F6F50] hover:underline flex items-center gap-1">
                      View All <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                    {cleaningServicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`px-3 py-2 text-sm rounded-lg transition-colors hover:bg-[#E8F3EE] hover:text-[#1F6F50] ${
                          pathname === item.href ? 'text-[#1F6F50] font-medium bg-[#E8F3EE]' : 'text-[#0F172A]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Pest Control (Direct Link) */}
            <Link
              href="/service/pest-control"
              id="nav-pest-control"
              className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                pathname === '/service/pest-control' 
                  ? 'text-[#1F6F50] bg-emerald-50' 
                  : 'text-[#0F172A] hover:text-[#1F6F50] hover:bg-slate-50'
              }`}
            >
              <Bug className="w-4 h-4 text-[#1F6F50]" />
              Pest Control
            </Link>

            {/* Garden Maintenance Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('garden-maintenance')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href="/service/garden-maintenance"
                id="nav-garden-maintenance"
                className={`flex items-center gap-1 px-3 py-2 rounded-full text-sm font-medium transition-colors ${
                  pathname.includes('garden-maintenance') 
                    ? 'text-[#1F6F50] bg-emerald-50' 
                    : 'text-[#0F172A] hover:text-[#1F6F50] hover:bg-slate-50'
                }`}
              >
                <Trees className="w-4 h-4 text-[#1F6F50]" />
                Garden Maintenance
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {activeDropdown === 'garden-maintenance' && (
                <div className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 mt-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <div className="px-4 py-2 border-b border-slate-100 bg-slate-50/50">
                    <Link href="/service/garden-maintenance" className="text-xs font-medium text-[#1F6F50] hover:underline flex items-center justify-between">
                      Garden Maintenance Overview <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {gardenMaintenanceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition-colors hover:bg-[#E8F3EE] hover:text-[#1F6F50] ${
                        pathname === item.href ? 'text-[#1F6F50] font-medium bg-[#E8F3EE]' : 'text-[#0F172A]'
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={siteConfig.contact.phoneLink}
              id="header-call-now-btn"
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-medium text-[#0F172A] border border-slate-300 rounded-full hover:border-[#1F6F50] hover:text-[#1F6F50] hover:bg-emerald-50/50 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#1F6F50]" />
              <span>021 745 179</span>
            </a>

            <Link
              href="/get-a-quote"
              id="header-get-quote-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] rounded-full shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href={siteConfig.contact.phoneLink}
              id="mobile-header-call-btn"
              className="p-2 text-[#1F6F50] bg-emerald-50 rounded-full border border-emerald-200"
              aria-label="Call Now"
            >
              <Phone className="w-5 h-5" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-hamburger-btn"
              className="p-2 text-slate-700 hover:text-[#1F6F50] hover:bg-slate-100 rounded-full transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer Accordion Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[64px] bottom-0 bg-slate-900/40 backdrop-blur-xs z-40 animate-in fade-in duration-200">
          <div className="bg-white w-full max-h-[calc(100vh-64px)] overflow-y-auto shadow-2xl border-b border-slate-200 p-4 space-y-3">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Navigation Menu</span>
              <Link 
                href="/get-a-quote"
                className="text-xs font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] px-4 py-2 rounded-full transition-colors"
              >
                Get a Quote
              </Link>
            </div>

            {/* Water Blasting Accordion */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('water-blasting')}
                className="w-full flex items-center justify-between p-3.5 text-left font-medium text-[#0F172A] hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#1F6F50]" />
                  Water Blasting
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'water-blasting' ? 'rotate-180 text-[#1F6F50]' : 'text-slate-400'}`} />
              </button>
              {mobileAccordion === 'water-blasting' && (
                <div className="bg-slate-50 p-2 space-y-1 border-t border-slate-100">
                  <Link href="/service/water-blasting" className="block px-3 py-2 text-xs font-medium text-[#1F6F50]">
                    → Water Blasting Overview
                  </Link>
                  {waterBlastingItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1F6F50]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cleaning Services Accordion */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('cleaning-services')}
                className="w-full flex items-center justify-between p-3.5 text-left font-medium text-[#0F172A] hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1F6F50]" />
                  Cleaning Services
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'cleaning-services' ? 'rotate-180 text-[#1F6F50]' : 'text-slate-400'}`} />
              </button>
              {mobileAccordion === 'cleaning-services' && (
                <div className="bg-slate-50 p-2 space-y-1 border-t border-slate-100">
                  <Link href="/service/cleaning-services" className="block px-3 py-2 text-xs font-medium text-[#1F6F50]">
                    → All Cleaning Services Overview
                  </Link>
                  {cleaningServicesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1F6F50]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Pest Control Direct Link */}
            <Link
              href="/service/pest-control"
              className="flex items-center justify-between p-3.5 border border-slate-100 rounded-2xl font-medium text-[#0F172A] hover:bg-slate-50"
            >
              <span className="flex items-center gap-2">
                <Bug className="w-4 h-4 text-[#1F6F50]" />
                Pest Control
              </span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            {/* Garden Maintenance Accordion */}
            <div className="border border-slate-100 rounded-2xl overflow-hidden">
              <button
                onClick={() => toggleMobileAccordion('garden-maintenance')}
                className="w-full flex items-center justify-between p-3.5 text-left font-medium text-[#0F172A] hover:bg-slate-50"
              >
                <span className="flex items-center gap-2">
                  <Trees className="w-4 h-4 text-[#1F6F50]" />
                  Garden Maintenance
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'garden-maintenance' ? 'rotate-180 text-[#1F6F50]' : 'text-slate-400'}`} />
              </button>
              {mobileAccordion === 'garden-maintenance' && (
                <div className="bg-slate-50 p-2 space-y-1 border-t border-slate-100">
                  <Link href="/service/garden-maintenance" className="block px-3 py-2 text-xs font-medium text-[#1F6F50]">
                    → Garden Maintenance Overview
                  </Link>
                  {gardenMaintenanceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-1.5 text-xs text-slate-700 hover:text-[#1F6F50]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA action buttons in drawer */}
            <div className="pt-3 border-t border-slate-200 space-y-2">
              <a
                href={siteConfig.contact.phoneLink}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-[#0F172A] bg-slate-100 hover:bg-[#1F6F50] hover:text-white rounded-full border border-slate-200 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call 021 745 179
              </a>
              <Link
                href="/get-a-quote"
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] rounded-full shadow-md transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
