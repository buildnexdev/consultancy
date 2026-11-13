import React from 'react';
import { BookOpen, ArrowRight, Layers, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getAllDegrees, getBranchesForDegree } from '../data/colleges';

export default function CoursesSection({ onSelectDegree }) {
  const degrees = getAllDegrees();

  const courseCards = [
    {
      degree: 'B.Tech / B.E. (Engineering)',
      branches: ['Computer Science (CSE)', 'AI & Data Science', 'Cyber Security', 'IT', 'Robotics', 'ECE', 'Mechanical'],
      duration: '4 Years',
      desc: 'High demand tech programs with top campus placements in TCS, Zoho, Infosys, and Google.'
    },
    {
      degree: 'Medical & Allied Health (MBBS / Nursing)',
      branches: ['MBBS', 'B.Sc Nursing', 'B.Pharm', 'Biomedical Engineering', 'Allied Health Sciences'],
      duration: '4 - 5.5 Years',
      desc: 'Admissions in premier medical colleges and integrated university hospitals.'
    },
    {
      degree: 'Management & Business (MBA / BBA)',
      branches: ['Finance & Banking', 'Digital Marketing', 'Business Analytics', 'Hospital Management', 'HR'],
      duration: '2 - 3 Years',
      desc: 'Develop leadership and strategic business expertise in autonomous institutions.'
    },
    {
      degree: 'Law & Advanced Degrees (M.Tech / Law)',
      branches: ['BA LLB (Hons)', 'BBA LLB (Hons)', 'VLSI Design', 'Advanced Computer Science'],
      duration: '2 - 5 Years',
      desc: 'Specialized postgraduate and legal degrees with top institutional affiliations.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded">
              Academic Streams
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
              Courses & Programs We Cover
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
              From high-demand artificial intelligence engineering to premier medical colleges, we guide you to accredited universities.
            </p>
          </div>

          <Link
            to="/colleges"
            className="self-start md:self-auto inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-blue-600 text-blue-700 hover:bg-blue-50 font-bold text-xs transition-colors"
          >
            <span>Browse All Colleges</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courseCards.map((c, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 hover:border-blue-400 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="font-extrabold text-base sm:text-lg text-slate-900">{c.degree}</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">{c.duration}</span>
                </div>
                <p className="text-xs text-slate-600 mb-4">{c.desc}</p>

                <div className="space-y-1.5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Popular Specializations:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {c.branches.map((b, bIdx) => (
                      <span key={bIdx} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200">
                <Link
                  to="/colleges"
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Explore colleges offering these programs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

