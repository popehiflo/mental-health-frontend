import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categories from './components/Categories/Categories';
import DoctorsPopular from './components/DoctorsPopular/DoctorsPopular';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Slider from './components/Slider/Slider';

const App = () => (
  <BrowserRouter>
    <Header />

    <Slider />
    <section style={{ padding: '0.5rem' }} />
    <Categories />
    <section style={{ padding: '0.5rem' }} />
    <Services />
    <section style={{ padding: '0.5rem' }} />
    <DoctorsPopular />
    <Footer />

    <Routes>
      <Route path="/" element={<h1 style={{ marginTop: '100px' }}>Home</h1>} />
      <Route path="/cart" element={<h1 style={{ marginTop: '100px' }}>Cart</h1>} />
      <Route path="/services" element={<h1 style={{ marginTop: '100px' }}>All Services</h1>} />
      <Route path="/services/:category" element={<h1 style={{ marginTop: '100px' }}>Service: category</h1>} />
      <Route path="/services/:serviceId" element={<h1 style={{ marginTop: '100px' }}>Service: service Id</h1>} />
      <Route path="/sign-in" element={<h1 style={{ marginTop: '100px' }}>Sign In</h1>} />
      <Route path="/sign-up" element={<h1 style={{ marginTop: '100px' }}>Sign Up</h1>} />

      <Route path="/admin-panel" element={<h1 style={{ marginTop: '100px' }}>Admin Panel</h1>} />

      <Route path="*" element={<h1 style={{ marginTop: '100px' }}>Page Not Found</h1>} />
    </Routes>
  </BrowserRouter>
);

export default App;
