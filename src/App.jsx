import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContact from './components/FloatingContact';
import CollegeDetailModal from './components/CollegeDetailModal';
import EnquiryForm from './components/EnquiryForm';
import HomePage from './pages/HomePage';
import CollegesPage from './pages/CollegesPage';
import CollegeDetailPage from './pages/CollegeDetailPage';
import { X, Sparkles } from 'lucide-react';

function AppContent() {
  const [detailCollege, setDetailCollege] = useState(null);
  const [applyCollege, setApplyCollege] = useState(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change unless hash is present
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const handleOpenDetails = (college) => {
    setDetailCollege(college);
  };

  const handleOpenApply = (college = null) => {
    setApplyCollege(college);
    setIsApplyModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased">
      
      {/* Sticky Header with "Free Admission Guidance" CTA */}
      <Header onOpenApply={handleOpenApply} />

      {/* Main Pages with React Router */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onOpenDetails={handleOpenDetails} 
                onOpenApply={handleOpenApply} 
              />
            } 
          />
          <Route 
            path="/colleges" 
            element={
              <CollegesPage 
                onOpenDetails={handleOpenDetails} 
                onOpenApply={handleOpenApply} 
              />
            } 
          />
          <Route 
            path="/college/:id" 
            element={
              <CollegeDetailPage 
                onOpenApply={handleOpenApply} 
              />
            } 
          />
        </Routes>
      </main>

      {/* Global College Details Modal */}
      {detailCollege && (
        <CollegeDetailModal
          college={detailCollege}
          onClose={() => setDetailCollege(null)}
          onOpenApply={handleOpenApply}
        />
      )}

      {/* Global "Apply / Get Guidance" Modal (Opens from every college card) */}
      {isApplyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[95vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setIsApplyModalOpen(false);
                setApplyCollege(null);
              }}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors"
              aria-label="Close form"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-5 sm:p-6 overflow-y-auto">
              <EnquiryForm
                initialCollege={applyCollege}
                title={applyCollege ? `Admission Guidance for ${applyCollege.name}` : "Free Admission Guidance"}
                subtitle={applyCollege ? "Our admissions coordinator will verify seat vacancies and fees for this institution." : "Fill your details below. Our senior counselor will contact you within 15 minutes."}
                isModal={true}
                onSuccess={() => {}}
              />
            </div>
          </div>
        </div>
      )}

      {/* Floating mobile contact button (WhatsApp / Call / Guidance) */}
      <FloatingContact onOpenApply={handleOpenApply} />

      {/* Footer */}
      <Footer onOpenApply={handleOpenApply} />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
