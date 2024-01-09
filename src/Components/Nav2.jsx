import React, { useState } from "react";
import "../Components/Nav2.css";
import Img1 from "../Img/1.jpg";
import Img2 from "../Img/2.jpg";
import iconImg from "../Img/icon.svg";
import iconImg2 from "../Img/icon2.svg";
import iconImg3 from "../Img/icon3.svg";
import casino from "../Img/casino.svg";
import Soccer from "../Img/Soccer.svg";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../Img/logo.png";
import Alert from "./Alert";
import loder from "../Img/loder.png";

function Alert1() {
  let h22 = document.getElementById("close");
  h22.classList.add("new1");
}
function Account_list() {
  document.getElementById("Account_list").classList.remove("on_Account");
}

function click() {
  document.querySelector(".input-box").classList.add("on");
  document.querySelector(".x-mark").addEventListener("click", function () {
    document.querySelector(".input-box").classList.remove("on");
  });
}

function Nav2() {
  function Account2() {
    document.getElementById("Account_list").classList.toggle("on_Account");
  }
  const [menu, setMenu] = useState("seting-menu");
  const [value, setValue] = useState("100");
  const [value2, setValue2] = useState("5000");
  const [value3, setValue3] = useState("10000");
  const [value4, setValue4] = useState("25000");
  const [value5, setValue5] = useState("50000");
  const [value6, setValue6] = useState("1000000");
  const [value7, setValue7] = useState("2000000");
  const [value8, setValue8] = useState("3000000");
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }

  const [a, setA] = useState("0");
  function Nav_menu() {
    if (a == 0) {
      setMenu("Menu-of");
      setA(1);
    } else {
      setMenu("seting-menu");
      setA(0);
    }
  }
  // ---------input value----------
  const [name, setName] = useState("");
  const [Pass, setPass] = useState("");
  const [animatin, setAnimatin] = useState("on_animation");
  const [menu1, setMenu1] = useState("menu-block");
  const [login_input, setLogin_input] = useState("login_input");
  const [Account, setAccount] = useState("account2");
  const [Accoutnlist, setAccountlist] = useState("Account-list");

  let id = "login@123";
  let login = "tls@123";
  function Login() {
    if (id == name && Pass == login) {
      setAnimatin("Animation");
      setTimeout(() => {
        setAnimatin("on_animation");
        document.getElementById("login_input2").classList.add("none_login2");
        document.getElementById("User").classList.add("block_login");
        setMenu1("menu-none");
        setLogin_input("none_login");
        setAccount("account");
      }, "5000");
    } else {
      alert("Please enter uder id or password");
    }
  }

  const [num, setNum] = useState(0);
  function Nav_menu() {
    if (num == 0) {
      document.getElementById("nav_menu").classList.add("Menu-of");
      setNum(1);
    } else {
      document.getElementById("nav_menu").classList.remove("Menu-of");
      setNum(0);
    }
  }

  function Account_list() {
    document.getElementById("Account_list").classList.remove("on_Account");
  }
  function Logout() {
    console.log("123");
  }
  function mobilemenu() {
    document.getElementById("mobile").classList.remove("of_menu");
  }
  function nav_menu() {
    document.getElementById("mobile").classList.add("of_menu");
  }

  const Expo =()=>{
    document.getElementById("expouser").classList.add("expo_show")
  }
  const Expo_hide =()=>{
    document.getElementById("expouser").classList.remove("expo_show")
  }
  return (
    <div>
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

      <Alert />
      <header>
        <div className="logo">
          <img src="https://thelitespeed.com/assets/logo-d874a1f4.png" alt="" />
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
          <div className={login_input} id="login_input2">
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
            <button className="Head-btn desktop" onClick={Login}>
              Login <i _ngcontent-iok-c0="" className="fa fa-sign-in"></i>
            </button>
            <button className="Head-btn mobile" onClick={Alert1}>
              Login <i _ngcontent-iok-c0="" className="fa fa-sign-in"></i>
            </button>
          </div>

          <div className={Account} id="User">
            <div className="exposer-box">
              <h6> Main 0.00</h6>
              <h6 className="expos" onClick={Expo}>
                {" "}
                Exposure (<span>0.00</span>)
              </h6>
            </div>
            <div className="refresh">
              <img src={loder} alt="" />
            </div>
            <div className="login-account" onClick={Account2}>
              <i class="fa-solid fa-user"> </i>
              <p>My Account</p>
              <i class="fa-solid fa-caret-down"></i>
            </div>

            <div className="setting-icon-box">
              <div onClick={Nav_menu} className={menu1}>
                <div className="header-setting">
                  <i
                    _ngcontent-cqi-c0=""
                    class="fa fa-cog"
                    id="setting"
                    onClick={nav_menu}
                  ></i>
                </div>
              </div>

              <div className="seting-menu" id="nav_menu">
                <h3>Stake</h3>
                <div className="setting-content-box">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <input
                    type="text"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                  />
                  <input
                    type="text"
                    value={value3}
                    onChange={(e) => setValue3(e.target.value)}
                  />
                </div>
                <div className="setting-content-box">
                  <input
                    type="text"
                    value={value4}
                    onChange={(e) => setValue4(e.target.value)}
                  />
                  <input
                    type="text"
                    value={value5}
                    onChange={(e) => setValue5(e.target.value)}
                  />
                  <input
                    type="text"
                    value={value6}
                    onChange={(e) => setValue6(e.target.value)}
                  />
                </div>
                <div className="setting-content-box">
                  <input
                    type="text"
                    value={value7}
                    onChange={(e) => setValue7(e.target.value)}
                  />
                  <input
                    type="text"
                    value={value8}
                    onChange={(e) => setValue8(e.target.value)}
                  />
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className={Accoutnlist} id="Account_list">
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

      <div className="altet1">
        <Alert />
      </div>
      <div className="mobile-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/inplay">In-Play</NavLink>
          </li>
          <li>
            <NavLink to="/multi">Multi Markets</NavLink>
          </li>
          <li>
            <NavLink to="/Cricket">Cricket</NavLink>
          </li>
          <li>
            <NavLink to="/Tennis">Tennis</NavLink>
          </li>
          <li onClick={Alert1}>
            <NavLink id="casino">Casino</NavLink>
          </li>
          <li>
            <NavLink to="/Soccer">Soccer</NavLink>
          </li>
        </ul>

        <div className="setting-icon-box">
          <div onClick={Nav_menu} className={menu1}>
            <label htmlFor="setting">Seeting</label>
            <i _ngcontent-cqi-c0="" class="fa fa-cog" id="setting"></i>
          </div>
        </div>
      </div>

      {/* -------mobile-menu start-------- */}
      <div className="mobile-menu-box1" id="mobile">
        <div className="mobile-menu-box2">
          <div className="heading-box">
            <div className="first-heding">
              <i _ngcontent-cqi-c0="" class="fa fa-cog" id="setting"></i>
              <h4>Setting</h4>
            </div>
            <div className="mobile-xmark" onClick={mobilemenu}>
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <h5>Stake</h5>
          <div className="mobile-inner-inut-box">
            <h4>Quick Stakes</h4>
            <div className="mobile-input-box">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value2}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value3}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value4}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <div className="mobile-input-box">
              <input
                type="text"
                value={value5}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value6}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value7}
                onChange={(e) => setValue(e.target.value)}
              />
              <input
                type="text"
                value={value8}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>
            <button className="save-btn mobile-menu-btn">Save</button>
          </div>
        </div>
      </div>
      {/* -------mobile-menu end-------- */}
      <div className="exposer-box2" id="expouser">
        <span>
        <h1>Expouser Details</h1>
        <i class="fa-solid fa-xmark" onClick={Expo_hide}></i>
        </span>
        <div className="exposer-content">
            <p>Sport Name</p>
            <p>Event Name</p>
            <p>Market Name</p>
            <p>Trade</p>
        </div>
      </div>
    </div>
  );
}
export default Nav2;
