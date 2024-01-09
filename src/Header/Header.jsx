import React, { useState } from "react";
import "./Header.css";
import Logo from "../Img/logo.png";
import Alert from "../Components/Alert";
import { Link } from "react-router-dom";
import loder from "../Img/loder.png";

function Account() {
  document.getElementById("Account_list").classList.toggle("on_Account");
}
function Account_list() {
  document.getElementById("Account_list").classList.remove("on_Account");
}

function Header() {
  function click() {
    document.querySelector(".input-box").classList.add("on");
    document.querySelector(".x-mark").addEventListener("click", function () {
      document.querySelector(".input-box").classList.remove("on");
    });
  }
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  // ---------input value----------
  const [name, setName] = useState("");
  const [Pass, setPass] = useState("");
  const [animatin, setAnimatin] = useState("on_animation");

  let id = "login@123";
  let id2 = 0;
  let login = "tls@123";
  function Login() {
    if (id == name && Pass == login) {
      setAnimatin("Animation");
      setTimeout(() => {
        setAnimatin("on_animation");
        document.getElementById("login_input").classList.add("none_login");
        document.getElementById("User").classList.add("block_login");
      }, "5000");
    } else {
      alert("Please enter uder id or password");
    }
  }

  return (
    <div>
      {/* ------------------ Login animation ---------------- */}

      <div className={animatin}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          height="128px"
          width="128px"
          class="pl"
        >
          <circle
            stroke-dashoffset="-376.4"
            stroke-dasharray="377 377"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="8"
            stroke="hsl(3,90%,55%)"
            fill="none"
            r="60"
            cy="64"
            cx="64"
            class="pl__ring1"
          ></circle>
          <circle
            stroke-dashoffset="-329.3"
            stroke-dasharray="329.9 329.9"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="7"
            stroke="hsl(13,90%,55%)"
            fill="none"
            r="52.5"
            cy="64"
            cx="64"
            class="pl__ring2"
          ></circle>
          <circle
            stroke-dashoffset="-288.6"
            stroke-dasharray="289 289"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="6"
            stroke="hsl(23,90%,55%)"
            fill="none"
            r="46"
            cy="64"
            cx="64"
            class="pl__ring3"
          ></circle>
          <circle
            stroke-dashoffset="-254"
            stroke-dasharray="254.5 254.5"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="5"
            stroke="hsl(33,90%,55%)"
            fill="none"
            r="40.5"
            cy="64"
            cx="64"
            class="pl__ring4"
          ></circle>
          <circle
            stroke-dashoffset="-225.8"
            stroke-dasharray="226.2 226.2"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="4"
            stroke="hsl(43,90%,55%)"
            fill="none"
            r="36"
            cy="64"
            cx="64"
            class="pl__ring5"
          ></circle>
          <circle
            stroke-dashoffset="-203.9"
            stroke-dasharray="204.2 204.2"
            stroke-linecap="round"
            transform="rotate(-90,64,64)"
            stroke-width="3"
            stroke="hsl(53,90%,55%)"
            fill="none"
            r="32.5"
            cy="64"
            cx="64"
            class="pl__ring6"
          ></circle>
        </svg>
      </div>

      {/* ------------------ Login animation ---------------- */}
      <Alert />
      <header>
        <div className="logo">
          <img src={Logo} alt="" />
          <div id="input1">
            <input type="search" placeholder="Search Events" onClick={click} />
          </div>
          <i class="fa-solid fa-magnifying-glass"></i>
          <div className="input-box ">
            <div className="x-mark">
              <i class="fa fa-times"></i>
            </div>
            <p id="p">Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
            <p>Lorem ipsum dolor</p>
          </div>
        </div>

        <div className="login-box">
          <div className="login_input" id="login_input">
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={Pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <button className="Head-btn" onClick={Login}>
              Login <i _ngcontent-iok-c0="" className="fa fa-sign-in"></i>
            </button>
          </div>

          <div className="account" id="User">
            <h6> Main 0.00</h6>
            <h6 className="expos">
              {" "}
              Exposure (<span>0.00</span>)
            </h6>
            <div className="refresh">
              <img src={loder} alt="" />
            </div>
            <div className="login-account" onClick={Account}>
              <i class="fa-solid fa-user"> </i>
              <p>My Account</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
          <div className="Account-list" id="Account_list">
            <ul>
              <li id="User_name">
                <Link onClick={Account_list}>Sir404</Link>
              </li>
              <li>
                <Link to="/myprofile" onClick={Account_list}>
                  My Profile
                </Link>
              </li>
              <li>
                <Link to="/rolling" onClick={Account_list}>
                  Rolling Commission
                </Link>
              </li>
              <li>
                <Link to="/AccountStatement" onClick={Account_list}>
                  Account Statement
                </Link>
              </li>
              <li>
                <Link to="/BetsHistory" onClick={Account_list}>
                  Bets History
                </Link>
              </li>
              <li>
                <Link to="/Profitloss" onClick={Account_list}>
                  Profit & Loss
                </Link>
              </li>
              <li>
                <Link to="/PasswordHistory" onClick={Account_list}>
                  Password History
                </Link>
              </li>
              <li>
                <Link to="/LoginActivity" onClick={Account_list}>
                  Active Log
                </Link>
              </li>
            </ul>
            <div className="Account-btn">
              <button>
                LOGOUT <i class="fa fa-sign-out ml-2"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;
