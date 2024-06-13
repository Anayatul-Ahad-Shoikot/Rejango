import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./home.css";

function home(){
    return (
    //     <header className="header">
    //     <div className="section__container header__container">
    //         <h1>Join us to make Lives Better</h1>
    //         <p>
    //         A platform for Organizations. Stay connected with orphans and elderly to change lives with each click. 
    //         Spread kindness to all.
    //         </p>
    //     </div>

    //     <div className="row">
    //         <div className="counter">
    //             <div className="icon"><i className="fas fa-arrow-right"></i></div>
    //             <div>
    //                 <p className="text">There are over</p>
    //                 <h3 className="count">9+</h3><p id="text">orphans to help</p>
    //             </div>
    //         </div>
    //         <div className="counter">
    //             <div className="icon"><i className="fas fa-arrow-right"></i></div>
    //             <div>
    //                 <p className="text">We have total</p>
    //                 <h3 className="count">100+</h3><p id="text">organizations</p>
    //             </div>
    //         </div>
    //         <div className="counter">
    //             <div className="icon"><i className="fas fa-arrow-right"></i></div>
    //             <div>
    //                 <p className="text">We serverd over</p>
    //                 <h3 className="count">10+</h3><p id="text">BDT as Donation</p>
    //             </div>
    //         </div>
    //     </div>
    // </header>

    <>
      <Navbar />
        <header className="header">
            <div className="section__container header__container">
            <h1>Join us to make Lives Better</h1>
            <p>
                A platform for Organizations. Stay connected with orphans and elderly to change lives with each click.
                Spread kindness to all.
            </p>
            </div>

            <div className="row">
            <div className="counter">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div>
                <p className="text">There are over</p>
                <h3 className="count">9+</h3><p id="text">orphans to help</p>
                </div>
            </div>
            <div className="counter">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div>
                <p className="text">We have total</p>
                <h3 className="count">100+</h3><p id="text">organizations</p>
                </div>
            </div>
            <div className="counter">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div>
                <p className="text">We served over</p>
                <h3 className="count">10+</h3><p id="text">BDT as Donation</p>
                </div>
            </div>
            </div>
        </header>
      <Footer />
    </>
    );
}

export default home;