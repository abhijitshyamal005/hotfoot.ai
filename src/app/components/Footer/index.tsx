import { FaTwitter } from "react-icons/fa";
import { FaGamepad } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div>
          <div className="flex items-center space-x-1">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 p-1 rounded-lg">
              ✏️
            </span>
            <h2 className="text-2xl font-bold">Magic UI</h2>
          </div>
          <p className="text-white mt-2">UI Library for Design Engineers</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9 mt-6 md:mt-0">
          <div>
            <h3 className="text-sm font-semibold text-white">PRODUCT</h3>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li>Email Collection</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">COMMUNITY</h3>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li>Discord</li>
              <li>Twitter</li>
              <li>Email</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">LEGAL</h3>
            <ul className="mt-6 space-y-3 text-gray-400">
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-10  pt-4 px-16 pb-2 -mb-5">
        <div className="flex space-x-4 text-[#9CA3AF]">
          <FaGamepad className="w-5 h-5" />
          <FaTwitter className="w-5 h-5" />
        </div>
        <p className="text-[#9CA3AF] text-sm font-semibold">
          Copyright © 2024 Magic UI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
