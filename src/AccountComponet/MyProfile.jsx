import React, { useState } from "react";
import Bars from "../Components/Bars";
import "../AccountComponet/MyProfile.css";
function MyProfile() {
  const [alert, setAlert] = useState("ProfileAlert-box");

  function removeAlert() {
    let modal = document.getElementById("modalalert");
    modal.classList.remove("ProfileAlert-remove");
  }
  function Eye() {
    let modal = document.getElementById("modalalert");
    modal.classList.add("ProfileAlert-remove");
  }
  function Edit() {
    document.getElementById("Edit_box").classList.add("new");
  }
  function removeAlert2() {
    document.getElementById("Edit_box").classList.remove("new");
  }
  function NoChange() {
    document.getElementById("Edit_box").classList.remove("new");
  }
  return (
    <div>
      <Bars />
      <div className="box two">
        <div className="bg-slider ">
          <div className="my-profile-box">
            <h4>Account Details</h4>
            <li>
              <h5>Name </h5>
              <span>sir404</span>
            </li>
            <li>
              <h5>Commission </h5>
              <span>0</span>
            </li>
            <li>
              <h5>Rolling Commission </h5>
              <span>
                <i class="fa-solid fa-eye" onClick={Eye}></i>
              </span>
            </li>
            <li>
              <h5>Exposure Limit </h5>
              <span>0</span>
            </li>
            <li>
              <h5>Mobile Number </h5>
              <span>0</span>
            </li>
            <li>
              <h5>Password </h5>
              <span>
                ********* Edit{" "}
                <i class="fa-regular fa-pen-to-square" onClick={Edit}></i>
              </span>
            </li>
          </div>
        </div>
      </div>

      <div className="Edit_pass_box" id="Edit_box">
        <div className="Edit_box">
          <div className="Alert-title">
            <h2>Change Password</h2>
            <i class="fa-solid fa-xmark" onClick={removeAlert2}></i>
          </div>
          <div className="inner_alert_box">
            <div className="password_input_pox">
              <label htmlFor="password">
                Old Password <span>*</span>
              </label>
              <input type="text" id="passwprd" placeholder="Old Password.." />
            </div>
            <div className="password_input_pox">
              <label htmlFor="new_password">
                New Password <span>*</span>
              </label>
              <input type="text" id="new_passwprd" placeholder="New Password" />
            </div>
          </div>

          <div className="inner_alert_box">
            <div className="password_input_pox">
              <label htmlFor="conf_password">
                Confirm Password <span>*</span>
              </label>
              <input
                type="text"
                id="conf_passwprd"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="hrline2"></div>

          <div className="password-btn-box">
            <button className="yes-btn">Yes</button>
            <button className="no_btn" onClick={NoChange}>
              No
            </button>
          </div>
        </div>
      </div>

      <div className="ProfileAlert-box" id="modalalert">
        <div className="ProflieAlert-inner">
          <div className="Alert-title">
            <h2>Rolling Commission</h2>
            <i class="fa-solid fa-xmark" onClick={removeAlert}></i>
          </div>
          <ul>
            <li>
              <h5>Fancy</h5> <span>0</span>
            </li>
            <li>
              <h5>Matka</h5> <span>0</span>
            </li>
            <li>
              <h5>Casino</h5> <span>0</span>
            </li>
            <li>
              <h5>Binary</h5> <span>0</span>
            </li>
            <li>
              <h5>Sportbook</h5> <span>0</span>
            </li>
            <li>
              <h5>Bookmark</h5> <span>0</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default MyProfile;
