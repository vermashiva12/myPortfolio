import About from "./components/about";
import Cert from "./components/Cert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/home";
import { Navbar } from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/Skills";




function App() {
  return (
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Cert />
      <Projects />
    

      <Contact />
      <Footer /> 
  

       
    
    </div>
  );
}

export default App;
