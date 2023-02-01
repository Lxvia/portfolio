import React from "react";
import olivia from "../assets/images/oliviaportfolio.png";
import oliviaCV from "../assets/download/oliviaCV.pdf";
import Popup from "reactjs-popup";
import PopupContact from '../components/PopupContact';

const Home = () => {
  const Modal = () => (
    <Popup trigger={<button className="btn-contact"> Contact</button>} modal>
      <PopupContact/>
    </Popup>
  );

  return (
    <div className="home">
      <div className="home-left">
        <img src={olivia} alt="portrait de olivia" />
      </div>
      <div className="home-right">
        <h1>
          <span>Olivia,</span>
          <br />
          Developpeuse
          <br /> Full Stack &<br /> Web designer
        </h1>
        <div>
          <Modal/>
          <a href={oliviaCV} download={oliviaCV}>
            Télécharger mon cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
