import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Services />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
