import React from "react";
import Bars from "../Components/Bars";
import "../AccountComponet/Rolling.css";
function Rolling() {
  return (
    <div>
      <Bars />

      <div className="box two">
        <div className="bg-slider">
          <div className="my-profile-box date-box">
            <div className="date-content-box">
              <select className="section">
                <option>OLD DATA</option>
                <option>Data Source</option>
                <option>Live DATA</option>
                <option>BACkUP DATA</option>
                <option>OLD DATA</option>
              </select>
              <input type="date" id="birthday" name="birthday" />
            </div>
            <div className="date-content-box">
              <select className="section">
                <option>Casino</option>
                <option>Tennis</option>
                <option>Cricket</option>
                <option>Soccer</option>
              </select>
              <button>Get Commission</button>
            </div>
            <div className="date-content-box">
              <input
                type="date"
                id="birthday"
                name="birthday"
                style={{ marginTop: "0px" }}
              />
            </div>
          </div>

          <div className="my-profile-box rolling-box">
            <h4>Rolling Commission</h4>
            <div className="rolling-inner-box">
              <div className="rolling-head">
                <h5 className="head-1">Type</h5>
                <h5 className="head-2">Total Stack</h5>
                <h5 className="head-3">Total Commission</h5>
              </div>
              <p>No data!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Rolling;
