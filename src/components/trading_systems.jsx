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
                <h2 className="text-xl font-bold text-indigo-800">PRIMARY SYSTEMS TABLE</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-indigo-200 shadow-sm overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                  <thead className="bg-indigo-100">
                    <tr>
                      <th className="border border-gray-300 p-2">SYSTEM</th>
                      <th className="border border-gray-300 p-2">MARKET CONDITIONS</th>
                      <th className="border border-gray-300 p-2">ACTIVATION CRITERIA</th>
                      <th className="border border-gray-300 p-2">RISK %</th>
                      <th className="border border-gray-300 p-2">TARGET METHOD</th>
                      <th className="border border-gray-300 p-2">ACTIVE</th>
                    </tr>
                  </thead>
                  <tbody>
                    {systems.map((system, index) => (
                      <tr key={index} className={index % 2 === 0 ? '' : 'bg-gray-50'}>
                        <td className="border border-gray-300 p-2 font-semibold">{system.name}</td>
                        <td className="border border-gray-300 p-2">{system.marketConditions}</td>
                        <td className="border border-gray-300 p-2">{system.activationCriteria}</td>
                        <td className="border border-gray-300 p-2">{system.riskPerTrade}</td>
                        <td className="border border-gray-300 p-2">{system.targetMethod}</td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-indigo-600 rounded" 
                            checked={system.active}
                            onChange={() => toggleSystemActive(index)}
                          />
                        </td>
                      </tr>
                    ))}
                    {customSystems.map((system, index) => (
                      <tr key={`custom-${index}`} className="bg-blue-50">
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            placeholder="Custom System"
                            value={system.name}
                            onChange={(e) => updateCustomSystem(index, 'name', e.target.value)}
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            placeholder="Market Conditions"
                            value={system.marketConditions}
                            onChange={(e) => updateCustomSystem(index, 'marketConditions', e.target.value)}
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            placeholder="Activation Criteria"
                            value={system.activationCriteria}
                            onChange={(e) => updateCustomSystem(index, 'activationCriteria', e.target.value)}
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            placeholder="Risk %"
                            value={system.riskPerTrade}
                            onChange={(e) => updateCustomSystem(index, 'riskPerTrade', e.target.value)}
                          />
                        </td>
                        <td className="border border-gray-300 p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded"
                            placeholder="Target Method"
                            value={system.targetMethod}
                            onChange={(e) => updateCustomSystem(index, 'targetMethod', e.target.value)}
                          />
                        </td>
                        <td className="border border-gray-300 p-2 text-center">
                          <input 
                            type="checkbox" 
                            className="form-checkbox h-5 w-5 text-indigo-600 rounded" 
                            checked={system.active}
                            onChange={() => toggleSystemActive(index, true)}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

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
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">Always ON at 9:30 market open</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">Based on opening candle direction</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Opposite end of opening candle</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Targets</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>Cash flow: 10 basis points (0.1%)</li>
                            <li>Normal: 50% of 9:30-10:30 Distro</li>
                            <li>Extended: 9:44 timeframe</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Position sizing</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>2.5%: Contradicting market conditions</li>
                            <li>5%: Normal/unclear conditions</li>
                            <li>7-10%: Strong alignment with daily profile</li>
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-700 mb-1">Notes</h4>
                        <textarea
                          className="w-full p-2 border rounded h-24 text-gray-600"
                          placeholder="Add your own notes about this system..."
                        ></textarea>
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
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">ON when expecting false session</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">At statistical high/low zones with confirmation</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">10 basis points beyond zone</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">75% of New York Distro</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Position sizing</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>2.5%: Early entry without confirmation</li>
                            <li>5%: Normal entry with some confirmation</li>
                            <li>7-10%: Perfect setup with all confirmations</li>
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-700 mb-1">Notes</h4>
                        <textarea
                          className="w-full p-2 border rounded h-24 text-gray-600"
                          placeholder="Add your own notes about this system..."
                        ></textarea>
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
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">Based on P12 analysis and price location</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">At P12 levels with confirmation</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Beyond invalidation level (varies by setup)</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">25-75 basis points based on conditions</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Position sizing</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>2.5%: Counter-trend or unclear conditions</li>
                            <li>5%: Normal conditions</li>
                            <li>7-10%: Strong trend with multiple confirmations</li>
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-700 mb-1">Notes</h4>
                        <textarea
                          className="w-full p-2 border rounded h-24 text-gray-600"
                          placeholder="Add your own notes about this system..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'Captain Back Test' && (
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h3 className="font-bold text-orange-800 mb-3">CAPTAIN BACK TEST</h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">ON in trending market (DWP/DNP)</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">After H4 high/low breach with pullback</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">25 basis points or previous structure</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">50 basis points or extended for high/low day</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Position sizing</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>2.5%: Limited remaining Distro</li>
                            <li>5%: Normal conditions</li>
                            <li>7-10%: Abundant Distro with strong trend</li>
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-700 mb-1">Notes</h4>
                        <textarea
                          className="w-full p-2 border rounded h-24 text-gray-600"
                          placeholder="Add your own notes about this system..."
                        ></textarea>
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
                          <h4 className="font-semibold text-gray-700">Activation</h4>
                          <p className="text-gray-600">All market conditions</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Entry</h4>
                          <p className="text-gray-600">Hourly quarter breakouts (Q1-Q4)</p>
                        </div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Stop</h4>
                          <p className="text-gray-600">Below Q1 low (for longs) or above Q1 high (for shorts)</p>
                        </div>
                      </div>
                      <div>
                        <div className="mb-3">
                          <h4 className="font-semibold text-gray-700">Target</h4>
                          <p className="text-gray-600">Quarter to quarter movement (Q1→Q2→Q3→Q4)</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-700">Position sizing</h4>
                          <ul className="list-disc pl-5 text-gray-600">
                            <li>2.5%: Contradicting 3-hour structure</li>
                            <li>5%: Normal conditions</li>
                            <li>7-10%: Strong alignment with 3-hour quarters</li>
                          </ul>
                        </div>
                      </div>
                      <div className="lg:col-span-2">
                        <h4 className="font-semibold text-gray-700 mb-1">Notes</h4>
                        <textarea
                          className="w-full p-2 border rounded h-24 text-gray-600"
                          placeholder="Add your own notes about this system..."
                        ></textarea>
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