import React from 'react';
import { 
  Award, ShieldCheck, HeartHandshake, Users, 
  CheckCircle, ArrowRight, Phone, MessageCircle 
} from 'lucide-react';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function AboutSection({ onOpenApply }) {
  return (
    <div className="bg-white py-14 sm:py-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            About Siragugal Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight mt-3">
            Tamil Nadu's Trusted Higher Education Guidance Network
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Siragugal Higher Education Services is dedicated to helping aspiring students and parents navigate the complex college admissions ecosystem with integrity, transparency, and deep academic expertise.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            { label: 'Students Successfully Guided', val: CONSULTANCY_INFO.stats.studentsGuided, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
            { label: 'Partner Colleges & Universities', val: CONSULTANCY_INFO.stats.partnerColleges, icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Scholarships Facilitated', val: CONSULTANCY_INFO.stats.scholarshipSanctioned, icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Student Satisfaction Rate', val: CONSULTANCY_INFO.stats.successRate, icon: HeartHandshake, color: 'text-indigo-600', bg: 'bg-indigo-50' },
          ].map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200/80 bg-slate-50 text-center hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mx-auto mb-3 shadow-inner`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 mb-1">{stat.val}</div>
                <div className="text-xs font-semibold text-slate-500 leading-snug">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4 font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Cut-off Analysis & Choice Filling</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We analyze past 5 years of TNEA cut-off trends and placement records to prepare a customized choice-filling order that maximizes your chances of securing a top seat.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">100% Genuine Fee Transparency</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No hidden surprise charges. We verify tuition fees, hostel fees, lab charges, and exam fees in writing directly from college management before admission confirmation.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Merit & Govt Scholarships</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Full guidance on First Graduate (FG) concessions, SC/ST post-matric scholarships, 7.5% Govt School reservation, and institutional merit concessions up to 100%.
            </p>
          </div>
        </div>

        {/* CTA Card */}
        <div className="mt-12 bg-blue-700 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Ready to Explore Your College Options?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Submit your cut-off mark and preferred branch. Our student guidance coordinators will provide seat matrix and fee assistance.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenApply(null)}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-xs"
            >
              Get Free Admission Guidance
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

