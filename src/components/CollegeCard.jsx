import React from 'react';
import { MapPin, Award, Building2, Send, FileText, CheckCircle2 } from 'lucide-react';

export default function CollegeCard({
  college,
  onOpenDetails,
  onOpenApply
}) {
  // Extract top branches from courses
  const topBranches = college.courses?.flatMap(c => c.branches) || [];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col justify-between group">
      
      {/* Top Banner & Info */}
      <div>
        <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
          <img 
            src={college.image} 
            alt={college.name} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              // Fallback placeholder image
              e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-transparent to-transparent"></div>

          {/* Badges on Top */}
          <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 items-center">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-blue-700 text-white shadow-xs">
              {college.type}
            </span>
            {college.code && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-amber-400 text-slate-950 shadow-xs">
                Code: {college.code}
              </span>
            )}
            {college.naac && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-emerald-600 text-white shadow-xs">
                NAAC {college.naac}
              </span>
            )}
          </div>

          {/* District label in overlay */}
          <div className="absolute bottom-2.5 left-3 right-3 text-white">
            <div className="flex items-center gap-1 text-xs text-amber-300 font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>{college.district} District</span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 space-y-3">
          
          <div>
            <h3 className="font-bold text-base text-slate-900 leading-snug line-clamp-2 group-hover:text-blue-700 transition-colors">
              {college.name}
            </h3>
            <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
              {college.address}
            </p>
          </div>

          {/* Fee & Cut-off Box */}
          <div className="grid grid-cols-2 gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Tuition Fee</span>
              <div className="font-extrabold text-blue-900">
                {college.fees?.display || `₹${college.fees?.min?.toLocaleString('en-IN')}`}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-0.5">Cut-Off Mark</span>
              <div className="font-extrabold text-amber-700">
                {college.cutoff?.display || '150+ / 200'}
              </div>
            </div>
          </div>

          {/* Placement Highlight */}
          {college.placement && (
            <div className="flex items-center justify-between text-xs py-1 border-t border-b border-slate-100">
              <span className="text-slate-500 text-[11px]">Placement CTC:</span>
              <div className="font-bold text-slate-800">
                <span className="text-emerald-700">{college.placement.averagePackage}</span>
                <span className="text-slate-400 text-[10px] font-normal"> (Highest: {college.placement.highestPackage})</span>
              </div>
            </div>
          )}

          {/* Top Courses Offered */}
          <div>
            <span className="text-[11px] font-semibold text-slate-500 block mb-1">
              Key Programs:
            </span>
            <div className="flex flex-wrap gap-1">
              {topBranches.slice(0, 3).map((branch, idx) => (
                <span key={idx} className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-50 text-blue-800 border border-blue-100">
                  {branch}
                </span>
              ))}
              {topBranches.length > 3 && (
                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                  +{topBranches.length - 3} more
                </span>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Two Buttons: View Details & Apply / Get Guidance */}
      <div className="p-4 pt-0">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenDetails(college)}
            className="w-full py-2 px-3 rounded-xl border border-slate-300 hover:border-blue-600 hover:text-blue-700 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Details</span>
          </button>

          <button
            onClick={() => onOpenApply(college)}
            className="w-full py-2 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Apply / Guidance</span>
          </button>
        </div>
      </div>

    </div>
  );
}
