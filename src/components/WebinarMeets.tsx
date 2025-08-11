
import React from 'react';

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
);

const webinars = [
    {
        title: "Toxic FriendShip",
        date: "Next session coming soon",
        description: "Learn to identify the signs of a toxic friendship, understand its impact on your mental health, and discover strategies for setting boundaries or moving on.",
        link: "https://meet.google.com/xwh-ahfn-pth",
    },
];

const WebinarMeets: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white">Webinar Meets</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Connect with peers and share experiences. In our sessions, each person gets a chance to talk about their problems, and then we all discuss solutions together.
                </p>
            </div>

            <div className="flex justify-center">
                {webinars.map((webinar, index) => (
                    <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:-translate-y-1 max-w-lg">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{webinar.title}</h3>
                            <div className="text-slate-500 dark:text-slate-400 font-medium mb-4">
                                <CalendarIcon />
                                <span>{webinar.date}</span>
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 mb-6">{webinar.description}</p>
                            <a 
                                href={webinar.link} 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                                >
                                Join
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WebinarMeets;
