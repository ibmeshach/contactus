import React from "react";
import "./Navbar.scss";
import navicon from "../../assets/navicon.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import profile from "../../assets/profile.svg";
import heart from "../../assets/heart.svg";
import chat from "../../assets/chat.svg";

const Navbar = () => {
  return (
    <>
      <div className="nav__container">
        <div className="nav__left">
          <img src={navicon} alt="navIcon" className="nav__icon" />
          <img src={logo} alt="logo" className="nav__logo" />
          <div className="search__bar">
            <div className="search__icon__div">
              <img src={search} alt="searchIcon" className="search__icon" />
            </div>
            <p>Find Item</p>
          </div>
        </div>
        <div className="nav__right">
          <div className="nav__icons">
            <img src={profile} alt="profile" className="profile__icon" />
            <p>Accounts</p>
          </div>
          <div className="nav__icons">
            <img src={chat} alt="chat" className="chat__icon" />
            <p>Chat</p>
          </div>
          <div className="nav__icons">
            <img src={heart} alt="heart" className="heart__icon" />
            <p>My Interest</p>
          </div>
        </div>
      </div>

      <div className="nav__small">
        <div className="nav__small__content">
          <img src={navicon} alt="navIcon" className="logo1" />

          <img src={logo} alt="navIcon" className="logo2" />

          <p>Join</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
