import React from "react";
import { FaRegClipboard } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="p-6  -mt-20 mb-11">
      {/* Top Navigation Links */}
      <div className="flex justify-between gap-2 overflow-x-auto scrollbar-hide mb-4">
        {[
          "Esindused ja kontaktid",
          "Minu otsingud ja lemmikud",
          "Rattad24 äriklientidele",
          "Hinnakiri",
          "Klienditeenindus",
        ].map((text, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-1 px-3 py-2 bg-gray-100 rounded-md min-w-36"
          >
            <FaRegClipboard className="text-orange-500 text-2xl" />
            <span className="text-sm font-semibold">{text}</span>
          </div>
        ))}
      </div>

      {/* Dotted Slider Indicator */}
      <div className="flex justify-center space-x-1 mb-3">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === 0 ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4">Mis teid huvitab?</h2>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-3">
        {[
          { img: "/p1.png", text: "Rehvid" },
          { img: "/p2.png", text: "Veljed" },
          { img: "/p3.png", text: "Veljed+Rehvid" },
          { img: "/p4.png", text: "Rehvikoda ja teenused" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg p-3 flex flex-col items-start shadow-md"
          >
            <img
              src={item.img}
              alt={item.text}
              className="w-30 h-30 object-contain mb-1"
            />
            <span className="text-lg font-bold">{item.text}</span>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-6">
        <button className="w-full py-2 bg-orange-500 text-white text-lg font-normal rounded-lg">
          Broneeri teenus
        </button>
      </div>
    </section>
  );
};

export default Hero;
