import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../Props/User.css'
import Alert from "../Components/Alert";
function UserProps(){
const location = useLocation()
console.log(location.data)

    return (
        <div>
             <div className="user-main-box">
             <div className="saidebox ">
                <div className="saide-header ">
                <div className="box one spotrsone">
                    <ul className="leful User">
                    <li id="User_name">
                            <Link>Sir123

                            </Link>
                        </li>
                        <li>
                            <Link to="/myprofile">My Profile
                            <div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div>
                            </Link>
                        </li>

                        <li>
                            <Link to="/rolling">Rolling Commisson <div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                        <li >
                            <Link to="/AccountStatement">Account Statement <div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                        <li>
                            <Link to="/BetsHistory">Bets History<div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                        <li>
                            <Link to="/Profitloss">Profit & Loss<div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                        <li>
                            <Link to="/PasswordHistory">Password History<div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                        <li>
                            <Link to="/LoginActivity">Activty Log<div className="downarrow">
                              <i class="fa-solid fa-chevron-down fa-rotate-270"></i>
                            </div></Link>
                        </li>

                    </ul>
                   
                </div>
                
                </div>
                <div className="Account-btn mobile-logout-btn">
                        <button>LOGOUT <i class="fa fa-sign-out ml-2"></i></button>
                    </div>
                    <Alert/>
            </div>
             </div>
        </div>
    )
}
export default UserProps