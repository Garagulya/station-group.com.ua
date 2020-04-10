import React, { useState } from "react";
import Snacks from "./snacks";
import Soups from "./soups";

const Menu = () => {
  const [menuCategory, setMenuCategory] = useState("snacks");
  let SelectedCategory;
  if (menuCategory === "soups") {
    SelectedCategory = Soups;
  } else if (menuCategory === "snacks") {
    SelectedCategory = Snacks;
  }

  return (
    <section className="menu">
      <h2>OUR MENUS</h2>
      <ul className="menu-headers">
        <li className="menu-header" onClick={() => setMenuCategory("snacks")}>
          Закуски
        </li>
        <li className="menu-header" onClick={() => setMenuCategory("soups")}>
          Супы
        </li>
      </ul>
      <SelectedCategory />
    </section>
  );
};

export default Menu;
