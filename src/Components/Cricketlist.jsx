import React from "react";
import { Link } from "react-router-dom";
import "../Components/Cricketlist.css";
import CricketData from "../Props/CricketData";

function Cricketlist() {
  return (
    <div className="mainlist">
      <ul>
      <div>
        <CricketData/>
      </div>
      </ul>
    </div>
  );
}
export default Cricketlist;
