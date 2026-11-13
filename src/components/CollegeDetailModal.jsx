import React from 'react';
import { 
  X, MapPin, Award, Building2, CheckCircle2, IndianRupee, 
  TrendingUp, Calendar, BookOpen, Layers, Shield, Send 
} from 'lucide-react';

export default function CollegeDetailModal({ college, onClose, onOpenApply }) {
  if (!college) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Photo & Basic Info */}
        <div className="relative bg-blue-900 text-white p-5 sm:p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white p-1 overflow-hidden flex-shrink-0 shadow-md">
              <img 
                src={college.image} 
                alt={college.name} 
                className="w-full h-full object-cover rounded-lg"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80';
                }}
              />
            </div>

            <div className="space-y-1 pr-6">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-400 text-slate-950">
                  {college.type}
                </span>
                {college.code && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-700 text-white">
                    Code: {college.code}
                  </span>
                )}
                {college.naac && (
                  <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-600 text-white">
                    NAAC {college.naac}
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
                {college.name}
              </h2>

              <p className="text-xs text-blue-200 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-300" />
                <span>{college.address}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
          
          {/* Highlights */}
          {college.highlights && (
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                About the College
              </h4>
              <p className="text-xs sm:text-sm text-blue-800 leading-relaxed">
                {college.highlights}
              </p>
            </div>
          )}

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Tuition Fee</span>
              <strong className="text-sm sm:text-base font-black text-blue-900">
                {college.fees?.display || `₹${college.fees?.min?.toLocaleString('en-IN')}`}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Cut-Off Mark</span>
              <strong className="text-sm sm:text-base font-black text-amber-700">
                {college.cutoff?.display || '150+'}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Average Package</span>
              <strong className="text-sm sm:text-base font-black text-emerald-700">
                {college.placement?.averagePackage || '5.5 LPA'}
              </strong>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl">
              <span className="text-[10px] font-bold uppercase text-slate-400 block">Highest Package</span>
              <strong className="text-sm sm:text-base font-black text-purple-700">
                {college.placement?.highestPackage || '20.0 LPA'}
              </strong>
            </div>
          </div>

          {/* All Courses & Branches */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Available Degrees & Branch Matrix</span>
            </h4>

            <div className="space-y-4">
              {college.courses?.map((crs, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <span className="text-xs font-bold text-blue-900 bg-blue-100 px-2.5 py-1 rounded inline-block mb-2">
                    {crs.degree}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                    {crs.branches?.map((branch, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 bg-white p-2 rounded-lg border border-slate-200/80">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                        <span className="font-medium">{branch}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Recruiters */}
          {college.placement?.recruiters && (
            <div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span>Key Campus Recruiters</span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {college.placement.recruiters.map((r, i) => (
                  <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                    🏢 {r}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Facilities */}
          {college.facilities && (
            <div>
              <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-2">
                Campus Infrastructure & Amenities
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {college.facilities.map((fac, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600 p-2 rounded-lg bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="text-xs text-slate-500">
            Need guidance for {college.name}?
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs hover:bg-slate-100 transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenApply(college);
              }}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm transition-colors shadow-xs flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span>Get Free Guidance For This College</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
