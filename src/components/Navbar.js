import React from "react";
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

const Navbar = () => {
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
        <p></p>
    </div>
  );
};

export default Navbar;
