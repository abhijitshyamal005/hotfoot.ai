import Image from "next/image";
import { FiMapPin, FiGlobe, FiBell, FiWifi } from "react-icons/fi";
import { BsBatteryFull } from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import { TbLocation } from "react-icons/tb";

const Header = () => {
  return (
    <div className="bg-white  mt-3">
      {/* Top Layer - Time and Status Icons */}
      <div className="flex justify-between px-4 py-1 text-black text-sm">
        <span className="font-semibold">9:41</span>
        <div className="flex items-center space-x-2 text-gray-800">
          <FaSignal  size={16} />
          <FiWifi size={16} />
          <BsBatteryFull size={18} />
        </div>
      </div>

      {/* Bottom Layer - Logo & Navigation */}
      <header className="flex justify-between items-center px-4 py-2">
        {/* Left: Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <Image src="/icon.png" alt="Rattad24 Logo" width={32} height={32} />
          <span className="text-2xl font-bold text-black">Rattad24</span>
        </div>

        {/* Right: Location, Language, Notifications */}
        <div className="flex items-center space-x-4 text-orange-500">
          <div className="flex items-center space-x-1">
            <TbLocation size={18} />
            <span className="text-black font-normal">Eesti</span>
          </div>
          <FiGlobe size={20} />
          <div className="relative">
            <FiBell size={22} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              1
            </span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
