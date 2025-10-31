"use client";

import {
  Award,
  Mail,
  MapPin,
  Mountain,
  Phone,
  Shield,
  Star,
  Users,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-5 bg-[#103424]">
      <div className="container">
        <div className="content text-[#dfdfdf]">
          <div className="flex items-center w-full gap-1 logo">
            <Mountain className="w-10 h-10 text-green-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                <span className="text-green-600 ">Sayakat</span>
              </h1>
            </div>
          </div>
          <span className="">
            Your trusted partner for authentic Kyrgyzstan adventures. We create
            unforgettable experiences in the heart of Central Asia.
          </span>
          <div className="grid w-full grid-cols-2 mt-5 lg:grid-cols-3">
            <li className="flex flex-col gap-2">
              {" "}
              Quick Links
              <a href="">About Us</a>
              <a href="">Our tours</a>
              <a href="">Destinations</a>
              <a href="">Travel blog</a>
              <a href="">Reviews</a>
              <a href="">FAQ</a>
            </li>
            <li className="flex flex-col gap-3">
              <a
                href=""
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <MapPin className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm ">Chuy Avenue 123</p>
                <p className="text-sm ">Bishkek, Kyrgyzstan</p>
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Phone className="flex-shrink-0 w-5 h-5 text-green-400" />
                +996 555 123 456
              </a>
              <a
                href=""
                className="flex items-center gap-3 text-sm transition-colors hover:text-white"
              >
                <Mail className="flex-shrink-0 w-5 h-5 text-green-400" />
                info@kyrgyztravel.com
              </a>
            </li>
          </div>

          <p className="w-full text-sm text-center">
            © 2025 KyrgyzTravel. All rights reserved. Made with ❤️ by Nora
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
