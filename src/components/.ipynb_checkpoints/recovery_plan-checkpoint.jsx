import React, { useState } from 'react';

const RecoveryPlan = () => {
  const [lossThreshold, setLossThreshold] = useState('15');
  const [consecutiveLosses, setConsecutiveLosses] = useState('3');
  const [drawdownThreshold, setDrawdownThreshold] = useState('20');
  const [recoveryRiskPercentage, setRecoveryRiskPercentage] = useState('2.5');
  const [recoveryAttempts, setRecoveryAttempts] = useState('2');
  const [coolingPeriod, setCoolingPeriod] = useState('24');
  const [winStreak, setWinStreak] = useState('5');
  
  const [selectedSystem, setSelectedSystem] = useState('quarters');
  
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">PART 5: RECOVERY PLAN</h1>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="bg-red-100 p-3 rounded-t-lg border-l-4 border-red-600">
                <h2 className="text-xl font-bold text-red-800">RECOVERY TRIGGERS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-red-200 shadow-sm">
                <p className="mb-4 text-gray-700">
                  Recovery mode is activated when specific thresholds are breached. Define your triggers 
                  below to create a systematic approach to drawdown recovery.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Daily Loss Threshold (% of account)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="text"
                        className="focus:ring-red-500 focus:border-red-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="15"
                        value={lossThreshold}
                        onChange={(e) => setLossThreshold(e.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <span className="text-gray-500 sm:text-sm">%</span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      Recovery triggers when daily losses exceed this percentage
                    </p>
                  </div>
                  
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Consecutive Losing Trades
                    </label>
                    <input
                      type="text"
                      className="focus:ring-red-500 focus:border-red-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                      placeholder="3"
                      value={consecutiveLosses}
                      onChange={(e) => setConsecutiveLosses(e.target.value)}
                    />
                    <p className="mt-1 text-sm text-gray-500">
                      Recovery triggers after this many consecutive losses
                    </p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Drawdown Threshold
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="text"
                      className="focus:ring-red-500 focus:border-red-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                      placeholder="20"
                      value={drawdownThreshold}
                      onChange={(e) => setDrawdownThreshold(e.target.value)}
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">%</span>
                    </div>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Recovery triggers when account drawdown reaches this percentage from peak balance
                  </p>
                </div>
                
                <div className="mt-4 p-3 bg-red-50 rounded-md border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-2">Additional Triggers:</h3>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>End of session with negative P&L</li>
                    <li>Multiple stopped trades from same system</li>
                    <li>Emotional trading decisions (revenge trades)</li>
                    <li>Trading outside of business plan parameters</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-orange-100 p-3 rounded-t-lg border-l-4 border-orange-600">
                <h2 className="text-xl font-bold text-orange-800">RECOVERY STRATEGY</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-orange-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">POSITION SIZING ADJUSTMENTS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Recovery Risk Percentage
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="2.5"
                          value={recoveryRiskPercentage}
                          onChange={(e) => setRecoveryRiskPercentage(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">%</span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Reduced risk per trade during recovery mode
                      </p>
                    </div>
                    
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Maximum Recovery Attempts Per Day
                      </label>
                      <input
                        type="text"
                        className="focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                        placeholder="2"
                        value={recoveryAttempts}
                        onChange={(e) => setRecoveryAttempts(e.target.value)}
                      />
                      <p className="mt-1 text-sm text-gray-500">
                        Limit recovery trades to this number per day
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-md border border-orange-200 mb-6">
                    <h4 className="font-semibold text-orange-800 mb-2">Position Sizing Rules:</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li className="mb-1">Maximum contracts limited to 50% of normal calculation</li>
                      <li className="mb-1">Each failed recovery attempt reduces size by additional 25%</li>
                      <li className="mb-1">Return to normal sizing only after <input 
                          type="text" 
                          className="w-10 text-center inline-block border border-orange-300 rounded"
                          value={winStreak}
                          onChange={(e) => setWinStreak(e.target.value)}
                        /> consecutive winning trades</li>
                      <li>Reset to minimum position sizing after cooling off period</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">SYSTEM SELECTION</h3>
                  <p className="mb-3 text-gray-700">
                    During recovery mode, select high-probability cash flow systems that best match your personal trading strengths.
                  </p>
                  
                  <div className="border rounded-lg overflow-hidden mb-4">
                    <div className="bg-orange-50 p-3 border-b border-orange-200">
                      <h4 className="font-semibold text-orange-800">Select Primary Recovery System:</h4>
                    </div>
                    <div className="p-3">
                      <div className="space-y-2">
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            className="form-radio text-orange-600" 
                            name="recovery-system"
                            checked={selectedSystem === 'quarters'}
                            onChange={() => setSelectedSystem('quarters')}
                          />
                          <span className="ml-2">Quarters Trading (Quarter to Quarter high probability moves)</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            className="form-radio text-orange-600" 
                            name="recovery-system"
                            checked={selectedSystem === 'p12'}
                            onChange={() => setSelectedSystem('p12')}
                          />
                          <span className="ml-2">P12 Reactions (With tight targets)</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            className="form-radio text-orange-600" 
                            name="recovery-system"
                            checked={selectedSystem === 'altsession'}
                            onChange={() => setSelectedSystem('altsession')}
                          />
                          <span className="ml-2">Alternative Sessions (Asia/London if applicable)</span>
                        </label>
                        <label className="inline-flex items-center">
                          <input 
                            type="radio" 
                            className="form-radio text-orange-600" 
                            name="recovery-system"
                            checked={selectedSystem === 'custom'}
                            onChange={() => setSelectedSystem('custom')}
                          />
                          <span className="ml-2">Custom Recovery System</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {selectedSystem === 'custom' && (
                    <div className="p-3 bg-orange-50 rounded-md border border-orange-200 mb-4">
                      <h4 className="font-semibold text-orange-800 mb-2">Custom Recovery System Details:</h4>
                      <textarea
                        className="w-full p-2 border rounded h-24 text-gray-600"
                        placeholder="Describe your custom recovery system here..."
                      ></textarea>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-3">RECOVERY TRADE PARAMETERS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                    <div className="mb-3">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        "Cooling Off" Period After Failed Recovery
                      </label>
                      <div className="mt-1 relative rounded-md shadow-sm">
                        <input
                          type="text"
                          className="focus:ring-orange-500 focus:border-orange-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="24"
                          value={coolingPeriod}
                          onChange={(e) => setCoolingPeriod(e.target.value)}
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                          <span className="text-gray-500 sm:text-sm">hrs</span>
                        </div>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Mandatory break after failed recovery attempts
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-orange-50 rounded-md border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Recovery Rules:</h4>
                    <ul className="list-disc pl-5 text-gray-700">
                      <li className="mb-1">Stop recovery plan if 2 consecutive recovery trades fail</li>
                      <li className="mb-1">Only take setups with multiple confirmations</li>
                      <li className="mb-1">Focus on cash flow targets (10-20 basis points)</li>
                      <li>Use only fully mechanical systems with clear rules</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="bg-indigo-100 p-3 rounded-t-lg border-l-4 border-indigo-600">
                <h2 className="text-xl font-bold text-indigo-800">PSYCHOLOGICAL RECOVERY</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-indigo-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">MENTAL RESET PROCESS</h3>
                  <div className="p-3 bg-indigo-50 rounded-md border border-indigo-200 mb-6">
                    <ul className="list-disc pl-5 text-gray-700">
                      <li className="mb-2">
                        <strong>Mandatory 30-minute break</strong> after significant loss
                      </li>
                      <li className="mb-2">
                        <strong>Complete detailed journal entry</strong> for each losing trade
                      </li>
                      <li className="mb-2">
                        <strong>Review losing trades objectively</strong> using market replay
                      </li>
                      <li>
                        <strong>Contact accountability partner</strong> if recovery plan fails
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-3 border rounded-lg mb-6">
                    <h4 className="font-semibold text-indigo-800 mb-2">Journal Template For Losses:</h4>
                    <textarea
                      className="w-full p-2 border rounded h-32 text-gray-600"
                      placeholder="Trade details: 
1. What happened objectively?
2. Why did I take this trade?
3. Did I follow my plan?
4. What can I learn from this?
5. How will I apply this lesson?"
                    ></textarea>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-3">FOCUS AREAS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-3 bg-indigo-50 rounded-md border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">Process Over Outcome:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li className="mb-1">Focus on execution quality rather than outcome</li>
                        <li className="mb-1">Evaluate trades based on plan adherence</li>
                        <li className="mb-1">Recognize that even perfect trades can lose</li>
                        <li>Track execution quality separately from P&L</li>
                      </ul>
                    </div>
                    
                    <div className="p-3 bg-indigo-50 rounded-md border border-indigo-200">
                      <h4 className="font-semibold text-indigo-800 mb-2">Rebuilding Confidence:</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        <li className="mb-1">Focus on single trade at a time mentality</li>
                        <li className="mb-1">Review historical wins to reinforce edge</li>
                        <li className="mb-1">Build confidence through small wins</li>
                        <li>Maintain perspective on long-term performance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="italic text-gray-700 text-center">
                A systematic recovery plan is essential for navigating inevitable drawdowns.
                By defining triggers, strategies, and psychological approaches in advance, 
                you can manage drawdowns objectively rather than emotionally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoveryPlan;