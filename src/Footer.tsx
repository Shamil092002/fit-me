import { log } from 'console';
import './Footer.scss';
import logo from './assets/Images/Logo.svg';
import facebook from './assets/Images/facebook.svg';
import instagram from './assets/Images/instagram.svg';
import twitter from './assets/Images/twitter.svg';

export const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <img src={logo} alt="logo" />
                <nav>
                    <a href="#" className="nav-link">DIETS</a>
                    <a href="#" className="nav-link">CALORIE CALCULATOR</a>
                    <a href="./menu.html" className="nav-link">MENU</a>
                    <a href="#" className="nav-link">DELIVERY</a>
                    <a href="#" className="nav-link">ABOUT US</a>
                    <a href="#" className="nav-link">BLOQ</a>
                    <a href="#" className="nav-link">FAQ</a>
                </nav>
                <div className="contact">
                    <p>Contact:
                        <h4>+1 (213) 776 24 10</h4>
                    </p>
                </div>
            </footer>
            <div className="socialmedia">
                <a href="#" className="nav-link"><img src={facebook} alt="facebook" /></a>
                <a href="#" className="nav-link"><img src={instagram} alt="insta" /></a>
                <a href="#" className="nav-link"><img src={twitter} alt="twitter" /></a>
            </div>
            <div className="privacy">
                <p>Policy privacy</p>
                <p>Copyright 2022. All rights reserved</p>
            </div>
        </div>
    )
}