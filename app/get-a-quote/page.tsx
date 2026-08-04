'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  Sparkles, 
  Check, 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  MapPin, 
  CheckSquare, 
  FileText 
} from 'lucide-react';
import { siteConfig } from '@/lib/data/siteConfig';

const AVAILABLE_SERVICES = [
  'General Commercial Cleaning',
  'Residential Cleaning',
  'Office Cleaning',
  'Retail Cleaning',
  'Medical Cleaning',
  'Industrial Cleaning',
  'Warehouse Cleaning',
  'School / Education Cleaning',
  'Carpet Cleaning',
  'Window Cleaning',
  'Hard Floor Scrubbing',
  'Floor Polishing',
  'Strip & Seal Floors',
  'Deep Cleaning',
  'Builders Clean',
  'End of Lease Cleaning',
  'Pressure Washing',
  'Building Wash',
  'Consumable Supplies',
  'Waste & Recycling',
  'High Dusting',
  'Garden Maintenance',
  'Lawn Mowing',
  'Pest Control',
  'Other'
];

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    // Step 2
    siteName: '',
    city: 'Auckland Central',
    siteAddress: '',
    propertyType: 'Commercial Office Building',
    // Step 3
    selectedServices: [] as string[],
    otherServiceText: '',
    // Step 4
    cleaningRequirements: '',
    howDidYouHear: 'Google Search',
    agreedToTerms: false,
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [quoteReference, setQuoteReference] = useState<string | null>(null);

  // Input Handlers
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const handleCheckboxToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(service);
      const updated = exists
        ? prev.selectedServices.filter((s) => s !== service)
        : [...prev.selectedServices, service];
      return { ...prev, selectedServices: updated };
    });
    setValidationError(null);
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    setValidationError(null);
    if (step === 1) {
      if (!formData.contactPerson.trim()) {
        setValidationError('Contact Person name is required.');
        return false;
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        setValidationError('A valid Email Address is required.');
        return false;
      }
      if (!formData.phone.trim()) {
        setValidationError('Phone Number is required.');
        return false;
      }
    } else if (step === 2) {
      if (!formData.city) {
        setValidationError('Please select a City / Region.');
        return false;
      }
      if (!formData.siteAddress.trim()) {
        setValidationError('Site Address is required.');
        return false;
      }
      if (!formData.propertyType) {
        setValidationError('Please select a Property Type.');
        return false;
      }
    } else if (step === 3) {
      if (formData.selectedServices.length === 0) {
        setValidationError('Please select at least one service required.');
        return false;
      }
      if (formData.selectedServices.includes('Other') && !formData.otherServiceText.trim()) {
        setValidationError('Please specify your requirement in the "Other" text field.');
        return false;
      }
    } else if (step === 4) {
      if (!formData.agreedToTerms) {
        setValidationError('You must acknowledge and agree to our Privacy Policy and Terms of Use.');
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    setValidationError(null);
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setValidationError(null);

    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmissionSuccess(data.message);
        setQuoteReference(data.quoteReference);
      } else {
        setValidationError(data.message || 'Failed to submit quote request. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setValidationError('A network error occurred. Please call 021 745 179 directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-20">
      
      {/* Hero Banner */}
      <section className="relative py-20 sm:py-24 bg-[#1F6F50] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://biloti.co.nz/wp-content/uploads/2026/08/01-Water-Blasting.png"
            alt="Get a Quote Biloti Property Care"
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
            Get a Quote
          </h1>

          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center space-x-2 text-sm sm:text-base font-bold uppercase tracking-wider">
            <Link href="/" className="text-white hover:text-amber-300 transition-colors">
              HOME
            </Link>
            <span className="text-[#E2B857] font-bold">&gt;</span>
            <span className="text-[#E2B857]">
              GET A QUOTE
            </span>
          </nav>
        </div>
      </section>

      {/* Main Quote Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {submissionSuccess ? (
          /* Success Screen */
          <div className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xl text-center space-y-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-[#1F6F50] rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                Request Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A]">
                Thank You for Your Quote Request!
              </h2>
              {quoteReference && (
                <p className="text-sm font-semibold text-slate-500">
                  Quote Reference Number: <span className="text-[#1F6F50] font-mono">{quoteReference}</span>
                </p>
              )}
            </div>

            <p className="text-slate-600 text-base max-w-lg mx-auto leading-relaxed">
              {submissionSuccess}
            </p>

            <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200 text-xs text-slate-500 max-w-md mx-auto space-y-1">
              <p className="font-bold text-[#0F172A]">Need Urgent Assistance?</p>
              <p>Call our Auckland team directly on <a href={siteConfig.contact.phoneLink} className="text-[#1F6F50] font-bold underline">021 745 179</a></p>
            </div>

            <div className="pt-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F6F50] text-white font-bold text-sm rounded-xl hover:bg-emerald-700 transition-colors shadow-md"
              >
                Return to Homepage
              </Link>
            </div>
          </div>
        ) : (
          /* Multi-Step Form */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            
            {/* Step Progress Header */}
            <div className="bg-[#0F172A] text-white p-6 sm:p-8 border-b border-slate-800">
              <div className="flex items-center justify-between gap-2">
                {[
                  { num: 1, title: 'Contact Details', icon: Building2 },
                  { num: 2, title: 'Site Details', icon: MapPin },
                  { num: 3, title: 'Services', icon: CheckSquare },
                  { num: 4, title: 'Additional Info', icon: FileText },
                ].map((s) => {
                  const isActive = currentStep === s.num;
                  const isCompleted = currentStep > s.num;
                  return (
                    <div key={s.num} className="flex-1 text-center">
                      <div className="flex items-center justify-center mb-2">
                        <div
                          className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                            isCompleted
                              ? 'bg-emerald-500 text-white'
                              : isActive
                              ? 'bg-[#1F6F50] text-white ring-4 ring-emerald-500/30'
                              : 'bg-slate-800 text-slate-400'
                          }`}
                        >
                          {isCompleted ? <Check className="w-5 h-5" /> : s.num}
                        </div>
                      </div>
                      <span
                        className={`block text-[11px] sm:text-xs font-semibold ${
                          isActive ? 'text-emerald-400' : 'text-slate-400 hidden sm:block'
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="w-full bg-slate-800 h-1.5 rounded-full mt-6 overflow-hidden">
                <div
                  className="bg-[#1F6F50] h-full transition-all duration-300"
                  style={{ width: `${(currentStep / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              
              {/* Validation Alert */}
              {validationError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 animate-in fade-in duration-150">
                  <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium">{validationError}</p>
                </div>
              )}

              {/* STEP 1: CONTACT DETAILS */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                      Step 1 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2">
                      Contact Details
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Tell us who we should contact about this request.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="companyName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Company Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleTextChange}
                        placeholder="e.g. Acme Commercial Ltd"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="contactPerson" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Contact Person <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="contactPerson"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleTextChange}
                        placeholder="e.g. Sarah Jenkins"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>

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
                          onChange={handleTextChange}
                          placeholder="e.g. sarah@acme.co.nz"
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
                          onChange={handleTextChange}
                          placeholder="e.g. 021 987 6543"
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: SITE DETAILS */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                      Step 2 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2">
                      Site Details
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Provide the location and property information.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="siteName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Site Name <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="siteName"
                        name="siteName"
                        value={formData.siteName}
                        onChange={handleTextChange}
                        placeholder="e.g. Head Office / North Branch"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          City / Region <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="city"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleTextChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A] bg-white"
                        >
                          {siteConfig.cities.map((cityOpt) => (
                            <option key={cityOpt} value={cityOpt}>
                              {cityOpt}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="propertyType" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          Property Type <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="propertyType"
                          name="propertyType"
                          required
                          value={formData.propertyType}
                          onChange={handleTextChange}
                          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A] bg-white"
                        >
                          {siteConfig.propertyTypes.map((propOpt) => (
                            <option key={propOpt} value={propOpt}>
                              {propOpt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="siteAddress" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Site Address <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="siteAddress"
                        name="siteAddress"
                        required
                        value={formData.siteAddress}
                        onChange={handleTextChange}
                        placeholder="e.g. 123 Queen Street, Auckland CBD"
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: SERVICES REQUIRED */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                      Step 3 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2">
                      Services Required
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Select all services that apply to your property.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {AVAILABLE_SERVICES.map((srv) => {
                      const isChecked = formData.selectedServices.includes(srv);
                      return (
                        <label
                          key={srv}
                          className={`flex items-start gap-3 p-3.5 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-[#E8F3EE] border-[#1F6F50] font-bold text-[#1F6F50]'
                              : 'bg-white border-slate-200 text-[#0F172A] hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => handleCheckboxToggle(srv)}
                            className="mt-0.5 w-4 h-4 text-[#1F6F50] border-slate-300 rounded focus:ring-[#1F6F50]"
                          />
                          <span>{srv}</span>
                        </label>
                      );
                    })}
                  </div>

                  {/* Additional field if "Other" selected */}
                  {formData.selectedServices.includes('Other') && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                      <label htmlFor="otherServiceText" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                        Please specify &apos;Other&apos; requirement: <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="otherServiceText"
                        name="otherServiceText"
                        value={formData.otherServiceText}
                        onChange={handleTextChange}
                        placeholder="Describe your special service request..."
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>
                  )}
                </div>
              )}

              {/* STEP 4: ADDITIONAL INFORMATION */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div>
                    <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                      Step 4 of 4
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2">
                      Additional Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Share any specific cleaning needs, schedules or concerns.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cleaningRequirements" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        Tell Us About Your Cleaning Requirements
                      </label>
                      <textarea
                        id="cleaningRequirements"
                        name="cleaningRequirements"
                        rows={4}
                        value={formData.cleaningRequirements}
                        onChange={handleTextChange}
                        placeholder="e.g. Preferred frequency (weekly / monthly), preferred clean hours (after 5pm), access details, specific areas..."
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label htmlFor="howDidYouHear" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                        How Did You Hear About Us?
                      </label>
                      <select
                        id="howDidYouHear"
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleTextChange}
                        className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A] bg-white"
                      >
                        {siteConfig.hearAboutUsOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Terms Agreement Checkbox */}
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="agreedToTerms"
                        name="agreedToTerms"
                        required
                        checked={formData.agreedToTerms}
                        onChange={(e) => {
                          setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
                          setValidationError(null);
                        }}
                        className="mt-1 w-4 h-4 text-[#1F6F50] border-slate-300 rounded focus:ring-[#1F6F50]"
                      />
                      <label htmlFor="agreedToTerms" className="text-xs text-slate-700 leading-relaxed">
                        By submitting this request, you acknowledge that you have read and agree to our{' '}
                        <Link href="/privacy-policy" className="text-[#1F6F50] font-bold underline">
                          Privacy Policy
                        </Link>{' '}
                        and{' '}
                        <Link href="/terms-of-use" className="text-[#1F6F50] font-bold underline">
                          Terms of Use
                        </Link>
                        , and consent to us contacting you regarding your enquiry.
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Form Navigation Controls */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-[#1F6F50] hover:text-white rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] rounded-full transition-colors shadow-md ml-auto"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] disabled:bg-slate-400 rounded-full transition-colors shadow-lg ml-auto"
                  >
                    {isSubmitting ? (
                      <span>Submitting Request...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Quote Request</span>
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>

          </div>
        )}

      </div>

    </div>
  );
}
