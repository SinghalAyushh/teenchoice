import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, withRouter } from "react-router-dom";
import Logo from './partials/Logo';
import { Button } from "semantic-ui-react"
import { logout } from "../../store/actions/auth";
import { connect } from "react-redux";
const propTypes = {
    navPosition: PropTypes.string,
    hideNav: PropTypes.bool,
    hideSignin: PropTypes.bool,
    bottomOuterDivider: PropTypes.bool,
    bottomDivider: PropTypes.bool
}

const defaultProps = {
    navPosition: '',
    hideNav: false,
    hideSignin: false,
    bottomOuterDivider: false,
    bottomDivider: false
}

const Pikachu = ({
    className,
    navPosition,
    hideNav,
    hideSignin,
    bottomOuterDivider,
    bottomDivider,
    ...props
}) => {

    const [isActive, setIsactive] = useState(false);

    const nav = useRef(null);
    const hamburger = useRef(null);

    useEffect(() => {
        isActive && openMenu();
        document.addEventListener('keydown', keyPress);
        document.addEventListener('click', clickOutside);
        return () => {
            document.removeEventListener('keydown', keyPress);
            document.addEventListener('click', clickOutside);
            closeMenu();
        };
    });

    const openMenu = () => {
        document.body.classList.add('off-nav-is-active');
        nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
        setIsactive(true);
    }

    const closeMenu = () => {
        document.body.classList.remove('off-nav-is-active');
        nav.current && (nav.current.style.maxHeight = null);
        setIsactive(false);
    }

    const keyPress = (e) => {
        isActive && e.keyCode === 27 && closeMenu();
    }

    const clickOutside = (e) => {
        if (!nav.current) return
        if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
        closeMenu();
    }

    const classes = classNames(
        'site-header',
        bottomOuterDivider && 'has-bottom-divider',
        className
    );

    return (
        <header
            {...props}
            className={classes}
        >
            <div className="container">
                <div className={
                    classNames(
                        'site-header-inner',
                        bottomDivider && 'has-bottom-divider'
                    )}>
                    <Logo />
                    {!hideNav &&
                        <>
                            <button
                                ref={hamburger}
                                className="header-nav-toggle"
                                onClick={isActive ? closeMenu : openMenu}
                            >
                                <span className="screen-reader">Menu</span>
                                <span className="hamburger">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                            <nav
                                ref={nav}
                                className={
                                    classNames(
                                        'header-nav',
                                        isActive && 'is-active'
                                    )}>
                                <div className="header-nav-inner">
                                    <ul className={
                                        classNames(
                                            'list-reset text-xs',
                                            navPosition && `header-nav-${navPosition}`
                                        )}>


                                        <li>
                                            <Link to="/">
                                                <h5 onClick={closeMenu}> Home</h5>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cxz">
                                                <h5 onClick={closeMenu}> Chat</h5>
                                            </Link>
                                        </li>

                                        <li>
                                            {(props.authenticated & localStorage.getItem("status") != null) ? (
                                                <h5 header >
                                                    <h5 style={{ cursor: "pointer" }} onClick={() => props.logout()}>Logout</h5>
                                                </h5>

                                            ) : (

                                                    <Link to="/login2">
                                                        <h5 onClick={closeMenu}>Login</h5>
                                                    </Link>)}</li>
                                    </ul>
                                    {!hideSignin &&
                                        <ul
                                            className="list-reset header-nav-right"
                                        >

                                        </ul>}
                                </div>
                            </nav>
                        </>}
                </div>
            </div>
        </header>
    );
}

Pikachu.propTypes = propTypes;
Pikachu.defaultProps = defaultProps;

const mapStateToProps = state => {
    return {
        authenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Pikachu)
);
