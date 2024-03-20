import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';
import TechStack from './components/stack/Stack';
import Sidebar from './components/sidebar/Sidebar';
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
           <Portfolio setProject={setProject}/>
           <Contact />
        </main>
        <a style={{color:"red", textAlign:"center", width:"100%" ,display:"flex", justifyContent:"center", marginBottom:"10px"}}>Made With ❤️ By Souhani</a>
      </>
       )
  };
}

export default App;
