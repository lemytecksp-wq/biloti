'use client';

import React, { useState, useEffect } from 'react';
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
  FileText,
  User,
  Mail,
  Phone,
  HelpCircle,
  Loader2,
  ShieldCheck,
  Clock,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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

const STEPS_CONFIG = [
  { num: 1, title: 'Contact Details', subtitle: 'Who we should contact', icon: User, progress: 25 },
  { num: 2, title: 'Site Details', subtitle: 'Location & property type', icon: MapPin, progress: 50 },
  { num: 3, title: 'Services', subtitle: 'Scope of cleaning work', icon: CheckSquare, progress: 75 },
  { num: 4, title: 'Additional Info', subtitle: 'Schedule & submission', icon: FileText, progress: 100 },
];

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

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

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<string | null>(null);
  const [quoteReference, setQuoteReference] = useState<string | null>(null);

  // Input Handlers
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
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
    if (fieldErrors.selectedServices) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next.selectedServices;
        return next;
      });
    }
    setValidationError(null);
  };

  // Step Validation
  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};
    setValidationError(null);

    if (step === 1) {
      if (!formData.contactPerson.trim()) {
        errors.contactPerson = 'Contact Person name is required.';
      }
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errors.email = 'A valid Email Address is required (e.g. name@domain.com).';
      }
      if (!formData.phone.trim() || formData.phone.trim().length < 6) {
        errors.phone = 'A valid Phone Number is required (e.g. 021 745 179).';
      }
    } else if (step === 2) {
      if (!formData.city) {
        errors.city = 'Please select a City / Region.';
      }
      if (!formData.siteAddress.trim()) {
        errors.siteAddress = 'Site Address is required.';
      }
      if (!formData.propertyType) {
        errors.propertyType = 'Please select a Property Type.';
      }
    } else if (step === 3) {
      if (formData.selectedServices.length === 0) {
        errors.selectedServices = 'Please select at least one service required.';
      }
      if (formData.selectedServices.includes('Other') && !formData.otherServiceText.trim()) {
        errors.otherServiceText = 'Please specify your requirement in the "Other" text field.';
      }
    } else if (step === 4) {
      if (!formData.agreedToTerms) {
        errors.agreedToTerms = 'You must acknowledge and agree to our Privacy Policy and Terms of Use.';
      }
    }

    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) {
      const firstMsg = Object.values(errors)[0];
      setValidationError(firstMsg);
      return false;
    }

    return true;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setDirection('next');
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      // Scroll to form top smoothly
      const formEl = document.getElementById('quote-form-container');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const prevStep = () => {
    setFieldErrors({});
    setValidationError(null);
    setDirection('prev');
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    const formEl = document.getElementById('quote-form-container');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
        setSubmissionSuccess(data.message || 'Thank you for submitting your quote request.');
        setQuoteReference(data.quoteReference);
        const formEl = document.getElementById('quote-form-container');
        if (formEl) {
          formEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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

  const currentStepConfig = STEPS_CONFIG[currentStep - 1];
  const progressPercent = currentStepConfig.progress;

  const stepVariants = {
    enter: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? 24 : -24,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: 'next' | 'prev') => ({
      x: direction === 'next' ? -24 : 24,
      opacity: 0,
    }),
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-24 text-[#0F172A]">
      
      {/* Hero Banner */}
      <section className="relative py-16 sm:py-20 bg-[#1F6F50] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://biloti.co.nz/wp-content/uploads/2026/08/01-Water-Blasting.png"
            alt="Get a Quote Biloti Property Care"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F6F50] via-[#1F6F50]/90 to-[#1F6F50]/75" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-semibold uppercase tracking-wider text-emerald-100 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Fast & Free Commercial Estimations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Request a Free Quote
          </h1>

          <p className="text-sm sm:text-base text-emerald-50 max-w-xl mx-auto leading-relaxed">
            Complete our simple 4-step enquiry form below and our Auckland property care specialists will provide a tailored quotation within 2 business hours.
          </p>

          {/* Breadcrumbs */}
          <nav className="flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-wider pt-2 text-emerald-200">
            <Link href="/" className="hover:text-white transition-colors">
              HOME
            </Link>
            <span className="text-[#E2B857]">&gt;</span>
            <span className="text-[#E2B857]">GET A QUOTE</span>
          </nav>
        </div>
      </section>

      {/* Main Container */}
      <div id="quote-form-container" className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        
        {submissionSuccess ? (
          /* Success Screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 text-center space-y-6"
          >
            <div className="w-20 h-20 bg-[#E8F3EE] text-[#1F6F50] rounded-full flex items-center justify-center mx-auto shadow-inner ring-8 ring-[#E8F3EE]/50">
              <CheckCircle2 className="w-12 h-12" />
            </div>

            <div className="space-y-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3.5 py-1 rounded-full border border-emerald-200/60">
                <Check className="w-3.5 h-3.5" /> Request Successfully Confirmed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Thank You for Your Quote Request!
              </h2>
              {quoteReference && (
                <div className="inline-block p-3 rounded-xl bg-slate-50 border border-slate-200 mt-2">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Quote Reference Number</p>
                  <p className="text-lg font-mono font-bold text-[#1F6F50] mt-0.5">{quoteReference}</p>
                </div>
              )}
            </div>

            <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
              {submissionSuccess}
            </p>

            <div className="p-5 bg-gradient-to-r from-[#F8FAFC] to-emerald-50/40 rounded-xl border border-slate-200/80 text-xs sm:text-sm text-slate-600 max-w-md mx-auto space-y-2 text-left">
              <div className="flex items-center gap-2 font-bold text-[#0F172A]">
                <Clock className="w-4 h-4 text-[#1F6F50]" />
                <span>Next Steps</span>
              </div>
              <p className="leading-relaxed">
                Our property care estimating team is reviewing your requirements. We will contact <span className="font-semibold text-[#0F172A]">{formData.email}</span> shortly.
              </p>
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs">
                <span className="text-slate-500">Need immediate help?</span>
                <a href={siteConfig.contact.phoneLink} className="font-bold text-[#1F6F50] hover:underline flex items-center gap-1">
                  <Phone className="w-3 h-3" /> {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1F6F50] hover:bg-[#185840] text-white font-semibold text-sm rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
              >
                Return to Homepage
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm rounded-xl border border-slate-200 transition-all active:scale-[0.98]"
              >
                Contact Us Directly
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Multi-Step Form Card */
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 overflow-hidden">
            
            {/* Sticky Progress Header */}
            <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-8 py-5 transition-all">
              
              {/* Top Progress Info Row */}
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#E8F3EE] text-[#1F6F50] text-xs font-bold">
                    {currentStep}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#0F172A] tracking-tight uppercase">
                      Step {currentStep} of 4: <span className="text-[#1F6F50] normal-case">{currentStepConfig.title}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 hidden sm:block">
                      {currentStepConfig.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-[#1F6F50] bg-[#E8F3EE] px-2.5 py-1 rounded-full tracking-wide">
                    {progressPercent}% Complete
                  </span>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div 
                className="w-full bg-slate-100 h-2 rounded-full overflow-hidden relative"
                role="progressbar"
                aria-valuenow={progressPercent}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`Step ${currentStep} of 4: ${progressPercent}% complete`}
              >
                <div
                  className="bg-gradient-to-r from-[#1F6F50] to-emerald-500 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Stepper Nodes */}
              <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-4 pt-1">
                {STEPS_CONFIG.map((step) => {
                  const isActive = currentStep === step.num;
                  const isCompleted = currentStep > step.num;
                  const isFuture = currentStep < step.num;
                  const Icon = step.icon;

                  return (
                    <div 
                      key={step.num} 
                      className={`flex flex-col items-center text-center transition-all ${
                        isActive ? 'opacity-100' : isCompleted ? 'opacity-90' : 'opacity-50'
                      }`}
                    >
                      <div className="flex items-center justify-center mb-1.5 relative">
                        <div
                          className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 ${
                            isCompleted
                              ? 'bg-[#1F6F50] text-white shadow-xs'
                              : isActive
                              ? 'bg-[#1F6F50] text-white ring-4 ring-[#1F6F50]/20 shadow-md scale-105'
                              : 'bg-slate-100 text-slate-400 border border-slate-200'
                          }`}
                        >
                          {isCompleted ? (
                            <Check className="w-4 h-4 text-white stroke-[2.5]" />
                          ) : (
                            <span className="text-xs">{step.num}</span>
                          )}
                        </div>
                      </div>

                      <span
                        className={`text-[11px] sm:text-xs font-semibold leading-tight line-clamp-1 transition-colors ${
                          isActive 
                            ? 'text-[#1F6F50] font-bold' 
                            : isCompleted 
                            ? 'text-[#0F172A]' 
                            : 'text-slate-400'
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} noValidate className="p-5 sm:p-8 lg:p-10 space-y-6">
              
              {/* Global Validation Alert if any */}
              <AnimatePresence>
                {validationError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.25 }}
                    role="alert"
                    aria-live="polite"
                    className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 shadow-xs"
                  >
                    <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm font-medium">
                      <p className="font-bold text-rose-900">Please complete the required information:</p>
                      <p className="mt-0.5">{validationError}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animated Form Steps */}
              <AnimatePresence mode="wait" custom={direction}>
                
                {/* STEP 1: CONTACT DETAILS */}
                {currentStep === 1 && (
                  <motion.div
                    key="step-1"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                          Step 1 of 4
                        </span>
                        <span className="text-xs text-slate-400 font-medium">• Contact Information</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2 tracking-tight">
                        Who should we contact regarding this quote?
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Please provide the details of the site manager, property owner, or representative.
                      </p>
                    </div>

                    <div className="space-y-5">
                      
                      {/* Company Name */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="companyName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                            Company Name
                          </label>
                          <span className="text-xs text-slate-400 font-medium">Optional</span>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleTextChange}
                            placeholder="e.g. Acme Commercial Ltd or Body Corporate #1234"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300/90 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] transition-all"
                          />
                        </div>
                      </div>

                      {/* Contact Person */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="contactPerson" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                            Contact Person <span className="text-rose-500">*</span>
                          </label>
                          {fieldErrors.contactPerson && (
                            <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> Required
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <User className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="contactPerson"
                            name="contactPerson"
                            required
                            aria-required="true"
                            aria-invalid={!!fieldErrors.contactPerson}
                            aria-describedby={fieldErrors.contactPerson ? "contactPerson-error" : undefined}
                            value={formData.contactPerson}
                            onChange={handleTextChange}
                            placeholder="e.g. Sarah Jenkins"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white outline-none text-sm text-[#0F172A] transition-all ${
                              fieldErrors.contactPerson
                                ? 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15 bg-rose-50/20'
                                : 'border-slate-300/90 focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15'
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {fieldErrors.contactPerson && (
                            <motion.p
                              id="contactPerson-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fieldErrors.contactPerson}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Email & Phone Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* Email */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="email" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                              Email Address <span className="text-rose-500">*</span>
                            </label>
                            {fieldErrors.email && (
                              <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Required
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              required
                              aria-required="true"
                              aria-invalid={!!fieldErrors.email}
                              aria-describedby={fieldErrors.email ? "email-error" : undefined}
                              value={formData.email}
                              onChange={handleTextChange}
                              placeholder="e.g. sarah@acme.co.nz"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white outline-none text-sm text-[#0F172A] transition-all ${
                                fieldErrors.email
                                  ? 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15 bg-rose-50/20'
                                  : 'border-slate-300/90 focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15'
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {fieldErrors.email && (
                              <motion.p
                                id="email-error"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fieldErrors.email}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Phone */}
                        <div>
                          <div className="flex items-center justify-between mb-1.5">
                            <label htmlFor="phone" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                              Phone Number <span className="text-rose-500">*</span>
                            </label>
                            {fieldErrors.phone && (
                              <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> Required
                              </span>
                            )}
                          </div>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                              <Phone className="w-4 h-4" />
                            </div>
                            <input
                              type="tel"
                              id="phone"
                              name="phone"
                              required
                              aria-required="true"
                              aria-invalid={!!fieldErrors.phone}
                              aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                              value={formData.phone}
                              onChange={handleTextChange}
                              placeholder="e.g. 021 987 6543"
                              className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white outline-none text-sm text-[#0F172A] transition-all ${
                                fieldErrors.phone
                                  ? 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15 bg-rose-50/20'
                                  : 'border-slate-300/90 focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15'
                              }`}
                            />
                          </div>
                          <AnimatePresence>
                            {fieldErrors.phone && (
                              <motion.p
                                id="phone-error"
                                initial={{ opacity: 0, y: -4 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -4 }}
                                className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1"
                              >
                                <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fieldErrors.phone}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>

                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 2: SITE DETAILS */}
                {currentStep === 2 && (
                  <motion.div
                    key="step-2"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                          Step 2 of 4
                        </span>
                        <span className="text-xs text-slate-400 font-medium">• Location & Property</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2 tracking-tight">
                        Tell us about the property site
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        We service Auckland Central, North Shore, West, South, East, Rodney & Franklin.
                      </p>
                    </div>

                    <div className="space-y-5">
                      
                      {/* Site Name */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="siteName" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                            Site / Building Name
                          </label>
                          <span className="text-xs text-slate-400 font-medium">Optional</span>
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="siteName"
                            name="siteName"
                            value={formData.siteName}
                            onChange={handleTextChange}
                            placeholder="e.g. Head Office / Level 4 North Wing / Warehouse B"
                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300/90 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] transition-all"
                          />
                        </div>
                      </div>

                      {/* City & Property Type Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        
                        {/* City / Region */}
                        <div>
                          <label htmlFor="city" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                            City / Region <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="city"
                              name="city"
                              required
                              aria-required="true"
                              value={formData.city}
                              onChange={handleTextChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300/90 bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] appearance-none transition-all cursor-pointer"
                            >
                              {siteConfig.cities.map((cityOpt) => (
                                <option key={cityOpt} value={cityOpt}>
                                  {cityOpt}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <ChevronRight className="w-4 h-4 rotate-90" />
                            </div>
                          </div>
                        </div>

                        {/* Property Type */}
                        <div>
                          <label htmlFor="propertyType" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                            Property Type <span className="text-rose-500">*</span>
                          </label>
                          <div className="relative">
                            <select
                              id="propertyType"
                              name="propertyType"
                              required
                              aria-required="true"
                              value={formData.propertyType}
                              onChange={handleTextChange}
                              className="w-full px-4 py-3 rounded-xl border border-slate-300/90 bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] appearance-none transition-all cursor-pointer"
                            >
                              {siteConfig.propertyTypes.map((propOpt) => (
                                <option key={propOpt} value={propOpt}>
                                  {propOpt}
                                </option>
                              ))}
                            </select>
                            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                              <ChevronRight className="w-4 h-4 rotate-90" />
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Site Address */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="siteAddress" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                            Site Address <span className="text-rose-500">*</span>
                          </label>
                          {fieldErrors.siteAddress && (
                            <span className="text-xs text-rose-600 font-semibold flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" /> Required
                            </span>
                          )}
                        </div>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                            <MapPin className="w-4 h-4" />
                          </div>
                          <input
                            type="text"
                            id="siteAddress"
                            name="siteAddress"
                            required
                            aria-required="true"
                            aria-invalid={!!fieldErrors.siteAddress}
                            aria-describedby={fieldErrors.siteAddress ? "siteAddress-error" : undefined}
                            value={formData.siteAddress}
                            onChange={handleTextChange}
                            placeholder="e.g. 123 Queen Street, Auckland CBD"
                            className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 hover:bg-white focus:bg-white outline-none text-sm text-[#0F172A] transition-all ${
                              fieldErrors.siteAddress
                                ? 'border-rose-400 focus:border-rose-500 focus:ring-4 focus:ring-rose-500/15 bg-rose-50/20'
                                : 'border-slate-300/90 focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15'
                            }`}
                          />
                        </div>
                        <AnimatePresence>
                          {fieldErrors.siteAddress && (
                            <motion.p
                              id="siteAddress-error"
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -4 }}
                              className="text-xs text-rose-600 font-medium mt-1.5 flex items-center gap-1"
                            >
                              <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fieldErrors.siteAddress}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                    </div>
                  </motion.div>
                )}

                {/* STEP 3: SERVICES REQUIRED */}
                {currentStep === 3 && (
                  <motion.div
                    key="step-3"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-100 pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                            Step 3 of 4
                          </span>
                          <span className="text-xs text-slate-400 font-medium">• Scope of Work</span>
                        </div>
                        {formData.selectedServices.length > 0 && (
                          <span className="text-xs font-bold text-[#1F6F50] bg-[#E8F3EE] px-2.5 py-0.5 rounded-full">
                            {formData.selectedServices.length} selected
                          </span>
                        )}
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2 tracking-tight">
                        Select the services required
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Choose all services that apply. Multiple services can be bundled for discounted rates.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {fieldErrors.selectedServices && (
                        <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium flex items-center gap-2">
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>{fieldErrors.selectedServices}</span>
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 max-h-[380px] overflow-y-auto pr-1">
                        {AVAILABLE_SERVICES.map((srv) => {
                          const isChecked = formData.selectedServices.includes(srv);
                          return (
                            <label
                              key={srv}
                              className={`flex items-start gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all select-none ${
                                isChecked
                                  ? 'bg-[#E8F3EE] border-[#1F6F50] text-[#1F6F50] font-semibold shadow-xs ring-1 ring-[#1F6F50]'
                                  : 'bg-white border-slate-200 text-[#0F172A] hover:border-slate-300 hover:bg-slate-50/70'
                              }`}
                            >
                              <div className="pt-0.5">
                                <div
                                  className={`w-4 h-4 rounded-md border flex items-center justify-center transition-all ${
                                    isChecked
                                      ? 'bg-[#1F6F50] border-[#1F6F50] text-white'
                                      : 'border-slate-300 bg-white'
                                  }`}
                                >
                                  {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                                </div>
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => handleCheckboxToggle(srv)}
                                  className="sr-only"
                                />
                              </div>
                              <span className="leading-snug">{srv}</span>
                            </label>
                          );
                        })}
                      </div>

                      {/* Additional field if "Other" is selected */}
                      <AnimatePresence>
                        {formData.selectedServices.includes('Other') && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 mt-3"
                          >
                            <label htmlFor="otherServiceText" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                              Please specify your &apos;Other&apos; requirement: <span className="text-rose-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="otherServiceText"
                              name="otherServiceText"
                              value={formData.otherServiceText}
                              onChange={handleTextChange}
                              placeholder="Describe your special cleaning requirement or custom facilities task..."
                              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 bg-white focus:border-[#1F6F50] focus:ring-2 focus:ring-[#1F6F50]/20 outline-none text-sm text-[#0F172A]"
                            />
                            {fieldErrors.otherServiceText && (
                              <p className="text-xs text-rose-600 font-medium flex items-center gap-1">
                                <AlertCircle className="w-3 h-3" /> {fieldErrors.otherServiceText}
                              </p>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: ADDITIONAL INFORMATION */}
                {currentStep === 4 && (
                  <motion.div
                    key="step-4"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                  >
                    <div className="border-b border-slate-100 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#1F6F50] uppercase tracking-wider bg-[#E8F3EE] px-3 py-1 rounded-full">
                          Step 4 of 4
                        </span>
                        <span className="text-xs text-slate-400 font-medium">• Review & Submit</span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#0F172A] mt-2 tracking-tight">
                        Additional details & confirmation
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">
                        Share any timing preferences or specific instructions before submitting.
                      </p>
                    </div>

                    <div className="space-y-5">
                      
                      {/* Cleaning Requirements */}
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <label htmlFor="cleaningRequirements" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                            Tell Us About Your Cleaning Requirements
                          </label>
                          <span className="text-xs text-slate-400 font-medium">Optional</span>
                        </div>
                        <textarea
                          id="cleaningRequirements"
                          name="cleaningRequirements"
                          rows={4}
                          value={formData.cleaningRequirements}
                          onChange={handleTextChange}
                          placeholder="e.g. Preferred frequency (weekly / monthly), preferred clean hours (after 5pm), access codes, surface conditions, urgent deadlines..."
                          className="w-full px-4 py-3 rounded-xl border border-slate-300/90 bg-slate-50/50 hover:bg-white focus:bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] transition-all"
                        />
                      </div>

                      {/* How Did You Hear About Us */}
                      <div>
                        <label htmlFor="howDidYouHear" className="block text-xs font-bold text-[#0F172A] uppercase tracking-wider mb-1.5">
                          How Did You Hear About Us?
                        </label>
                        <div className="relative">
                          <select
                            id="howDidYouHear"
                            name="howDidYouHear"
                            value={formData.howDidYouHear}
                            onChange={handleTextChange}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300/90 bg-white focus:border-[#1F6F50] focus:ring-4 focus:ring-[#1F6F50]/15 outline-none text-sm text-[#0F172A] appearance-none transition-all cursor-pointer"
                          >
                            {siteConfig.hearAboutUsOptions.map((opt) => (
                              <option key={opt} value={opt}>
                                {opt}
                              </option>
                            ))}
                          </select>
                          <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                            <ChevronRight className="w-4 h-4 rotate-90" />
                          </div>
                        </div>
                      </div>

                      {/* Quick Summary Card */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-2">
                        <div className="flex items-center justify-between font-bold text-[#0F172A] border-b border-slate-200 pb-2">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#1F6F50]" /> Summary of Your Enquiry
                          </span>
                          <button 
                            type="button" 
                            onClick={() => setCurrentStep(1)}
                            className="text-[#1F6F50] hover:underline font-semibold text-[11px]"
                          >
                            Edit
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[12px]">
                          <div>
                            <span className="text-slate-400">Contact:</span> <span className="font-semibold text-slate-800">{formData.contactPerson || 'N/A'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Phone:</span> <span className="font-semibold text-slate-800">{formData.phone || 'N/A'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Email:</span> <span className="font-semibold text-slate-800">{formData.email || 'N/A'}</span>
                          </div>
                          <div>
                            <span className="text-slate-400">Location:</span> <span className="font-semibold text-slate-800">{formData.city}</span>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-slate-400">Services ({formData.selectedServices.length}):</span>{' '}
                            <span className="font-medium text-slate-800">
                              {formData.selectedServices.slice(0, 3).join(', ')}
                              {formData.selectedServices.length > 3 ? ` +${formData.selectedServices.length - 3} more` : ''}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Terms Agreement Checkbox */}
                      <div className={`p-4 rounded-xl border transition-all ${
                        fieldErrors.agreedToTerms 
                          ? 'bg-rose-50/50 border-rose-300' 
                          : 'bg-slate-50/80 border-slate-200'
                      }`}>
                        <div className="flex items-start gap-3">
                          <div className="pt-0.5">
                            <input
                              type="checkbox"
                              id="agreedToTerms"
                              name="agreedToTerms"
                              required
                              checked={formData.agreedToTerms}
                              onChange={(e) => {
                                setFormData((prev) => ({ ...prev, agreedToTerms: e.target.checked }));
                                if (fieldErrors.agreedToTerms) {
                                  setFieldErrors((prev) => {
                                    const next = { ...prev };
                                    delete next.agreedToTerms;
                                    return next;
                                  });
                                }
                                setValidationError(null);
                              }}
                              className="w-4 h-4 text-[#1F6F50] border-slate-300 rounded focus:ring-[#1F6F50] cursor-pointer"
                            />
                          </div>
                          <label htmlFor="agreedToTerms" className="text-xs text-slate-700 leading-relaxed cursor-pointer select-none">
                            By submitting this request, you acknowledge that you have read and agree to our{' '}
                            <Link href="/privacy-policy" target="_blank" className="text-[#1F6F50] font-bold underline hover:text-emerald-800 inline-flex items-center gap-0.5">
                              Privacy Policy <ExternalLink className="w-2.5 h-2.5" />
                            </Link>{' '}
                            and{' '}
                            <Link href="/terms-of-use" target="_blank" className="text-[#1F6F50] font-bold underline hover:text-emerald-800 inline-flex items-center gap-0.5">
                              Terms of Use <ExternalLink className="w-2.5 h-2.5" />
                            </Link>
                            , and consent to Biloti contacting you regarding your enquiry.
                          </label>
                        </div>
                        {fieldErrors.agreedToTerms && (
                          <p className="text-xs text-rose-600 font-medium mt-2 pl-7 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {fieldErrors.agreedToTerms}
                          </p>
                        )}
                      </div>

                    </div>
                  </motion.div>
                )}

              </AnimatePresence>

              {/* Form Navigation Controls */}
              <div className="pt-6 border-t border-slate-200/80 flex items-center justify-between gap-4">
                
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 active:scale-[0.98] rounded-xl transition-all shadow-xs"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Previous</span>
                  </button>
                ) : (
                  <div className="text-xs text-slate-400 font-medium">
                    Step 1 of 4
                  </div>
                )}

                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 text-sm font-bold text-white bg-[#1F6F50] hover:bg-[#185840] active:scale-[0.98] rounded-xl transition-all shadow-md hover:shadow-lg ml-auto"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-7 sm:px-9 py-3.5 text-sm sm:text-base font-bold text-white bg-[#1F6F50] hover:bg-[#185840] disabled:bg-slate-400 active:scale-[0.98] rounded-xl transition-all shadow-lg hover:shadow-xl ml-auto cursor-pointer disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Submitting Request...</span>
                      </>
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

            {/* Bottom Guarantee Banner */}
            <div className="bg-slate-50 border-t border-slate-200/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#1F6F50]" />
                <span>100% Privacy Protected & No-Obligation Quotation</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#1F6F50]" />
                <span>Response Time: &lt; 2 Business Hours</span>
              </div>
            </div>

          </div>
        )}

        {/* Quick Assistance Helpline below form */}
        <div className="mt-8 text-center text-xs text-slate-500 space-y-1">
          <p>Prefer to speak to an Auckland cleaning specialist right away?</p>
          <p>
            Call us directly on{' '}
            <a href={siteConfig.contact.phoneLink} className="font-bold text-[#1F6F50] hover:underline">
              {siteConfig.contact.phone}
            </a>{' '}
            or email{' '}
            <a href={siteConfig.contact.emailLink} className="font-bold text-[#1F6F50] hover:underline">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>

      </div>

    </div>
  );
}

