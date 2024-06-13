import Nav from './navbar/navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home'
import Service from './pages/services'
import AboutUs from './pages/aboutus'
import Login from './pages/login'
import Footer from './footer/footer'
import './App.css'


const App = () => {
  return (
    <div className="Main">
      <Nav />
      <div className="container">
        <Routes>
          <Route  path="/home" element={<Home />}></Route>
          {/* <Route  path="/home" element={<Home />}></Route> */}
          <Route  path="/services" element={<Service />}></Route>
          <Route  path="/aboutus" element={<AboutUs />}></Route>
          <Route  path="/login" element={<Login />} ></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
