import React from "react";
import "../pages/Sports.css";
import play from "../Img/timer.svg";
import multi from "../Img/paper.svg";
import ball from "../Img/ball.svg";
import ball2 from "../Img/ball2.svg";
import ball3 from "../Img/ball3.svg";
import { Link } from "react-router-dom";
import Alert from "../Components/Alert";
function Sports() {
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  return (
    <div>
      <Alert />
      <p className="Quick">Quick Links</p>

      <div className="sport ">
        <Link to="/inplay">
          <div className="footer-box oneplay">
            <img src={play} alt="" />
            <p>In-Play</p>
          </div>
        </Link>

        <Link to="/multi">
          <div className="footer-box oneplay">
            <img src={multi} alt="" />
            <p>
              Multi <br /> Markets
            </p>
          </div>
        </Link>

        <Link to="/MobileCricket">
          <div className="footer-box oneplay">
            <img src={ball} alt="" />
            <p>Cricket</p>
          </div>
        </Link>

        <Link to="/MobileSoccer">
          <div className="footer-box oneplay">
            <img src={ball2} alt="" />
            <p>Soccer</p>
          </div>
        </Link>

        <Link className=" endtennis" to="/MobileTennis">
          <div className="footer-box oneplay">
            <img src={ball3} alt="" />
            <p>Tennis</p>
          </div>
        </Link>
      </div>

      <p className="Quick sportp">All Sports</p>

      <div className="saidebox ">
        <div className="saide-header ">
          <div className="box one spotrsone">
            <ul className="leful">
              <li>
                <Link to="/MobileCricket">
                  Cricket
                  <div className="downarrow">
                    <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/MobileTennis">
                  Tennis{" "}
                  <div className="downarrow">
                    <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link onClick={Alert1}>
                  Casino{" "}
                  <div className="downarrow">
                    <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link to="/MobileSoccer">
                  Soccre{" "}
                  <div className="downarrow">
                    <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sports;
