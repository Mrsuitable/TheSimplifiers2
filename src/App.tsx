
import React, { useState, useRef } from 'react';
import PsychologyBot from './components/PsychologyBot';
import WebinarMeets from './components/WebinarMeets';
import CareerSection from './components/CareerSection';
import HomePage from './components/HomePage';
import PicSection from './components/PicSection';

type Tab = 'Psychology' | 'Webinar Meets' | 'Career' | 'PIC';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
);

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab | 'Home'>('Home');
    const sectionsRef = useRef<HTMLDivElement>(null);

    const handleExploreClick = () => {
        setActiveTab('Psychology'); // Default to the first main section
        setTimeout(() => {
            sectionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Psychology':
                return <PsychologyBot />;
            case 'Webinar Meets':
                return <WebinarMeets />;
            case 'Career':
                return <CareerSection />;
            case 'PIC':
                return <PicSection />;
            default:
                return null;
        }
    };
    
    const tabs: Tab[] = ['Psychology', 'Webinar Meets', 'Career', 'PIC'];

    return (
        <div className="min-h-screen bg-[#0B1120] text-white font-poppins">
            <header className="sticky top-0 z-50 bg-[#0B1120]/80 backdrop-blur-md border-b border-slate-800">
                <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
                    <div 
                        className="text-xl md:text-2xl font-bold font-space tracking-wider gradient-text cursor-pointer"
                        onClick={() => setActiveTab('Home')}
                        role="button"
                        aria-label="Go to Homepage"
                    >
                        The Simplifiers
                    </div>
                    {activeTab !== 'Home' && (
                        <div className="hidden md:flex items-center space-x-1 bg-slate-900/60 border border-slate-700 rounded-full p-1 shadow-inner shadow-black/20">
                            {tabs.map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                                        activeTab === tab 
                                        ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                                        : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    )}
                     <a 
                        href="https://www.youtube.com/@TheSimplifiers1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-800 transition-colors"
                        aria-label="Visit our YouTube channel"
                    >
                        <YouTubeIcon className="w-7 h-7 text-red-600/90 group-hover:text-red-500 transition-colors duration-300" />
                    </a>
                </nav>
            </header>

            <main>
                {activeTab === 'Home' && (
                    <HomePage onExploreClick={handleExploreClick} />
                )}

                {activeTab !== 'Home' && (
                    <div ref={sectionsRef} className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                         {/* Mobile-only select for tabs */}
                        <div className="md:hidden mb-8">
                             <label htmlFor="tab-select" className="sr-only">Select a section</label>
                             <select
                                id="tab-select"
                                value={activeTab}
                                onChange={(e) => setActiveTab(e.target.value as Tab)}
                                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                aria-label="Select a section"
                             >
                                {tabs.map(tab => <option key={tab} value={tab}>{tab}</option>)}
                            </select>
                        </div>
                        {/* The content for the selected tab */}
                        <div className="animate-fade-in-up">
                           {renderContent()}
                        </div>
                    </div>
                )}
            </main>

            {activeTab !== 'Home' && (
                 <footer className="text-center py-6 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} The Simplifiers. All Rights Reserved.</p>
                 </footer>
            )}
        </div>
    );
};

export default App;
