import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function Footer() {
  return (
    <footer className="bg-white text-slate-600 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" id="footer-logo-link" className="inline-block">
              <div className="relative h-14 w-56 p-1">
                <Image 
                  src={siteConfig.logo} 
                  alt="Biloti Property Care" 
                  fill
                  sizes="224px"
                  className="object-contain object-left"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            
            <p className="text-[#1F6F50] font-semibold text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              {siteConfig.tagline}
            </p>
            
            <p className="text-slate-600 text-sm leading-relaxed">
              Your trusted partner delivering spotless, fresh, and environmentally responsible property care solutions across residential and commercial properties in Auckland, New Zealand.
            </p>

            <div className="pt-2">
              <Link 
                href="/get-a-quote" 
                id="footer-quote-cta"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white text-xs font-medium rounded-full hover:bg-[#1F6F50] transition-colors shadow-xs"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-[#0F172A] font-medium text-lg border-b border-slate-200 pb-2">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1F6F50] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1F6F50] shrink-0" />
                <a 
                  href={siteConfig.contact.phoneLink} 
                  id="footer-phone-link"
                  className="hover:text-[#1F6F50] transition-colors font-medium text-[#0F172A]"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#1F6F50] shrink-0" />
                <a 
                  href={siteConfig.contact.emailLink} 
                  id="footer-email-link"
                  className="hover:text-[#1F6F50] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
            <div className="pt-2 text-xs text-slate-500">
              <p className="font-medium text-[#0F172A]">Servicing Areas:</p>
              <p className="mt-1">Central Auckland, North Shore, West, South & East Auckland, Rodney, Franklin.</p>
            </div>
          </div>

          {/* Column 3: Main Services */}
          <div className="space-y-4">
            <h3 className="text-[#0F172A] font-medium text-lg border-b border-slate-200 pb-2">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/service/water-blasting" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Water Blasting & Pressure Cleaning
                </Link>
              </li>
              <li>
                <Link href="/service/cleaning-services" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Commercial & Home Cleaning
                </Link>
              </li>
              <li>
                <Link href="/service/pest-control" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Eco Pest Control Solutions
                </Link>
              </li>
              <li>
                <Link href="/service/garden-maintenance" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Lawn & Garden Grounds Care
                </Link>
              </li>
              <li>
                <Link href="/service/house-wash" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Soft-Wash House Washing
                </Link>
              </li>
              <li>
                <Link href="/service/office-cleaning" className="hover:text-[#1F6F50] transition-colors flex items-center gap-1.5">
                  <span className="text-[#1F6F50]">›</span> Office & Workplace Cleaning
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-[#0F172A] font-medium text-lg border-b border-slate-200 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-600">
              <li>
                <Link href="/about-us" className="hover:text-[#1F6F50] transition-colors">
                  About Biloti Property Care
                </Link>
              </li>
              <li>
                <Link href="/get-a-quote" className="hover:text-emerald-700 transition-colors font-semibold text-[#1F6F50]">
                  Get a Free Quote
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#1F6F50] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-[#1F6F50] transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-[#1F6F50] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© 2026 Biloti.co.nz. All Rights Reserved.</p>
          
          <div className="flex items-center space-x-6">
            <Link href="/terms-of-use" className="hover:text-[#0F172A] transition-colors">
              Terms of Use
            </Link>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:text-[#0F172A] transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-[#0F172A] transition-colors">
              Auckland, New Zealand
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
