'use client'

import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center  min-h-screen bg-gradient-to-b from-black to-[#5a3b27]  text-white px-6 text-center overflow-hidden">
      {/* Floating Badge */}
      <div className="absolute top-10 mt-12 flex items-center space-x-2 bg-[#262626] text-gray-300 text-base px-3 py-1 rounded-full">
        <span className="text-sm">✨</span>
        <p className="text-xs">Introducing Magic UI Template →</p>
      </div>

      {/* Animated Dotted Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px',
            animation: 'move 60s linear infinite',
          }}
        ></div>
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '25px 25px',
            animation: 'moveReverse 70s linear infinite',
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl -mt-64 text-center mx-auto">
        <h1 className="text-6xl md:text-8xl font-semibold leading-tight mt-4">
          Magic UI is the new way
          <br /> to build landing pages.
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-3xl mx-auto">
          Beautifully designed, animated components and templates built with <br />
          Tailwind CSS, React, and Framer Motion.
        </p>
        <div className="flex justify-center mt-8">
          <Button className="bg-[#FAFAFA] text-[#000000] px-6 py-3 rounded-lg text-sm flex items-center space-x-1 shadow-md hover:bg-gray-200 transition">
            <span>Get Started for free</span>
            <span className="text-2xl">→</span>
          </Button>
        </div>
        
      </div>

      <style jsx global>{`
        @keyframes move {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        @keyframes moveReverse {
          0% { background-position: 100% 100%; }
          100% { background-position: 0 0; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;