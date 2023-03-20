import React, { useContext, useEffect, useState } from "react";
import Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { ThemeContext } from "../contexts/ThemeContext";



const Navbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(!theme)
    console.log(theme);
  };

  return (
    <div className="navbar">
      <h1>olivia.</h1>
      <div className="navlinks">
        <Link
          className="navlink"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
        >
          accueil
        </Link>
        <Link
          className="navlink"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          à propos
        </Link>
        <Link
          className="navlink"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
        >
          projets
        </Link>
      </div>
      <DarkModeSwitch
              checked={theme}
              onChange={toggleTheme}
              sunColor="#272727"
              moonColor="#feeb7b"/>
    </div>
  );
};

export default Navbar;
