import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Navbar.css";
function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      {" "}
      {/* show true olduğunda nav-black çalışsın*/}
      <div className="nav-contents">
        <img
          onClick={() => history.push("/")}
          className="nav-logo"
          src="/images/netflix-logo.png"
          alt=""
        />
        <img
          onClick={() => history.push("/profile")}
          className="nav-avatar"
          src="/images/netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
