"use client";

import React, { useState } from "react";
import { siteContent } from "@/data/siteContent";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    gradeSeeking: "Nursery",
    message: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const grades = [
    "Nursery",
    "LKG",
    "UKG",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI (Science)",
    "Class XI (Commerce)",
    "Class XI (Humanities)",
    "Class XII",
  ];

  const validate = () => {
    const errors: Record<string, string> = {};

    if (!formData.parentName.trim() || formData.parentName.trim().length < 2) {
      errors.parentName = "Please enter the Parent/Guardian full name.";
    }

    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 10 || cleanPhone.length > 12) {
      errors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address.";
    }

    if (!formData.childName.trim() || formData.childName.trim().length < 2) {
      errors.childName = "Please enter the Child's name.";
    }

    return errors;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^\d\s+-]/g, "");
    setFormData({ ...formData, phone: val });
    if (fieldErrors.phone) {
      setFieldErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      setErrorMessage("Please correct the highlighted fields before submitting.");
      setStatus("error");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");

    // Simulated graceful client-side submission with timeout
    setTimeout(() => {
      setStatus("success");
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        gradeSeeking: "Nursery",
        message: "",
      });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ivory text-forest-950 border-b border-sand-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Campus Details, Map, and Contacts (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="text-xs uppercase tracking-editorial font-semibold text-forest-700 mb-2">
                Connect With Us
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-forest-950">
                Visit our campus in Etawah.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-charcoal-700 leading-relaxed font-normal">
                Our admissions team is available to guide you through campus facilities, academic programs, and the 2026–27 enrollment process.
              </p>
            </div>

            <div className="space-y-5 text-sm text-charcoal-800">
              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-stonebg border border-sand-200">
                <MapPin className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-forest-950 text-base">Campus Address</h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-1 leading-relaxed">
                    {siteContent.school.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-stonebg border border-sand-200">
                <Phone className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-forest-950 text-base">Admissions Desk</h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-1">
                    <a
                      href={`tel:${siteContent.school.phone}`}
                      className="font-bold text-forest-900 hover:text-forest-700 text-base"
                    >
                      {siteContent.school.phoneDisplay}
                    </a>
                  </p>
                  <p className="text-[11px] text-charcoal-500 mt-0.5">
                    Direct enquiry & tour coordination helpline
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-sm bg-stonebg border border-sand-200">
                <Clock className="w-5 h-5 text-forest-800 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-forest-950 text-base">Office Timings</h4>
                  <p className="text-xs sm:text-sm text-charcoal-700 mt-1">
                    {siteContent.school.officeHours}
                  </p>
                </div>
              </div>
            </div>

            {/* Campus Directions / Map Box */}
            <div className="p-4 rounded-sm bg-forest-950 text-sand-100 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-brass-400">
                <span>LOCATION MAP · NH-92</span>
                <span>Sai City, Etawah</span>
              </div>
              <p className="text-xs text-sand-300">
                Conveniently situated along Farrukhabad Road (NH-92) with safe arterial access and dedicated school transport routes connecting major localities of Etawah.
              </p>
            </div>
          </div>

          {/* Right Column: Hardened Admission / General Inquiry Form (7 cols) */}
          <div id="visit" className="lg:col-span-7 bg-stonebg p-8 sm:p-10 rounded-sm border border-sand-200 shadow-subtle">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-bold text-forest-950">
                Admissions & Campus Tour Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
                Fill out the form below to receive our prospectus or schedule an appointment with the admissions counselor.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="p-6 rounded-sm bg-forest-50 border border-forest-300 text-forest-950 space-y-3 animate-fade-in"
              >
                <div className="flex items-center gap-2 text-forest-800 font-bold font-serif text-lg">
                  <CheckCircle className="w-5 h-5 text-forest-700" />
                  <span>Inquiry Successfully Received</span>
                </div>
                <p className="text-sm text-charcoal-700 leading-relaxed">
                  Thank you for reaching out to AMNEEV Vision School. Our admissions coordinator will contact you via phone within 1 business day with tour availability and enrollment details.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFieldErrors({});
                  }}
                  className="mt-3 px-5 py-2.5 bg-forest-900 text-sand-50 text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-forest-800 transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {status === "error" && errorMessage && (
                  <div
                    role="alert"
                    aria-live="assertive"
                    className="p-3.5 rounded-sm bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Parent Name */}
                  <div>
                    <label
                      htmlFor="form-parent-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                    >
                      Parent / Guardian Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="form-parent-name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!fieldErrors.parentName}
                      aria-describedby={fieldErrors.parentName ? "parent-name-error" : undefined}
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.parentName}
                      onChange={(e) => {
                        setFormData({ ...formData, parentName: e.target.value });
                        if (fieldErrors.parentName) setFieldErrors((prev) => ({ ...prev, parentName: "" }));
                      }}
                      className={`w-full px-3.5 py-2.5 bg-ivory border rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors ${
                        fieldErrors.parentName ? "border-red-500 bg-red-50/20" : "border-sand-300"
                      }`}
                    />
                    {fieldErrors.parentName && (
                      <p id="parent-name-error" className="text-[11px] text-red-600 mt-1">
                        {fieldErrors.parentName}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="form-phone"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                    >
                      Contact Phone <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="form-phone"
                      type="tel"
                      required
                      maxLength={15}
                      inputMode="tel"
                      autoComplete="tel"
                      aria-required="true"
                      aria-invalid={!!fieldErrors.phone}
                      aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`w-full px-3.5 py-2.5 bg-ivory border rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors ${
                        fieldErrors.phone ? "border-red-500 bg-red-50/20" : "border-sand-300"
                      }`}
                    />
                    {fieldErrors.phone && (
                      <p id="phone-error" className="text-[11px] text-red-600 mt-1">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="form-email"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                    >
                      Email Address (Optional)
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      maxLength={120}
                      inputMode="email"
                      autoComplete="email"
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: "" }));
                      }}
                      className={`w-full px-3.5 py-2.5 bg-ivory border rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors ${
                        fieldErrors.email ? "border-red-500 bg-red-50/20" : "border-sand-300"
                      }`}
                    />
                    {fieldErrors.email && (
                      <p id="email-error" className="text-[11px] text-red-600 mt-1">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>

                  {/* Child Name */}
                  <div>
                    <label
                      htmlFor="form-child-name"
                      className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                    >
                      Child&apos;s Name <span className="text-red-700">*</span>
                    </label>
                    <input
                      id="form-child-name"
                      type="text"
                      required
                      maxLength={80}
                      aria-required="true"
                      aria-invalid={!!fieldErrors.childName}
                      aria-describedby={fieldErrors.childName ? "child-name-error" : undefined}
                      placeholder="e.g. Aryan"
                      value={formData.childName}
                      onChange={(e) => {
                        setFormData({ ...formData, childName: e.target.value });
                        if (fieldErrors.childName) setFieldErrors((prev) => ({ ...prev, childName: "" }));
                      }}
                      className={`w-full px-3.5 py-2.5 bg-ivory border rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors ${
                        fieldErrors.childName ? "border-red-500 bg-red-50/20" : "border-sand-300"
                      }`}
                    />
                    {fieldErrors.childName && (
                      <p id="child-name-error" className="text-[11px] text-red-600 mt-1">
                        {fieldErrors.childName}
                      </p>
                    )}
                  </div>
                </div>

                {/* Grade Seeking Admission */}
                <div>
                  <label
                    htmlFor="form-grade-select"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                  >
                    Grade Seeking Admission (Session 2026–27) <span className="text-red-700">*</span>
                  </label>
                  <select
                    id="form-grade-select"
                    aria-required="true"
                    value={formData.gradeSeeking}
                    onChange={(e) => setFormData({ ...formData, gradeSeeking: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory border border-sand-300 rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors"
                  >
                    {grades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-semibold uppercase tracking-wider text-charcoal-700 mb-1"
                  >
                    Specific Questions or Campus Tour Preference
                  </label>
                  <textarea
                    id="form-message"
                    rows={3}
                    maxLength={500}
                    placeholder="Let us know if you'd like to tour our science laboratories, Atal Tinkering Lab, or discuss stream selection..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-ivory border border-sand-300 rounded-sm text-base sm:text-sm text-forest-950 focus:outline-none focus:border-forest-700 transition-colors"
                  />
                  <span className="text-[10px] text-charcoal-500 float-right mt-0.5">
                    {formData.message.length}/500 chars
                  </span>
                </div>

                <div className="pt-2 clear-both">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-disabled={status === "submitting"}
                    className="w-full py-3.5 bg-forest-900 hover:bg-forest-800 disabled:bg-forest-900/60 disabled:cursor-not-allowed text-sand-50 font-semibold text-xs uppercase tracking-wider rounded-sm transition-colors shadow-subtle flex items-center justify-center gap-2"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-brass-400" />
                        <span>Submitting Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Admission Inquiry</span>
                        <Send className="w-3.5 h-3.5 text-brass-400" />
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-charcoal-500 text-center mt-2 font-mono">
                    Registration Fee: ₹1,500 upon formal application · Privacy guaranteed
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
