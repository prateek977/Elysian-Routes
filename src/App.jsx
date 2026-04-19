import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Features from './components/Features';
import Tours from './components/Tours';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Destinations />
      <Features />
      <Tours />
      <Footer />
    </div>
  );
}

export default App;
