import Image from "next/image";
import React from "react";
import Img from "../../../../../public/logo.png";
import scss from "./Header.module.scss";
const Header = () => {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.hero}>
          <Image
            className={scss.img}
            src={Img}
            alt="img"
            style={{ objectFit: "cover" }}
            width={50}
          />
          <nav aria-label="Main navigation">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/destinations">Destinations</a>
              </li>
              <li>
                <a href="/book">Booking</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
