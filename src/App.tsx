import React, { useState } from 'react';
import { Search, Lock, ChevronDown, ChevronLeft, ChevronRight, Monitor, CloudDownload, ClipboardList, Phone, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { clsx } from 'clsx';

// --- Components ---

const TopBar = () => (
  <div className="w-full bg-white py-4 px-4 md:px-8 border-b border-gray-100">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center">
             {/* Stylized Logo Reconstruction */}
             <div className="relative">
                <span className="text-sqs-green font-serif text-5xl font-bold italic tracking-tighter">S<span className="text-sqs-darkGreen">Q</span>S</span>
                <div className="h-1 w-full bg-sqs-green absolute bottom-1 left-0 rounded-full opacity-80"></div>
             </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-sqs-darkGreen font-serif text-2xl font-bold tracking-wide leading-none">SAIMA QAISER</h1>
          <h2 className="text-sqs-darkGreen font-serif text-xl font-bold tracking-wide leading-none">SECURITIES (PVT) LIMITED</h2>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <input 
            type="text" 
            placeholder="Search" 
            className="border border-gray-400 py-1.5 px-3 w-48 focus:outline-none focus:border-sqs-green rounded-l-sm text-sm"
          />
          <button className="bg-sqs-green hover:bg-sqs-darkGreen text-white p-2 rounded-r-sm">
            <Search size={16} />
          </button>
        </div>
        <button className="bg-sqs-green hover:bg-sqs-darkGreen text-white px-5 py-2 rounded-full font-medium flex items-center gap-2 text-sm transition-colors shadow-sm">
          Client Login <Lock size={14} />
        </button>
      </div>
    </div>
  </div>
);

const Navbar = ({ activePage, setPage }: { activePage: string, setPage: (p: string) => void }) => {
  const navItems = [
    { name: 'Home', hasDropdown: false, id: 'home' },
    { name: 'About us', hasDropdown: true, id: 'intro' },
    { name: 'Services', hasDropdown: false, id: 'services' },
    { name: 'Governance', hasDropdown: true, id: 'bod' },
    { name: 'Investor Information', hasDropdown: true, id: 'investor' },
    { name: 'Investors Portal', hasDropdown: true, id: 'portal' },
    { name: 'Miscellaneous', hasDropdown: true, id: 'media' },
    { name: 'Contact', hasDropdown: false, id: 'contact' },
  ];

  return (
    <nav className="w-full bg-white border-b border-green-600 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex flex-wrap items-center gap-1 md:gap-6 text-sm font-semibold text-gray-800 py-3">
          {navItems.map((item) => (
            <li key={item.name} className="relative group cursor-pointer">
              <button 
                onClick={() => setPage(item.id)}
                className={clsx(
                  "flex items-center gap-1 hover:text-sqs-green transition-colors",
                  activePage === item.id && "text-sqs-green"
                )}
              >
                {item.name}
                {item.hasDropdown && <ChevronDown size={12} className="mt-0.5" />}
              </button>
              {activePage === item.id && item.id === 'home' && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
                      <div className="w-1 h-1 bg-sqs-green rounded-full"></div>
                      <div className="w-1 h-1 bg-sqs-green rounded-full"></div>
                      <div className="w-1 h-1 bg-sqs-green rounded-full"></div>
                  </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

const Ticker = () => {
  const stocks = [
    { name: 'KEL', val: '5.39', change: '-0.22', up: false },
    { name: 'WTL', val: '1.08', change: '-0.06', up: false },
    { name: 'BOP', val: '13.01', change: '-0.03', up: false },
    { name: 'OGDC', val: '143.40', change: '-2.44', up: false },
    { name: 'BAFL', val: '46.91', change: '-0.84', up: false },
    { name: 'POWER', val: '7.91', change: '0.14', up: true },
    { name: 'TRG', val: '22.92', change: '-0.43', up: false },
    { name: 'PAEL', val: '23.47', change: '-0.45', up: false },
    { name: 'NPL', val: '24.30', change: '0.23', up: true },
    { name: 'PKGP', val: '15.18', change: '0.19', up: true },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-200 py-2 overflow-hidden flex items-center text-xs font-medium text-gray-700">
      <div className="whitespace-nowrap flex gap-8 animate-marquee w-full">
        {[...stocks, ...stocks, ...stocks].map((stock, idx) => (
          <span key={idx} className="flex items-center gap-1">
            <span className="font-bold uppercase">{stock.name}</span>
            <span>{stock.val}</span>
            <span className={stock.up ? "text-green-600" : "text-red-600"}>
              {stock.up ? '▲' : '▼'} {stock.change}
            </span>
            <span className="text-gray-300">|</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const FooterLogos = () => (
  <div className="bg-[#0b0f19] py-8 border-t border-gray-800">
     <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all">
         {/* Recreating the logos footer strip from frame 13 roughly */}
         <div className="flex items-center gap-2 bg-white p-2 rounded">
             <div className="bg-blue-800 text-white font-bold p-1 text-xs">JamaPunji</div>
             <div className="text-xs text-blue-900 leading-tight">سرمايہ کاری سمجھداری کے ساتھ</div>
         </div>
         <div className="flex items-center justify-center border border-gray-600 p-2 rounded">
             <span className="text-green-500 font-bold text-xl">PSX</span>
         </div>
         <div className="flex items-center justify-center p-2">
            <div className="text-center">
                 <div className="rounded-full border-2 border-green-600 w-10 h-10 flex items-center justify-center text-white text-[8px]">SECP</div>
            </div>
         </div>
         <div className="flex items-center justify-center p-2">
             <span className="text-blue-500 font-bold text-2xl">NCCPL</span>
         </div>
         <div className="flex items-center justify-center p-2">
             <span className="text-orange-500 font-bold text-2xl">CDC</span>
         </div>
     </div>
     <div className="text-center text-gray-500 text-xs mt-4">
         Copyright © 2024 Saima Qaiser Securities (Pvt) Limited. All Rights Reserved.
     </div>
  </div>
)

// --- Pages ---

const HomePage = () => (
  <div className="flex flex-col">
    {/* Hero Section */}
    <div className="relative w-full h-[500px] bg-gray-900 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop" 
        alt="Stock Market Background" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-sans mb-2 text-shadow">Welcome To Saima Qaiser</h1>
        <h2 className="text-white text-3xl md:text-4xl font-sans mb-1 text-shadow">Securities</h2>
        <p className="text-white text-sm uppercase tracking-widest mb-8 text-shadow">(PVT) LIMITED</p>
        <button className="bg-[#2c9ca6] hover:bg-[#25838b] text-white px-8 py-3 rounded-sm text-sm uppercase transition-colors">
          Read More
        </button>
      </div>
      {/* Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
        <ChevronLeft size={48} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white">
        <ChevronRight size={48} />
      </button>
      {/* Loading Ring Indicator from Screenshot 1 */}
      <div className="absolute bottom-24 left-1/2 translate-x-12">
         <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>

    {/* Three Cards Section */}
    <div className="grid grid-cols-1 md:grid-cols-3 w-full">
      <div className="bg-card-teal py-16 px-8 flex flex-col items-center justify-center text-white gap-4 hover:bg-[#25838b] transition-colors cursor-pointer group">
        <Monitor size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        <h3 className="text-lg font-medium">Online Trading</h3>
      </div>
      <div className="bg-card-yellow py-16 px-8 flex flex-col items-center justify-center text-white gap-4 hover:bg-[#dba13b] transition-colors cursor-pointer group">
        <CloudDownload size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        <h3 className="text-lg font-medium">Download</h3>
      </div>
      <div className="bg-card-orange py-16 px-8 flex flex-col items-center justify-center text-white gap-4 hover:bg-[#d95e41] transition-colors cursor-pointer group">
        <ClipboardList size={48} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
        <h3 className="text-lg font-medium">Financial Information</h3>
      </div>
    </div>

    {/* Bottom Stock Banner */}
    <div className="w-full h-64 bg-blue-900 relative overflow-hidden flex items-center justify-center">
         <img 
            src="https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
            alt="Stock Numbers"
         />
         <h2 className="text-white/80 text-3xl font-light relative z-10">Stock Markets</h2>
         <div className="absolute bottom-0 w-full bg-gradient-to-t from-white/20 to-transparent h-20"></div>
    </div>
  </div>
);

const PageHeader = ({ title }: { title: string }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <h1 className="text-3xl font-serif text-sqs-darkGreen relative pb-4 mb-8">
      {title}
      <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-3 text-gray-300" viewBox="0 0 100 10" preserveAspectRatio="none">
          <path d="M0 5 Q 50 10 100 5" stroke="#a5d6a7" strokeWidth="2" fill="none" />
      </svg>
    </h1>
  </div>
);

const IntroductionPage = () => (
  <div className="max-w-7xl mx-auto px-4 pb-20">
    <PageHeader title="Introduction" />
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl text-gray-800 font-sans">Introduction</h2>
        <p className="text-gray-600 leading-relaxed text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="relative">
         <div className="bg-white p-4">
            {/* Simulating the 'Coming Soon' distressed text image from frame 4 */}
            <div className="w-full aspect-video bg-[url('https://img.freepik.com/free-vector/coming-soon-background-with-grunge-typography_1017-21045.jpg?w=1380&t=st=1706429000~exp=1706429600~hmac=e2c')] bg-cover bg-center">
                <div className="w-full h-full flex items-center justify-center bg-white/10 backdrop-blur-[1px]">
                     <h2 className="text-6xl font-black text-black/80 tracking-tighter uppercase font-serif mix-blend-multiply rotate-[-5deg]">
                        COMING<br/>SOON
                     </h2>
                </div>
            </div>
         </div>
      </div>
    </div>
  </div>
);

const ProfileCard = ({ name, role, img }: { name: string, role?: string, img: string }) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-full aspect-[3/4] overflow-hidden mb-4 bg-gray-200">
      <img src={img} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-sqs-green text-xl font-medium mb-1">{name}</h3>
    <p className="text-gray-500 text-sm mb-4 leading-relaxed max-w-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    </p>
    <button className="bg-sqs-green hover:bg-sqs-darkGreen text-white px-8 py-2 rounded-sm text-sm transition-colors">
      Contact
    </button>
  </div>
);

const ManagementPage = () => (
  <div className="max-w-7xl mx-auto px-4 pb-20">
    <PageHeader title="Management" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <ProfileCard 
        name="Afzal Hussain" 
        img="https://randomuser.me/api/portraits/men/32.jpg" 
      />
      <ProfileCard 
        name="Muhammad Ehsan Ullah" 
        img="https://randomuser.me/api/portraits/men/50.jpg" 
      />
      <ProfileCard 
        name="Saima Qaiser" 
        img="https://randomuser.me/api/portraits/women/44.jpg" 
      />
    </div>
  </div>
);

const BODPage = () => (
  <div className="max-w-7xl mx-auto px-4 pb-20 min-h-[60vh]">
    <PageHeader title="Board Of Directors" />
    <div className="flex flex-col items-center">
      <div className="w-64 h-64 bg-black flex items-center justify-center mb-4">
        <span className="text-white text-9xl font-serif">?</span>
      </div>
      <h3 className="text-sqs-green text-xl font-medium mb-1">Board Of Directors</h3>
      <p className="text-gray-500 text-sm mb-4">Afzal Hussain</p>
      <button className="bg-sqs-green hover:bg-sqs-darkGreen text-white px-12 py-2 rounded-sm text-sm transition-colors">
        Contact
      </button>
    </div>
  </div>
);

const MediaPage = () => (
  <div className="max-w-7xl mx-auto px-4 pb-20">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col">
          <div className="w-full aspect-square bg-black flex items-center justify-center mb-2">
             <span className="text-white text-9xl font-serif">?</span>
          </div>
          <p className="text-gray-800 text-lg font-serif">Coming Soon</p>
        </div>
      ))}
    </div>
  </div>
);

const AccordionItem = ({ question, isOpen, onClick }: { question: string, isOpen: boolean, onClick: () => void }) => (
  <div className="mb-1">
    <button 
      onClick={onClick}
      className="w-full bg-sqs-green hover:bg-sqs-darkGreen text-white px-6 py-3 flex items-center justify-between transition-colors"
    >
      <span className="text-lg font-serif italic">{question}</span>
      <ChevronDown className={clsx("transition-transform duration-300", isOpen && "rotate-180")} />
    </button>
    <div className={clsx("overflow-hidden transition-all duration-300 bg-white border border-gray-200", isOpen ? "max-h-40 opacity-100 p-6" : "max-h-0 opacity-0")}>
      <p className="text-gray-600 text-sm">
        Yes, Solodev CMS is built to handle the needs of any size company. With our Multi-Site Management, you will be able to easily manage all of your websites.
      </p>
    </div>
  </div>
);

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(5);
  const questions = [
    "What are the benefits of Solodev CMS?",
    "How easy is it to build a website with Solodev CMS?",
    "What is the uptime for Solodev CMS?1",
    "What is the uptime for Solodev CMS?2",
    "What is the uptime for Solodev CMS?3",
    "Can Solodev CMS handle multiple websites for my company?",
    "Can Solodev CMS handle multiple websites for my company?",
    "Can Solodev CMS handle multiple websites for my company?",
    "Can Solodev CMS handle multiple websites for my company?",
    "Can Solodev CMS handle multiple websites for my company?",
    "Can Solodev CMS handle multiple websites for my company?"
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 pb-20">
      <PageHeader title="Frequently Asked Questions" />
      <div className="max-w-4xl mx-auto">
        {questions.map((q, idx) => (
          <AccordionItem 
            key={idx} 
            question={q} 
            isOpen={openIndex === idx} 
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch(activePage) {
      case 'home': return <HomePage />;
      case 'intro': return <IntroductionPage />;
      case 'management': return <ManagementPage />;
      case 'bod': return <BODPage />;
      case 'media': return <MediaPage />;
      case 'faq': return <FAQPage />;
      // Fallbacks to allow navigating to frames seen in video
      case 'services': return <div className="min-h-[50vh] flex items-center justify-center"><h1 className="text-4xl text-gray-300">Services Page Placeholder</h1></div>;
      case 'investor': return <div className="min-h-[50vh] flex items-center justify-center"><h1 className="text-4xl text-gray-300">Investor Page Placeholder</h1></div>;
      case 'portal': return <div className="min-h-[50vh] flex items-center justify-center"><h1 className="text-4xl text-gray-300">Portal Page Placeholder</h1></div>;
      case 'contact': return <div className="min-h-[50vh] flex items-center justify-center"><h1 className="text-4xl text-gray-300">Contact Page Placeholder</h1></div>;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navbar activePage={activePage} setPage={setActivePage} />
      <Ticker />
      
      <main className="animate-fadeIn">
        {renderPage()}
      </main>

      <FooterLogos />
    </div>
  );
}

export default App;