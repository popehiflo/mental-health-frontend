import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoriesPopular from './components/CategoriesPopular/CategoriesPopular';
import ServicesPopular from './components/ServicesPopular/ServicesPopular';
import DoctorsPopular from './components/DoctorsPopular/DoctorsPopular';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Home from './pages/Home/Home';

const App = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/#home" element={<Slider />} />
        <Route path="/#popular-categories" element={<CategoriesPopular />} />
        <Route path="/#popular-services" element={<ServicesPopular />} />
        <Route path="/#popular-doctors" element={<DoctorsPopular />} />
      </Route>
      <Route path="/cart" element={<h1 style={{ marginTop: '100px' }}>Cart</h1>} />
      <Route path="/services" element={<h1 style={{ marginTop: '100px' }}>All Services</h1>} />
      <Route path="/services/:category" element={<h1 style={{ marginTop: '100px' }}>Service: category</h1>} />
      <Route path="/services/:serviceId" element={<h1 style={{ marginTop: '100px' }}>Service: service Id</h1>} />
      <Route path="/sign-in" element={<h1 style={{ marginTop: '100px' }}>Sign In</h1>} />
      <Route path="/sign-up" element={<h1 style={{ marginTop: '100px' }}>Sign Up</h1>} />
      <Route path="/admin-panel" element={<h1 style={{ marginTop: '100px' }}>Admin Panel</h1>} />
      <Route path="*" element={<h1 style={{ marginTop: '100px' }}>Page Not Found</h1>} />
    </Routes>

    <Footer />
  </BrowserRouter>
);

export default App;
