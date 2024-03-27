import React from "react";
import './about.css';
import Me from '../../assets/avatar-1.png';

const About = () => {
  return (
     <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Me} alt="" cla className="about__img" />

        <div className="about__data grid">
            <div className="about__info">
              <p className="about__description">As a Full Stack Web Developer, I design and implement both front-end and back-end solutions. I've actively worked on freelance and personal projects, utilizing languages like TypeScript, JavaScript, HTML, CSS, Node.js, and SQL across various technology stacks.</p>
              {/* <a href="" className="btn">Download CV</a> */}
            </div>
        </div>
      </div>

      {/* <AboutBox /> */}
     </section>
     )
}

export default About;