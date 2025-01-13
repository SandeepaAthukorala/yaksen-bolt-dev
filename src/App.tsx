import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import HomePage from './pages/HomePage';
import BlogPage from './pages/blog/BlogPage';
import ProjectPage from './pages/ProjectPage';
import ServicePage from './pages/ServicePage';
import TeamMemberPage from './pages/team/TeamMemberPage';
import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsConditions from './pages/policies/TermsConditions';
import RefundPolicy from './pages/policies/RefundPolicy';
import HelpCenter from './pages/support/HelpCenter';
import FAQ from './pages/support/FAQ';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
          <Route path="/services/:id" element={<ServicePage />} />
          <Route path="/team/:id" element={<TeamMemberPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
