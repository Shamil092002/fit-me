import "./Header.scss";
import logo from './assets/Images/Logo.svg';
import lock from './assets/Images/Lock.svg';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <nav className="nav">
                <ul>
                    <a href="#" className="nav-link">
                        <li>DIETS</li>
                    </a>
                    <a href="#" className="nav-link">
                        <li>CALORIE CALCULATOR</li>
                    </a>
                    <Link to={"/Menu"} className="nav-link" >
                        <li>MENU</li>
                    </Link>
                    <a href="#" className="nav-link">
                        <li>DELIVERY</li>
                    </a>
                    <a href="#" className="nav-link">
                        <li>ABOUT US</li>
                    </a>
                    <a href="#" className="nav-link">
                        <li>BLOQ</li>
                    </a>
                    <a href="#" className="nav-link">
                        <li>FAQ</li>
                    </a>
                </ul>
            </nav>
            <div className="signup">
                <img src={lock} alt="Lock" />
                <Link to={"Login"}><button>Sign In</button></Link>
            </div>
        </header>
    );
}