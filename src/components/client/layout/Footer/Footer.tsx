import React from "react";
import scss from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer_down}>
          <div className={scss.footer_one}>
            <p>
              <span>By Types</span>
              <br />
              Author’s Tour
              <br />
              Yoga & Retreats
              <br />
              Skiing
              <br />
              Mountain Tour
              <br />
              Fishing
            </p>
          </div>

          <div className={scss.footer_two}>
            <p>
              <span>Secure Payment</span>
              <br />
              Book tours through our <br />
              reliable payment system
            </p>
            <p>
              <span>Well-Planned Spontaneity</span>
              <br />
              Routes can adapt to the group’s preferences
            </p>

            <p>
              <span>Travel Journal</span>
              <br />
              Advantages of author’s tours
              <br />
              Travelers’ reviews
            </p>
          </div>

          <div className={scss.footer_three}>
            <p>
              Travel Journal
              <br />
              Advantages of author’s tours
              <br />
              Travelers’ reviews
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
