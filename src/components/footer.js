import React from "react";

const Footer = () => {
  return (
    <footer>
      <section>
        <div className="address">
          <h3>ГДЕ МЫ?</h3>
          <span>ул. Канатная, 6</span>
          <span>Одесса</span>
        </div>
        <div className="hours">
          <h3>ЧАСЫ РАБОТЫ</h3>
          <span>Понедельник - Суббота</span>
          <span>11:00 - 19:00</span>
        </div>
        <div className="contact">
          <h3>КОНТАКТЫ</h3>
          <span>066 513 1461</span>
          <a
            href="https://www.instagram.com/soup.station.factory/"
            target="_blank"
            rel="noopener noreferrer"
          >
            @soup.station.factory
          </a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
