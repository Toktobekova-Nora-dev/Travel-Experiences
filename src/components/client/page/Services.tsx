"use client";
import React from "react";
import scss from "./Services.module.scss";
import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className={scss.wrapper}>
      <div className="container">
        <div className={scss.content}>
          <h1>
            The heritage lands <br /> of Kyrgyzstan
          </h1>
          <div className={scss.bord}>
            <div className={scss.box}>
              <div className={scss.hr}></div>

              <h2>Son-Kul Lake</h2>
              <p>
                A breathtaking high-altitude lake surrounded by pastures and
                yurts.
              </p>
            </div>
            <div className={scss.box}>
              <div className={scss.hr}></div>

              <h2>Son-Kul Lake</h2>
              <p>
                A breathtaking high-altitude lake surrounded by pastures and
                yurts.
              </p>
            </div>
            <div className={scss.box}>
              <div className={scss.hr}></div>

              <h2>Son-Kul Lake</h2>
              <p>
                A breathtaking high-altitude lake surrounded by pastures and
                yurts.
              </p>
            </div>
            <div className={scss.box}>
              <div className={scss.hr}></div>

              <h2>Son-Kul Lake</h2>
              <p>
                A breathtaking high-altitude lake surrounded by pastures and
                yurts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
