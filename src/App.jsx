import React from 'react';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Services from './pages/services.jsx';
import Testimonial from './pages/testimonial.jsx';
import Contact from './pages/contactus.jsx';
import Blog from './pages/blog.jsx';
import About from './pages/aboutus.jsx';
import Join from './pages/join.jsx';
import Infos from './pages/infos';
import Footer from './components/footer.jsx';
import Resultat from './pages/resultat.jsx';
import Pricing from './pages/pricing.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <Home id="home" />
      <Infos id="home" />
      <About id="about" />
      <Join id="about" />
      <Blog id="blog" />
      <Services id="services" />
      <Resultat />
      <Pricing id="pricing"/>
      <Testimonial id="testimonial" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
