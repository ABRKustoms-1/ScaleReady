import { useState } from "react";
import { ROADMAP_STEPS, DOCUMENTS, FUNDING_PROGRAMS } from "../constants/data";

export default function Dashboard({ onGetStarted }) {
  const [activeTab, setActiveTab] = useState('roadmap');
  const [completedSteps, setCompletedSteps] = useState([0, 1]); // Mock progress

  const tabs = [
    { id: 'roadmap', label: '🗺️ Roadmap' },
    { id: 'vault', label: '📁 Document Vault' },
    { id: 'funding', label: '💰 Funding' },
    { id: 'compliance', label: '🔔 Compliance' },
  ];

  // Mock compliance data for the dashboard
  const complianceItems = [
    { title: "GST/HST Registration", due: "Mar 25, 2026", days: 18, color: "orange" },
    { title: "AGCO Liquor Licence Renewal", due: "Mar 12, 2026", days: 5, color: "red" },
  ];

  return (
    <div className="dashboard-container">
      {/* 1. Header with Stats */}
      <header className="dash-header">
        <div>
          <h1>Welcome back, <span className="grad-text">Amir</span> 👋</h1>
          <div className="dash-badges">
            <span className="badge-blue">Pita Palace Inc.</span>
            <span className="badge-gray">Ontario · Food & Beverage</span>
          </div>
        </div>
        <div className="dash-stats">
          <div className="stat-card">
            <div className="stat-val">$47,500</div>
            <div className="stat-lab">GRANTS AVAILABLE</div>
          </div>
        </div>
      </header>

      {/* 2. Urgent Alert */}
      <div className="dash-alert animate-fade-in">
        <span>🚨</span>
        <p><strong>Liquor Licence Renewal</strong> due in 5 days — <button className="btn-link">Act Now</button></p>
      </div>

      {/* 3. Tab Navigation */}
      <nav className="dash-tabs">
        {tabs.map(t => (
          <button 
            key={t.id} 
            className={`tab-btn ${activeTab === t.id ? 'active' : ''}`}
            onClick={() => setActiveTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </nav>

      {/* 4. Tab Content Logic */}
      <div className="tab-content">
        {activeTab === 'roadmap' && (
          <div className="roadmap-list card-white">
            <div className="list-header">
              <h3>My Business Roadmap</h3>
              <span>{completedSteps.length} of {ROADMAP_STEPS.length} complete</span>
            </div>
            <div className="roadmap-grid">
            {ROADMAP_STEPS.map((step, i) => (
              <div key={i} className="dash-row">
                <div className={`status-dot ${completedSteps.includes(i) ? 'done' : 'todo'}`} />
                <div className="row-info">
                  <div className={`row-title ${completedSteps.includes(i) ? 'strike' : ''}`}>{step.title}</div>
                  <div className="row-meta">{step.level} · {step.cost}</div>
                </div>
                {!completedSteps.includes(i) && <button className="btn-primary-xs">Mark Done</button>}
              </div>
            ))}
            </div>
          </div>
        )}

        {activeTab === 'vault' && (
          <div className="vault-grid">
            {DOCUMENTS.map((doc, i) => (
              <div key={i} className="doc-card">
                <span className="doc-icon">{doc.icon}</span>
                <div className="doc-info">
                  <div className="doc-name">{doc.name}</div>
                  <div className={`doc-status ${doc.status}`}>{doc.status}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ... Similar logic for Funding and Compliance tabs ... */}
      </div>
    </div>
  );
}
