import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features.jsx';
import Testimonial from './components/Testimonial';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import Front from './components/Front.jsx';
import Services from './components/Services.jsx';
import AboutUs from './components/AboutUs.jsx';
import WhatsappWidget from './components/WhatsappWidget.jsx'
 
function App() {
  return (
    <BrowserRouter>
      <WhatsappWidget/>
      <Navbar />
      <Hero />
      <Testimonial />
      <Features />
      <Front/>
      <Services />
      <AboutUs/>
      <CallToAction />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
