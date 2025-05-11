import React, { useState } from 'react';

const TradingSystems = () => {
  const [systems, setSystems] = useState([
    {
      name: '9:30',
      marketConditions: 'All',
      activationCriteria: '9:30 market open',
      riskPerTrade: '2.5-10%',
      targetMethod: '10bps/50% DRO/9:44',
      active: true
    },
    {
      name: 'High/Low Day',
      marketConditions: 'False session',
      activationCriteria: 'Pattern in zone',
      riskPerTrade: '2.5-10%',
      targetMethod: '75% New York DRO',
      active: true
    },
    {
      name: 'P12',
      marketConditions: 'All',
      activationCriteria: 'P12 level reaction',
      riskPerTrade: '2.5-10%',
      targetMethod: '25-75bps based on conditions',
      active: true
    },
    {
      name: 'Captain Back Test',
      marketConditions: 'DWP/DNP',
      activationCriteria: 'H4 high/low breach',
      riskPerTrade: '2.5-10%',
      targetMethod: '50bps or extended',
      active: false
    },
    {
      name: 'Quarters',
      marketConditions: 'All',
      activationCriteria: 'Quarter breakouts',
      riskPerTrade: '2.5-10%',
      targetMethod: 'Quarter to quarter',
      active: true
    }
  ]);

  const [customSystems, setCustomSystems] = useState([
    {
      name: '',
      marketConditions: '',
      activationCriteria: '',
      riskPerTrade: '',
      targetMethod: '',
      active: false
    },
    {
      name: '',
      marketConditions: '',
      activationCriteria: '',
      riskPerTrade: '',
      targetMethod: '',
      active: false
    }
  ]);

  const toggleSystemActive = (index, isCustom = false) => {
    if (isCustom) {
      const newCustomSystems = [...customSystems];
      newCustomSystems[index].active = !newCustomSystems[index].active;
      setCustomSystems(newCustomSystems);
    } else {
      const newSystems = [...systems];
      newSystems[index].active = !newSystems[index].active;
      setSystems(newSystems);
    }
  };

  const updateCustomSystem = (index, field, value) => {
    const newCustomSystems = [...customSystems];
    newCustomSystems[index][field] = value;
    setCustomSystems(newCustomSystems);
  };

  const [activeTab, setActiveTab] = useState('9:30');

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">PART 3: TRADING SYSTEMS</h1>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="bg-indigo-100 p-3 rounded-t-lg border-l-4 border-indigo-600">
                
                        <h2 className="text-2xl font-bold text-blue-700 mb-4">System Activation Decision Matrix</h2>
                        <div className="bg-white p-4 rounded-b-lg border border-blue-200 shadow-sm">
                          <table className="min-w-full bg-white border border-gray-200">
                            <thead>
                              <tr className="bg-blue-100">
                                <th className="border px-4 py-2">System</th>
                                <th className="border px-4 py-2">Range 1</th>
                                <th className="border px-4 py-2">Range 2</th>
                                <th className="border px-4 py-2">DWP</th>
                                <th className="border px-4 py-2">DNP</th>
                                <th className="border px-4 py-2">High/Low Already In</th>
                                <th className="border px-4 py-2">Contradicting Sessions</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="border px-4 py-2 font-medium">9:30 Trade</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">High/Low Day</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-red-100 text-center">OFF*</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                              </tr>
                              <tr>
                                <td className="border px-4 py-2 font-medium">P12 Trade</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-red-100 text-center">OFF</td>
                              </tr>
                              <tr className="bg-gray-50">
                                <td className="border px-4 py-2 font-medium">Captain Back Test</td>
                                <td className="border px-4 py-2 bg-red-100 text-center">OFF</td>
                                <td className="border px-4 py-2 bg-red-100 text-center">OFF</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-green-100 text-center">ON</td>
                                <td className="border px-4 py-2 bg-red-100 text-center">OFF</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mt-2 text-sm text-gray-600">
                            <p>* OFF if both are set during statistical time</p>
                          </div>
                        </div>
 </div> </div>
            <div className="mb-8">
              <div className="bg-blue-100 p-3 rounded-t-lg border-l-4 border-blue-600">
                <h2 className="text-xl font-bold text-blue-800">DETAILED SYSTEM PARAMETERS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-blue-200 shadow-sm">
                <div className="mb-4 border-b border-gray-200">
                  <nav className="-mb-px flex">
                    {systems.map((system, index) => (
                      <button
                        key={index}
                        className={`${
                          activeTab === system.name
                            ? 'border-indigo-500 text-indigo-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        } whitespace-nowrap py-2 px-4 border-b-2 font-medium text-sm`}
                        onClick={() => setActiveTab(system.name)}
                      >
                        {system.name}
                      </button>
                    ))}
                  </nav>
                </div>

                {activeTab === '9:30' && (
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-bold text-blue-800 mb-3">9:30 TRADE SYSTEM</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Description</h4>
                          <p className="text-gray-600">Directional breakout strategy based on the opening 9:30 candle, the anchor for the trading day.</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">Always ON at 9:30 market open</p>
                        </div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Time Frame</h4>
                          <p className="text-gray-600">9:30-9:44</p>
                        </div>
                        
                      </div>
                      <div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">Based on opening candle direction</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Opposite end of opening candle</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Targets</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>Cash flow: 10 basis points (0.1%)</li>
                            <li>Normal: 50% of 9:30-10:30 Distro</li>
                            <li>Extended: 9:44 timeframe</li>
                          </ul>
                        </div>
                        
                      </div>
                      
                    </div>
                  </div>
                )}

                {activeTab === 'High/Low Day' && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-800 mb-3">HIGH DAY / LOW DAY SYSTEM</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Description</h4>
                          <p className="text-gray-600">Reversal style trading capturing statistical high/low of day zones.</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">ON when HOD/LOD zone is tapped during HOD/LOD statistical time according to the daily profiler.</p>
                        </div>
                         <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">At statistical high/low zones with confirmation. Any entry model could be used.</p>
                              <li>Enter as price approaches high/low day zone</li>
                <li>Start with small position (micros)</li>
                <li>Add on confirmations (9:45-10:00 reversal)</li>
                <li>Slam with minis when 10:00 hour confirms reversal</li>
                        </div>
                      </div>
                      <div>
                         
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">10 basis points beyond zone</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">75% of New York Distro</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Key Notes</h4>
                          <p className="text-gray-600">This is a reversal style setup - ease in with micros, add to position when reversal confirms. Highest probability occurs during 9:30-9:45 and 9:45-10:00.</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}

                {activeTab === 'P12' && (
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-bold text-purple-800 mb-3">P12 TRADE SYSTEM</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Description</h4>
                          <p className="text-gray-600">Continuation and breakout trading based on previous 12-hour price levels.</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">Based on P12 analysis and price location</p>
                        </div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Market Conditions</h4>
                          <p className="text-gray-600">Flexible - can work in all conditions but trade differently in each.</p>
                        </div>
                           <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Time Frame</h4>
                          <p className="text-gray-600">Can be traded 6:00-16:00 (flexible)</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Scenario Based Trading</h4>
                          <p className="text-gray-600">Scenario 5 (Range): Trade between high and low</p>
                            <p className="text-gray-600">Scenarios 1-4: Trade breakouts and continuations</p>
                        </div>
                      </div>
                      <div>
                           <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">At P12 levels with confirmation</p>
                               <ul className="list-disc pl-5 mb-3">
                <li><b>Alert:</b> Price approaches P12 high/mid/low</li>
                <li><b>Confirmation:</b> Close above/below level + hourly quarter confirmation</li>
                <li>Breakout: Trade in direction of breakout</li>
                <li>Rejection: Trade bounces off levels</li>
                <li>Look above/below and fill: Reversal at levels</li>
              </ul>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Beyond invalidation level (varies by setup)</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">25-75 basis points based on conditions</p>
                        </div>
                       
                      </div>
                      
                    </div>
                  </div>
                )}

                {activeTab === 'Captain Back Test' && (
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-orange-800 mb-3">CAPTAIN BACKTEST</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                           <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Description</h4>
                          <p className="text-gray-600">Trend following strategy that front-runs New York 2 session and targets end-of-day high/low.</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">ON in trending market (DWP/DNP)</p>
                        </div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Time Frame</h4>
                          <p className="text-gray-600">After 10:00 AM, entries 10:30-11:30 AM</p>
                        </div>
                        
                      </div>
                      <div>
                          <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">After H4 high/low breach with pullback</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">25 basis points or previous structure</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <ul className="list-disc pl-5 mb-3">
                            <li>Minimum: 50 basis points</li>
                            <li>Preferred: Ride to high/low of day (15:00-16:00)</li>
                            <li>Base on daily DRO remaining</li>
                          </ul>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Key Notes</h4>
                          <p className="text-gray-600">Only turn ON in trending days with sufficient daily DRO remaining. Never trade against H4 breakout direction.</p>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                )}

                {activeTab === 'Quarters' && (
                  <div className="bg-teal-50 p-4 rounded-lg border border-teal-200">
                    <h3 className="font-bold text-teal-800 mb-3">QUARTERS TRADE SYSTEM</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                           <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Description</h4>
                          <p className="text-gray-600">Supplementary system for precision entries and cash flow trading based on hourly price action.</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">Best in range-bound markets but can supplement all other systems.</p>
                        </div>
                       <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <ul className="list-disc pl-5 mb-3">
                            <li><b>Q1 Breaks:</b> Enter when price breaks above/below Q1 high/low, extra confirmation with previous hour high/low taken</li>
                            <li><b>0-5 Box Breakouts:</b> Enter when price breaks key reaction box</li>
                            <li><b>Previous Hour 50%:</b> Enter on rejection/breakout of 50% level</li>
                            <li><b>Three-Hour Structure:</b> 9-10-11, 12-13-14 hour patterns</li>
                          </ul>
                        </div>
                      </div>
                      <div>
                           
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Previous hour 50% or Q1 low/high, 0-5 box low/high (depending on direction)</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <ul className="list-disc pl-5 mb-3">
                                <li>Cash Flow: 10-15 basis points (typical)</li>
                                <li>In trending conditions: To next hourly quarter</li>
                                <li>In DWP/DMP: Can extend to 3-hour structure target</li>
                              </ul>
                        </div>
                       <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Key Notes</h4>
                          <p className="text-gray-600">Excellent for supplementing other strategies or recovery plans. The 10:00, 11:00, and 13:00-14:00 quarters are particularly reliable for recovery plans after losses.</p>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <div className="bg-yellow-100 p-3 rounded-t-lg border-l-4 border-yellow-600">
                <h2 className="text-xl font-bold text-yellow-800">SYSTEM ACTIVATION RULES</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-yellow-200 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-2">Daily Classification Influence</h3>
                <div className="overflow-x-auto mb-6">
                  <table className="min-w-full border-collapse border border-gray-300">
                    <thead className="bg-yellow-50">
                      <tr>
                        <th className="border border-gray-300 p-2">CLASSIFICATION</th>
                        <th className="border border-gray-300 p-2">DESCRIPTION</th>
                        <th className="border border-gray-300 p-2">PREFERRED SYSTEMS</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">DWP</td>
                        <td className="border border-gray-300 p-2">
                          Directional With Pullback - Strong directional move with retracements
                        </td>
                        <td className="border border-gray-300 p-2">
                          9:30, P12, Captain Back Test, add to winners
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-2 font-semibold">DNP</td>
                        <td className="border border-gray-300 p-2">
                          Directional No Pullback - Strong directional move with minimal retracement
                        </td>
                        <td className="border border-gray-300 p-2">
                          9:30, P12, Captain Back Test, avoid fading
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">Range 1</td>
                        <td className="border border-gray-300 p-2">
                          Normal Range - Oscillation within typical daily range
                        </td>
                        <td className="border border-gray-300 p-2">
                          9:30, P12, Quarters, focus on reversals
                        </td>
                      </tr>
                      <tr className="bg-yellow-50">
                        <td className="border border-gray-300 p-2 font-semibold">Range 2</td>
                        <td className="border border-gray-300 p-2">
                          Expanded Range - Larger oscillation, often with false breakouts
                        </td>
                        <td className="border border-gray-300 p-2">
                          9:30, P12, Quarters, fade extremes
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h3 className="font-bold text-gray-700 mb-2">System Synchronization Rules</h3>
                <div className="p-3 rounded border bg-yellow-50">
                  <ol className="list-decimal pl-5 mb-2">
                    <li className="mb-2">
                      <strong>Primary Analysis First:</strong> Complete daily profile analysis before activating any systems
                    </li>
                    <li className="mb-2">
                      <strong>Session Direction Clarity:</strong> Wait for New York session direction before committing significant size
                    </li>
                    <li className="mb-2">
                      <strong>Hourly Quarter Confirmation:</strong> Use hourly quarters to confirm or invalidate system signals
                    </li>
                    <li className="mb-2">
                      <strong>Multiple System Alignment:</strong> Prioritize trades with signals from multiple systems
                    </li>
                    <li className="mb-2">
                      <strong>Conflicting Signal Resolution:</strong> When systems conflict, defer to the one best aligned with daily classification
                    </li>
                    <li>
                      <strong>Overall Risk Management:</strong> Never exceed maximum daily risk regardless of system activation
                    </li>
                  </ol>
                  <p className="text-sm mt-3">
                    <strong>Note:</strong> System synchronization is critical for preventing overtrading and maintaining disciplined risk management.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="italic text-gray-700 text-center">
                Your trading systems are the executable component of your business plan. 
                Consistent application of these systems, with appropriate activation/deactivation based on market conditions, 
                is the foundation of sustainable trading success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TradingSystems;