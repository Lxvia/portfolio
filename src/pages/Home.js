import React from "react";
import olivia from "../assets/images/oliviaportfolio.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <img src={olivia} alt="photo de olivia" />
      </div>
      <div className="home-right">
        <h1>
          <span>Olivia,</span>
          <br />
          Developpeuse<br/> Full Stack &<br /> Web designer
        </h1>
        <div>
          <button>Contact</button>
          <a href="/">Télécharger mon cv</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
