import Nav from '../src/components/navbar/navbar'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home'
import Service from './pages/services'
import AboutUs from './pages/aboutus'

const App = () => {
  return (
    <div className="Main">
      <Nav />
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/home.jsx" element={<Home />}></Route>
        <Route  path="/services.jsx" element={<Service />}></Route>
        <Route  path="/aboutus.jsx" element={<AboutUs />}></Route>
      </Routes>
    </div>
  );
};

export default App;
