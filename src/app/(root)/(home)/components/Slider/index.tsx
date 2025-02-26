"use client";

import { Marquee } from "@/components/magicui/marquee";
import {
    DocumentIcon,
    ShieldCheckIcon,
    RssIcon,
    GlobeAltIcon,
    ChartBarIcon,
    HeartIcon,
    StarIcon,
    CogIcon,
    LightBulbIcon,
    PencilIcon,
    BellIcon,
    CameraIcon,
    CloudIcon,
    CreditCardIcon,
    CurrencyDollarIcon,
    HomeIcon,
} from "@heroicons/react/24/outline";
import { FC } from "react";

const icons = [
    { icon: DocumentIcon, color: "#10B981" },
    { icon: ShieldCheckIcon, color: "#FACC15" },
    { icon: RssIcon, color: "#EC4899" },
    { icon: GlobeAltIcon, color: "#3B82F6" },
    { icon: ChartBarIcon, color: "#9CA3AF" },
    { icon: StarIcon, color: "#F59E0B" },
    { icon: CogIcon, color: "#6366F1" },
    { icon: LightBulbIcon, color: "#EAB308" },
    { icon: PencilIcon, color: "#06B6D4" },
    { icon: BellIcon, color: "#EF4444" },
    { icon: CameraIcon, color: "#8B5CF6" },
    { icon: CloudIcon, color: "#22D3EE" },
    { icon: CreditCardIcon, color: "#F87171" },
    { icon: CurrencyDollarIcon, color: "#84CC16" },
    { icon: HomeIcon, color: "#4ADE80" },
];

interface IconCardProps {
    Icon: FC<{ className: string }>;
    color: string;
    opacity: number;
}

const IconCard: FC<IconCardProps> = ({ Icon, color, opacity }) => {
    return (
        <div
            className="w-20 h-20 flex items-center justify-center rounded-xl bg-[#121010]"
            style={{ opacity }}
        >
            <div style={{ filter: `drop-shadow(0px 0px 10px ${color})` }}>
                <Icon className="h-12 w-12 text-white" />
            </div>
        </div>
    );
};

export default function IconSlider() {
    const rows = [
        icons.slice(0, 5),
        icons.slice(5, 10),
        icons.slice(7, 12),
        icons.slice(10, 15),
    ];
    
    const durations = [15, 20, 25, 30];
    const opacities = [1, 0.7, 0.4, 0.2]; 

    return (
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-black py-10 space-y-4">
            {rows.map((row, rowIndex) => (
                <Marquee 
                    key={rowIndex} 
                    pauseOnHover 
                    className={`rtl-marquee [--duration:${durations[rowIndex]}s]`}
                >
                    {row.map(({ icon: Icon, color }, index) => (
                        <IconCard 
                            key={`row-${rowIndex}-${index}`} 
                            Icon={Icon} 
                            color={color} 
                            opacity={opacities[rowIndex]} 
                        />
                    ))}
                </Marquee>
            ))}

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black"></div>
            
            <div className="absolute z-30 text-center text-white p-6 rounded-lg mt-48">
                <div className="flex justify-center mb-4">
                    <div className="w-32 h-32 flex items-center p-2 justify-center rounded-2xl bg-[#0a0a0a] border border-[#262626] text-white text-5xl">
                        <HeartIcon className="h-20 w-20 text-red-500" style={{ filter: "drop-shadow(0px 0px 15px red)" }} />
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