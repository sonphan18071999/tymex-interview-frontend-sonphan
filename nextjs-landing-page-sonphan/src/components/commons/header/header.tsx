"use client";
import { useState } from "react";
import { Button } from "antd";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuConfigs: MenuConfig[] = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Our Team", link: "/team" },
    { name: "Market Place", link: "/market" },
    { name: "Road Map", link: "/roadmap" },
    { name: "White Paper", link: "/whitepaper" },
  ];

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <nav className="hidden md:flex space-x-6">
          {menuConfigs.map((menu, index) => (
            <a
              key={index}
              href={menu.link}
              className="relative text-lg font-medium hover:text-gray-400 transition duration-300"
            >
              {menu.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>
        <Button type="primary">Connect Wallet</Button>
      </div>
    </header>
  );
};

interface MenuConfig {
  name: string;
  link: string;
}

export default Header;
