import React from "react";
import "../pages/Multi.css";
import { Link } from "react-router-dom";
import LeftBar from "../Components/LeftBar";
function Multi() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <LeftBar />
      <div className="multicard">
        <h3>
          There are currently no followed multi markets.
          <hr />
          <h5>Please add some markets from events.</h5>
        </h3>
      </div>
      <div className="inplay-outer-box" style={{ marginTop: "100px" }}>
        <div className="inplay-rightbar">
          <h5>Open Bets</h5>
        </div>
      </div>
    </div>
  );
}
export default Multi;
