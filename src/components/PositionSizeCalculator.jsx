import { useState, useEffect } from 'react';

const PositionSizeCalculator = () => {
  const [accountBalance, setAccountBalance] = useState(3000);
  const [riskPercentage, setRiskPercentage] = useState(2.5);
  const [entry, setEntry] = useState(19100);
  const [stopLoss, setStopLoss] = useState(19050);
  const [symbol, setSymbol] = useState('NQ');
  const [tickValue, setTickValue] = useState(5);
  const [contracts, setContracts] = useState(0);
  const [stopLossDollar, setStopLossDollar] = useState(0);
  const [potentialProfit, setPotentialProfit] = useState(0);
  const [targetPoints, setTargetPoints] = useState(50);
  
  // Symbols and their tick values
  const symbolInfo = {
    'NQ': { tickValue: 5, name: 'NASDAQ Micro (MNQ)' },
    'ES': { tickValue: 1.25, name: 'S&P 500 Micro (MES)' },
    'YM': { tickValue: 0.50, name: 'Dow Jones Micro (MYM)' },
    'RTY': { tickValue: 0.50, name: 'Russell 2000 Micro (M2K)' }
  };
  
  useEffect(() => {
    if (symbol && symbolInfo[symbol]) {
      setTickValue(symbolInfo[symbol].tickValue);
    }
  }, [symbol]);

  useEffect(() => {
    calculatePosition();
  }, [accountBalance, riskPercentage, entry, stopLoss, tickValue, targetPoints]);

  const calculatePosition = () => {
    const riskAmount = accountBalance * (riskPercentage / 100);
    const pointsAtRisk = Math.abs(entry - stopLoss);
    const dollarPerContract = pointsAtRisk * tickValue;
    
    let calculatedContracts = 0;
    
    if (dollarPerContract > 0) {
      calculatedContracts = Math.floor(riskAmount / dollarPerContract);
    }
    
    setContracts(calculatedContracts);
    setStopLossDollar(calculatedContracts * dollarPerContract);
    setPotentialProfit(calculatedContracts * targetPoints * tickValue);
  };

  return (
    <div className="flex flex-col p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Position Size Calculator</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Account Balance ($)
          </label>
          <input
            type="number"
            value={accountBalance}
            onChange={(e) => setAccountBalance(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Risk Per Trade (%)
          </label>
          <input
            type="number"
            value={riskPercentage}
            onChange={(e) => setRiskPercentage(parseFloat(e.target.value) || 0)}
            min="0.1"
            max="100"
            step="0.1"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Symbol
          </label>
          <select
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            {Object.keys(symbolInfo).map((sym) => (
              <option key={sym} value={sym}>
                {symbolInfo[sym].name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tick Value ($)
          </label>
          <input
            type="number"
            value={tickValue}
            onChange={(e) => setTickValue(parseFloat(e.target.value) || 0)}
            min="0.01"
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Entry Price
          </label>
          <input
            type="number"
            value={entry}
            onChange={(e) => setEntry(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Stop Loss Price
          </label>
          <input
            type="number"
            value={stopLoss}
            onChange={(e) => setStopLoss(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Target Points
          </label>
          <input
            type="number"
            value={targetPoints}
            onChange={(e) => setTargetPoints(parseFloat(e.target.value) || 0)}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>
      
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Results</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Position Size</p>
            <p className="text-xl font-bold text-blue-600">{contracts} contracts</p>
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Risk Amount</p>
            <p className="text-xl font-bold text-red-600">${stopLossDollar.toFixed(2)}</p>
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Points at Risk</p>
            <p className="text-xl font-bold text-gray-800">{Math.abs(entry - stopLoss)} points</p>
          </div>
          
          <div className="bg-white p-3 rounded shadow-sm">
            <p className="text-sm text-gray-500">Potential Profit (at target)</p>
            <p className="text-xl font-bold text-green-600">${potentialProfit.toFixed(2)}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-md font-semibold text-blue-800 mb-2">Important Notes</h3>
        <ul className="text-sm text-blue-800 list-disc ml-5 space-y-1">
          <li>Always place your stop loss at the invalidation point of your strategy</li>
          <li>Position sizing is more important than entry precision</li>
          <li>Use 2.5% risk during the 14-day risk of ruin period</li>
          <li>Only increase risk when market conditions are favorable</li>
          <li>It doesn't matter if stops are wide or tight, what matters is properly sizing based on the stop distance</li>
        </ul>
      </div>
    </div>
  );
};

export default PositionSizeCalculator;