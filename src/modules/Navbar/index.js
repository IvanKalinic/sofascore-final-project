import React, { useState, useEffect, useRef, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import SofaScoreLogo from "../../assets/images/sofascorelogo.png";
import { MenuItem } from "../../assets/icons/index";
import SwitchButton from "../../components/SwitchButton";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.scss";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const { isAuthenticated, logout, user } = useAuth0();

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const isUser = useMemo(
    () => isAuthenticated && user,
    [isAuthenticated, user]
  );

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 50}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo-container">
            <Link to="/" className="link-container">
              <img src={SofaScoreLogo} className="img-style" alt="" />
              <div className="heading-container">
                <span className="heading">SofaScore</span>
              </div>
            </Link>
          </div>
          <div className="switch-button">
            <SwitchButton />
          </div>
          <button className="nav-toggle" onClick={toggleLinks}>
            <MenuItem />
          </button>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <li className="loggedUser">
              {isUser && user && (
                <NavLink
                  className="link"
                  to="/profile"
                  activeClassName="selected"
                >
                  Profile
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                className="link"
                to="/trackedEvents"
                activeClassName="selected"
              >
                Favourites
              </NavLink>
            </li>

            {!isUser ? (
              <div className="login-container">
                <li>
                  <NavLink
                    className="link"
                    to="/signup"
                    activeClassName="selected"
                  >
                    Sign Up
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="link"
                    to="/login"
                    activeClassName="selected"
                  >
                    Login
                  </NavLink>
                </li>
              </div>
            ) : (
              <a
                className="logout"
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Logout
              </a>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
