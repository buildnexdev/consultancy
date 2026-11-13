import React from 'react';
import { ArrowRight, CheckCircle2, Award, Users, BookOpen, ShieldCheck, MapPin, Sparkles, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import EnquiryForm from '../components/EnquiryForm';
import CollegeCard from '../components/CollegeCard';
import WhyChooseUs from '../components/WhyChooseUs';
import CoursesSection from '../components/CoursesSection';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import { COLLEGES_DATA } from '../data/colleges';

export default function HomePage({ onOpenDetails, onOpenApply }) {
  // Top featured colleges for home page preview
  const featuredColleges = COLLEGES_DATA.slice(0, 6);

  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION WITH ANIMATED FLUID BACKGROUND & EMBEDDED ENQUIRY FORM */}
      <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/40 to-white py-12 sm:py-16 border-b border-slate-200">
        <span id="guidance" className="sr-only"></span>

        {/* Ambient Animated Background Elements (Soft glowing orbs & engineering grid) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
          
          {/* Animated Moving Blueprint / Engineering Grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]" />

          {/* Fluid Glowing Orbs drifting with smooth keyframe animations */}
          <div className="absolute -top-20 -left-16 w-80 sm:w-[480px] h-80 sm:h-[480px] rounded-full bg-gradient-to-tr from-blue-400/25 via-indigo-400/20 to-sky-300/25 blur-3xl animate-float-slow" />
          <div className="absolute top-1/4 -right-20 w-80 sm:w-[450px] h-80 sm:h-[450px] rounded-full bg-gradient-to-br from-amber-300/30 via-orange-300/20 to-rose-300/15 blur-3xl animate-float-reverse" />
          <div className="absolute -bottom-24 left-1/3 w-72 sm:w-[400px] h-72 sm:h-[400px] rounded-full bg-gradient-to-t from-sky-400/20 via-blue-300/15 to-emerald-300/20 blur-3xl animate-pulse-soft" />

          {/* Floating Live Indicator Badges (Visible on desktop to fill empty space) */}
          <div className="hidden xl:flex items-center gap-2 absolute top-10 left-10 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs text-xs font-semibold text-blue-900 animate-float-badge">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>🎓 TNEA 2025 Choice Filling Open</span>
          </div>

          <div className="hidden xl:flex items-center gap-2 absolute bottom-12 right-12 bg-white/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-200/80 shadow-xs text-xs font-semibold text-amber-900 animate-float-badge-delayed">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>100% Genuine Fee & Cutoff Matrix</span>
          </div>

          {/* Decorative subtle sparkles */}
          <div className="hidden lg:block absolute top-1/2 left-8 text-blue-300/60 animate-pulse">
            ✦
          </div>
          <div className="hidden lg:block absolute top-20 right-1/4 text-amber-300/70 animate-pulse">
            ★
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline & Value Props */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 backdrop-blur-xs text-blue-800 border border-blue-200 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Admissions 2025 - 2026 Open • Free Counseling</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Secure Your Seat in Tamil Nadu’s <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-900">Top Accredited Colleges</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Direct admission guidance, TNEA cut-off analysis, and 100% genuine fee verification for B.Tech, MBBS, B.Pharm, and MBA programs. We connect students and parents directly to verified college seats.
              </p>

              {/* Quick Trust Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="text-xl font-black text-blue-900">15,000+</div>
                  <div className="text-xs text-slate-500 font-medium">Students Guided</div>
                </div>
                <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow">
                  <div className="text-xl font-black text-emerald-700">100%</div>
                  <div className="text-xs text-slate-500 font-medium">Genuine Fee Matrix</div>
                </div>
                <div className="p-3.5 bg-white/90 backdrop-blur-xs rounded-xl border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow col-span-2 sm:col-span-1">
                  <div className="text-xl font-black text-amber-600">₹3.5 Cr+</div>
                  <div className="text-xs text-slate-500 font-medium">Scholarships Won</div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/colleges"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-all shadow-xs hover:gap-3"
                >
                  <span>Explore All {COLLEGES_DATA.length} Colleges Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Embedded Enquiry Form (Near the top as required) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 sm:p-6 backdrop-blur-xs relative z-10">
                <EnquiryForm 
                  title="Free Admission Guidance" 
                  subtitle="Submit your marks & branch preference to check cut-off eligibility and seat matrix."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TOP COLLEGES PREVIEW */}
      <section className="py-12 sm:py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
                Featured Institutions
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                Top Colleges Across Tamil Nadu
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Explore autonomous engineering institutes, deemed universities, and medical campuses.
              </p>
            </div>

            <Link
              to="/colleges"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs self-start sm:self-auto"
            >
              <span>View All {COLLEGES_DATA.length} Colleges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onOpenDetails={onOpenDetails}
                onOpenApply={onOpenApply}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 4. COURSES WE COVER */}
      <CoursesSection />

      {/* 5. HOW IT WORKS (3 STEPS) */}
      <HowItWorks onOpenApply={onOpenApply} />

      {/* 6. STUDENT TESTIMONIALS */}
      <Testimonials />

      {/* 7. FAQ */}
      <FAQ />

    </div>
  );
}
