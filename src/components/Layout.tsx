import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Search, Lock, ChevronDown, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import Ticker from './Ticker';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Header */}
      <header className="bg-white">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="text-sqsGreen font-serif leading-tight">
               <div className="flex items-center">
                 <span className="text-6xl font-bold italic mr-2">SOS</span>
                 <div className="flex flex-col justify-center border-l-2 border-sqsGreen pl-3">
                    <span className="text-2xl font-bold tracking-wide block">SAIMA QAISER</span>
                    <span className="text-lg font-bold tracking-wide block">SECURITIES (PVT) LIMITED</span>
                 </div>
               </div>
            </div>
          </Link>

          {/* Search and Login */}
          <div className="flex items-center gap-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search" 
                className="border border-gray-400 pl-3 pr-10 py-1.5 focus:outline-none w-48"
              />
              <button className="absolute right-0 top-0 h-full w-8 bg-green-700 text-white flex items-center justify-center">
                <Search size={16} />
              </button>
            </div>
            <button className="bg-green-700 hover:bg-green-800 text-white px-5 py-1.5 rounded-full flex items-center gap-2 text-sm font-semibold transition-colors">
              Client Login <Lock size={14} />
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="border-t border-gray-200 mt-2">
          <div className="container mx-auto px-4">
            <nav className="flex flex-wrap justify-center md:justify-start">
              <NavItem to="/" label="Home" active />
              <NavItem to="/about" label="About us" dropdown />
              <NavItem to="/services" label="Services" />
              <NavItem to="/governance/board-of-directors" label="Governance" dropdown />
              <NavItem to="/investor" label="Investor Information" dropdown />
              <NavItem to="/portal" label="Investors Portal" dropdown />
              <NavItem to="/faq" label="Miscellaneous" dropdown />
              <NavItem to="/contact" label="Contact" />
            </nav>
          </div>
        </div>
        
        {/* Ticker */}
        <Ticker />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 border-t border-gray-200 mt-10">
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-80">
                <FooterLogo name="JamaPunji" />
                <FooterLogo name="PSX" />
                <FooterLogo name="SECP" />
                <FooterLogo name="NCCPL" />
                <FooterLogo name="CDC" />
            </div>
        </div>
        <div className="bg-emerald-500 text-white py-3 text-center text-sm">
           © 2019. All rights reserved | Design by <span className="font-bold">Unknown</span>
        </div>
      </footer>
    </div>
  );
};

const NavItem = ({ label, dropdown, active, to }: { label: string, dropdown?: boolean, active?: boolean, to: string }) => (
  <div className="relative group">
    <Link 
        to={to} 
        className={`
            flex items-center px-4 py-3 text-sm font-bold text-gray-700 hover:text-green-700 transition-colors
            ${active ? 'text-green-700' : ''}
        `}
    >
      {label}
      {dropdown && <ChevronDown size={12} className="ml-1 mt-0.5" />}
    </Link>
    {active && (
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
            <div className="w-1 h-1 bg-green-500 rounded-full"></div>
        </div>
    )}
    {/* Dropdown Placeholder (Visual only for this clone) */}
    {dropdown && (
        <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg border-t-2 border-green-600 min-w-[200px] z-50">
            <div className="py-2">
                <div className="px-4 py-2 hover:bg-gray-50 text-sm cursor-pointer">Sub Menu Item 1</div>
                <div className="px-4 py-2 hover:bg-gray-50 text-sm cursor-pointer">Sub Menu Item 2</div>
            </div>
        </div>
    )}
  </div>
);

const FooterLogo = ({ name }: { name: string }) => (
    <div className="h-12 flex items-center justify-center border-2 border-gray-300 p-2 rounded bg-white">
        {/* Using text placeholder for logos to avoid external image dependencies breaking */}
        <span className="font-bold text-gray-600 text-xs">{name} Logo</span>
    </div>
);

export default Layout;