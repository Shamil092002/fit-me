import { Link } from 'react-router-dom';
import './Login.scss';

export const Login = () => {
    return (
        <div className="wrapper">
            <div className="signupform">
                <h1>Wellcome to our website</h1>
                <p>Sign In</p>

                <form action="#">
                    <input type="email" placeholder="Enter your email adress" />

                    <input type="password" placeholder="Password" />
                </form>
                <div className="button">
                    <Link to={'/'} ><button type="submit">Continue</button></Link>
                </div>
                <div className="button2">
                    <Link to="/sign-up"><button className="signin">Sign Up</button></Link>
                </div>

            </div>
        </div>
    )
}