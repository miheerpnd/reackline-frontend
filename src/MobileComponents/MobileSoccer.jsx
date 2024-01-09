import React from "react";
import play from "../Img/timer.svg";
import multi from "../Img/paper.svg";
import ball from "../Img/ball.svg";
import ball2 from "../Img/ball2.svg";
import ball3 from "../Img/ball3.svg";
import { Link } from "react-router-dom";
function MobileSoccer() {
  function li1() {
    document.getElementById("subli").classList.toggle("onli");
    document.getElementById("innerli").classList.toggle("roted");
  }
  return (
    <div>
      <p className="Quick">Quick Links</p>
      <div className="sport mobilecricketbar">
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
        <div className="saide-header">
          <div className="box one mobilesidebar">
            <ul className="cricketul mobCriul">
              <li onClick={li1}>
                <Link>
                  {" "}
                  The Hundred
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <div className="subli1" id="subli">
                <li className="li1">
                  <i class="fa fa-arrow-right"></i>{" "}
                  <Link> ICC World Cup Warm Up Matches </Link>
                </li>

                <li className="li1">
                  <i class="fa fa-arrow-right"></i>{" "}
                  <Link> ICC World Cup Warm Up Matches </Link>
                </li>

                <li className="li1">
                  <i class="fa fa-arrow-right"></i>{" "}
                  <Link> ICC World Cup Warm Up Matches </Link>
                </li>

                <li className="li1">
                  <i class="fa fa-arrow-right"></i>{" "}
                  <Link> ICC World Cup Warm Up Matches </Link>
                </li>
              </div>

              <li>
                <Link>
                  {" "}
                  Bangladesh Premier League 2023{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  Saurashtra Premier League 2023{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  CSA Provincial One-Day Challenge Div 1{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  Andhra Premier League{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  Womens One Day Internationals{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  Abu Dhabi T10{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  testing{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
                  </div>
                </Link>
              </li>

              <li>
                <Link>
                  {" "}
                  Women's Caribbean Premier League{" "}
                  <div className="downarrow">
                    <i
                      class="fa-solid fa-chevron-down fa-rotate-270"
                      id="innerli"
                    ></i>
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
export default MobileSoccer;
