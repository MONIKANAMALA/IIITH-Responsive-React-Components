import React from "react";
import HeadPhone from '../Components/Assets/img/headphonesLogo.svg';

import '../Styles/Login.scss';
import {Link} from "react-router-dom";

class Login extends React.Component{
    render() {
        return(
            <section id="main">
                    <div className="nav-item">
                        <a className="navbar-brand" href="/">Music</a>
                    </div>
                    <div className="main-row">
                        <div className="main-row-img">
                            <img className="head-phone-img" src={HeadPhone} alt=""/>
                        </div>
                        <div className="main-row-text">
                            <h1>Music for everyone</h1>
                            <p>Without music, life would be a mistake</p>
                            <Link to={"/Home"} className="btn">
                                Start Listening
                            </Link>
                        </div>
                    </div>
            </section>
        );
    }
}

export default Login;