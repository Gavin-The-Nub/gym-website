"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction and visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px - hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="glass-card flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Golden 8 Fitness Gym"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-300 hover:text-[#FFD700] transition-colors">About</a>
            <a href="#programs" className="text-gray-300 hover:text-[#FFD700] transition-colors">Programs</a>
            <a href="#pricing" className="text-gray-300 hover:text-[#FFD700] transition-colors">Pricing</a>
            <a href="#trainers" className="text-gray-300 hover:text-[#FFD700] transition-colors">Trainers</a>
            <a href="#contact" className="text-gray-300 hover:text-[#FFD700] transition-colors">Contact</a>
          </div>

          {/* CTA Button */}
          <a href="#pricing" className="btn-primary text-sm py-2 px-5">
            Join Now
          </a>
        </div>
      </div>
    </nav>
  );
}
