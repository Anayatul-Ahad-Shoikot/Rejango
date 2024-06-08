
import './home.css'

function home(){
    return (
        <header className="header">
        <div className="section__container header__container">
            <h1>Join us to make Lives Better</h1>
            <p>
            A platform for Organizations. Stay connected with orphans and elderly to change lives with each click. 
            Spread kindness to all.
            </p>
        </div>

        <div className="row diag-ro" id="info_web">
            <div className="about-diag" id="info_cell">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div className="tex">
                    <p id="text">There are over</p>
                    <h3 id="count">9+</h3><p id="text">orphans to help</p>
                </div>
            </div>
            <div className="about-diag" id="info_cell">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div className="tex">
                    <p id="text">We have total</p>
                    <h3 id="count">100+</h3><p id="text">organizations</p>
                </div>
            </div>
            <div className="about-diag" id="info_cell">
                <div className="icon"><i className="fas fa-arrow-right"></i></div>
                <div className="tex">
                    <p id="text">We serverd over</p>
                    <h3 id="count">10+</h3><p id="text">BDT as Donation</p>
                </div>
            </div>
        </div>
    </header>
    )
}

export default home