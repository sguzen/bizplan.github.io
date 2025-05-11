import React, { useState } from 'react';

const TradingPerformanceTracker = () => {
  const [activeTab, setActiveTab] = useState('daily');
  
  // State for daily journal entry form
  const [journalEntry, setJournalEntry] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '',
    symbol: '',
    system: '',
    entry: '',
    stop: '',
    target: '',
    marketConditions: '',
    executionQuality: '3',
    psychologicalState: '',
    outcome: '',
    pnl: '',
    lessonsLearned: ''
  });

  // State for daily metrics
  const [dailyMetrics, setDailyMetrics] = useState({
    winCount: '',
    lossCount: '',
    dailyPnL: '',
    dailyGoal: '',
    maxDrawdown: '',
    recoveryEffectiveness: '3'
  });

  // State for weekly metrics
  const [weeklyMetrics, setWeeklyMetrics] = useState({
    weekStartDate: '',
    systemPerformance: {},
    winRateByCondition: {},
    avgWin: '',
    avgLoss: '',
    expectancy: '',
    improvementAreas: ''
  });

  // Handle journal entry form changes
  const handleJournalChange = (e) => {
    const { name, value } = e.target;
    setJournalEntry({
      ...journalEntry,
      [name]: value
    });
  };

  // Handle daily metrics form changes
  const handleDailyMetricsChange = (e) => {
    const { name, value } = e.target;
    setDailyMetrics({
      ...dailyMetrics,
      [name]: value
    });
  };

  // Save journal entry
  const saveJournalEntry = () => {
    // In a real app, this would save to a database or local storage
    alert('Journal entry saved!');
    console.log('Journal entry saved:', journalEntry);
  };

  // Save daily metrics
  const saveDailyMetrics = () => {
    // In a real app, this would save to a database or local storage
    alert('Daily metrics saved!');
    console.log('Daily metrics saved:', dailyMetrics);
  };

  // Calculate win rate
  const calculateWinRate = () => {
    const wins = parseInt(dailyMetrics.winCount) || 0;
    const losses = parseInt(dailyMetrics.lossCount) || 0;
    const total = wins + losses;
    
    if (total === 0) return 'N/A';
    return `${((wins / total) * 100).toFixed(1)}%`;
  };

  // Calculate profit factor
  const calculateProfitFactor = () => {
    const pnl = parseFloat(dailyMetrics.dailyPnL) || 0;
    const goal = parseFloat(dailyMetrics.dailyGoal) || 0;
    
    if (goal === 0) return 'N/A';
    return (pnl / goal).toFixed(2);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-purple-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">TRADING PERFORMANCE TRACKER</h1>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('daily')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'daily'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              DAILY JOURNAL
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'metrics'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              DAILY METRICS
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'weekly'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              WEEKLY REVIEW
            </button>
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'monthly'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              MONTHLY REVIEW
            </button>
            <button
              onClick={() => setActiveTab('quarterly')}
              className={`px-4 py-2 font-medium text-sm ${
                activeTab === 'quarterly'
                  ? 'border-b-2 border-purple-500 text-purple-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              QUARTERLY PLAN
            </button>
          </div>
          
          <div className="p-6">
            {/* Daily Journal Tab */}
            {activeTab === 'daily' && (
              <div>
                <div className="bg-purple-100 p-3 rounded-t-lg border-l-4 border-purple-600 mb-4">
                  <h2 className="text-xl font-bold text-purple-800">DAILY TRADING JOURNAL</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                      <input
                        type="date"
                        name="date"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={journalEntry.date}
                        onChange={handleJournalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                      <input
                        type="time"
                        name="time"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={journalEntry.time}
                        onChange={handleJournalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
                      <input
                        type="text"
                        name="symbol"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., NQ, ES, MNQ"
                        value={journalEntry.symbol}
                        onChange={handleJournalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">System Used</label>
                      <select
                        name="system"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={journalEntry.system}
                        onChange={handleJournalChange}
                      >
                        <option value="">Select system...</option>
                        <option value="9:30 Trade">9:30 Trade</option>
                        <option value="P12">P12</option>
                        <option value="High/Low Day">High/Low Day</option>
                        <option value="Captain Back Test">Captain Back Test</option>
                        <option value="Hourly Quarters">Hourly Quarters</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Entry Price</label>
                      <input
                        type="text"
                        name="entry"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., 18500"
                        value={journalEntry.entry}
                        onChange={handleJournalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Stop Price</label>
                      <input
                        type="text"
                        name="stop"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., 18450"
                        value={journalEntry.stop}
                        onChange={handleJournalChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Target Price</label>
                      <input
                        type="text"
                        name="target"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="e.g., 18550"
                        value={journalEntry.target}
                        onChange={handleJournalChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Market Conditions & Triggers</label>
                      <textarea
                        name="marketConditions"
                        rows="2"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="Describe market conditions and what triggered your entry..."
                        value={journalEntry.marketConditions}
                        onChange={handleJournalChange}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Execution Quality (1-5)</label>
                      <input
                        type="range"
                        name="executionQuality"
                        min="1"
                        max="5"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        value={journalEntry.executionQuality}
                        onChange={handleJournalChange}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Poor</span>
                        <span>Average</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Psychological State</label>
                      <textarea
                        name="psychologicalState"
                        rows="2"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="How were you feeling during this trade? Any emotional influences?"
                        value={journalEntry.psychologicalState}
                        onChange={handleJournalChange}
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Outcome</label>
                      <select
                        name="outcome"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        value={journalEntry.outcome}
                        onChange={handleJournalChange}
                      >
                        <option value="">Select outcome...</option>
                        <option value="Win - Target Hit">Win - Target Hit</option>
                        <option value="Win - Partial">Win - Partial</option>
                        <option value="Loss - Stopped Out">Loss - Stopped Out</option>
                        <option value="Loss - Exited Early">Loss - Exited Early</option>
                        <option value="Breakeven">Breakeven</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">P&L Amount</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="pnl"
                          className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="0.00"
                          value={journalEntry.pnl}
                          onChange={handleJournalChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Lessons Learned</label>
                      <textarea
                        name="lessonsLearned"
                        rows="3"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="What did you learn from this trade? What would you do differently?"
                        value={journalEntry.lessonsLearned}
                        onChange={handleJournalChange}
                      ></textarea>
                    </div>
                    <div className="flex justify-end mt-4">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                        onClick={saveJournalEntry}
                      >
                        Save Journal Entry
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Daily Metrics Tab */}
            {activeTab === 'metrics' && (
              <div>
                <div className="bg-purple-100 p-3 rounded-t-lg border-l-4 border-purple-600 mb-4">
                  <h2 className="text-xl font-bold text-purple-800">DAILY METRICS</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Winning Trades</label>
                      <input
                        type="number"
                        name="winCount"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="0"
                        min="0"
                        value={dailyMetrics.winCount}
                        onChange={handleDailyMetricsChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Number of Losing Trades</label>
                      <input
                        type="number"
                        name="lossCount"
                        className="focus:ring-purple-500 focus:border-purple-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="0"
                        min="0"
                        value={dailyMetrics.lossCount}
                        onChange={handleDailyMetricsChange}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Daily P&L</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="dailyPnL"
                          className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="0.00"
                          value={dailyMetrics.dailyPnL}
                          onChange={handleDailyMetricsChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Daily Goal</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="dailyGoal"
                          className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="0.00"
                          value={dailyMetrics.dailyGoal}
                          onChange={handleDailyMetricsChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Maximum Drawdown</label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          name="maxDrawdown"
                          className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="0.00"
                          value={dailyMetrics.maxDrawdown}
                          onChange={handleDailyMetricsChange}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Recovery Effectiveness (1-5)</label>
                      <input
                        type="range"
                        name="recoveryEffectiveness"
                        min="1"
                        max="5"
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                        value={dailyMetrics.recoveryEffectiveness}
                        onChange={handleDailyMetricsChange}
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Poor</span>
                        <span>Average</span>
                        <span>Excellent</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Results/Summary Section */}
                <div className="mt-6 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <h3 className="font-bold text-indigo-800 mb-3">Daily Performance Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="text-gray-500 text-sm">Win Rate</p>
                      <p className="text-2xl font-bold text-indigo-600">{calculateWinRate()}</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="text-gray-500 text-sm">P&L vs Goal</p>
                      <p className="text-2xl font-bold text-indigo-600">{calculateProfitFactor()}x</p>
                    </div>
                    <div className="bg-white p-3 rounded shadow-sm">
                      <p className="text-gray-500 text-sm">Total Trades</p>
                      <p className="text-2xl font-bold text-indigo-600">
                        {(parseInt(dailyMetrics.winCount) || 0) + (parseInt(dailyMetrics.lossCount) || 0)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end mt-4">
                    <button
                      type="button"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={saveDailyMetrics}
                    >
                      Save Daily Metrics
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Weekly Review Tab */}
            {activeTab === 'weekly' && (
              <div>
                <div className="bg-indigo-100 p-3 rounded-t-lg border-l-4 border-indigo-600 mb-4">
                  <h2 className="text-xl font-bold text-indigo-800">WEEKLY REVIEW</h2>
                </div>
                
                <div className="p-4 bg-indigo-50 rounded border border-indigo-200 mb-6">
                  <h3 className="font-bold text-indigo-800 mb-3">System Performance Analysis</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li className="mb-2">Evaluate win rate by system used</li>
                    <li className="mb-2">Compare results across different market conditions</li>
                    <li className="mb-2">Calculate average win/loss size by system</li>
                    <li className="mb-2">Determine expectancy for each trading approach</li>
                    <li>Identify which systems performed best/worst this week</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">WIN RATE BY MARKET CONDITION</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-indigo-300">
                      <thead className="bg-indigo-100">
                        <tr>
                          <th className="border border-indigo-300 p-2">MARKET CONDITION</th>
                          <th className="border border-indigo-300 p-2">TRADES TAKEN</th>
                          <th className="border border-indigo-300 p-2">WIN RATE</th>
                          <th className="border border-indigo-300 p-2">AVG PROFIT</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-indigo-300 p-2">Range</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                        </tr>
                        <tr className="bg-indigo-50">
                          <td className="border border-indigo-300 p-2">Trend</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                        </tr>
                        <tr>
                          <td className="border border-indigo-300 p-2">Reversal</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                          <td className="border border-indigo-300 p-2">-</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Areas for Improvement</h3>
                  <textarea
                    rows="4"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                    placeholder="What aspects of your trading need improvement based on this week's performance?"
                  ></textarea>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Weekly Review
                  </button>
                </div>
              </div>
            )}
            
            {/* Monthly Review Tab */}
            {activeTab === 'monthly' && (
              <div>
                <div className="bg-blue-100 p-3 rounded-t-lg border-l-4 border-blue-600 mb-4">
                  <h2 className="text-xl font-bold text-blue-800">MONTHLY REVIEW</h2>
                </div>
                
                <div className="p-4 bg-blue-50 rounded border border-blue-200 mb-6">
                  <h3 className="font-bold text-blue-800 mb-3">Monthly Assessment Checklist</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Progress toward income goals</li>
                    <li>Position sizing effectiveness</li>
                    <li>Recovery plan assessment</li>
                    <li>System adjustments needed</li>
                    <li>Overall business plan adherence</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">Position Sizing Effectiveness</h3>
                    <div className="p-4 bg-white rounded border border-gray-200">
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Did you adhere to your position sizing rules?
                        </label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                          <option>Select...</option>
                          <option>Always</option>
                          <option>Usually</option>
                          <option>Sometimes</option>
                          <option>Rarely</option>
                          <option>Never</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Were your position sizes appropriate for market conditions?
                        </label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                          <option>Select...</option>
                          <option>Yes - Consistently</option>
                          <option>Usually appropriate</option>
                          <option>Mixed results</option>
                          <option>Often inappropriate</option>
                          <option>No - Consistently inappropriate</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Position sizing adjustments needed:
                        </label>
                        <textarea
                          rows="3"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="What adjustments to position sizing are needed based on this month's results?"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">Recovery Plan Assessment</h3>
                    <div className="p-4 bg-white rounded border border-gray-200">
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Number of times recovery plan was triggered:
                        </label>
                        <input
                          type="number"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="0"
                          min="0"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Recovery plan effectiveness:
                        </label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                          <option>Select...</option>
                          <option>Very effective</option>
                          <option>Somewhat effective</option>
                          <option>Neutral</option>
                          <option>Somewhat ineffective</option>
                          <option>Very ineffective</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Recovery plan adjustments needed:
                        </label>
                        <textarea
                          rows="3"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="What adjustments to your recovery plan are needed?"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Progress Toward Income Goals</h3>
                  <div className="p-4 bg-white rounded border border-gray-200 mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income Goal</label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="text"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Monthly P&L Actual</label>
                          <div className="mt-1 relative rounded-md shadow-sm">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <span className="text-gray-500 sm:text-sm">$</span>
                            </div>
                            <input
                              type="text"
                              className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                              placeholder="0.00"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">Goal Achievement</label>
                          <div className="mt-1 relative">
                            <div className="overflow-hidden h-6 mb-2 text-xs flex rounded bg-gray-200">
                              <div className="w-1/2 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500">50%</div>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Is your income goal realistic based on your current performance?
                          </label>
                          <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border">
                            <option>Select...</option>
                            <option>Yes - On track</option>
                            <option>Yes - But need improvement</option>
                            <option>No - Need significant improvement</option>
                            <option>No - Need to reassess goal</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Save Monthly Review
                  </button>
                </div>
              </div>
            )}
            
            {/* Quarterly Plan Tab */}
            {activeTab === 'quarterly' && (
              <div>
                <div className="bg-green-100 p-3 rounded-t-lg border-l-4 border-green-600 mb-4">
                  <h2 className="text-xl font-bold text-green-800">QUARTERLY PLAN REVISION</h2>
                </div>
                
                <div className="p-4 bg-green-50 rounded border border-green-200 mb-6">
                  <h3 className="font-bold text-green-800 mb-3">Complete Business Plan Review</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Review all aspects of your trading business plan</li>
                    <li>Make major adjustments as needed based on past quarter's performance</li>
                    <li>Reassess compounding targets and progress</li>
                    <li>Ensure alignment with long-term strategy and goals</li>
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">System Performance</h3>
                    <div className="p-4 bg-white rounded border border-gray-200">
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Which systems performed best this quarter?
                        </label>
                        <textarea
                          rows="3"
                          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="List your best performing systems and why they worked well"
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Which systems performed worst this quarter?
                        </label>
                        <textarea
                          rows="3"
                          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="List your worst performing systems and why they underperformed"
                        ></textarea>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Planned system adjustments:
                        </label>
                        <textarea
                          rows="3"
                          className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="What changes will you make to your trading systems?"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-700 mb-3">Compounding Targets</h3>
                    <div className="p-4 bg-white rounded border border-gray-200">
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Starting Balance (Beginning of Quarter)
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ending Balance (End of Quarter)
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            className="focus:ring-green-500 focus:border-green-500 block w-full pl-7 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Quarterly Growth Target for Next Quarter
                        </label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            className="focus:ring-green-500 focus:border-green-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="25"
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">%</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Is this target realistic based on your performance?
                        </label>
                        <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border">
                          <option>Select...</option>
                          <option>Yes - Very achievable</option>
                          <option>Yes - With focused effort</option>
                          <option>Somewhat - Will be challenging</option>
                          <option>No - Too ambitious</option>
                          <option>No - Need to reassess completely</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">Long-Term Strategy Alignment</h3>
                  <div className="p-4 bg-white rounded border border-gray-200">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Are your daily activities aligned with your long-term goals?
                      </label>
                      <select className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md border">
                        <option>Select...</option>
                        <option>Yes - Completely aligned</option>
                        <option>Mostly aligned</option>
                        <option>Partially aligned</option>
                        <option>Minimally aligned</option>
                        <option>No - Completely misaligned</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        What major adjustments are needed to your overall business plan?
                      </label>
                      <textarea
                        rows="4"
                        className="focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="Describe any significant changes needed to your overall approach, based on the past quarter's results"
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Save Quarterly Plan
                  </button>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-8">
              <p>Consistent tracking leads to consistent improvement</p>
              <p>Review your journal entries regularly to identify patterns in your trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPerformanceTracker;