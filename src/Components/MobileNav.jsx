import React from "react";
import { NavLink } from "react-router-dom";
import Img1 from "../Img/1.jpg";
import Img2 from "../Img/2.jpg";
import iconImg from "../Img/icon.svg";
import iconImg2 from "../Img/icon2.svg";
import iconImg3 from "../Img/icon3.svg";
import casino from "../Img/casino.svg";
import Soccer from "../Img/soccer.svg";
import Alert from "./Alert";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import "../Components/MobileNav.css";
import CricketData from "../Props/CricketData";
import TennisData from "../Props/TennisData";
import Policy_Modal from "./Policy_Modal";
import SoccerData from "../Props/SoccerData";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function MobileNav() {
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
  }

  function searchbar() {
    let seach = document.getElementById("search");
    seach.classList.add("on-Search");
  }
  function remove_search() {
    let seach = document.getElementById("search");
    seach.classList.remove("on-Search");
  }

  return (
    <div className="search-box">
      {/* -------------- Mobile Search bar start ----------------     */}

      <div className="mobile-serch-box" id="search">
        <div>
          <div>
            <input
              type="search"
              placeholder="Search Events"
              className="mobile-search"
            />
          </div>
          <i class="fa-solid fa-magnifying-glass" id="seacrh-icon"></i>
        </div>
        <div className="remove-search" onClick={remove_search}></div>
      </div>

      {/* -------------- Mobile Search bar end ----------------     */}

      <Tabs>
        <TabList>
          <Tab>
            <div className="icon-img">
              <img src={iconImg2} alt="" />
            </div>
            Cricket
          </Tab>
          <Tab>
            <div className="icon-img">
              <img src={iconImg3} alt="" />
            </div>
            Tennis
          </Tab>

          <div className=" casino-mob" id="casino" onClick={Alert1}>
            <div className="icon-img">
              <img src={casino} alt="" />
            </div>
            Casino
          </div>

          <Tab>
            <div className="icon-img">
              <img src={Soccer} alt="" />
            </div>
            Soccer
          </Tab>
        </TabList>
        <Tab className="nav-box search" onClick={searchbar}>
          <i class="fa-solid fa-magnifying-glass"></i>
        </Tab>
        <div className="hightlights mob-hig">
          <h3>Highlights</h3>
        </div>

        <TabPanel>
          <CricketData />

          {/* --------------CopyRight--------------       */}
          <div className="copyright-box">
            <div className="hrline"></div>
            <div className="copyright">
              <p onClick={Modal1}>
                Privacy Policy | KYC | Terms and Conditions | Rules and
                Regulations | Responsible Gambling
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <TennisData />
          {/* --------------CopyRight--------------       */}
          <div className="copyright-box">
            <div className="hrline"></div>
            <div className="copyright">
              <p onClick={Modal1}>
                Privacy Policy | KYC | Terms and Conditions | Rules and
                Regulations | Responsible Gambling
              </p>
            </div>
          </div>
        </TabPanel>

        <TabPanel>
          <SoccerData />
          {/* --------------CopyRight--------------       */}
          <div className="copyright-box">
            <div className="hrline"></div>
            <div className="copyright">
              <p onClick={Modal1}>
                Privacy Policy | KYC | Terms and Conditions | Rules and
                Regulations | Responsible Gambling
              </p>
            </div>
          </div>
        </TabPanel>
      </Tabs>
      <Policy_Modal />
    </div>
  );
}
export default MobileNav;
