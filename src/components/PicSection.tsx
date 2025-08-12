import React from 'react';

const PicSection: React.FC = () => {
    const images = [
        {
            src: "https://i.ibb.co/qXdyzQS/jentih.jpg",
            alt: "Founder at a desk with a computer",
            caption: "Founder at Desk",
            gradient: "from-sky-400 via-fuchsia-500 to-orange-400"
        },
        {
            src: "https://i.ibb.co/Fq0QSWQB/pic.jpg",
            alt: "Founder sitting in a rowboat on a lake",
            caption: "Embracing the Journey",
            gradient: "from-orange-400 via-fuchsia-500 to-sky-400"
        }
    ];

    return (
        <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold font-space text-white">Founder's Gallery</h2>
                <p className="mt-3 text-lg text-slate-300 max-w-2xl mx-auto">
                    A glimpse into the person behind The Simplifiers community.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center">
                {images.map((image, index) => (
                    <div key={index} className="group w-full max-w-sm">
                        <div className="relative rounded-2xl shadow-2xl shadow-black/40 transition-transform duration-300 group-hover:scale-105">
                            <div className={`absolute -inset-1.5 bg-gradient-to-br ${image.gradient} rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 blur-lg`}></div>
                            <div className="relative w-full p-1.5 bg-slate-800 rounded-[18px]">
                                <img src={image.src} alt={image.alt} className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            <p className="text-lg font-semibold text-slate-200 font-space tracking-wide">{image.caption}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PicSection;
