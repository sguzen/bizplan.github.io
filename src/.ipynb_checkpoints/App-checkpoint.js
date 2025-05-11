import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FinancialAssessment from './components/financial_assessment';
import MarketAnalysis from './components/four_steps';
import RecoveryPlan from './components/recovery_plan';
import RiskManagementCalculator from './components/risk_management';
import TradingSystems from './components/trading_systems.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-assessment" element={<FinancialAssessment />} />
          <Route path="/four-steps" element={<MarketAnalysis />} />
          <Route path="/recovery-plan" element={<RecoveryPlan />} />
        <Route path="/risk-management" element={<RiskManagementCalculator />} />
        <Route path="/daily-profiler" element={<TradingSystems />} />
        </Routes>
      </div>
    </Router>
  );
}

// Create a Home component that renders your index page
function Home() {
  return (
    <div>
      <div className="intro">
        <p>Something motivational</p>
      </div>

      <div className="section">
        <h2>Tools</h2>
        <ul>
          <li>
            <strong><Link to="/financial-assessment">Financial Assessment</Link></strong>
            <span className="tag">tag</span>
            <p>Tool for identifying the <i>WHY</i>.</p>
          </li>
          <li>
            <strong><Link to="/risk-management">Risk Management and Position Size Calculator</Link></strong>
            <span className="tag">tag</span>
          </li>
      <li>
            <strong><Link to="/recovery-plan">Recovery Plan</Link></strong>
            <span className="tag">tag</span>
          </li>
        </ul>
      </div>
            
      <div className="section">
        <h2>Market Analysis Tools</h2>
        {/* Use Link components from React Router instead of <a> tags */}
        <ul>
          <li>
            <Link to="/four-steps">Daily Profiler</Link>
            <span className="tag">Analysis</span>
          </li>
          <li>
            <Link to="/daily-profiler">Trading Systems</Link>
            <span className="tag">Analysis</span>
          </li>
        </ul>
      </div>
      
      {/* More sections... */}
    </div>
  );
}

export default App;