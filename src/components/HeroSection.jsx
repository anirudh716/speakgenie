import React, { useState } from 'react';
import PopupForm from './PopupForm'; 

export function HeroSection() {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => setIsOpen(true);
    const closePopup = () => setIsOpen(false);

    return (
        <section className="mt-12 w-full flex items-center justify-center px-4">
            <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between px-0 md:px-8 py-12 md:py-16 bg-white">
                {/* Left Content */}
                <div className="flex flex-col w-full md:max-w-xl space-y-6">
                    {/* Tagline */}
                    <span className="w-auto md:w-2/5 inline-block px-3 py-1 text-xs sm:text-sm font-bold text-purple-700 bg-purple-100 rounded-full">
                        🌈 Calm Minds, Happy Hearts
                    </span>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                        Mindfulness & <br />
                        Meditation for Kids (4–14)
                    </h1>

                    {/* Description */}
                    <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                        Fun, story-based meditations that build focus, kindness, and confidence.
                        Safe, ad-free, and crafted with child-development experts.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                        <button
                            onClick={openPopup}
                            className="w-full sm:w-auto px-6 py-3 rounded-lg text-white bg-purple-600 hover:bg-purple-500 font-semibold shadow-md transition hover:scale-105"
                        >
                            Start Free Trial
                        </button>
                        <a href="#programs" className="w-full sm:w-auto px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-500 font-semibold shadow-md transition">
                            Explore Programs
                        </a>
                    </div>
                </div>

                {/* Right Content */}
                <div className="mt-12 md:mt-0 md:ml-12 flex items-center justify-center relative w-full md:w-1/2">
                    <div className="w-full h-56 sm:h-72 md:h-96 bg-gray-200 rounded-xl flex items-center justify-center" />
                    {/* Floating card */}
                    <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white shadow-lg rounded-xl p-3 sm:p-4 w-56 sm:w-64">
                        <h3 className="font-semibold text-gray-900 mb-2">Today's Journey</h3>
                        <ul className="space-y-1 text-gray-700 text-xs sm:text-sm">
                            <li>🐉 Dragon Breath (3 min)</li>
                            <li>🦋 Butterfly Body Scan (5 min)</li>
                            <li>🌙 Sleep Story: Star Boat (7 min)</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Popup Form */}
            <PopupForm isOpen={isOpen} onClose={closePopup} />
        </section>
    );
}
