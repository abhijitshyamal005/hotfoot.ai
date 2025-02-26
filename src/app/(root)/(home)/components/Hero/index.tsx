'use client';

import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Particles } from "@/components/magicui/particles";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-black text-white  text-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles quantity={100} ease={80} color={"#ffffff"} refresh />
      </div>
      <div className="z-10 flex mt-14 items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-[#ffffff1A] text-sm font-semibold text-white transition-all ease-in hover:cursor-pointer hover:bg-gray-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-3 py-1 transition ease-out hover:text-black hover:duration-300 hover:dark:text-white">
            <span>✨ Introducing Magic UI Template</span>
            <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
          </AnimatedShinyText>
        </div>
      </div>
      {/* Content */}

      <div className="relative w-screen text-center mx-auto z-10 mt-5 bg-gradient-to-t from-[#1c140f] to-black">
        <h1 className="text-6xl md:text-8xl text-center font-semibold leading-tight max-w-6xl mx-auto">
          Magic UI is the new way
          <br /> to build landing pages.
        </h1>
        <p className="mt-8 text-xl text-gray-200 max-w-3xl mx-auto">
          Beautifully designed, animated components and templates built with
          Tailwind CSS, React, and Framer Motion.
        </p>

        <div className="flex justify-center mt-10  ">
          <Button className="bg-[#FAFAFA] text-[#000000] px-6 py-3 rounded-lg text-sm flex items-center space-x-1 shadow-md hover:bg-gray-200 transition">
            <span>Get Started for free</span>
            <span className="text-2xl">→</span>
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-t from-black to-[#1b130f] w-screen h-auto mx-auto rounded-lg shadow-lg">
        {/* Image at Bottom */}
        <div className="relative w-full max-w-6xl mx-auto mt-20 px-4 overflow-hidden">
          <div className="relative">
            <img
              src="/hero.jpg"
              alt="UI Preview"
              className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg"
            />
            <BorderBeam duration={8} size={300} />
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent rounded-b-lg"></div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default HeroSection;
