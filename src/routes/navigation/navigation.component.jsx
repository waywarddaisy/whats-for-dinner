import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.component.scss';

const Navigation = () => {

    return (
        <Fragment>
            <div className="navigation">
                <Link className= "logo-container" to="/">
                what's for dinner?
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/about">
                        ABOUT
                        </Link>
                    <Link className="nav-link" to="/add-recipe">
                        ADD RECIPE
                        </Link>
                    <Link className="nav-link" to="/find-meal">
                        FIND MEAL
                        </Link>
                    <Link className="nav-link" to="/cookbook-shop">
                        COOKBOOK SHOP
                        </Link>
                        <Link className="nav-link" to="/sign-in">
                        SIGN IN
                        </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
};

export default Navigation