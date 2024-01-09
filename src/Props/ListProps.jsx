import React from "react";
import { Link } from "react-router-dom";
import Alert from "../Components/Alert";
function ListProps(props) {
  function Alert1() {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  return (
    <div className="mainlist">
      <div className="altet1">
        <Alert />
      </div>

      <ul>
        <li>
          <div>
            <Link to={props.Link}>{props.name}</Link> <span>{props.play}</span>
            <i class="fa fa-television"></i>
          </div>
          <div className="cont">
          <h4 className="fancy-tag">F</h4>
            <p className="p1">0</p>
            <p className="p2">0</p>
            <p className="p3">0.0</p>
            <p className="p4">0.0</p>
            <p className="p5">0</p>
            <p className="p6">0</p>
            <Link>
              <div className="pin" onClick={Alert1}>
                <i class="fa-solid fa-thumbtack"></i>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default ListProps;
