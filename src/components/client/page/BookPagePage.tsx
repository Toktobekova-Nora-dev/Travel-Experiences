import React from "react";
import scss from "./BookPagePage.module.scss";
const BookPagePage = () => {
  return (
    <section
      className={scss.hero}
      style={{
        backgroundImage: `url(${"https://lh3.googleusercontent.com/gps-cs-s/AC9h4noaSIccV-cKtuIacJoRM5HCiVDWjI-BMXzPXfcOo2iXUXs0kn2iiT5NH5Z4m_dCj9IH9HJfl5TxhxpRl3e-Fu4N4pAR4JY3m81209hUyaLuejYwpmdyQ0aFvTOWxXQ98KI0deWk=s680-w680-h510-rw"})`,
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

export default BookPagePage;
