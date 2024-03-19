import React from "react";
import './home.css';
import Me from '../../assets/avatar-1.jpg';
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
  return (
     <section className="home container" id="home">
      <div className="intro">
        <img src={Me} width="100" alt="" className="home__img" />
        <h1 className="home__name">Abdelkarim Souhani</h1>
        <span className="home__education">I'm a full stack web developer</span>

        <div className="home__social__container">
        <HeaderSocials />
        </div>

        <a href="#contact" className="btn">Hire Me</a>

        <ScrollDown />
      </div>

      <Shapes />
     </section>
     )
}

export default Home;