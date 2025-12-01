import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import AboutUs from '@/pages/AboutUs';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Packages from '@/pages/Packages';

const AppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  );
};

export default AppLayout;
