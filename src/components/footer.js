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
          <span>12:00 - 18:00</span>
        </div>

        <div className="contact">
          <h3>ДОСТАВКА</h3>
          <a
            href="https://t.me/SupstanciyaBot"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram-bot
          </a>
          или
          <a href="tel:066-513-1461">066 513 1461</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
