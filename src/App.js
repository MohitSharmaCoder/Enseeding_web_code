import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
// import WaterWave from './components/WaterWave';
import Carousel from './components/Carousel';
import About from './components/About';
import Services from './components/Services';
import FunFact from './components/FunFact';
import Pricing from './components/Pricing';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
              <Route exact path="/" element={
                <div>
                <Hero/>
                 {/* <WaterWave/> */}
                <Carousel/>
                <About/>
                <Services/>
                <FunFact/>
                <Pricing/>
                <Blog/>
                </div>
              } />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
