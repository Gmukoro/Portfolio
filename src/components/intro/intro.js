import React from "react";
import "./intro.css";
import bg from "../../assets/Meself.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <br />
        <span className="introText">
          I'm <span className="introName">Godspower</span>
          <br />
          Software Engineer
        </span>
        <p className="introPara">
          I am a skilled Software Engineer with experience in creating
          <br /> visually appealing and user friendly websites and applications
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire me
          </button>
        </Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
