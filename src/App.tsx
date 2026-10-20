/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header, PageRoute } from './components/Header';
import { PageHome } from './components/PageHome';
import { InteractiveWorkflowGraph } from './components/InteractiveWorkflowGraph';
import { WorkflowComparison } from './components/WorkflowComparison';
import { SampleAuditSection } from './components/SampleAuditSection';
import { PageServicesProcess } from './components/PageServicesProcess';
import { SecurityGovernance } from './components/SecurityGovernance';
import { FounderSection } from './components/FounderSection';
import { PageAboutTrust } from './components/PageAboutTrust';
import { FAQ } from './components/FAQ';
import { PageContact } from './components/PageContact';
import { Footer } from './components/Footer';
import { DemoModal, LinkedInModal, ServiceModal } from './components/Modals';
import { VideoModal } from './components/VideoModal';
import { SampleDeliverableModal } from './components/SampleDeliverableModal';
import { ToolsStrip } from './components/ToolsStrip';
import { LegalModal } from './components/LegalModal';
import { ServiceItem } from './types';
import { ArrowLeft } from 'lucide-react';

export default function App() {
  // Page routing state: 'home' | 'services' | 'about' | 'contact'
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');

  // Modal states
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [linkedInModalOpen, setLinkedInModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [sampleDeliverableOpen, setSampleDeliverableOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [preselectedServiceTitle, setPreselectedServiceTitle] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Contact form topic tracking
  const [contactTopic, setContactTopic] = useState<string>('General inquiry');

  // Active section tracking for header navigation
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (currentPage !== 'home') return;

    const handleScroll = () => {
      const sections = [
        'home', 
        'workflow-architecture', 
        'workflow-comparison', 
        'sample-audit',
        'services', 
        'process', 
        'security-governance', 
        'about-preview',
        'faq', 
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const handleOpenDemo = (serviceName?: string) => {
    setPreselectedServiceTitle(serviceName);
    setDemoModalOpen(true);
  };

  const scrollToContact = (topic?: string) => {
    if (topic && typeof topic === 'string') {
      setContactTopic(topic);
    }
    if (currentPage !== 'home') {
      returnToHomeSection('contact', topic);
    } else {
      const el = document.getElementById('contact');
      if (el) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const returnToHomeSection = (sectionId: string = 'about-preview', topic?: string) => {
    if (topic && typeof topic === 'string') {
      setContactTopic(topic);
    }
    setCurrentPage('home');
    setTimeout(() => {
      const el = document.getElementById(sectionId) || document.getElementById('about');
      if (el) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <div className="min-h-screen bg-[#0A1420] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-[#00E5FF]">
      {/* Header with Navigation for 4 Core Pages & Mobile Drawer */}
      <Header
        activeSection={activeSection}
        currentPage={currentPage}
        onNavigatePage={(page) => {
          if (page === 'home' && currentPage === 'about') {
            returnToHomeSection('about-preview');
          } else if (page === 'home' && currentPage === 'services') {
            returnToHomeSection('services');
          } else if (page === 'home' && currentPage === 'contact') {
            returnToHomeSection('contact');
          } else {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
        onOpenGetStarted={scrollToContact}
      />

      <main>
        {/* ========================================================================= */}
        {/* PAGE A — HOME (Exact 9-Section Sequence Required by Non-Negotiable Spec) */}
        {/* ========================================================================= */}
        {currentPage === 'home' && (
          <>
            {/* SECTION 01 — HERO + DEMO ACCESS */}
            <PageHome
              onDiscussWorkflow={() => scrollToContact('Workflow Architecture')}
              onOpenVideoDemo={() => setVideoModalOpen(true)}
              onOpenSampleDeliverable={() => setSampleDeliverableOpen(true)}
            />

            {/* SECTION 02 — INTERACTIVE LEAD → CLIENT WORKFLOW (Moved higher up) */}
            <InteractiveWorkflowGraph
              onOpenAssessmentRequest={(context) => scrollToContact(context)}
            />

            {/* SECTION 03 — TOOLS STRIP (Commonly connected tools, scoped per project) */}
            <ToolsStrip />

            {/* SECTION 04 — BEFORE → AFTER TRANSFORMATION */}
            <WorkflowComparison
              onOpenAssessmentRequest={(context) => scrollToContact(context)}
            />

            {/* SECTION 05 — THE 5-DAY WORKFLOW AUDIT */}
            <SampleAuditSection
              onOpenSampleModal={() => setSampleDeliverableOpen(true)}
              onDiscussAudit={() => scrollToContact('5-Day Diagnostic Audit')}
            />

            {/* SECTION 06 — SERVICES + SEVEN-STAGE METHOD */}
            <PageServicesProcess
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={(serviceName) => scrollToContact(`Service Scope: ${serviceName}`)}
              onOpenVideoDemo={() => setVideoModalOpen(true)}
            />

            {/* SECTION 07 — TRUST, GOVERNANCE & HUMAN OVERSIGHT */}
            <SecurityGovernance
              onOpenBoundaryInquiry={(context) => scrollToContact(context || 'Governance & Boundary Scope')}
            />

            {/* SECTION 08 — FOUNDER INTRODUCTION */}
            <FounderSection
              onNavigateToAbout={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* SECTION 09 — FREQUENTLY ASKED QUESTIONS */}
            <FAQ
              onOpenInquiry={() => scrollToContact('General inquiry')}
            />

            {/* SECTION 10 — FINAL CONTACT CTA */}
            <PageContact
              topic={contactTopic}
              onOpenLinkedInModal={() => setLinkedInModalOpen(true)}
              onOpenSampleDeliverable={() => setSampleDeliverableOpen(true)}
            />
          </>
        )}

        {/* ========================================================================= */}
        {/* PAGE B — SERVICES & PROCESS (Dedicated Deep-Dive View)                    */}
        {/* ========================================================================= */}
        {currentPage === 'services' && (
          <div className="pt-24 sm:pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                type="button"
                onClick={() => returnToHomeSection('services')}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00E5FF] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Homepage (Services Section)</span>
              </button>
            </div>
            <PageServicesProcess
              onSelectService={(service) => setSelectedService(service)}
              onOpenBooking={(serviceName) => scrollToContact(`Service Scope: ${serviceName}`)}
              onOpenVideoDemo={() => setVideoModalOpen(true)}
              isStandalonePage={true}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* PAGE C — ABOUT & TRUST (Dedicated Founder & Governance View)              */}
        {/* ========================================================================= */}
        {currentPage === 'about' && (
          <div className="pt-24 sm:pt-28 pb-16">
            <PageAboutTrust
              onOpenBooking={() => scrollToContact('Founder Operational Review')}
              onReturnToHome={() => returnToHomeSection('about-preview')}
              isStandalonePage={true}
            />
          </div>
        )}

        {/* ========================================================================= */}
        {/* PAGE D — CONTACT (Dedicated Inquiry View)                                 */}
        {/* ========================================================================= */}
        {currentPage === 'contact' && (
          <div className="pt-24 sm:pt-28 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
              <button
                type="button"
                onClick={() => returnToHomeSection('contact')}
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00E5FF] transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Homepage (Contact Section)</span>
              </button>
            </div>
            <PageContact
              topic={contactTopic}
              onOpenLinkedInModal={() => setLinkedInModalOpen(true)}
              onOpenSampleDeliverable={() => setSampleDeliverableOpen(true)}
            />
          </div>
        )}
      </main>

      {/* Footer with Logo, Navigation Links, Socials & Modals */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenFAQ={() => {
          if (currentPage !== 'home') {
            setCurrentPage('home');
          }
          setTimeout(() => {
            document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />


      {/* Popups & Modals */}
      <DemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        preselectedService={preselectedServiceTitle}
      />

      {/* Sample Deliverable & Architecture Blueprint Modal */}
      <SampleDeliverableModal
        isOpen={sampleDeliverableOpen}
        onClose={() => setSampleDeliverableOpen(false)}
        onSelectAudit={() => {
          setSampleDeliverableOpen(false);
          scrollToContact('5-Day Diagnostic Audit Specimen');
        }}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      {/* LinkedIn Modal */}
      <LinkedInModal
        isOpen={linkedInModalOpen}
        onClose={() => setLinkedInModalOpen(false)}
      />

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookScope={(title) => {
          setSelectedService(null);
          scrollToContact(`Service Scope: ${title}`);
        }}
      />

      {/* Legal Modal (Privacy & Terms) */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
