import React from "react";
import ListProps from "../Props/ListProps";
import Bgslider from "./Bgslider";
import { NavLink } from "react-router-dom";
import Policy_Modal from "./Policy_Modal";
import CricketData from "../Props/CricketData";
import MobileNav from "./MobileNav";

function Middle() {

  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
  }
  return (
    <div>
      <Bgslider />
       <MobileNav/>
      <Policy_Modal/>
    </div>
  );
}
export default Middle;
