"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    DocumentIcon,
    ShieldCheckIcon,
    RssIcon,
    GlobeAltIcon,
    ChartBarIcon,
    HeartIcon,
} from "@heroicons/react/24/outline";

const icons = [
    {
        icon: <DocumentIcon
            className="h-12 w-12 text-white drop-shadow-[0px_0px_15px_#10B981]"
            style={{ textShadow: "0px 0px 15px #10B981, inset 0px 0px 15px #10B981" }}
        />, key: "document"
    },

    {
        icon: <ShieldCheckIcon
            className="h-12 w-12 text-white drop-shadow-[0px_0px_15px_#FACC15]"
            style={{ textShadow: "0px 0px 15px #FACC15, inset 0px 0px 15px #FACC15" }}
        />, key: "shield"
    },

    {
        icon: <RssIcon
            className="h-12 w-12 text-white drop-shadow-[0px_0px_15px_#EC4899]"
            style={{ textShadow: "0px 0px 15px #EC4899, inset 0px 0px 15px #EC4899" }}
        />, key: "rss"
    },

    {
        icon: <GlobeAltIcon
            className="h-12 w-12 text-white drop-shadow-[0px_0px_15px_#3B82F6]"
            style={{ textShadow: "0px 0px 15px #3B82F6, inset 0px 0px 15px #3B82F6" }}
        />, key: "globe"
    },

    {
        icon: <ChartBarIcon
            className="h-12 w-12 text-white drop-shadow-[0px_0px_15px_#9CA3AF]"
            style={{ textShadow: "0px 0px 15px #9CA3AF, inset 0px 0px 15px #9CA3AF" }}
        />, key: "chart"
    },
];


export default function HeroSection() {
    const [startAnimation, setStartAnimation] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setStartAnimation(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=" h-full w-full flex items-center justify-center bg-black overflow-hidden">
            {/* Animated Background Icons */}
            <div className=" mt-10 inset-0 flex flex-col items-center space-y-6 mb-40">
                {[...Array(4)].map((_, row) => (
                    <motion.div
                        key={row}
                        className="flex space-x-8"
                        initial={{ x: "0%" }}
                        animate={startAnimation ? { x: "100%" } : {}}
                        transition={{
                            ease: "linear",
                            duration: (8 - row) * 50,
                            repeat: Infinity,
                            delay: row * 2,
                        }}
                        style={{
                            opacity: row === 0 ? 1 : row === 1 ? 0.6 : row === 2 ? 0.4 : 0.1
                        }}

                    >


                        {[...Array(4)].map((_, i) => (
                            <div key={`${row}-${i}`} className="flex space-x-8">
                                {icons.map(({ icon, key }) => (
                                    <div
                                        key={`${row}-${i}-${key}`}
                                        className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#121010]"
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                ))}
            </div>

            {/* Centered Content */}
            <div className="absolute z-30 text-center text-white p-6 rounded-lg mt-32 ">
                <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 flex items-center p-2 justify-center rounded-2xl bg-[#0a0a0a] border border-[#262626]  text-white text-5xl">
                        <HeartIcon className="h-60 w-60" />
                    </div>
                </div>
                <h1 className="text-4xl font-bold">Stop wasting time on design.</h1>
                <p className="text-xl mt-2">Start your 7-day free trial. No credit card required.</p>
                <button className="mt-4 px-6 py-2 bg-black text-md text-white rounded-full border border-gray-800 font-semibold hover:bg-gray-200 transition">
                    Get Started →
                </button>
            </div>
        </div>
    );
}
