import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Menu from "../components/menu/menu";
import Instagram from "../components/instagram";
import LeafletMap from "../components/leafletMap";
import Footer from "../components/footer";
import MainPic from "../images/main";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="mainPic">
        <MainPic />
      </section>
      <section className="container">
        <h2 className="description">СУП - ЕДА</h2>
        {/*<span className="description">*/}
        {/*  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
        {/*  eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
        {/*</span>*/}
        <div className="gallery-grid">
          <Img
            fluid={data.logo.childImageSharp.fluid}
            className="gallery-img1"
          />
          <Img
            fluid={data.team.childImageSharp.fluid}
            className="gallery-img2"
          />
          <Img
            fluid={data.interior.childImageSharp.fluid}
            className="gallery-img3"
          />
        </div>
        <div className="about-grid">
        {/*  <h2>СУП - ЕДА</h2>*/}
        {/*  <p>*/}
        {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do*/}
        {/*    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim*/}
        {/*    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut*/}
        {/*    aliquip ex ea commodo consequat. Duis aute irure dolor in*/}
        {/*    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla*/}
        {/*    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in*/}
        {/*    culpa qui officia deserunt mollit anim id est laborum.*/}
        {/*  </p>*/}
        </div>
      </section>
      {/*<div className="parallax"></div>*/}
      <section className="container">
        <Menu />
        <Instagram />
      </section>
      {typeof window !== "undefined" && (
        <LeafletMap
          position={[46.483343, 30.74877]} // Your Coordinates
          zoom={18} // Zoom Level
          markerText="ул. Канатная, 6, Одесса" // Icon text
        />
      )}
      <Footer />
    </Layout>
  );
};

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 1600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
// coffeeShop: file(relativePath: { eq: "coffee-shop-exterior.jpg" }) {
//   ...fluidImage
// }
export const pageQuery = graphql`
  query {
    interior: file(relativePath: { eq: "interior.jpeg" }) {
      ...fluidImage
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      ...fluidImage
    }
    team: file(relativePath: { eq: "team.jpeg" }) {
      ...fluidImage
    }
  }
`;

export default IndexPage;
