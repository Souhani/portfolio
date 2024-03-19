import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import TechStack from './components/stack/Stack';
import Sidebar from './components/sidebar/Sidebar';
import Testimonials from './components/testimonials/Testimonials';
import { useState } from 'react';
import Project from './components/project/Project';

function App() {
  const [project, setProject] = useState(null);
  if(project){
    return (<>
     <Project project={project} setProject={setProject}/>
    </>)
  } else {
    return (
      <>
        <Sidebar />
        <main className='main'>
           <Home />
           <About />
           <TechStack />
           {/* <Resume /> */}
           <Portfolio setProject={setProject}/>
           {/* <Pricing /> */}
           {/* <Testimonials /> */}
           {/* <Blog /> */}
           <Contact />
        </main>
      </>
       )
  };
}

export default App;
