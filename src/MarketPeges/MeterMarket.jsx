import React from "react";
import Leftli from "../Props/LeftBarprops";
import { Link } from "react-router-dom";
import Marketlist from "../Props/MarketLists";
function MeterMarket() {
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
          <h5>Open Bets</h5>
        </div>
      </div>
    </div>
  );
}
export default MeterMarket;
