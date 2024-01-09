import React from "react";
import "../pages/Home.css";
import Bars from "../Components/Bars";
import Middle from "../Components/Middlebar";
import LeftBar from "../Components/LeftBar";
function Home() {
  return (
    <div>
      <LeftBar />
      <div className="home-nav"></div>
      <div className="middle-bar">
        <Middle />
      </div>
      <div className="home-bars">
        <Bars />
      </div>
    </div>
  );
}
export default Home;
