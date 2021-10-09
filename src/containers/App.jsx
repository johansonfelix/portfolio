import Topbar from "../components/topbar/Topbar";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Contact from "../components/contact/Contact";
import About from "../components/about/About";
import "./app.scss";
import {useState} from 'react';
import Menu from "../components/menu/Menu";
import ProjectDialog from "../components/portfolio/projectDialog/ProjectDialog";
function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return ( 
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <About /> 
        <Portfolio />          
        <Contact />

      </div>
    </div>
  );
}

export default App;
