import React from "react";
import "../Components/Bars.css";
import LeftBar from "./LeftBar";
function Bars() {
  return (
    <div>
      <div className="Bars">
        <LeftBar />
        <div className="box three">
          <h5>Open Bets</h5>
          <select className="SelectMarket">
            <option value="volvo">Select Market</option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default Bars;
