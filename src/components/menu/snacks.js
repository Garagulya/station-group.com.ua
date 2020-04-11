import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const Snacks = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMenuItem(
        filter: { category: { title: { eq: "Закуски" } } }
      ) {
        edges {
          node {
            title
            id
            description {
              description
            }
            price
            size
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

export default Snacks;
