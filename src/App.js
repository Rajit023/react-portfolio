
import './App.css';
import { Hero } from './Components/hero/Hero';
import { AboutMe } from './Components/sections/about-me/AboutMe';
import { Footer } from './Components/sections/footer/Footer';
import { Projects } from './Components/sections/projects/Projects';
import { Skills } from './Components/sections/skills/Skills';





function App() {
  return (
    <div>
      <Hero />
        <Skills />
        <Projects />
        <AboutMe />
        <Footer />

      </div>
    
  );
};

export default App;
