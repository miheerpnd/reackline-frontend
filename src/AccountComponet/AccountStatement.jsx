import React from "react";
import Bars from "../Components/Bars";
import "../AccountComponet/AccountStatement.css";
function AccountStatement() {
  return (
    <div>
      <Bars />

      <div className="box two">
        <div className="bg-slider">
          <div className="my-profile-box date-box Account-main-box1">
            <div className="date-content-box">
              <select className="section">
                <option>Data Source</option>
                <option>Live DATA</option>
                <option>BACkUP DATA</option>
                <option>OLD DATA</option>
              </select>
            </div>

            <div className="date-content-box">
              <input
                type="date"
                id="birthday"
                name="birthday"
                style={{ marginTop: "0px" }}
              />
            </div>

            <div className="date-content-box">
              <input
                type="date"
                id="birthday"
                name="birthday"
                style={{ marginTop: "0px" }}
              />
            </div>

            <div className="date-content-box">
              <button style={{ marginTop: "0px" }}>Get Statement</button>
            </div>
          </div>

          <div className="my-profile-box rolling-box">
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
              <div className="rolling-head account-head">
                <h5 className="head-1">Date/Time</h5>
                <h5 className="head-2">Deposit</h5>
                <h5 className="head-3">Withdraw</h5>
                <h5 className="head-3">Balance</h5>
                <h5 className="head-3">Remark</h5>
                <h5 className="head-3">From/To</h5>
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
export default AccountStatement;
