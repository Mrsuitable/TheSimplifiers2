import React from 'react';



interface HomePageProps {
  onExploreClick: () => void;
}

const YouTubeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.267,4,12,4,12,4S5.733,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.733,2,12,2,12s0,4.267,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.733,20,12,20,12,20s6.267,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.267,22,12,22,12S22,7.733,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" />
    </svg>
);


const HomePage: React.FC<HomePageProps> = ({ onExploreClick }) => {
  return (
    <div className="relative h-[calc(100vh-68px)] min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      {/* Background Gradient & Pulse */}
      <div className="absolute inset-0 overflow-hidden bg-[#0B1120]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-[120vw] h-[120vw] lg:w-[80vw] lg:h-[80vw] max-w-[900px] max-h-[900px] bg-gradient-radial from-sky-500/20 via-sky-500/5 to-transparent rounded-full animate-pulse-slow"></div>
          </div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 px-4">
        
        {/* Image Card 1 */}
        <div className="group order-2 lg:order-1 perspective-1000 animate-float" style={{ animationDelay: '0s' }}>
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:transform-gpu group-hover:rotate-y-6 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-br from-sky-400 via-fuchsia-500 to-orange-400 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>
                <div className="relative w-full h-full p-1.5">
                    <img src="https://i.ibb.co/qXdyzQS/jentih.jpg" className="w-full h-full object-cover rounded-xl" />
                </div>
            </div>
        </div>

        {/* Central Text Content */}
        <div className="relative z-10 order-1 lg:order-2 flex flex-col items-center max-w-lg text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tighter font-space gradient-text">
                Clarity for Your Journey
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-300 font-inter">
                Your space for mental well-being, community connection, and career growth. We're here to help you simplify life's complexities.
            </p>
            <div className="mt-10 flex flex-col items-center gap-6">
                <button
                    onClick={onExploreClick}
                    className="px-8 py-3 bg-white text-sky-600 font-bold rounded-full text-lg transform hover:scale-105 transition-transform duration-300 shadow-2xl shadow-sky-400/20"
                >
                    Explore Sections
                </button>
                <a 
                    href="https://www.youtube.com/@TheSimplifiers1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-300"
                >
                    <YouTubeIcon className="w-7 h-7 text-red-600/90 group-hover:text-red-500 transition-colors duration-300" />
                    <span className="text-sm font-medium tracking-wide">
                        Visit the YouTube Channel
                    </span>
                </a>
            </div>
        </div>

        {/* Image Card 2 */}
        <div className="group order-3 lg:order-3 perspective-1000 animate-float" style={{ animationDelay: '4s' }}>
            <div className="relative w-56 h-72 md:w-64 md:h-80 rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:transform-gpu group-hover:-rotate-y-6 group-hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-400 via-fuchsia-500 to-sky-400 rounded-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 blur-md group-hover:blur-lg"></div>
                <div className="relative w-full h-full p-1.5">
                    <img src="/pic.jpg" alt="Founder on a boat" className="w-full h-full object-cover rounded-xl" />
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
