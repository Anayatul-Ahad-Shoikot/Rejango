import React, { Component } from "react";
import Navbar from "../../navbar/navbar";
import Footer from "../../footer/footer";
import "./home.css";

class Home extends Component {
        constructor(props) {
          super(props);
          this.state = {
            currentIndex: 0,
            hellos: ["Hello", "স্বাগতম", "Hola", "Bonjour", "Hallo", "Ciao", "こんにちは", "안녕하세요", "Привет", "你好"],
            showMain: false,
          };
        }
      
        componentDidMount() {
          this.showNextHello();
        }
      
        showNextHello = () => {
          const { currentIndex, hellos } = this.state;
          if (currentIndex < hellos.length) {
            setTimeout(() => {
                this.setState({ currentIndex: currentIndex + 1 }, this.showNextHello);
              }, 350);
          } 
          else {
            setTimeout(this.scrollToMainSection, 400);
          }
        };

        scrollToMainSection = () => {
            this.setState({ showMain: true }, () => {
              const mainSection = document.getElementById("main__section");
              const startPosition = window.pageYOffset;
              const targetPosition = mainSection.getBoundingClientRect().top + startPosition;
              const duration = 1000;
              let start = null;
        
              const animateScroll = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const easeInOutQuad = (t, b, c, d) => {
                  t /= d / 2;
                  if (t < 1) return c / 2 * t * t + b;
                  t--;
                  return -c / 2 * (t * (t - 2) - 1) + b;
                };
                window.scrollTo(0, easeInOutQuad(progress, startPosition, targetPosition, duration));
                if (progress < duration) requestAnimationFrame(animateScroll);
              };
        
              requestAnimationFrame(animateScroll);
            });
          };

    render() {
        const { currentIndex, hellos, showMain } = this.state;
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
                <div className={`hello__section ${showMain ? 'hidden' : ''}`}>
                    <div className="content">
                        <span className="dot">.</span>
                        <span className="hello">{hellos[currentIndex]}</span>
                    </div>
                </div>
                
                <div className={`main__section ${showMain ? '' : 'hidden'}`} id="main__section">
                    <Navbar />
                        <header className="header">
                            <div className="background">
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
                                
                                <div className="section__container header__container">
                                    <h1>Join us to make Lives Better</h1>
                                    <p>
                                        A platform for Organizations. Stay connected with orphans and elderly to change lives with each click.
                                        Spread kindness to all.
                                    </p>
                                </div>
                            </div>
                        </header>
                <Footer />
                </div>
            </>
        );
    }
}

export default Home;