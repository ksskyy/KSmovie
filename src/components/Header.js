import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import SearchBar from "./SearchBar";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsFixed(scrollPosition > 0);
    };

    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setShowNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    const closeNavOnPageChange = () => {
      setShowNav(false);
    };
    const unlisten = navigate(closeNavOnPageChange);

    return unlisten;
  }, [navigate]);

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <header
      className={`header ${showNav ? "show" : ""} ${isFixed ? "fixed" : ""}`}
    >
      <div>
        <Link className="logo" to="/">
          <svg
            id="logo-85"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="ccustom"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 0C15.5228 0 20 4.47715 20 10V0H30C35.5228 0 40 4.47715 40 10C40 15.5228 35.5228 20 30 20C35.5228 20 40 24.4772 40 30C40 32.7423 38.8961 35.2268 37.1085 37.0334L37.0711 37.0711L37.0379 37.1041C35.2309 38.8943 32.7446 40 30 40C27.2741 40 24.8029 38.9093 22.999 37.1405C22.9756 37.1175 22.9522 37.0943 22.9289 37.0711C22.907 37.0492 22.8852 37.0272 22.8635 37.0051C21.0924 35.2009 20 32.728 20 30C20 35.5228 15.5228 40 10 40C4.47715 40 0 35.5228 0 30V20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM18 10C18 14.4183 14.4183 18 10 18V2C14.4183 2 18 5.58172 18 10ZM38 30C38 25.5817 34.4183 22 30 22C25.5817 22 22 25.5817 22 30H38ZM2 22V30C2 34.4183 5.58172 38 10 38C14.4183 38 18 34.4183 18 30V22H2ZM22 18V2L30 2C34.4183 2 38 5.58172 38 10C38 14.4183 34.4183 18 30 18H22Z"
              fill="#ff9a04"
            ></path>
          </svg>
          <p className="logo-title">KS Movie</p>
        </Link>
      </div>
      <div className="nav-box" ref={navRef}>
        <div className="search">
          <SearchBar />
        </div>
        <Nav onClick={handleLinkClick} />
      </div>
      <div
        className="mobile"
        onClick={(e) => {
          e.stopPropagation();
          setShowNav(!showNav);
        }}
      >
        {showNav ? <CgClose /> : <RxHamburgerMenu />}
      </div>
    </header>
  );
};

export default Header;
