import React, { useRef } from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Adobe from "../../assets/adobe.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YouTubeIcon from "../../assets/youtube.png";
import instagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_r912hdh",
        "template_vedubec",
        form.current,
        "nuD7bBlH-U4YYzAWd"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity of working with a diverse group of
          companies. Some of the notable companies I have worked with includes
        </p>
        <div className="clientImgs">
          <img src={Walmart} alt="" className="clientImg" />
          <img src={Adobe} alt="" className="clientImg" />
          <img src={Microsoft} alt="" className="clientImg" />
          <img src={Facebook} alt="" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work opportunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <img src={FacebookIcon} alt="Facebook" className="link" />
            <img src={TwitterIcon} alt="Twitter" className="link" />
            <img src={YouTubeIcon} alt="YouTube" className="link" />
            <img src={instagramIcon} alt="instagram" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
