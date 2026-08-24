'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'General Enquiry',
    message: '',
    privacyConsent: false,
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const encodedData = new URLSearchParams({
        'form-name': 'contact',
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        privacyConsent: formData.privacyConsent ? 'Yes' : 'No',
      }).toString();

      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodedData,
      });

      if (res.ok) {
        setSuccessMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          service: 'General Enquiry',
          message: '',
          privacyConsent: false,
        });
      } else {
        setErrorMessage('Failed to submit form. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setErrorMessage('A network error occurred. Please call 021 745 179 directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#1F6F50] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://biloti.co.nz/wp-content/uploads/2026/08/01-Water-Blasting.png"
            alt="Contact Biloti Property Care"
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
            Contact Us
          </h1>

          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center space-x-2 text-sm sm:text-base font-bold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-300 transition-colors">
              HOME
            </Link>
            <span className="text-[#E2B857] font-bold">&gt;</span>
            <span className="text-[#E2B857]">
              CONTACT US
            </span>
          </nav>
        </div>
      </section>

      {/* Main Two-Column Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1F6F50] bg-[#E8F3EE] px-3.5 py-1.5 rounded-full">
                Reach Out
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Let’s Discuss Your Property Care Requirements
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you need residential water blasting, commercial office cleaning, pest treatments, or routine garden maintenance, our Auckland team is ready to assist.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">Location & Area Served</h3>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">{siteConfig.contact.address}</p>
                  <p className="text-xs text-slate-500 mt-1">Servicing Central, North, West, South, East Auckland, Rodney & Franklin.</p>
                </div>
              </div>

              {/* Phone */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">Phone Number</h3>
                  <a 
                    href={siteConfig.contact.phoneLink} 
                    id="contact-phone-direct"
                    className="text-base font-bold text-[#1F6F50] hover:underline block mt-0.5"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Direct phone line for bookings and quick enquiries.</p>
                </div>
              </div>

              {/* Email */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">Email Address</h3>
                  <a 
                    href={siteConfig.contact.emailLink} 
                    id="contact-email-direct"
                    className="text-base font-bold text-[#1F6F50] hover:underline block mt-0.5"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-xs text-slate-500 mt-1">Send us project details or request quote information.</p>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4">
                <div className="p-3 bg-[#E8F3EE] text-[#1F6F50] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0F172A] text-base">Operating Hours</h3>
                  <p className="text-sm text-slate-600 font-medium mt-0.5">{siteConfig.contact.hours}</p>
                  <p className="text-xs text-slate-500 mt-1">After-hours commercial cleaning available upon arrangement.</p>
                </div>
              </div>

            </div>

            {/* General Auckland Region Map Visual */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-900 text-white p-6 relative">
              <div className="space-y-2 relative z-10">
                <span className="text-xs uppercase tracking-wider font-bold text-emerald-400">Regional Coverage</span>
                <h4 className="font-bold text-lg text-white">Servicing Greater Auckland</h4>
                <p className="text-xs text-slate-300">
                  From Albany down to Papakura, Titirangi across to Howick. We bring complete property care equipment directly to your site.
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-md space-y-6">
              
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill out the form below and our team will get back to you promptly.
                </p>
              </div>

              {successMessage && (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{successMessage}</p>
                </div>
              )}

              {errorMessage && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{errorMessage}</p>
                </div>
              )}

              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. John Smith"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                  />
                </div>

                {/* Email & Phone Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.co.nz"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 021 123 4567"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                    />
                  </div>
                </div>

                {/* Service Required Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A] bg-white"
                  >
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Water Blasting">Water Blasting / Pressure Washing</option>
                    <option value="Commercial Cleaning">Commercial / Office Cleaning</option>
                    <option value="Residential Cleaning">Residential Cleaning</option>
                    <option value="Pest Control">Pest Control</option>
                    <option value="Garden Maintenance">Garden Maintenance / Lawn Care</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your property and cleaning needs..."
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                  />
                </div>

                {/* Privacy Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="privacyConsent"
                    name="privacyConsent"
                    required
                    checked={formData.privacyConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 text-[#1F6F50] border-slate-300 rounded focus:ring-[#1F6F50]"
                  />
                  <label htmlFor="privacyConsent" className="text-xs text-slate-600 leading-relaxed">
                    By submitting this form, you acknowledge that you agree to our{' '}
                    <Link href="/privacy-policy" className="text-[#1F6F50] font-semibold underline">
                      Privacy Policy
                    </Link>{' '}
                    and consent to Biloti contacting you regarding your enquiry.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  id="contact-submit-btn"
                  className="w-full py-4 px-6 bg-[#1F6F50] hover:bg-emerald-700 disabled:bg-slate-400 text-white font-bold text-sm sm:text-base rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 mt-4"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
