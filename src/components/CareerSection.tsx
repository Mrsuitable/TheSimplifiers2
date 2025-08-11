
import React from 'react';

const ConstructionIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 9a2 2 0 0 1-2-2H6l-4 4 4 4h6a2 2 0 0 1 2-2" />
        <path d="M18 13a2 2 0 0 1 2-2h2l-4-4-4 4h2a2 2 0 0 1-2 2" />
        <path d="m5 16 .8-5.7" />
        <path d="m19 8 .8 5.7" />
        <path d="M12 18v-6" />
        <path d="M12 6V5" />
    </svg>
);


const CareerSection: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center h-[60vh] bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8">
            <div className="mb-6">
                <ConstructionIcon />
            </div>
            <h2 className="text-4xl font-bold text-slate-800 dark:text-white mb-4">Career Guidance Coming Soon!</h2>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                We are working hard to build a comprehensive career guidance section for you.
                Soon, you'll find resources, tips, and tools to help you navigate your professional journey. Stay tuned!
            </p>
        </div>
    );
};

export default CareerSection;
