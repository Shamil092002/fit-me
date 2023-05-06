import './SignUp.scss';
import google from '../../assets/Images/Google.svg';
import apple from '../../assets/Images/Apple.svg';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <div className="form">
            <div className="signupform">
                <h1>Order in our website</h1>
                <p className="join">Join us today</p>
                <div className="google">
                    <button className="button">
                        <img src={google} alt="google" />
                        Sign up with Google
                    </button>
                    <button className="button">
                        <img src={apple} alt="apple" />
                        Sign up with Apple
                    </button>
                    <div className="section">
                        <p>Already have an account?</p>
                        <Link to="/SignIn"><button className="signin">Sign In</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}