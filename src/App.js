import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FinancialAssessment from './components/financial_assessment';
import MarketAnalysis from './components/four_steps';
import RecoveryPlan from './components/recovery_plan';
import RiskManagementCalculator from './components/risk_management';
import TradingSystems from './components/trading_systems';
import TradingPerformanceTracker from './components/performance_tracker';

function App() {
  // This will be "/bizplan.github.io" in production and "/" in development
  const basename = process.env.PUBLIC_URL;
  
  return (
    <Router basename={basename}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/financial-assessment" element={<FinancialAssessment />} />
          <Route path="/four-steps" element={<MarketAnalysis />} />
          <Route path="/recovery-plan" element={<RecoveryPlan />} />
          <Route path="/risk-management" element={<RiskManagementCalculator />} />
          <Route path="/daily-profiler" element={<TradingSystems />} />
          <Route path="/performance-tracker" element={<TradingPerformanceTracker />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <div className="intro">
        <p>Believe in yourself and remember that this is a marathon, not a sprint!</p>
      </div>

      <div className="section">
        <h2>Tools</h2>
        <ul>
          <li>
            <strong><Link to="/financial-assessment">Financial Assessment</Link></strong>
            <span className="tag">Tool</span>
            <p>Identifying the <i>WHY</i>.</p>
          </li>
          <li>
            <strong><Link to="/risk-management">Risk Management and Position Size Calculator</Link></strong>
              <span className="tag">Tool</span>
              <p>How to position</p>    
          </li>
      
      <li>
            <strong><Link to="/recovery-plan">Recovery Plan</Link></strong>
            <span className="tag">Tool</span>
      <p>Losses are inevitable. How to recover.</p>
          </li>
        </ul>
      </div>
            
      <div className="section">
        <h2>Game on</h2>
        <ul>
          <li>
            <strong><Link to="/four-steps">Market Analysis</Link></strong>
            <span className="tag">Analysis</span>
          <p>4 steps + p12</p>
          </li>
          <li>
           <strong> <Link to="/daily-profiler">Trading Systems</Link></strong>
            <span className="tag">Analysis</span>
          <p>The game</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;