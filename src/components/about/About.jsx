import React from "react";
import './about.css';
import Me from '../../assets/avatar-1.jpg';
import AboutBox from "./AboutBox";

const About = () => {
  return (
     <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" cla className="about__img" />

        <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">I am Abdelkarim Souhani, a full-stack web developer passionate about transforming concepts into digital solutions. Currently, I am actively seeking opportunities to contribute my expertise with a startup, business, or enterprise. With a focus on empowering teams through effective, high-performance web development, I aim to assist employers in bringing their ideas and business objectives to life using web development solutions.</p>
              {/* <a href="" className="btn">Download CV</a> */}
            </div>
        </div>
      </div>

      {/* <AboutBox /> */}
     </section>
     )
}

export default About;