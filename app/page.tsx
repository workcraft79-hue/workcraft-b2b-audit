'use client';

import React from 'react';

function SampleDeliverableModal() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '40px auto',
      padding: '30px',
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: '15px' }}>
        <h2 style={{ margin: 0, color: '#111827', fontSize: '24px' }}>Workcraft B2B Audit - Deliverable Report</h2>
        <span style={{ backgroundColor: '#e0f2fe', color: '#0369a1', padding: '4px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold' }}>
          Sample Deliverable
        </span>
      </div>

      <div style={{ marginTop: '20px', color: '#374151', lineHeight: '1.6' }}>
        <h3>1. Executive Summary</h3>
        <p>This sample deliverable illustrates the core operational audit structure designed for high-conversion B2B client acquisition systems.</p>
        
        <h3>2. Core Audit Deliverables</h3>
        <ul>
          <li><strong>System Architecture:</strong> Evaluation of high-converting lead capture interfaces.</li>
          <li><strong>Process Automation:</strong> Seamless routing between frontend forms and CRM systems.</li>
          <li><strong>Performance Optimization:</strong> Lightning-fast delivery via Vercel edge deployment.</li>
        </ul>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#f9fafb', padding: '20px' }}>
      <SampleDeliverableModal />
    </main>
  );
}
