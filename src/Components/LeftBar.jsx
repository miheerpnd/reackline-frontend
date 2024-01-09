import React from "react";
import "../Components/LeftBar.css";
import { Link } from "react-router-dom";
import Alert from "./Alert";
import "../Components/LeftBar.css";
function LeftBar() {
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  return (
    <div>
      <Alert />
      <div className="saidebox">
        <div className="saide-header">
          <div className="box one">
            <div className="menu-icon">
              <i class="fa fa-ellipsis-v"></i>
              <h5>Sports</h5>
            </div>
            <ul className="leful">
              <li>
                <Link to="/Cricket">
                  Cricket{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link to="/Tennis">
                  Tennis{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link onClick={Alert1}>
                  Casino{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link to="/Soccer">
                  Soccre{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link to="/Horse">
                  Horse Racing{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link>
                  Virtual Sports{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>

              <li>
                <Link>
                  Basketball{" "}
                  <i
                    class="fa-regular fa-square-caret-down 
                             fa-rotate-270"
                  ></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LeftBar;
