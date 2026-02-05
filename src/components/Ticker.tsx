import React from 'react';

const stockData = [
  { symbol: 'KEL', price: '5.39', change: '-0.22', up: false },
  { symbol: 'WTL', price: '1.08', change: '-0.06', up: false },
  { symbol: 'BOP', price: '13.01', change: '-0.03', up: false },
  { symbol: 'OGDC', price: '143.40', change: '-2.44', up: false },
  { symbol: 'BAFL', price: '46.91', change: '-0.84', up: false },
  { symbol: 'POWER', price: '7.91', change: '0.14', up: true },
  { symbol: 'TRG', price: '22.92', change: '-0.43', up: false },
  { symbol: 'PAEL', price: '23.47', change: '-0.12', up: false },
];

const Ticker = () => {
  return (
    <div className="bg-white border-b border-gray-200 py-1 overflow-hidden whitespace-nowrap relative text-xs font-semibold text-gray-700">
      <div className="animate-marquee inline-block">
        {stockData.map((stock, index) => (
          <span key={index} className="mx-4">
            {stock.symbol} {stock.price} 
            <span className={stock.up ? 'text-green-600 ml-1' : 'text-red-600 ml-1'}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
            <span className="mx-2 text-gray-300">|</span>
          </span>
        ))}
        {/* Duplicate for seamless loop appearance (simplified) */}
        {stockData.map((stock, index) => (
          <span key={`dup-${index}`} className="mx-4">
            {stock.symbol} {stock.price} 
            <span className={stock.up ? 'text-green-600 ml-1' : 'text-red-600 ml-1'}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
            <span className="mx-2 text-gray-300">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;