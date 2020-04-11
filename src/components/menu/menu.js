import React, { useState } from "react";
import Snacks from "./snacks";
import Soups from "./soups";
import BigSoups from "./bigSoups";

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("snacks");
  let SelectedCategory;
  if (menuCategory === "soups") {
    SelectedCategory = Soups;
  } else if (menuCategory === "snacks") {
    SelectedCategory = Snacks;
  } else if (menuCategory === "bigSoups") {
    SelectedCategory = BigSoups;
  }

  return (
    <section className="menu">
      <h2>НАШЕ МЕНЮ</h2>
      <ul className="menu-headers">
        <li
          className={`menu-header${menuCategory === "snacks" ? " active" : ""}`}
          onClick={() => setMenuCategory("snacks")}
        >
          Закуски
        </li>
        <li
          className={`menu-header${menuCategory === "soups" ? " active" : ""}`}
          onClick={() => setMenuCategory("soups")}
        >
          Супы
        </li>
        <li
          className={`menu-header${
            menuCategory === "bigSoups" ? " active" : ""
          }`}
          onClick={() => setMenuCategory("bigSoups")}
        >
          Меню для большого обеда
        </li>
      </ul>
      <SelectedCategory />
    </section>
  );
};

export default Menu;
