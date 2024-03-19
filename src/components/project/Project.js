import React, { useEffect, useState } from 'react'
import "./project.css"

function Project({project, setProject}) {
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior: 'smooth'
    })
  },[])
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current image index, and loop back to the first image if at the end
      setImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2000); // Change image every 1000 milliseconds (1 second)

    // Clear the interval when the component unmounts to prevent memory leaks
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount
  return (
    <div className='project__container'>
        <h2 className="leave__project" onClick={() => setProject(null)}>X</h2>
        <h1 className='project__name'> {project.title}:</h1>
        <div className='project__img'>
        <a href={project.live[0].url} target='blank'>
        <img src={project.images[imageIndex]} className='img'/>
  </a>
        </div>
        <div>
        <div className='project_content_container'>
            {
             project.usage && <div> 
               <div className='project_titles'>Instructions:</div>
              <div className='project__contents'>{project.usage.map((i, index)=> (
                  <p key={index}>
                     {i}
                  </p>
              ))}</div>
             </div>
            }
        </div>
        <div className='project_content_container flex'>
            <div className='project_titles'>Project Live:</div>
           {project.live.map((item, index) => (
              <div key={index} className='project__contents'>
                 <div className='project_live'>
                 <p>{item.title}:</p>
              <a href={item.url} target="_blank" className="project__live__button">
              <i className="icon-link project__button-icon"></i>
    </a>
                 </div>
              </div>
           ))
           }
        </div>
          {
            project.code &&         <div className='project_content_container flex'>
            <div className='project_titles'>Project Code:</div>
           {project.code.map((item, index) => (
              <div key={index} className='project__contents'>
                 <div className='project_live'>
                 <p>{item.title}:</p>
              <a href={item.url} target="_blank" className="project__code__button">
              <i className="icon-link project__button-icon"></i>
    </a>
                 </div>
              </div>
           ))
           }
        </div>
          }
        <div className='project_content_container'>
            <div className='project_titles'>Project Stack:</div>
            <div className='project__contents'>{project.stack}</div>
        </div>
        <div className='project_content_container '>
            <div className='project_titles'>What makes this project special:</div>
            <div className='project__contents'>{project.special}</div>
        </div>
        </div>
        </div>
  )
}

export default Project