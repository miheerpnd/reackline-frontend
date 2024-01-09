import React from "react";
import Bars from "../Components/Bars";
function PasswordHistory() {
  return (
    <div>
      <Bars />

      <div className="box two">
        <div className="bg-slider">
          <div className="my-profile-box">
            <h4>Account Statements</h4>
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

            <div className="rolling-inner-box">
              <div className="rolling-head account-head history-head">
                <h5 className="head-1 date">Date/Time</h5>
                <h5 className="head-2 remark">Remark</h5>
              </div>
              <div className="rolling-head account-head history-head">
                <p className="date-time">15-09-2023 23:48:54</p>
                <p>Password Changed By Self.</p>
              </div>
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
export default PasswordHistory;
