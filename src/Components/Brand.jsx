import React from "react";
import {Link} from "react-router-dom";
import "../assets/scss/Brand.scss";
import Logo from "../assets/img/headphonesLogo.svg"

class Brand extends React.Component {
    render() {
        return (
            <div  className={"brand"}>
                <Link to={"/Home"}>
                    <h1>
                        M
                        <img src={Logo} width={"24px"} alt=""/>
                        usic
                    </h1>
                </Link>
            </div>
        );
    }
}

export default Brand;