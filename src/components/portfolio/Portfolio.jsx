import React, { useEffect, useState } from "react";
import './portfolio.css';
import Menu from './Menu';

const Portfolio = ({setProject}) => {
  const [items, setItems] = useState(Menu);
  return (
     <section className="work container section" id="portfolio">
      <h2 className="section__title">Recent Works</h2>

      <div className="work__container grid">
        {items.map((elem) => {
          return(
            <WorkCard elem={elem} key={elem.id} setProject={setProject}/>
          )
        })}
      </div>
     </section>
     )
};

const WorkCard = ({elem,setProject}) => {
  const {id, images, title, category} = elem;
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and loop back to the first image if at the end
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 1000 milliseconds (1 second)

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return <div className="work__card" onClick={() => setProject(elem)}>
  <div className="work__thumbnail">
    <img src={images[imageIndex]} alt="" className="work__img" />
    <div className="work__mask"></div>
  </div>

  <span className="work__category">{category}</span>
  <h3 className="work__title">{title}</h3>
  <p className="work__button">Check it out</p>
</div>
}

export default Portfolio;