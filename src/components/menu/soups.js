import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Soups = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem(filter: { category: { title: { eq: "Супы" } } }) {
        edges {
          node {
            title
            id
            price
            weight
            photo {
              fixed(width: 600) {
                width
                height
                src
                srcSet
              }
            }
            category {
              title
            }
          }
        }
      }
    }
  `);

  const items = data.allContentfulMenuItem.edges;
  return (
    <div>
      <p className="sample">SAMPLE MENU</p>
      <ul className="menu-items-grid">
        {items.map(({ node }) => {
          return (
            <li key={node.id} className="menu-item">
              <h3>{node.title}</h3>
              <span>£{node.price}</span>
              <span>{node.weight} г</span>
              <img src={node.photo.fixed.src} alt="soup" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Soups;
