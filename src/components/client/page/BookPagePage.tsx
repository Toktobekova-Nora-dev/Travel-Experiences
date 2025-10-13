import React from "react";
import scss from "./BookPagePage.module.scss";

const destinations = [
  {
    name: "Bishkek",
    img: "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQP8ltVzTgyt31grKtiT_75bWBBDwPqm8qb2Z4q784aH2kb3kVeZgbLaZTAOLLRzzpT2jGtwBcyCjm8bAzRVXpI8mxald0r",
  },
  {
    name: "Issyk-Kul",
    img: "https://www.advantour.com/img/kyrgyzstan/bishkek/ala-too-square10.jpg",
  },
  {
    name: "Karakol",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c7/90/94/caption.jpg?w=500&h=400&s=1",
  },
  {
    name: "Ala-Archa",
    img: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcR4j9N6CuZr0-HJrvGbupz6vCkCRoSb_FGg2OXHgb5FzLEkNz49INtBwdAHMxlOMKFnRGVzQgdw-sb_NzSoUFZRDLl6YcTU",
  },
];

const BookPagePage = () => {
  return (
    <div className={scss.wrapper}>
      {/* HERO */}
      <section className={scss.hero}>
        <div className={scss.heroOverlay}></div>
        <div className={scss.heroContent}>
          <h1>Kyrgyzstan</h1>
          <p>
            Explore breathtaking mountains, turquoise lakes, and ancient culture
            in the heart of Central Asia.
          </p>
          <div className={scss.buttons}>
            <button className={scss.primary}>Book Hotel</button>
            <button className={scss.outline}>Routes</button>
            <button className={scss.outline}>Add to Favorites</button>
          </div>
        </div>
      </section>

      {/* INFO BAR */}
      <section className={scss.infoBar}>
        <div className="container">
          <span>☀️ 22°C</span>
          <span>🗓 May–September</span>
          <span>🗣 Kyrgyz / Russian</span>
          <span>💰 Som (KGS)</span>
          <span>🕒 GMT+6</span>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}
      <section className="container">
        <h2 className={scss.sectionTitle}>Popular Destinations</h2>
        <div className={scss.cards}>
          {destinations.map((dest, i) => (
            <div key={i} className={scss.card}>
              <img src={dest.img} alt={dest.name} />
              <h3>{dest.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BookPagePage;
