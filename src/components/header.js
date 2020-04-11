import React from "react";
import PropTypes from "prop-types";
import Logo from "../images/logo";

const Header = ({ siteTitle }) => (
  <header>
    <span/>
    <Logo />
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
