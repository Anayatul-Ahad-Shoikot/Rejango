// import Nav from './navbar/navbar'
// import { Route, Routes } from 'react-router-dom';
// import Home from './pages/home/home'
// import Service from './pages/services'
// import AboutUs from './pages/aboutus'
// import Login from './pages/login'
// import Footer from './footer/footer'
// import './App.css'


// export default class App extends Component {
//   constructor(props){
//       super(props);
//   }

//   render(){
//     return (
//       <div className="Main">
//         <Nav />
//         <div className="container">
//           <Routes>
//             <Route  path="/home" element={<Home />}></Route>
//             {/* <Route  path="/home" element={<Home />}></Route> */}
//             <Route  path="/services" element={<Service />}></Route>
//             <Route  path="/aboutus" element={<AboutUs />}></Route>
//             <Route  path="/login" element={<Login />} ></Route>
//           </Routes>
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './navbar/navbar';
import Home from './pages/home/home';
import Service from './pages/services';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import Footer from './footer/footer';
import './App.css';

function App() {
  return (
    // <div className="Main">
    //   <Nav />
    //   <div className="container">
    //     <Router>
    //       <Routes>
    //         <Route path="/home" element={<Home />} />
    //         <Route path="/services" element={<Service />} />
    //         <Route path="/aboutus" element={<AboutUs />} />
    //         <Route path="/login" element={<Login />} />
    //       </Routes>
    //     </Router>
    //   </div>
    //   <Footer />
    // </div>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Service />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
