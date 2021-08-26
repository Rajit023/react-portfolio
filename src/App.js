
import './App.css';
import { Hero } from './Components/hero/Hero';
import { AboutMe } from './Components/sections/about-me/AboutMe';
import { Footer } from './Components/sections/footer/Footer';
import { Projects } from './Components/sections/projects/Projects';
import { Skills } from './Components/sections/skills/Skills';
import {MainLayout} from './Components/layout/MainLayout'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { Contact } from './Components/contact/Contact';



function App() {
  return (
    <div>
      <Router>
        <Switch>
        <MainLayout>
        <Route exact path="/skills" children={<Skills />} />

        <Route exact path="/projects" children={<Projects />} />

        <Route exact path="/about-me" children={<AboutMe />} />
        <Route exact path="/contact" children={<Contact />} />
        <Route exact path="/" children={<Hero />} />
        
        </MainLayout>
        </Switch>
        </Router>
      </div>
    
  );
};

export default App;
