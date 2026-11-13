import React, { useMemo } from 'react';
import { 
  Search, MapPin, BookOpen, Layers, Filter, RotateCcw, 
  ArrowUpDown, IndianRupee, Building2, SlidersHorizontal 
} from 'lucide-react';
import { 
  getAllDistricts, 
  getAllDegrees, 
  getBranchesForDegree, 
  getAllCollegeTypes 
} from '../data/colleges';

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  selectedDegree,
  setSelectedDegree,
  selectedBranch,
  setSelectedBranch,
  selectedDistrict,
  setSelectedDistrict,
  selectedType,
  setSelectedType,
  maxFee,
  setMaxFee,
  sortBy,
  setSortBy,
  onResetFilters,
  totalResults,
  totalColleges
}) {
  const districts = useMemo(() => ['All Districts', ...getAllDistricts()], []);
  const degrees = useMemo(() => ['All Degrees', ...getAllDegrees()], []);
  const branches = useMemo(() => ['All Branches', ...getBranchesForDegree(selectedDegree === 'All Degrees' ? '' : selectedDegree)], [selectedDegree]);
  const types = useMemo(() => ['All Types', ...getAllCollegeTypes()], []);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs space-y-4">
      
      {/* Search Bar + Live Count + Reset */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
        
        {/* Live Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
          <input
            type="text"
            placeholder="Search by college name, code, or keyword..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-8 py-2 text-xs sm:text-sm font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-colors"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              ✕
            </button>
          )}
        </div>

        {/* Live Count & Reset */}
        <div className="flex items-center justify-between sm:justify-end gap-3 text-xs">
          <span className="font-bold text-slate-700 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-lg">
            Showing <strong className="text-blue-700 font-black">{totalResults}</strong> of {totalColleges} Colleges
          </span>

          <button
            onClick={onResetFilters}
            className="flex items-center gap-1 font-semibold text-slate-600 hover:text-red-600 transition-colors px-2 py-1"
            title="Reset all filters"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>

      </div>

      {/* Filter Dropdowns Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        
        {/* 1. Degree / Course */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Degree / Course</span>
          </label>
          <select
            value={selectedDegree}
            onChange={(e) => {
              setSelectedDegree(e.target.value);
              setSelectedBranch('All Branches'); // Reset branch when degree changes
            }}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {degrees.map((deg, i) => (
              <option key={i} value={deg}>{deg}</option>
            ))}
          </select>
        </div>

        {/* 2. Branch / Specialization */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Branch / Specialization</span>
          </label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {branches.map((br, i) => (
              <option key={i} value={br}>{br}</option>
            ))}
          </select>
        </div>

        {/* 3. District */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>District</span>
          </label>
          <select
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {districts.map((dist, i) => (
              <option key={i} value={dist}>{dist}</option>
            ))}
          </select>
        </div>

        {/* 4. College Type */}
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1 flex items-center gap-1">
            <Building2 className="w-3.5 h-3.5 text-blue-600" />
            <span>College Type</span>
          </label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            {types.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Row 2: Fee Slider & Sort Options */}
      <div className="pt-2 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        
        {/* Maximum Tuition Fee Slider */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="font-semibold text-slate-600 flex items-center gap-1">
              <IndianRupee className="w-3.5 h-3.5 text-blue-600" />
              <span>Max Annual Tuition:</span>
            </span>
            <span className="font-extrabold text-blue-900 bg-blue-50 px-2 py-0.5 rounded">
              ₹{(maxFee).toLocaleString('en-IN')} / yr
            </span>
          </div>
          <input
            type="range"
            min="60000"
            max="450000"
            step="10000"
            value={maxFee}
            onChange={(e) => setMaxFee(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-[10px] font-medium text-slate-400 mt-1">
            <span>₹60,000</span>
            <span>₹2,50,000</span>
            <span>₹4,50,000+</span>
          </div>
        </div>

        {/* Sort Options */}
        <div className="flex items-center justify-start md:justify-end gap-2 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-600">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-slate-50 border border-slate-300 rounded-xl px-3 py-1.5 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="recommended">Recommended</option>
            <option value="feeLowToHigh">Fees: Low to High</option>
            <option value="feeHighToLow">Fees: High to Low</option>
            <option value="cutoff">Highest Cut-off Mark</option>
            <option value="nameAZ">College Name: A – Z</option>
          </select>
        </div>

      </div>

    </div>
  );
}

