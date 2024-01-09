import React from "react";
import Bars from "../Components/Bars";
function BetsHistory() {
  return (
    <div>
      <Bars />
      <div className="box two">
        <div className="bg-slider">
          <div className="my-profile-box date-box">
            <div className="date-content-box">
              <select className="section">
                <option>Data Source</option>
                <option>Live DATA</option>
                <option>BACkUP DATA</option>
                <option>OLD DATA</option>
              </select>
              <input type="date" id="birthday" name="birthday" />
            </div>
            <div className="date-content-box">
              <select className="section">
                <option>Cricket</option>
                <option>Tennis</option>
                <option>Cricket</option>
                <option>Soccer</option>
              </select>
              <input type="date" id="birthday" name="birthday" />
            </div>
            <div className="date-content-box">
              <select className="section">
                <option>Settle</option>
                <option>UnSettle</option>
                <option>Volid</option>
              </select>
              <button className="his-btn">Get History</button>
            </div>
          </div>

          <div className="my-profile-box rolling-box">
            <h4>Bets History</h4>
            <label htmlFor="cont" className="for">
              Show
            </label>
            <select id="cont">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </select>
            <label htmlFor="cont">entries</label>

            <div className="rolling-inner-box rolling-acc">
              <div className="rolling-head account-head">
                <h5 className="head-1">Sports Name</h5>
                <h5 className="head-2">Event Name</h5>
                <h5 className="head-3">Market Name</h5>
                <h5 className="head-3">Selection</h5>
                <h5 className="head-3">Type</h5>
                <h5 className="head-3">Odds Req.</h5>
                <h5 className="head-3">Stake</h5>
                <h5 className="head-3">Place Time</h5>
                <h5 className="head-3">Matched Time</h5>
              </div>
              <p>No data!</p>
            </div>
            <div className="title">
              <h6>Showing 0 to 0 of 0 entries</h6>
              <h5>First Previous Next Last</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BetsHistory;
