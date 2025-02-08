import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMovieCase from './components/caseStudy/myMovie';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DinBallyhooCaseStudy from './components/caseStudy/DinBallyhoo';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />

                  <Projects />
                  <Contact />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/caseStudy/myMovie" element={<MyMovieCase />} />
            <Route
              path="/caseStudy/DinBallyhoo"
              element={<DinBallyhooCaseStudy />}
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      <div />
    </>
  );
}

export default App;
