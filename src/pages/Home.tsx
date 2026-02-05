import React from 'react';
import { ChevronLeft, ChevronRight, Monitor, Download, ClipboardList } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[500px] w-full bg-gray-900 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1611974765270-ca1258634369?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Stock Market"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-normal mb-2">Welcome To Saima Qaiser</h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Securities</h2>
          <p className="text-lg md:text-xl uppercase tracking-widest mb-8">(PVT) LIMITED</p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded text-lg font-medium transition-colors">
            Read More
          </button>
        </div>

        {/* Carousel Controls (Visual) */}
        <button className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white">
          <ChevronLeft size={48} />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/50 hover:text-white">
          <ChevronRight size={48} />
        </button>
        
        {/* Dots */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
             <div className="w-3 h-3 rounded-full border border-white bg-transparent"></div>
             <div className="w-3 h-3 rounded-full bg-blue-500 border border-blue-500"></div>
             <div className="w-3 h-3 rounded-full border border-white bg-transparent"></div>
        </div>
      </div>

      {/* Feature Boxes */}
      <div className="container mx-auto px-4 relative z-30 -mt-16 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-xl">
          {/* Box 1 */}
          <div className="bg-sqsTeal text-white p-10 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <Monitor size={48} className="mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-medium">Online Trading</h3>
          </div>
          {/* Box 2 */}
          <div className="bg-sqsGold text-white p-10 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <Download size={48} className="mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-medium">Download</h3>
          </div>
          {/* Box 3 */}
          <div className="bg-sqsOrange text-white p-10 flex flex-col items-center justify-center text-center transition-transform hover:-translate-y-1">
            <ClipboardList size={48} className="mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-medium">Financial Information</h3>
          </div>
        </div>
      </div>

      {/* Stock Market Data Section Background Placeholder */}
      <div className="h-64 relative overflow-hidden">
         <img 
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            className="w-full h-full object-cover opacity-20"
            alt="Data bg"
         />
         <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
                <h2 className="text-4xl text-gray-700 font-normal">Stock Markets</h2>
                <p className="text-gray-500">Find the latest market information</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Home;