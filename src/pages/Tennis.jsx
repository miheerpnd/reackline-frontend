import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Components/Middlebar.css";
import slider1 from "../Img/slider1.jpg";
import slider2 from "../Img/slider2.jpg";
import slider3 from "../Img/1.jpg";
import slider4 from "../Img/slider4.jpg";
import { Link } from "react-router-dom";
import MobileNav from "../Components/MobileNav";
import ListProps from "../Props/ListProps";
import LeftBar from "../Components/LeftBar";
import Leftli from "../Props/LeftBarprops";
import Policy_Modal from "../Components/Policy_Modal";
import TennisData from "../Props/TennisData";
function Tennis() {
  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
  }
  const options = {
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
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
      </div>

      <div className="box two">
        <div className="bg-slider">
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <img src={slider1} alt="" />
            </div>
            <div class="item">
              <img src={slider2} alt="" />
            </div>
            <div class="item">
              <img src={slider3} alt="" />
            </div>
            <div class="item">
              <img src={slider4} alt="" />
            </div>
          </OwlCarousel>
          <div className="textbox">
            <p>1</p>
            <p>x</p>
            <p>2</p>
          </div>
        </div>
      </div>
      <h3 className="highlights2">Hightlights</h3>

      <TennisData/>

      <div className="box three">
        <h5>Open Bets</h5>
      </div>
      <div className="copyright-box">
        <div className="hrline"></div>
        <div className="copyright">
          <p onClick={Modal1}>
            Privacy Policy | KYC | Terms and Conditions | Rules and Regulations
            | Responsible Gambling
          </p>
        </div>
      </div>
      <Policy_Modal/>
    </div>
  );
}
export default Tennis;
