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
  
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="bg-indigo-800 p-4">
            <h1 className="text-2xl font-bold text-white text-center">PART 2: MARKET ANALYSIS - THE FOUR STEPS</h1>
          </div>
               {/* Timeline & Model Activation */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-blue-700 mb-4 border-b-2 border-blue-200 pb-2">Trading Session Timeline & Model Activation</h2>
        <br/>
        <div className="relative">
          {/* Timeline */}
          <div className="h-14 bg-gradient-to-r from-indigo-100 via-blue-100 to-cyan-100 rounded-lg relative mb-6">
            {/* Time markers */}
            {['08:00', '09:00', '09:30', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00'].map((time, index) => (
              <div key={index} className="absolute text-xs font-semibold" style={{ left: `${index === 0 ? 0 : index === 9 ? 98 : (index * 11) + (index === 2 ? 1 : 0)}%`, top: '100%' }}>
                {time}
                <div className="h-3 w-0.5 bg-gray-400 -mt-3 ml-2"></div>
              </div>
            ))}
            
            {/* Critical time markers */}
            {[
              { time: '09:30', label: 'Equities Open', left: 23 },
              { time: '10:00', label: 'Classification', left: 34 },
              { time: '11:00', label: 'Decision Point', left: 45 },
              { time: '16:00', label: 'MOC', left: 97 },
            ].map((marker, index) => (
              <div key={index} className="absolute" style={{ left: `${marker.left}%`, bottom: '100%' }}>
                <div className="h-5 w-0.5 bg-red-400 mb-1 ml-2"></div>
                <span className="text-xs font-semibold text-red-600">{marker.label}</span>
              </div>
            ))}
          </div>
          
          {/* Model activation zones */}
          <div className="space-y-3">
            <ModelActivationBar 
              name="Four-Step Flow" 
              start={0} 
              end={100} 
              color="bg-blue-600" 
              note="Always On"
            />
            <ModelActivationBar 
              name="Snap Model" 
              start={23} 
              end={28} 
              color="bg-amber-500" 
              note="09:30-09:45 ET"
            />
            <ModelActivationBar 
              name="Daily Classification" 
              start={28} 
              end={100} 
              color="bg-emerald-500" 
              note="09:45+ ET"
            />
            <ModelActivationBar 
              name="P12 Model" 
              start={23} 
              end={100} 
              color="bg-purple-500" 
              note="Conditional" 
              isDashed={true}
            />
            <ModelActivationBar 
              name="Hourly Quarters" 
              start={30} 
              end={100} 
              color="bg-cyan-500" 
              note="Optional Overlay" 
              isDashed={true}
            />
            <ModelActivationBar 
              name="HOD/LOD System" 
              start={0} 
              end={100} 
              color="bg-red-500" 
              note="Key Times" 
              isSpecial={true}
              specialMarkers={[23, 89]}
            />
          </div>
        </div>
      </section>
      
      {/* Model Framework Visualization */}
      <section className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-5">
          <h3 className="text-lg font-bold text-blue-700 mb-3">Four-Step Flow Model</h3>
          <div className="space-y-3">
            <StepBox 
              number="1" 
              title="HOD/LOD Framework" 
              description="Track current HOD/LOD relative to key time zones (18:00, 03:00, 09:30, 15:00)"
              color="bg-blue-50 border-blue-300"
            />
            <StepBox 
              number="2" 
              title="Session State Analysis" 
              description="OU status, ADR progression, RVOL, NY1 validity"
              color="bg-blue-50 border-blue-300"
            />
            <StepBox 
              number="3" 
              title="Range Development" 
              description="Compare current range to ADR10, assess % expansion"
              color="bg-blue-50 border-blue-300"
            />
            <StepBox 
              number="4" 
              title="Structure Engagement" 
              description="Identify high-probability entry points at key levels"
              color="bg-blue-50 border-blue-300"
            />
          </div>
        </div> 
      </section>

          
          </div>
        </div>
      </div>
  
         
      
  );
};
const ModelActivationBar = ({ name, start, end, color, note, isDashed, isSpecial, specialMarkers }) => {
  return (
    <div className="flex items-center">
      <div className="w-1/5 text-sm font-medium">{name}</div>
      <div className="w-3/5 relative h-6">
        <div className="absolute top-0 left-0 h-full w-full bg-gray-200 rounded-full"></div>
        <div 
          className={`absolute top-0 h-full rounded-full ${color} ${isDashed ? 'bg-opacity-70' : ''}`} 
          style={{ 
            left: `${start}%`, 
            width: `${end - start}%`,
            backgroundImage: isDashed ? 'repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(255,255,255,0.5) 5px, rgba(255,255,255,0.5) 10px)' : 'none'
          }}>
          {isSpecial && specialMarkers && specialMarkers.map((marker, idx) => (
            <div key={idx} className="absolute top-0 h-full w-3 bg-red-600" style={{ left: `${marker - start}%` }}></div>
          ))}
        </div>
      </div>
      <div className="w-1/5 text-xs text-gray-500 pl-3">{note}</div>
    </div>
  );
};  
const StepBox = ({ number, title, description, color }) => {
  return (
    <div className={`p-3 rounded border ${color} flex items-start`}>
      <div className="bg-blue-600 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
        {number}
      </div>
      <div>
        <h4 className="font-bold text-sm">{title}</h4>
        <p className="text-xs mt-1">{description}</p>
      </div>
    </div>
  );
};
export default MarketAnalysis;