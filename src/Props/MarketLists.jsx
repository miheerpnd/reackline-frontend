import React from "react";
import Policy_Modal from "../Components/Policy_Modal";
import Winners from "../WinnersPages/WinnersPages";
import Boookmark from "../WinnersPages/booksmarks";
import Fancy from "../WinnersPages/Fancy";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import vdo from "../Img/vdo.mp4";

function Marketlist() {
  const Mob_watch = () => {
    document.getElementById("mob-vdo").classList.add("on-vdo");
    document.getElementById("live").classList.remove("border-b");
    document.getElementById("watch").classList.add("border-b");
  };
  const Live_vdo = () => {
    document.getElementById("mob-vdo").classList.remove("on-vdo");
    document.getElementById("watch").classList.remove("border-b");
    document.getElementById("live").classList.add("border-b");
  };
  const On_live = () => {
    document.getElementById("on_live").classList.toggle("on_live")
  };
  const reload = ()=>{
    window.location.reload()
  }

  return (
    <div>
      <div className="box two">
        <div className="mob-live-main">
          <div className="mob-cricket-list">
            <span>
              Cricket <i class="fa-solid fa-tv" onClick={On_live}></i>
            </span>
          </div>
          <div className="main-live" id="on_live">
            <div className="mob-live-head">
              <h4 className="border-b" onClick={Live_vdo} id="live">
                Live Score
              </h4>
              <h4 onClick={Mob_watch} id="watch">
                Watch Live
              </h4>
            </div>

            <div className="live-vdo" id="mob-vdo">
              <video width="100%" height="200px" controls muted loop>
                <source src={vdo} type="video/mp4"></source>
              </video>
            </div>
            <div className="shape1">
              <span>
                <div className="pin">
                  <i class="fa-solid fa-thumbtack"></i>
                </div>
                Pin
              </span>
              <span onClick={reload}>
                <div className="ref-img-box"></div>
                Refresh
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slider win">
          <div className="market-nav">
            <Tabs>
              <TabList>
                <Tab
                  style={{ height: "35px", width: "35px", borderRadius: "50%" }}
                >
                  All
                </Tab>
                <Tab>Winner</Tab>
                <Tab>
                  Bookmaker<span className="space">-</span>(0%
                  <span className="space">-</span>Commission
                  <span className="space">-</span>Fast
                  <span className="space">-</span>Bet
                  <span className="space">-</span>Confirm)
                </Tab>
              </TabList>

              <TabPanel></TabPanel>
            </Tabs>
          </div>
          <Winners />
          <Boookmark />
          <Fancy />
        </div>
      </div>
      <Policy_Modal />
    </div>
  );
}
export default Marketlist;
