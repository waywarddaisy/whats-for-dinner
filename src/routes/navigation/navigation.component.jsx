import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.component.scss';

const Navigation = () => {

    const changeLogo=()=>{
        let altLogo= document. getElementById('alt-logo-container');
        let mainLogo= document. getElementById('main-logo');
            mainLogo.style.display = 'none';
            altLogo.style.display = 'block';
    };

    const changeLogoBack=()=>{
        let altLogo= document. getElementById('alt-logo-container');
        let mainLogo= document. getElementById('main-logo');
            mainLogo.style.display = 'block';
            altLogo.style.display = 'none';
    };

    return (
        <Fragment>
            <div className="navigation">
                <Link className= "logo-container" id="main-logo" onMouseEnter={()=>{changeLogo()}} to="/">
                what's for dinner?
                </Link>
                <Link className= "alt-logo-container" id= "alt-logo-container" onMouseLeave={()=>{changeLogoBack()}} to="/">
                seriously wtf is for dinner???
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/about">
                        ABOUT
                        </Link>
                    {/* <Link className="nav-link" to="/add-recipe">
                        ADD RECIPE
                        </Link> */}
                    <Link className="nav-link" to="/find-meals">
                        WHAT'S FOR DINNER?
                        </Link>
                    <Link className="nav-link" to="/cooking-shop">
                        COOKING SHOP
                        </Link>
                        <Link className="nav-link" to="/contact">
                        CONTACT
                        </Link>
                        {/* <Link className="nav-link" to="/auth">
                        SIGN IN
                        </Link> */}
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation