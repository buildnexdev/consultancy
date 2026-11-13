import React, { useState, useMemo } from 'react';
import FilterBar from '../components/FilterBar';
import CollegeCard from '../components/CollegeCard';
import { COLLEGES_DATA } from '../data/colleges';
import { HelpCircle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

export default function CollegesPage({ onOpenDetails, onOpenApply }) {
  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('All Degrees');
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const [selectedDistrict, setSelectedDistrict] = useState('All Districts');
  const [selectedType, setSelectedType] = useState('All Types');
  const [maxFee, setMaxFee] = useState(450000);
  const [sortBy, setSortBy] = useState('recommended');

  // Pagination State (12 colleges per page as requested)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Reset Filters
  const handleResetFilters = () => {
    setSearchTerm('');
    setSelectedDegree('All Degrees');
    setSelectedBranch('All Branches');
    setSelectedDistrict('All Districts');
    setSelectedType('All Types');
    setMaxFee(450000);
    setSortBy('recommended');
    setCurrentPage(1);
  };

  // Filter and Sort Colleges
  const filteredColleges = useMemo(() => {
    return COLLEGES_DATA.filter((col) => {
      // 1. Search term (matches name, code, district, address, recruiters)
      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        const matchesName = col.name.toLowerCase().includes(term);
        const matchesCode = (col.code || '').toLowerCase().includes(term);
        const matchesDistrict = (col.district || '').toLowerCase().includes(term);
        const matchesBranch = col.courses?.some(c => 
          c.branches?.some(b => b.toLowerCase().includes(term))
        );
        const matchesRecruiters = col.placement?.recruiters?.some(r => r.toLowerCase().includes(term));
        if (!matchesName && !matchesCode && !matchesDistrict && !matchesBranch && !matchesRecruiters) {
          return false;
        }
      }

      // 2. Degree filter
      if (selectedDegree !== 'All Degrees') {
        const matchesDegree = col.courses?.some(c => c.degree.toLowerCase() === selectedDegree.toLowerCase());
        if (!matchesDegree) return false;
      }

      // 3. Branch filter
      if (selectedBranch !== 'All Branches') {
        const matchesBranch = col.courses?.some(c => 
          c.branches?.some(b => b.toLowerCase().includes(selectedBranch.toLowerCase()))
        );
        if (!matchesBranch) return false;
      }

      // 4. District filter
      if (selectedDistrict !== 'All Districts') {
        if (col.district.toLowerCase() !== selectedDistrict.toLowerCase()) {
          return false;
        }
      }

      // 5. College Type filter
      if (selectedType !== 'All Types') {
        if (col.type.toLowerCase() !== selectedType.toLowerCase()) {
          return false;
        }
      }

      // 6. Max Fee filter
      if (col.fees?.min && col.fees.min > maxFee) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'feeLowToHigh') {
        return (a.fees?.min || 0) - (b.fees?.min || 0);
      }
      if (sortBy === 'feeHighToLow') {
        return (b.fees?.min || 0) - (a.fees?.min || 0);
      }
      if (sortBy === 'cutoff') {
        return (b.cutoff?.max || 0) - (a.cutoff?.max || 0);
      }
      if (sortBy === 'nameAZ') {
        return a.name.localeCompare(b.name);
      }
      return 0; // Default recommended
    });
  }, [
    searchTerm,
    selectedDegree,
    selectedBranch,
    selectedDistrict,
    selectedType,
    maxFee,
    sortBy
  ]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredColleges.length / itemsPerPage) || 1;
  const paginatedColleges = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredColleges.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredColleges, currentPage]);

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Page Header */}
        <div className="space-y-1">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Explore All Approved Colleges & Courses
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Search, filter, and compare cut-offs, fees, and placements for all {COLLEGES_DATA.length} colleges across Tamil Nadu and South India.
          </p>
        </div>

        {/* FilterBar Component */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={(term) => { setSearchTerm(term); setCurrentPage(1); }}
          selectedDegree={selectedDegree}
          setSelectedDegree={(deg) => { setSelectedDegree(deg); setCurrentPage(1); }}
          selectedBranch={selectedBranch}
          setSelectedBranch={(br) => { setSelectedBranch(br); setCurrentPage(1); }}
          selectedDistrict={selectedDistrict}
          setSelectedDistrict={(dist) => { setSelectedDistrict(dist); setCurrentPage(1); }}
          selectedType={selectedType}
          setSelectedType={(t) => { setSelectedType(t); setCurrentPage(1); }}
          maxFee={maxFee}
          setMaxFee={(fee) => { setMaxFee(fee); setCurrentPage(1); }}
          sortBy={sortBy}
          setSortBy={setSortBy}
          onResetFilters={handleResetFilters}
          totalResults={filteredColleges.length}
          totalColleges={COLLEGES_DATA.length}
        />

        {/* Responsive College Grid (3 columns desktop, 2 tablet, 1 mobile) */}
        {paginatedColleges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedColleges.map((college) => (
              <CollegeCard
                key={college.id}
                college={college}
                onOpenDetails={onOpenDetails}
                onOpenApply={onOpenApply}
              />
            ))}
          </div>
        ) : (
          /* Friendly Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-10 text-center space-y-4 max-w-lg mx-auto my-8">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              No Colleges Match Your Current Filter
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We couldn't find any college matching the selected branch, fee, or district. Try resetting your filters to explore all available colleges.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}

        {/* Pagination Bar (12 per page) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between bg-white px-4 py-3 rounded-xl border border-slate-200 shadow-xs text-xs font-semibold">
            <span className="text-slate-500">
              Page {currentPage} of {totalPages} ({filteredColleges.length} Colleges)
            </span>

            <div className="flex items-center gap-1.5">
              <button
                disabled={currentPage === 1}
                onClick={() => {
                  setCurrentPage(prev => Math.max(prev - 1, 1));
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentPage(i + 1);
                    window.scrollTo({ top: 120, behavior: 'smooth' });
                  }}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-colors ${
                    currentPage === i + 1
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => {
                  setCurrentPage(prev => Math.min(prev + 1, totalPages));
                  window.scrollTo({ top: 120, behavior: 'smooth' });
                }}
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

