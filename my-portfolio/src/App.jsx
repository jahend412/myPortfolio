import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyMovieCase from './components/caseStudy/myMovie';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

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
                  <About />
                  <Projects />
                </>
              }
            />

            <Route path="/caseStudy/myMovie" element={<MyMovieCase />} />
          </Routes>
        </div>
      </BrowserRouter>
      <div />
    </>
  );
}

export default App;
