import React, { useState } from "react";
import './stack.css';
import { StackMenu } from "../portfolio/Menu";
import { SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiRedis } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiDocker } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaNpm } from "react-icons/fa";
import { SiJsonwebtokens } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const EJS = () => {
  return <h1  style={{color:"var(--text--color)"}}>EJS</h1>
}

const stack = [
   {
    name: "Typescript",
    percentage: 90,
    cat: ["b","f"],
    icon: SiTypescript,
   },
   {
    name: "JavaScript",
    percentage: 94,
    cat: ["f"],
    icon: SiJavascript
   },
   {
    name: "HTML",
    percentage: 94,
    cat: ["f"],
    icon: SiHtml5
   },
   {
    name: "CSS",
    percentage: 93,
    cat: ["f"],
    icon: SiCss3
   },
   {
    name: "Node.js",
    percentage: 92,
    cat: ["b"],
    icon: FaNodeJs
   },
   {
    name: "React.js",
    percentage: 92,
    cat: ["f"],
    icon: SiReact
   },
   {
    name: "Express.js",
    percentage: 93,
    cat: ["b"],
    icon: SiExpress
   },
   {
    name: "Next.js",
    percentage: 95,
    cat: ["f"],
    icon: SiNextdotjs
   },
   {
    name: "Mongodb",
    percentage: 92,
    cat: ["d"],
    icon: SiMongodb
   },
   {
    name: "Redis",
    percentage: 92,
    cat: ["d"],
    icon: SiRedis
   },
   {
    name: "Postgresql",
    percentage: 60,
    cat: ["d"],
    icon: SiPostgresql
   },
   {
    name: "Git",
    percentage: 85,
    cat: ["vc"],
    icon: FaGitAlt
   },
   {
    name: "Docker",
    percentage: 87,
    cat: ["dc"],
    icon: SiDocker
   }, 
   {
    name: "GitHub",
    percentage: 90,
    cat: ["dc"],
    icon: SiGithub
   },
   {
    name: "Vercel",
    percentage: 95,
    cat: ["dc"],
    icon: SiVercel
   },
   {
    name: "Heroku",
    percentage: 90,
    cat: ["dc"],
    icon: SiHeroku
   },
   {
    name: "Redux/Redux Toolkit",
    percentage: 75,
    cat: ["f"],
    icon: SiRedux
   },
   {
    name: "Tailwind CSS",
    percentage: 80,
    cat: ["f"],
    icon: SiTailwindcss
   },
   {
    name: "Styled-components",
    percentage: 80,
    cat: ["f"],
    icon: SiStyledcomponents
   },
   {
    name: "NPM",
    percentage: 90,
    cat: ["f","b"],
    icon: FaNpm
   },
   {
    name: "JWT",
    percentage: 86,
    cat: ["b"],
    icon: SiJsonwebtokens
   },
   {
    name: "REST API",
    percentage: 90,
    cat: ["a"],
    icon: TbApi
   },
   {
    name: "WebSocket API(socket.io)",
    percentage: 50,
    cat: ["a"],
    icon: SiSocketdotio
   },
   {
    name: "EJS",
    percentage: 70,
    cat: ["b"],
    icon: EJS
   },
];

const TechStack = () => {
  const [items, setItems] = useState(stack);
  const [stackFilter, setStackFilter] = useState("e");
  const filterItem = (c) => {
    setStackFilter(c)
    setItems(stack.filter( item => item.cat.includes(c)));
  }
  return (
     <section className="services container section" id="services">
      <h2 className="section__title">Tech Stack</h2>
      <div className="work__filters">
        <span className={stackFilter==="e" ? "active__tech__item" : "tech__item"} onClick={ () => {setItems(stack); setStackFilter("e")}}>Everything</span>
        <span className={stackFilter==="f" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("f")}}>Frontend</span>
        <span className={stackFilter==="b" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("b")}}>Backend</span>
        <span className={stackFilter==="d" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("d")}}>Database</span>
        <span className={stackFilter==="vc" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("vc")}}>Version Control</span>
        <span className={stackFilter==="a" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("a")}}>API</span>
        <span className={stackFilter==="dc" ? "active__tech__item" : "tech__item"} onClick={ ()=> {filterItem("dc")}}>Deployment and Containerization</span>
      </div>

      <div className="services__container grid">
        {/* {data.map(({id, image, title, description}) => {
          return(
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
          </div>
          )
        })} */}

<div className="stack">
<div className="about__skills grid ">
   {items.map((s, index) => (
                <div key={index} className="singleStack">
                  <div >{<s.icon size={40}/>}</div>
                  <div  className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">{s.name}</h3>
                    <span className="skills__number">{s.percentage}%</span>
                  </div>
  
                  <div className="skills__bar">
                    <span className="skills__percentage" style={{ width: `${s.percentage}%`,  backgroundColor: `#008080a1`}}></span>
                  </div>
                </div>
                </div>
   ))}
            </div>
</div>
      </div>
     </section>
     )
}




export default TechStack;