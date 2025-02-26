
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaRegHeart, FaRegUser, FaRegClipboard } from "react-icons/fa";

const Footer = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/search", icon: <FaSearch />, label: "Otsing" },
    { href: "/favorites", icon: <FaRegHeart />, label: "Lemmikud" },
    { href: "/esindused", icon: <FaRegClipboard />, label: "Esindused" },
    { href: "/profile", icon: <FaRegUser />, label: "Profiil", specialColor: "text-blue-500" },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg py-3 px-6 flex justify-between items-center border-t">
      {menuItems.map((item, index) => {
        const isActive = pathname === item.href;
        return (
          <Link 
            key={index} 
            href={item.href} 
            className={`flex flex-col items-center gap-1 ${
              isActive ? "text-blue-500" : "text-gray-700"
            }`}
          >
            <span className="text-orange-500 text-xl">
              {item.icon}
            </span>
            <span className={`${isActive ? "text-blue-500" : index === menuItems.length - 1 ? "text-blue-500" : "text-black"} text-xs font-normal`}>
              {item.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
