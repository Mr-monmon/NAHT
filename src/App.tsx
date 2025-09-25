import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import NonSpecialistsBanner from './components/NonSpecialistsBanner';
import WhyNAHT from './components/WhyNAHT';
import Programs from './components/Programs';
import NonSpecialistsCourse from './components/NonSpecialistsCourse';
import PricingTable from './components/PricingTable';
import WhatYouLearn from './components/WhatYouLearn';
import EnrollmentProcess from './components/EnrollmentProcess';
import FAQ from './components/FAQ';
import TargetAudience from './components/TargetAudience';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';
import NonSpecialistsPage from './pages/NonSpecialistsPage';

function App() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const location = useLocation();

  // Reset registration form when navigating
  useEffect(() => {
    if (location.pathname === '/') {
      setShowRegistrationForm(false);
    }
  }, [location.pathname]);

  if (showRegistrationForm) {
    return <RegistrationForm onBackToHome={() => setShowRegistrationForm(false)} />;
  }

  return (
    <Routes>
      <Route path="/non-specialists" element={<NonSpecialistsPage />} />
      <Route path="/register" element={<RegistrationForm onBackToHome={() => window.location.href = '/'} />} />
      <Route path="/*" element={
        <div className="min-h-screen bg-gray-50 font-cairo">
          <Header />
          <Hero onRegisterClick={() => setShowRegistrationForm(true)} />
          <NonSpecialistsBanner />
          <WhyNAHT />
          <Programs onRegisterClick={() => setShowRegistrationForm(true)} />
          <PricingTable />
          <WhatYouLearn />
          <EnrollmentProcess onRegisterClick={() => setShowRegistrationForm(true)} />
          <TargetAudience />
          <FAQ />
          <Footer onRegisterClick={() => setShowRegistrationForm(true)} />
        </div>
      } />
    </Routes>
  );
}

export default App;