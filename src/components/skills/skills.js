import React from "react";
import "./skills.css";
import Html5 from "../../assets/html5.png";
import Css3 from "../../assets/css3.png";
import JavaScript from "../../assets/JavaScript.png";
import CProgramming from "../../assets/C-Programming.png";
import Python from "../../assets/Python.png";
// import React from "../../assets/React.png";
import REACT from "../../assets/React.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of designs and a keen eye for details. I am proficient in
        HTML, CSS, JavaScript, React, C-Programming and Python as well as design
        softwares such as Adobe Photoshop and Illustrator.
      </span>
      <div className="skillsBars">
        <div className="skillBar">
          <img src={Html5} alt="Html5" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Modern Html 5</h2>
            <p>
              Highly proficient in modern HTML5, I have strong skills in this
              area.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Css3} alt="Css3" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Css3</h2>
            <p>I am exceptionally versatile and skilled in CSS3.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={JavaScript} alt="JavaScript" className="skillBarImg" />
          <div className="skillBarText">
            <h2>JavaScript</h2>
            <p>
              Additionally, I possess expertise in JavaScript, both in skill and
              proficiency.
            </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={CProgramming} alt="C-Programming" className="skillBarImg" />
          <div className="skillBarText">
            <h2>C-Programming</h2>
            <p>I am adept and highly proficient in C programming as well.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Python} alt="Python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
            <p>I also possess expertise in Python.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={REACT} alt="React" className="skillBarImg" />
          <div className="skillBarText">
            <h2>React</h2>
            <p>
              I also have a strong command of React. (Excellent command of
              React)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
