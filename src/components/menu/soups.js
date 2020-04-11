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
            size
            description {
              description
            }
            photo {
              fixed(width: 220) {
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
      <ul className="menu-items-grid">
        {items.map(({ node }) => {
          return (
            <li key={node.id} className="menu-item">
              <div>
                <h3>{node.title}</h3>
                <span>{node.description.description}.</span>
                <span className="size">{node.size}</span>
              </div>
              {/*<img src={node.photo.fixed.src} alt="soup" />*/}
              <div className="price">
                ₴<strong>{node.price}</strong>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Soups;
