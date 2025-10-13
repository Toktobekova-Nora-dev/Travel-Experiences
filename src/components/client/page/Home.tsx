import React from "react";
import scss from "./Home.module.scss";
import heroImage from "../../../public/roys-peak-track.webp";
const Home = () => {
  return (
    <section
      className={scss.hero}
      style={{
        backgroundImage: `url(${"https://24.kg/files/media/257/257252.jpg"})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={scss.hero_block}>
        <div className={scss.box}>
          <h1>
            Unique travel
            <br />
            experiences
          </h1>
          <button className={scss.btn}>Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
