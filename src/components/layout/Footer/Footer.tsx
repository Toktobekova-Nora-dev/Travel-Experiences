import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer_down}>
          <div className={scss.footer_one}>
            <p>
              <span> По типам</span>
              <br />
              Авторский
              <br />
              Йога и ретриты
              <br />
              Горнолыжный
              <br />
              Тур в горы
              <br />
              Рыбалка
            </p>
          </div>

          <div className={scss.footer_two}>
            <p>
              <span>Безопасная оплата</span>
              <br />
              Бронируйте туры через нашу <br />
              надежную платежную систему
            </p>
            <p>
              <span>Продуманная спонтанность</span>
              <br />
              Маршруты могут адаптироваться под пожелания группы
            </p>

            <p>
              <span>Журнал о путешествиях</span>
              <br />
              Преимущества авторских туров
              <br />
              Отзывы путешественников
            </p>
          </div>

          <div className={scss.footer_three}>
            <p>
              Журнал о путешествиях
              <br />
              Преимущества авторских туров
              <br />
              Отзывы путешественников
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
