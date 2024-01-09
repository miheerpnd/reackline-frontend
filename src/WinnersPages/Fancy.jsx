import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../WinnersPages/Fancy.css";
import Allfancy from "./Allfancy";
function Fancy() {
  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
  }
  return (
    <>
      <div className="fancy-main-box">
        <div className="fancy-box">
          <h5>Fancy Beat</h5>
          <div className="fancy-img">
            <div className="i-btn" onClick={Modal1}>
              <p>i</p>
            </div>
          </div>
        </div>
      </div>

      <Tabs>
        <div className="navs-box">
          <TabList>
            <Tab>All</Tab>
            <Tab>Fancy</Tab>
            <Tab>Line Market</Tab>
            <Tab>Ball by Ball</Tab>
            <Tab>Meter Market</Tab>
            <Tab>Khado Market</Tab>
          </TabList>
        </div>
        <TabPanel>
          <Allfancy />
        </TabPanel>
        <TabPanel>
          <Allfancy />
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel>
          <Allfancy />
        </TabPanel>

        <TabPanel>
          <Allfancy />
        </TabPanel>
      </Tabs>
    </>
  );
}
export default Fancy;
