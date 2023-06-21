import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.component.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSolid, faCartShopping, faBars } from '@fortawesome/free-solid-svg-icons'

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
                <div className="main-logo-container">
                <Link className= "logo-container" id="main-logo" onMouseEnter={()=>{changeLogo()}} to="/">
                what's for dinner?
                </Link>
                </div>
                <div className= "small-screen-logo-container" >
                <Link id="small-screen-logo" to="/">
                what's for dinner?
                </Link>
                  <Link className="nav-link" to="/shopping-cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                </div>

                <Link className= "alt-logo-container" id= "alt-logo-container" onMouseLeave={()=>{changeLogoBack()}} to="/">
                seriously wtf is for dinner???
                  </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/about">
                        HOW IT WORKS
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
                        <Link className="nav-link" to="/shopping-cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Link>
                        {/* <Link className="nav-link" to="/auth">
                        SIGN IN
                        </Link> */}
                </div>
            </div>
            <div className="alt-nav">
                <div className="alt-menu-items">
                <Link className="alt-nav-link" to="/about">
                        HOW IT WORKS
                        </Link>
                    <Link className="alt-nav-link" to="/find-meals">
                        WHAT'S FOR DINNER?
                        </Link>
                    <Link className="alt-nav-link" to="/cooking-shop">
                        COOKING SHOP
                        </Link>
                        {/* <Link className="nav-link" to="/shopping-cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                        </Link> */}
                        </div>
                </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation