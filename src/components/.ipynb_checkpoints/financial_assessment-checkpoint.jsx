import React, { useState } from 'react';

const FinancialAssessment = () => {
  const [expenses, setExpenses] = useState({
    housing: '',
    utilities: '',
    food: '',
    transportation: '',
    insurance: '',
    subscriptions: '',
    debt: '',
    entertainment: '',
    other: ''
  });

  const [debtAnalysis, setDebtAnalysis] = useState({
    totalDebt: '',
    interestRates: '',
    monthlyPayments: '',
    timelineToDebtFree: '',
    monthlyInterest: ''
  });

  const [incomeRequirements, setIncomeRequirements] = useState({
    monthlyExpenses: '',
    buffer: '',
    savings: '',
    totalNeeded: '',
    tradingTarget: '',
    nonTradingIncome: ''
  });

  const handleExpenseChange = (field, value) => {
    setExpenses(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDebtChange = (field, value) => {
    setDebtAnalysis(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleIncomeChange = (field, value) => {
    setIncomeRequirements(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateBuffer = () => {
    if (!incomeRequirements.monthlyExpenses) return;
    const buffer = parseFloat(incomeRequirements.monthlyExpenses) * 0.2;
    handleIncomeChange('buffer', buffer.toFixed(2));
  };

  const calculateTotalNeeded = () => {
    const monthlyExpenses = parseFloat(incomeRequirements.monthlyExpenses) || 0;
    const buffer = parseFloat(incomeRequirements.buffer) || 0;
    const savings = parseFloat(incomeRequirements.savings) || 0;
    const total = monthlyExpenses + buffer + savings;
    handleIncomeChange('totalNeeded', total.toFixed(2));
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">PART 1: FINANCIAL ASSESSMENT</h1>
          </div>
          
          <div className="p-6">
            <div className="mb-8">
              <div className="bg-indigo-100 p-3 rounded-t-lg border-l-4 border-indigo-600">
                <h2 className="text-xl font-bold text-indigo-800">PERSONAL EXPENSES & FINANCIAL ANALYSIS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-indigo-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Housing (mortgage/rent)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.housing}
                      onChange={(e) => handleExpenseChange('housing', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Utilities</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.utilities}
                      onChange={(e) => handleExpenseChange('utilities', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Food</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.food}
                      onChange={(e) => handleExpenseChange('food', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Transportation</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.transportation}
                      onChange={(e) => handleExpenseChange('transportation', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Insurance</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.insurance}
                      onChange={(e) => handleExpenseChange('insurance', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Subscriptions</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.subscriptions}
                      onChange={(e) => handleExpenseChange('subscriptions', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Debt payments</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.debt}
                      onChange={(e) => handleExpenseChange('debt', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Entertainment & discretionary</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.entertainment}
                      onChange={(e) => handleExpenseChange('entertainment', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Other expenses</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      value={expenses.other}
                      onChange={(e) => handleExpenseChange('other', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <div className="bg-yellow-100 p-3 rounded-t-lg border-l-4 border-yellow-600">
                <h2 className="text-xl font-bold text-yellow-800">DEBT ANALYSIS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-yellow-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Total outstanding debt</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={debtAnalysis.totalDebt}
                      onChange={(e) => handleDebtChange('totalDebt', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Interest rates on debts</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={debtAnalysis.interestRates}
                      onChange={(e) => handleDebtChange('interestRates', e.target.value)}
                      placeholder="e.g., 5.5%, 18.9%"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Minimum monthly payments</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={debtAnalysis.monthlyPayments}
                      onChange={(e) => handleDebtChange('monthlyPayments', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Monthly interest paid</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={debtAnalysis.monthlyInterest}
                      onChange={(e) => handleDebtChange('monthlyInterest', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Timeline to debt-free</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
                      value={debtAnalysis.timelineToDebtFree}
                      onChange={(e) => handleDebtChange('timelineToDebtFree', e.target.value)}
                      placeholder="e.g., 4 years"
                    />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Interest is essentially paying someone else for the opportunity cost of using their money. 
                    Every dollar spent on interest is a dollar that cannot compound in your trading account.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="bg-green-100 p-3 rounded-t-lg border-l-4 border-green-600">
                <h2 className="text-xl font-bold text-green-800">INCOME REQUIREMENTS</h2>
              </div>
              <div className="bg-white p-4 rounded-b-lg border border-green-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Total monthly expenses</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={incomeRequirements.monthlyExpenses}
                      onChange={(e) => handleIncomeChange('monthlyExpenses', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Buffer for unexpected costs (20%)</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={incomeRequirements.buffer}
                        onChange={(e) => handleIncomeChange('buffer', e.target.value)}
                        placeholder="$"
                      />
                      <button 
                        className="bg-green-600 text-white px-3 rounded-r hover:bg-green-700"
                        onClick={calculateBuffer}
                      >
                        Calculate
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Desired savings</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={incomeRequirements.savings}
                      onChange={(e) => handleIncomeChange('savings', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Total monthly income needed</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        className="w-full p-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={incomeRequirements.totalNeeded}
                        onChange={(e) => handleIncomeChange('totalNeeded', e.target.value)}
                        placeholder="$"
                      />
                      <button 
                        className="bg-green-600 text-white px-3 rounded-r hover:bg-green-700"
                        onClick={calculateTotalNeeded}
                      >
                        Calculate
                      </button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Trading income target (daily/weekly/monthly)</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={incomeRequirements.tradingTarget}
                      onChange={(e) => handleIncomeChange('tradingTarget', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="block font-medium text-gray-700 mb-1">Non-trading income sources</label>
                    <input 
                      type="text" 
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={incomeRequirements.nonTradingIncome}
                      onChange={(e) => handleIncomeChange('nonTradingIncome', e.target.value)}
                      placeholder="$"
                    />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                  <p className="text-sm text-green-800">
                    <strong>Remember:</strong> Your trading account should be sized appropriately for your income goals. 
                    As a general rule, target 3-5% monthly returns for sustainable growth. Unrealistic targets lead to 
                    overtrading and excessive risk.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md border border-gray-300">
              <p className="italic text-gray-700 text-center">
                Understanding your financial requirements is the foundation of a solid trading business plan. 
                This will help you set realistic performance goals and manage risk appropriately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialAssessment;