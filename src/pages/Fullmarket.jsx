import React, { useState } from "react";
import "../pages/Fullmarket.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../pages/Cricket.css";
import Leftli from "../Props/LeftBarprops";
import Marketlist from "../Props/MarketLists";
import vdo from "../Img/vdo.mp4";

function Fullmarket() {
  function li1() {
    document.getElementById("subli").classList.toggle("onli");
    document.getElementById("innerli").classList.toggle("roted");
  }
  function li2() {
    document.getElementById("subl2").classList.toggle("onli");
    document.getElementById("inner2").classList.toggle("roted");
  }
  function li3() {
    document.getElementById("subl3").classList.toggle("onli");
    document.getElementById("inner3").classList.toggle("roted");
  }
  function li4() {
    document.getElementById("subl4").classList.toggle("onli");
    document.getElementById("inner4").classList.toggle("roted");
  }
  function li5() {
    document.getElementById("subl5").classList.toggle("onli");
    document.getElementById("inner5").classList.toggle("roted");
  }
  const [vdocl , setVdocl] = useState("lef-bat-vdo")
  const [flag , setFlag] = useState(0)


  function Live(){
    if(flag==0){
      setVdocl("lef-bat-vdo-on")
      setFlag(1)
    }
    else{
      setVdocl("lef-bat-vdo")
      setFlag(0)
    }
  }
  return (
    <div>
      <div className="saidebox">
        <div className="saide-header">
          <div className="box one">
            <div className="menu-icon">
              <i class="fa fa-ellipsis-v"></i>
              <h5>Sports</h5>
            </div>
            <ul className="cricketul">
              <li onClick={li1}>
                <Link>
                  {" "}
                  ICC World Cup Warm Up Matches{" "}
                  <i
                    class="fa-regular fa-square-caret-down fa-rotate-270"
                    id="innerli"
                  ></i>
                </Link>
              </li>
              <div className="subli1" id="subli">
                <Link to="/Fullmarket">
                  <Leftli />
                </Link>
              </div>

              <li onClick={li2}>
                <Link>
                  {" "}
                  Women's Caribbean Premier League{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                    id="inner2"
                  ></i>
                </Link>
              </li>
              <div className="subli1" id="subl2">
                <Link>
                  <Leftli />
                </Link>
              </div>

              <li onClick={li3}>
                <Link>
                  {" "}
                  CSA Provincial One-Day Challenge
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                    id="inner3"
                  ></i>
                </Link>
              </li>
              <div className="subli1" id="subl3">
                <Link>
                  <Leftli />
                </Link>
              </div>

              <li onClick={li4}>
                <Link>
                  {" "}
                  Abu Dhabi T10{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                    id="inner4"
                  ></i>
                </Link>
              </li>
              <div className="subli1" id="subl4">
                <Link>
                  <Leftli />
                </Link>
              </div>

              <li onClick={li5}>
                <Link>
                  {" "}
                  Bangladesh Premier League 2023{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                    id="inner5"
                  ></i>
                </Link>
              </li>
              <div className="subli1" id="subl5">
                <Link>
                  <Leftli />
                </Link>
              </div>
            </ul>
          </div>
        </div>

        <Marketlist />

        <div className="box three">
          <h5 onClick={Live} style={{cursor:"pointer", marginBottom:"2px"}}>Live Streaming</h5>
          <div className={vdocl} id="vdo">
            <video width="100%" height="200px" controls autoPlay muted loop>
              <source src={vdo} type="video/mp4"></source>
            </video>
          </div>
          <h5>Open Bets</h5>
          <select className="SelectMarket">
            <option value="volvo">Select Market</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Fullmarket;
