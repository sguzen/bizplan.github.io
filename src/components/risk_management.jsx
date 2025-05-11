import React, { useState, useEffect } from 'react';

const RiskManagementCalculator = () => {
  const [accountBalance, setAccountBalance] = useState('');
  const [riskPercentage, setRiskPercentage] = useState('5');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopPrice, setStopPrice] = useState('');
  const [symbol, setSymbol] = useState('NQ');
  const [contractsResult, setContractsResult] = useState('');
  const [stopValueResult, setStopValueResult] = useState('');
  const [compoundingData, setCompoundingData] = useState({
    targetReturn: '3',
    days: '100',
    reinvestPercent: '100',
    startDate: new Date().toISOString().split('T')[0]
  });
  const [compoundBalance, setCompoundBalance] = useState(null);
  
  const tickValues = {
    'NQ': 0.25 * 4,     // $1 per 0.25 points
    'ES': 0.25 * 12.50, // $12.50 per 0.25 points
    'MNQ': 0.25 * 0.5,  // $0.50 per 0.25 points
    'MES': 0.25 * 1.25  // $1.25 per 0.25 points
  };

  const calculateContracts = () => {
    if (!accountBalance || !riskPercentage || !entryPrice || !stopPrice) {
      alert('Please fill in all fields');
      return;
    }

    const balance = parseFloat(accountBalance);
    const risk = parseFloat(riskPercentage) / 100;
    const entry = parseFloat(entryPrice);
    const stop = parseFloat(stopPrice);

    // Calculate risk amount
    const riskAmount = balance * risk;

    // Calculate stop distance in points
    const stopDistance = Math.abs(entry - stop);

    // Determine tick value based on symbol
    const tickValue = tickValues[symbol] || tickValues['NQ'];

    // Calculate contracts
    const pointValue = tickValue * 4; // Value per full point
    const stopValue = stopDistance * pointValue;
    const contractsFloat = riskAmount / stopValue;
    const contracts = Math.floor(contractsFloat); // Round down to be conservative

    // Calculate actual stop value
    const actualStopValue = contracts * stopValue;

    setContractsResult(contracts.toString());
    setStopValueResult(`$${actualStopValue.toFixed(2)}`);
  };

  // Calculate compound growth
  const calculateCompounding = () => {
    if (!accountBalance) {
      alert('Please enter an account balance first');
      return;
    }

    const principal = parseFloat(accountBalance);
    const dailyRate = parseFloat(compoundingData.targetReturn) / 100;
    const days = parseInt(compoundingData.days);
    const reinvestmentRate = parseFloat(compoundingData.reinvestPercent) / 100;

    let balance = principal;
    
    for (let i = 0; i < days; i++) {
      const dailyProfit = balance * dailyRate;
      balance += dailyProfit * reinvestmentRate;
    }

    setCompoundBalance(balance.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">POSITION SIZING & RISK MANAGEMENT</h1>
          </div>
          
          <div className="p-6">
            {/* Position Sizing Section */}
            <div className="mb-8">
              <div className="bg-blue-100 p-3 rounded-t-lg border-l-4 border-blue-600">
                <h2 className="text-xl font-bold text-blue-800">POSITION SIZING CALCULATOR</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-blue-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">CALCULATOR</h3>
                  <div className="p-3 bg-blue-50 rounded border border-blue-200 mb-4">
                    <p className="font-mono text-center">
                      Contracts = (Account × Risk%) ÷ (Stop Distance × Contract Value)
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Account Balance</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">$</span>
                          </div>
                          <input
                            type="text"
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="0.00"
                            value={accountBalance}
                            onChange={(e) => setAccountBalance(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Risk Percentage</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            className="focus:ring-blue-500 focus:border-blue-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="5"
                            value={riskPercentage}
                            onChange={(e) => setRiskPercentage(e.target.value)}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Symbol</label>
                        <select
                          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md border"
                          value={symbol}
                          onChange={(e) => setSymbol(e.target.value)}
                        >
                          <option value="NQ">NQ (Nasdaq)</option>
                          <option value="ES">ES (S&P 500)</option>
                          <option value="MNQ">MNQ (Micro Nasdaq)</option>
                          <option value="MES">MES (Micro S&P 500)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Entry Price</label>
                        <input
                          type="text"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="e.g., 18500"
                          value={entryPrice}
                          onChange={(e) => setEntryPrice(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Stop Price</label>
                        <input
                          type="text"
                          className="focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          placeholder="e.g., 18450"
                          value={stopPrice}
                          onChange={(e) => setStopPrice(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-end mt-7">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                          onClick={calculateContracts}
                        >
                          Calculate
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {(contractsResult || stopValueResult) && (
                    <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                      <h3 className="font-bold text-green-800 mb-2">Results</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-gray-700"><strong>Contracts to Trade:</strong> {contractsResult}</p>
                        </div>
                        <div>
                          <p className="text-gray-700"><strong>Maximum Stop Value:</strong> {stopValueResult}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">RISK PERCENTAGE MATRIX</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-blue-300">
                      <thead className="bg-blue-100">
                        <tr>
                          <th className="border border-blue-300 p-2">MARKET CONDITIONS</th>
                          <th className="border border-blue-300 p-2">SETUP QUALITY</th>
                          <th className="border border-blue-300 p-2">RISK %</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 p-2">Unclear/Range</td>
                          <td className="border border-blue-300 p-2">Standard</td>
                          <td className="border border-blue-300 p-2">2.5%</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-2">Unclear/Range</td>
                          <td className="border border-blue-300 p-2">High quality</td>
                          <td className="border border-blue-300 p-2">5%</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Clear direction</td>
                          <td className="border border-blue-300 p-2">Standard</td>
                          <td className="border border-blue-300 p-2">5%</td>
                        </tr>
                        <tr className="bg-blue-50">
                          <td className="border border-blue-300 p-2">Clear direction</td>
                          <td className="border border-blue-300 p-2">High quality</td>
                          <td className="border border-blue-300 p-2">7%</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 p-2">Multiple confirmations</td>
                          <td className="border border-blue-300 p-2">Perfect setup</td>
                          <td className="border border-blue-300 p-2">10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-3">BEGINNING BALANCE CONSIDERATIONS</h3>
                  <div className="p-3 rounded border bg-blue-50">
                    <ul className="list-disc pl-5">
                      <li className="mb-2">Use fixed starting balance for position sizing</li>
                      <li className="mb-2">Do not adjust for open P&L until buffer established</li>
                      <li className="mb-2">Recalculate base balance after compounding milestones</li>
                      <li>Maintain buffer against 14-day risk of ruin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Compounding Calculator Section */}
            <div className="mb-8">
              <div className="bg-indigo-100 p-3 rounded-t-lg border-l-4 border-indigo-600">
                <h2 className="text-xl font-bold text-indigo-800">COMPOUNDING CALCULATOR</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-indigo-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">ACCOUNT GROWTH PROJECTIONS</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Target Daily Return</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="3"
                            value={compoundingData.targetReturn}
                            onChange={(e) => setCompoundingData({...compoundingData, targetReturn: e.target.value})}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Investment Period</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="100"
                            value={compoundingData.days}
                            onChange={(e) => setCompoundingData({...compoundingData, days: e.target.value})}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">days</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Reinvestment Rate</label>
                        <div className="mt-1 relative rounded-md shadow-sm">
                          <input
                            type="text"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded-md p-2 border"
                            placeholder="100"
                            value={compoundingData.reinvestPercent}
                            onChange={(e) => setCompoundingData({...compoundingData, reinvestPercent: e.target.value})}
                          />
                          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                            <span className="text-gray-500 sm:text-sm">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                        <input
                          type="date"
                          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                          value={compoundingData.startDate}
                          onChange={(e) => setCompoundingData({...compoundingData, startDate: e.target.value})}
                        />
                      </div>
                      <div className="flex justify-end mt-1">
                        <button
                          type="button"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          onClick={calculateCompounding}
                        >
                          Project Growth
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {compoundBalance && (
                    <div className="mt-4 p-4 bg-green-50 rounded-md border border-green-200">
                      <h3 className="font-bold text-green-800 mb-2">Projected Balance</h3>
                      <div>
                        <p className="text-gray-700">
                          <strong>After {compoundingData.days} days:</strong> ${compoundBalance}
                        </p>
                        <p className="text-sm text-gray-500 mt-2">
                          Starting with ${accountBalance} at {compoundingData.targetReturn}% daily return with {compoundingData.reinvestPercent}% reinvestment
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Drawdown Management Section */}
            <div className="mb-8">
              <div className="bg-red-100 p-3 rounded-t-lg border-l-4 border-red-600">
                <h2 className="text-xl font-bold text-red-800">DRAWDOWN MANAGEMENT</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-red-200 shadow-sm">
                <div className="mb-6">
                  <h3 className="font-bold text-gray-700 mb-3">14-DAY RISK OF RUIN PROTECTION</h3>
                  <div className="p-3 rounded border bg-red-50">
                    <p className="mb-3">
                      The 14-day risk of ruin represents the period when a new account or strategy is most vulnerable to consecutive losses.
                      During this period, position sizing discipline is critical to survival.
                    </p>
                    <ul className="list-disc pl-5">
                      <li className="mb-2">Analyze maximum consecutive losses for each system</li>
                      <li className="mb-2">Calculate worst-case drawdown scenarios</li>
                      <li className="mb-2">Maintain position sizing discipline during drawdowns</li>
                      <li>Follow recovery protocols when triggered</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-700 mb-3">CIRCUIT BREAKERS</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-red-300">
                      <thead className="bg-red-100">
                        <tr>
                          <th className="border border-red-300 p-2">TRIGGER</th>
                          <th className="border border-red-300 p-2">ACTION</th>
                          <th className="border border-red-300 p-2">DURATION</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-red-300 p-2">3 consecutive losses</td>
                          <td className="border border-red-300 p-2">Reduce position size by 50%</td>
                          <td className="border border-red-300 p-2">Until next win</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-2">Daily drawdown of 15%</td>
                          <td className="border border-red-300 p-2">Pause trading</td>
                          <td className="border border-red-300 p-2">Remainder of day</td>
                        </tr>
                        <tr>
                          <td className="border border-red-300 p-2">Weekly drawdown of 25%</td>
                          <td className="border border-red-300 p-2">Pause trading</td>
                          <td className="border border-red-300 p-2">48 hours</td>
                        </tr>
                        <tr className="bg-red-50">
                          <td className="border border-red-300 p-2">Monthly drawdown of 40%</td>
                          <td className="border border-red-300 p-2">Reset position sizing to minimum</td>
                          <td className="border border-red-300 p-2">Until buffer rebuilt</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="text-center text-gray-500 text-sm mt-8">
              <p>This calculator is for educational purposes only.</p>
              <p>Always consult with a financial advisor before making trading decisions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskManagementCalculator;