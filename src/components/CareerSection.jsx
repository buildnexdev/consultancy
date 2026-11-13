import React from 'react';
import { 
  Compass, TrendingUp, Award, Briefcase, GraduationCap, 
  CheckCircle2, ArrowRight, Phone, MessageCircle, Sparkles, BookOpen 
} from 'lucide-react';
import { CONSULTANCY_INFO } from '../data/colleges';

export default function CareerSection({ onOpenApply }) {
  return (
    <div className="bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/80 mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Career Guidance & Counseling
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Shape Your Career With Expert Educational Mentorship
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            Choosing the right degree and branch is the most pivotal decision for your future. At Siragugal, we guide students through comprehensive psychometric aptitude analysis, market demand trends, and personalized college selection.
          </p>
        </div>

        {/* 4 Steps Career Counseling Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-14">
          {[
            {
              step: '01',
              title: 'Profile & Cut-off Evaluation',
              desc: 'We assess your 12th Marks / TNEA Cut-off, academic strengths, and personal career interests.',
              icon: GraduationCap,
              color: 'text-blue-600',
              bg: 'bg-blue-50'
            },
            {
              step: '02',
              title: 'Branch & Market Mapping',
              desc: 'Detailed insights on CSE, AI/DS, Cyber Security, Robotics, Core Branches, and future industry salaries.',
              icon: TrendingUp,
              color: 'text-amber-600',
              bg: 'bg-amber-50'
            },
            {
              step: '03',
              title: 'College Choice Ordering',
              desc: 'Algorithmic preparation of your TNEA choice-filling list to maximize top institution admission.',
              icon: Compass,
              color: 'text-emerald-600',
              bg: 'bg-emerald-50'
            },
            {
              step: '04',
              title: 'Seat Allocation & Scholarship',
              desc: 'Assistance with First Graduate concessions, institutional fee waivers, and hostel room booking.',
              icon: Award,
              color: 'text-purple-600',
              bg: 'bg-purple-50'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow">
                <span className="text-3xl font-black text-slate-100 absolute top-4 right-4 pointer-events-none">
                  {item.step}
                </span>
                <div>
                  <div className={`w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* High Demand Career Specializations 2025-2030 */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase text-blue-600 tracking-wider">Future Pathways</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Top Emerging Tech & Healthcare Careers
              </h3>
            </div>
            <button
              onClick={() => onOpenApply(null)}
              className="self-start md:self-auto px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              Get Personalized Roadmap
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            {[
              {
                title: 'AI, Machine Learning & Data Science',
                salary: '₹8 - 25 LPA (Avg at 3 Yrs)',
                roles: 'AI Engineer, Data Scientist, ML Ops Specialist',
                tag: 'Highest Demand'
              },
              {
                title: 'Cyber Security & Cloud Architecture',
                salary: '₹7 - 22 LPA (Avg at 3 Yrs)',
                roles: 'Security Analyst, Cloud Architect, Ethical Hacker',
                tag: 'Fastest Growing'
              },
              {
                title: 'Robotics, IoT & Automation',
                salary: '₹6 - 18 LPA (Avg at 3 Yrs)',
                roles: 'Automation Specialist, Embedded Engineer, Mechatronics',
                tag: 'High Core Scope'
              },
              {
                title: 'Full Stack Software Engineering',
                salary: '₹6 - 20 LPA (Avg at 3 Yrs)',
                roles: 'Product Engineer, Backend Architect, UI/UX Lead',
                tag: 'Steady Evergreen'
              },
              {
                title: 'Biomedical & Biotechnology',
                salary: '₹5 - 15 LPA (Avg at 3 Yrs)',
                roles: 'Bioinformatics Analyst, Healthcare Tech Engineer',
                tag: 'Research & Global'
              },
              {
                title: 'Medical, Pharmacy & Allied Health',
                salary: '₹6 - 30+ LPA (Avg)',
                roles: 'Clinical Specialist, Pharma R&D, Healthcare Admin',
                tag: 'High Prestige'
              }
            ].map((c, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-colors">
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                  {c.tag}
                </span>
                <h4 className="font-bold text-slate-900 mt-2 mb-1">{c.title}</h4>
                <div className="text-xs text-emerald-700 font-bold mb-2">{c.salary}</div>
                <div className="text-xs text-slate-500"><strong>Roles:</strong> {c.roles}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Free Counseling CTA */}
        <div className="bg-blue-700 rounded-2xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold">
              Unsure which engineering branch fits your cutoff marks?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Fill in your details for free academic guidance. We will help you select the ideal branch and college.
            </p>
          </div>

          <div>
            <button
              onClick={() => onOpenApply(null)}
              className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-colors shadow-xs"
            >
              Request Career Guidance
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

