import React from "react";
import olivia from "../assets/images/oliviaportfolio.png";
import Button from "../components/Button";
import oliviaCV from "../assets/download/oliviaCV.pdf"

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <img src={olivia} alt="portrait de olivia" />
      </div>
      <div className="home-right">
        <h1>
          <span>Olivia,</span>
          <br />
          Developpeuse<br/> Full Stack &<br /> Web designer
        </h1>
        <div>
          <Button>Contact</Button>
          <a href={oliviaCV} download={oliviaCV}>Télécharger mon cv</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
