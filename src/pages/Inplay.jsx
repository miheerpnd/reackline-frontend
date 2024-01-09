import React from "react";
import "../pages/Inplay.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LeftBar from "../Components/LeftBar";
import CricketData from "../Props/CricketData";
function Play() {
  function mainsub() {
    document.getElementById("sub").classList.toggle("onsub");
  }
  function mainsub2() {
    document.getElementById("sub2").classList.toggle("onsub");
  }
  function mainsub3() {
    document.getElementById("sub3").classList.toggle("onsub");
  }
  return (
    <div>
      <div className="Bars inplay">
        <div className="inplaysidebar">
          <LeftBar />
        </div>
        <div className="btn-box">
          <div className="inner-box">
            <div className="inner-btn-box">
              <NavLink to="/inplay">
                <button className="btn-one">In-Play</button>
              </NavLink>
              <NavLink to="/Today">
                <button className="btn-two">Today</button>
              </NavLink>
              <NavLink to="/tomorrow">
                <button className="btn-three">Tomorrow</button>
              </NavLink>
            </div>

            <ul className="dropdownul">
              <li onClick={mainsub}>Scocer</li>
              <div className="subdropdown" id="sub">
                
                <h4>1 x 2</h4>
              
                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>
                

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>
              </div>
              <li onClick={mainsub2}>Tennis</li>

              <div className="subdropdown" id="sub2">
                <h4>1 x 2</h4>
                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>
              </div>

              <li onClick={mainsub3}>Cricket</li>
              <div className="subdropdown" id="sub3">
                <h4>1 x 2</h4>
                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>

                <div className="innerlink2">
                  <div className="linkbox">
                    <div className="innerlink">
                      <Link>India v England</Link> <span>In-Play</span>
                      <p></p>
                    </div>
                    <div className="fname">
                      <h5></h5>
                    </div>
                  </div>
                  <div className="cont">
                    <p className="p1">1.98</p>
                    <p className="p2">1.99</p>
                    <p className="p3">0.0</p>
                    <p className="p4">0.0</p>
                    <p className="p5">2</p>
                    <p className="p6">2.02</p>
                  </div>
                </div>
              </div>

            </ul>
          </div>
        </div>
        <div className="inplay-outer-box">
          <div className="inplay-rightbar">
            <h5>Open Bets</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Play;
