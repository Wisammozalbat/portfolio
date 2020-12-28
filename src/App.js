import './Global.css';
import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Technologies from './pages/Technologies/Technologies'
import ProjectItems from './pages/Projects/ProjectItems/ProjectItems';

import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

function App() {

  const [ aboutRef, aboutInView ] = useInView({
    threshold: 0.3,
  });
  const [ technologiesRef, technologiesInView ] = useInView({
    threshold: 0.5,
  });
  const [ projectsRef, projectsInView ] = useInView({
    threshold: 0.5,
  });
  const [ contactRef, contactInView ] = useInView({
    threshold: 0.5,
  });

  const [activeLink, setActiveLink] = useState("about");

  useEffect(() => {
    if (contactInView) {
      setActiveLink("contact");
    } else if (projectsInView) {
      setActiveLink("projects");
    } else if (technologiesInView) {
      setActiveLink("technologies");
    } else if (aboutInView) {
      setActiveLink("about");
    }
  }, [aboutInView, technologiesInView, projectsInView, contactInView])

  return (
    <div className="container">
      <Header activeLink={activeLink} />
      <section className="about" ref={aboutRef} id="about"><About isVisible={activeLink === 'about'}/></section>
      <section className="technologies" ref={technologiesRef} id="technologies"><Technologies /></section>
      <section className="projects" ref={projectsRef} id="projects"><ProjectItems /></section>
      <section className="contact" ref={contactRef} id="contact"><Contact /></section>
      <section className="footer" id="footer"><Footer /></section>
    </div>
  );
}

export default App;
