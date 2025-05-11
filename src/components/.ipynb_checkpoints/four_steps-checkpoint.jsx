import React, { useState } from 'react';

const MarketAnalysis = () => {
  const [asiaPatterns, setAsiaPatterns] = useState({
    direction: 'short',
    trueOrFalse: 'true',
    broken: 'not-broken'
  });

  const [londonPatterns, setLondonPatterns] = useState({
    direction: 'short',
    trueOrFalse: 'true',
    broken: 'not-broken'
  });

  const [dailyClassification, setDailyClassification] = useState('dwp');
  
  const [dros, setDros] = useState({
    asia: '',
    london: '',
    ny1: '',
    ny2: '',
    daily: ''
  });
  
  const [p12Analysis, setP12Analysis] = useState({
    scenario: '1a',
    location: 'above-mid'
  });

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">PART 2: MARKET ANALYSIS - THE FOUR STEPS</h1>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="bg-blue-100 p-3 rounded-t-lg border-l-4 border-blue-600">
                <h2 className="text-xl font-bold text-blue-800">STEP 1: DAILY PROFILE ANALYSIS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-blue-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-2">Asia & London Patterns</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <h4 className="font-semibold mb-2 text-blue-800">Asia Session</h4>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Direction</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-direction"
                              checked={asiaPatterns.direction === 'short'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, direction: 'short'})}
                            />
                            <span className="ml-2">Short</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-direction"
                              checked={asiaPatterns.direction === 'long'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, direction: 'long'})}
                            />
                            <span className="ml-2">Long</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">True/False</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-true-false"
                              checked={asiaPatterns.trueOrFalse === 'true'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, trueOrFalse: 'true'})}
                            />
                            <span className="ml-2">True</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-true-false"
                              checked={asiaPatterns.trueOrFalse === 'false'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, trueOrFalse: 'false'})}
                            />
                            <span className="ml-2">False</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Broken/Not Broken</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-broken"
                              checked={asiaPatterns.broken === 'broken'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, broken: 'broken'})}
                            />
                            <span className="ml-2">Broken</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="asia-broken"
                              checked={asiaPatterns.broken === 'not-broken'}
                              onChange={() => setAsiaPatterns({...asiaPatterns, broken: 'not-broken'})}
                            />
                            <span className="ml-2">Not Broken</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-blue-50">
                      <h4 className="font-semibold mb-2 text-blue-800">London Session</h4>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Direction</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-direction"
                              checked={londonPatterns.direction === 'short'}
                              onChange={() => setLondonPatterns({...londonPatterns, direction: 'short'})}
                            />
                            <span className="ml-2">Short</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-direction"
                              checked={londonPatterns.direction === 'long'}
                              onChange={() => setLondonPatterns({...londonPatterns, direction: 'long'})}
                            />
                            <span className="ml-2">Long</span>
                          </label>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">True/False</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-true-false"
                              checked={londonPatterns.trueOrFalse === 'true'}
                              onChange={() => setLondonPatterns({...londonPatterns, trueOrFalse: 'true'})}
                            />
                            <span className="ml-2">True</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-true-false"
                              checked={londonPatterns.trueOrFalse === 'false'}
                              onChange={() => setLondonPatterns({...londonPatterns, trueOrFalse: 'false'})}
                            />
                            <span className="ml-2">False</span>
                          </label>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Broken/Not Broken</label>
                        <div className="flex gap-4">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-broken"
                              checked={londonPatterns.broken === 'broken'}
                              onChange={() => setLondonPatterns({...londonPatterns, broken: 'broken'})}
                            />
                            <span className="ml-2">Broken</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="london-broken"
                              checked={londonPatterns.broken === 'not-broken'}
                              onChange={() => setLondonPatterns({...londonPatterns, broken: 'not-broken'})}
                            />
                            <span className="ml-2">Not Broken</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="font-bold text-gray-700 mb-2">Daily Classification</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-3 rounded border">
                        <div className="flex gap-4 flex-wrap">
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="daily-classification"
                              checked={dailyClassification === 'dwp'}
                              onChange={() => setDailyClassification('dwp')}
                            />
                            <span className="ml-2">DWP (Directional With Pullback)</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="daily-classification"
                              checked={dailyClassification === 'dnp'}
                              onChange={() => setDailyClassification('dnp')}
                            />
                            <span className="ml-2">DNP (Directional No Pullback)</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="daily-classification"
                              checked={dailyClassification === 'range1'}
                              onChange={() => setDailyClassification('range1')}
                            />
                            <span className="ml-2">Range 1 (Normal Range)</span>
                          </label>
                          <label className="inline-flex items-center">
                            <input 
                              type="radio" 
                              className="form-radio text-blue-600" 
                              name="daily-classification"
                              checked={dailyClassification === 'range2'}
                              onChange={() => setDailyClassification('range2')}
                            />
                            <span className="ml-2">Range 2 (Expanded Range)</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-700 mb-2">High Day / Low Day Probabilities</h3>
                    <div className="p-3 rounded border bg-blue-50">
                      <p className="mb-2"><strong>Statistical high/low time zones:</strong></p>
                      <ul className="list-disc pl-5 mb-2">
                        <li>1800 UTC (3:00 AM EST)</li>
                        <li>0930-1030 EST (Market Open)</li>
                        <li>1500-1615 EST (Market Close)</li>
                      </ul>
                      <p className="text-sm mt-3">
                        <strong>Note:</strong> These probabilities are influenced by Asia and London patterns as well as 
                        where we are within the daily candle.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-purple-100 p-3 rounded-t-lg border-l-4 border-purple-600">
                <h2 className="text-xl font-bold text-purple-800">STEP 2: VOLATILITY ASSESSMENT</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-purple-200 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-2">Distribution Range Overview (Distro)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Asia Distro vs. 10-day median</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={dros.asia}
                      onChange={(e) => setDros({...dros, asia: e.target.value})}
                      placeholder="e.g., 0.76 vs 0.65"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">London Distro vs. 10-day median</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={dros.london}
                      onChange={(e) => setDros({...dros, london: e.target.value})}
                      placeholder="e.g., 0.82 vs 0.75"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">New York 1 Distro vs. 10-day median</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={dros.ny1}
                      onChange={(e) => setDros({...dros, ny1: e.target.value})}
                      placeholder="e.g., 1.34 vs 1.25"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">New York 2 Distro vs. 10-day median</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={dros.ny2}
                      onChange={(e) => setDros({...dros, ny2: e.target.value})}
                      placeholder="e.g., 1.28 vs 1.20"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Daily Distro vs. 10-day median</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
                      value={dros.daily}
                      onChange={(e) => setDros({...dros, daily: e.target.value})}
                      placeholder="e.g., 2.46 vs 2.32"
                    />
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-700 mb-2">Market Expense Evaluation</h3>
                <div className="p-3 rounded border bg-purple-50 mb-4">
                  <p className="mb-2"><strong>Market Condition Assessment:</strong></p>
                  <ul className="list-disc pl-5 mb-2">
                    <li><strong>Expensive Market</strong>: Current distros exceed 10-day median by 15%+ (limited remaining movement)</li>
                    <li><strong>Normal Market</strong>: Current distros within 15% of 10-day median</li>
                    <li><strong>Cheap Market</strong>: Current distros below 10-day median by 15%+ (significant potential movement)</li>
                  </ul>
                  <p className="text-sm mt-3">
                    <strong>Note:</strong> Volatility assessment helps determine appropriate position sizing and targets.
                    Expensive markets require smaller size and tighter targets.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-teal-100 p-3 rounded-t-lg border-l-4 border-teal-600">
                <h2 className="text-xl font-bold text-teal-800">STEP 3: PRICE STRUCTURE NAVIGATION</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-teal-200 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-2">P12 Analysis</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">P12 Scenario</label>
                    <select 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={p12Analysis.scenario}
                      onChange={(e) => setP12Analysis({...p12Analysis, scenario: e.target.value})}
                    >
                      <option value="1a">Scenario 1A - Upper breakout</option>
                      <option value="1b">Scenario 1B - Lower breakout</option>
                      <option value="2a">Scenario 2A - Upper reversal</option>
                      <option value="2b">Scenario 2B - Lower reversal</option>
                      <option value="3a">Scenario 3A - Upside consolidation</option>
                      <option value="3b">Scenario 3B - Downside consolidation</option>
                      <option value="4a">Scenario 4A - Upper exhaustion</option>
                      <option value="4b">Scenario 4B - Lower exhaustion</option>
                      <option value="5a">Scenario 5A - Inside range above mid</option>
                      <option value="5b">Scenario 5B - Inside range below mid</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Location</label>
                    <select 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                      value={p12Analysis.location}
                      onChange={(e) => setP12Analysis({...p12Analysis, location: e.target.value})}
                    >
                      <option value="above-high">Above P12 High</option>
                      <option value="at-high">At P12 High</option>
                      <option value="between-high-mid">Between P12 High and Mid</option>
                      <option value="at-mid">At P12 Mid</option>
                      <option value="between-mid-low">Between P12 Mid and Low</option>
                      <option value="at-low">At P12 Low</option>
                      <option value="below-low">Below P12 Low</option>
                    </select>
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-700 mb-2">Previous Day/Week/Month Levels</h3>
                <div className="p-3 rounded border bg-teal-50 mb-4">
                  <ul className="list-disc pl-5 mb-2">
                    <li><strong>Previous day high, mid, low</strong>: Key reversal/continuation levels</li>
                    <li><strong>Weekly open</strong>: Important reference point for weekly bias</li>
                    <li><strong>Previous month 50%</strong>: Major inflection point for monthly direction</li>
                    <li><strong>NFP Friday level</strong>: Significant reference for following weeks</li>
                  </ul>
                </div>
                
                <h3 className="font-bold text-gray-700 mb-2">Quarter Structures</h3>
                <div className="p-3 rounded border bg-teal-50">
                  <p className="mb-2"><strong>Hourly & 3-Hour Quarter Analysis:</strong></p>
                  <ul className="list-disc pl-5 mb-2">
                    <li><strong>Hourly quarters (Q1-Q4)</strong>: Micro trend direction and momentum</li>
                    <li><strong>3-hour quarters (9-10-11, 12-1-2, 3-4-5)</strong>: Intermediate trend alignment</li>
                    <li><strong>Quarter alignment</strong>: Q1 high + Q4 low = uptrend (and vice versa)</li>
                  </ul>
                  <p className="text-sm mt-3">
                    <strong>Note:</strong> Quarter structure analysis helps identify trade entries, exits, and confirms the daily structure.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="bg-orange-100 p-3 rounded-t-lg border-l-4 border-orange-600">
                <h2 className="text-xl font-bold text-orange-800">STEP 4: TRADE SYSTEM SELECTION</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-orange-200 shadow-sm">
                <h3 className="font-bold text-gray-700 mb-2">System Activation Decisions</h3>
                <div className="p-3 rounded border bg-orange-50 mb-6">
                  <p className="mb-2"><strong>System Activation Matrix:</strong></p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-orange-300">
                      <thead className="bg-orange-100">
                        <tr>
                          <th className="border border-orange-300 p-2">SYSTEM</th>
                          <th className="border border-orange-300 p-2">RANGE 1/2</th>
                          <th className="border border-orange-300 p-2">DWP</th>
                          <th className="border border-orange-300 p-2">DNP</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-orange-300 p-2 font-semibold">9:30</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-2 font-semibold">High/Low Day</td>
                          <td className="border border-orange-300 p-2">ON (if false)</td>
                          <td className="border border-orange-300 p-2">ON (if false)</td>
                          <td className="border border-orange-300 p-2">ON (if false)</td>
                        </tr>
                        <tr>
                          <td className="border border-orange-300 p-2 font-semibold">P12</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                        </tr>
                        <tr className="bg-orange-50">
                          <td className="border border-orange-300 p-2 font-semibold">Captain Back Test</td>
                          <td className="border border-orange-300 p-2">OFF</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                        </tr>
                        <tr>
                          <td className="border border-orange-300 p-2 font-semibold">Quarters</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                          <td className="border border-orange-300 p-2">ON</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <h3 className="font-bold text-gray-700 mb-2">System Synchronization</h3>
                <div className="p-3 rounded border bg-orange-50">
                  <p className="mb-2"><strong>Key Synchronization Points:</strong></p>
                  <ul className="list-disc pl-5 mb-2">
                    <li>Align entries across systems with hourly quarter confirmations</li>
                    <li>Prioritize setups with multiple system alignment</li>
                    <li>Resolve conflicting signals by deferring to stronger market condition</li>
                    <li>Maintain overall risk parameters regardless of system activation</li>
                  </ul>
                  <p className="text-sm mt-3">
                    <strong>Note:</strong> System synchronization is critical for avoiding overtrading and 
                    ensuring position sizing aligns with overall market conditions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="italic text-gray-700 text-center">
                The Four Steps Analysis Framework creates a structured approach to daily market assessment.
                This method ensures you align your trading systems with actual market conditions each day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;