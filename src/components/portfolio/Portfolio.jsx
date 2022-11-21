import React, { useState } from "react";
import "./portfolio.css";
import Menu from "./Menu";

const Portfolio = () => {
  const [items, setItems] = useState(Menu);
  const filterItem = (categoryItem) => {
    const updatedItems = Menu.filter((curElement) => {
      return curElement.category === categoryItem;
    });

    setItems(updatedItems);
  };

  return (
    <section className="work container section" id="work">
      <h2 className="section__title">List Projects</h2>

      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem("Website")}>
          Website
        </span>
        <span className="work__item" onClick={() => filterItem("Mobile")}>
          Mobile
        </span>
        <span className="work__item" onClick={() => filterItem("Game")}>
          Game
        </span>
      </div>

      <div className="work__container grid">
        {items.map((element) => {
          const { id, image, title, category, link } = element;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <h4 className="work__link"><a href={link} target="_blank" rel="noreferrer noopener">Preview</a></h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
