"use client";
import Image from "next/image";
import React, { useState } from "react";
import Img from "../../../../../public/logo.png";
import scss from "./Header.module.scss";
import {
  ChevronDown,
  Globe,
  Mail,
  Menu,
  Mountain,
  Phone,
  X,
} from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    // <header className={scss.header}>
    //   <div className={scss.hero}>
    //     <a id={scss.logo} href="">
    //       Sayakat
    //     </a>
    //     <nav aria-label="Main navigation">
    //       <ul>
    //         <li>
    //           <a href="/">Home</a>
    //         </li>
    //         <li>
    //           <a href="/destinations">Destinations</a>
    //         </li>
    //         <li>
    //           <a href="/booking">Booking</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="text-sm text-white bg-green-900">
        <div className="flex flex-wrap items-center justify-between gap-2 px-4 py-2 mx-auto max-w-7xl">
          <div className="flex items-center gap-4">
            <a
              href="tel:+996555123456"
              className="flex items-center gap-2 transition-colors hover:text-green-200"
            >
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+996 555 123 456</span>
            </a>
            <a
              href="mailto:info@kyrgyztravel.com"
              className="flex items-center gap-2 transition-colors hover:text-green-200"
            >
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@kyrgyztravel.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Globe className="w-3 h-3" />
              <select className="text-xs text-white bg-transparent border-none cursor-pointer focus:outline-none">
                <option value="en" className="text-gray-900">
                  English
                </option>
                <option value="ru" className="text-gray-900">
                  Русский
                </option>
                <option value="ky" className="text-gray-900">
                  Кыргызча
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-4 mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Mountain className="w-10 h-10 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-green-600">Sayakat</span>
              </h1>
            </div>
          </div>

          <nav className="items-center hidden gap-8 lg:flex">
            <a
              href="/"
              className="font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Home
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Tours
            </a>
            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 transition-colors hover:text-green-600">
                Destinations <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-0 invisible w-48 mt-2 transition-all bg-white rounded-lg shadow-xl opacity-0 top-full group-hover:opacity-100 group-hover:visible">
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 transition-colors rounded-t-lg hover:bg-green-50 hover:text-green-600"
                >
                  Song-Kol Lake
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
                >
                  Ala-Archa Park
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 transition-colors hover:bg-green-50 hover:text-green-600"
                >
                  Issyk-Kul Lake
                </a>
                <a
                  href="#"
                  className="block px-4 py-3 text-gray-700 transition-colors rounded-b-lg hover:bg-green-50 hover:text-green-600"
                >
                  Silk Road Sites
                </a>
              </div>
            </div>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Contact
            </a>
          </nav>

          <a
            href="/booking"
            className="hidden lg:block bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Book Now
          </a>
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-700 lg:hidden hover:text-green-600"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="pt-4 pb-4 mt-4 border-t lg:hidden">
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Home
            </a>
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Tours
            </a>
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Destinations
            </a>
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              About Us
            </a>
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Blog
            </a>
            <a
              href="#"
              className="block py-2 font-medium text-gray-700 transition-colors hover:text-green-600"
            >
              Contact
            </a>

            <button className="w-full mt-4 bg-green-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Book Now
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
