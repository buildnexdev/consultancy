import React from 'react';
import { X, Check, ArrowRight, Scale, CheckCircle2, IndianRupee } from 'lucide-react';

export default function CompareDrawer({ 
  comparedColleges, 
  onRemoveCompare, 
  onClearCompare, 
  onOpenApply 
}) {
  if (comparedColleges.length === 0) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white border-t-2 border-blue-600 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto p-4">
        
        {/* Drawer Bar Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-blue-600" />
            <h4 className="font-black text-sm text-slate-800 uppercase tracking-wider">
              Compare Colleges ({comparedColleges.length}/3)
            </h4>
          </div>

          <button
            onClick={onClearCompare}
            className="text-xs font-bold text-slate-500 hover:text-red-600 transition-colors"
          >
            Clear All
          </button>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3">
          {comparedColleges.map((col) => (
            <div 
              key={col.id} 
              className="p-3 bg-slate-50 rounded-xl border border-slate-200 relative flex flex-col justify-between"
            >
              <button
                onClick={() => onRemoveCompare(col.id)}
                className="absolute top-2 right-2 w-6 h-6 rounded-full bg-slate-200 hover:bg-red-100 hover:text-red-700 text-slate-600 flex items-center justify-center transition-colors text-xs"
              >
                ✕
              </button>

              <div>
                <span className="text-[10px] font-bold uppercase text-blue-600 block mb-0.5">
                  {col.type} • {col.location.city}
                </span>
                <h5 className="font-bold text-xs sm:text-sm text-slate-800 line-clamp-1 pr-6">
                  {col.name}
                </h5>

                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-slate-200 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Annual Fee</span>
                    <strong className="text-blue-900">₹{(col.annualFee / 1000).toFixed(0)}k</strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-semibold">Avg / High CTC</span>
                    <strong className="text-emerald-700">{col.averagePackage}</strong>
                  </div>
                </div>
              </div>

              <div className="mt-3">
                <button
                  onClick={() => onOpenApply(col)}
                  className="w-full py-1.5 px-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Apply Here
                </button>
              </div>
            </div>
          ))}

          {/* Placeholders if fewer than 3 */}
          {Array.from({ length: 3 - comparedColleges.length }).map((_, i) => (
            <div 
              key={`empty-${i}`} 
              className="hidden md:flex flex-col items-center justify-center p-4 rounded-xl border-2 border-dashed border-slate-200 text-slate-400 text-xs text-center"
            >
              <Scale className="w-5 h-5 mb-1 opacity-50" />
              <span>Select another college to compare</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

