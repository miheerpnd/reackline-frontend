import React, { useState } from "react";
import "../Footer/Footer.css";
import HomeImg from "../Img/home.svg";
import Timer from "../Img/timer.svg";
import trofhy from "../Img/trophy.svg";
import paper from "../Img/paper.svg";
import user from "../Img/user.svg";
import { Link, NavLink } from "react-router-dom";
import Alert from "../Components/Alert";
import User from "../pages/User";

function Footer() {
  const Alert1=()=> {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  
  
  const [equal, setEqual] = useState("user");
  if (equal == "user") {
    setEqual("/user");
  }

  return (
    <div>
     <Alert/>
     <div className="footer">
        <NavLink to="/">
          <div className="footer-box">
            <img src={HomeImg} alt="" />
            <h4>Home</h4>
          </div>
        </NavLink>

        <NavLink to="inplay">
          <div className="footer-box">
            <img src={Timer} alt="" />
            <h4>In-Play</h4>
          </div>
        </NavLink>

        <NavLink to="Sports">
          <div className="footer-box trofy">
            <img src={trofhy} alt="" />
            <h4>Sports</h4>
          </div>
        </NavLink>

        <NavLink to="multi">
          <div className="footer-box">
            <img src={paper} alt="" />
            <h4>Multi Ma...</h4>
          </div>
        </NavLink>

        <Link to={equal} >
          <div className="footer-box">
            <img src={user} alt="" />
            <h4>Account</h4>
          </div>
        </Link>

      </div>
    </div>
  );
}
export default Footer;
