import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl text-center space-y-6">
        
        <div className="w-16 h-16 bg-[#E8F3EE] text-[#1F6F50] rounded-2xl flex items-center justify-center mx-auto">
          <Search className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
            Page Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-[#0F172A]">
            404 — Page Not Found
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily unavailable.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-2 text-left">
          <p className="font-bold text-[#0F172A] flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#1F6F50]" />
            Looking for Biloti Property Care Services?
          </p>
          <ul className="space-y-1 text-slate-600 pl-5 list-disc">
            <li><Link href="/service/water-blasting" className="hover:underline text-[#1F6F50]">Water Blasting</Link></li>
            <li><Link href="/service/cleaning-services" className="hover:underline text-[#1F6F50]">Cleaning Services</Link></li>
            <li><Link href="/service/pest-control" className="hover:underline text-[#1F6F50]">Pest Control</Link></li>
            <li><Link href="/service/garden-maintenance" className="hover:underline text-[#1F6F50]">Garden Maintenance</Link></li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          <Link
            href="/"
            className="w-full py-3 px-4 bg-[#1F6F50] hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/get-a-quote"
            className="w-full py-3 px-4 bg-[#0F172A] hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <span>Request a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}
