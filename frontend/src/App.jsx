import Nav from '../src/components/navbar/navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Service from './pages/services'
import AboutUs from './pages/aboutus'
import Login from './pages/login'
import Footer from './components/footer/footer'
import './App.css'


const App = () => {
  return (
    <div className="Main">
      <Nav />
      <div className="container">
        <Routes>
          <Route  path="/home/home.jsx" element={<Home />}></Route>        
          <Route  path="/services.jsx" element={<Service />}></Route>
          <Route  path="/aboutus.jsx" element={<AboutUs />}></Route>
          <Route  path="/login.jsx" element={<Login />} ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
