import React from "react";
import PropTypes from "prop-types";

const Header = ({ siteTitle }) => (
  <header>
    <span>{siteTitle}</span>
    <img src="../images/logo.png" alt='logo' />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
