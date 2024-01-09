import React from "react";
import "../Components/Bgslider.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Components/Middlebar.css";
import slider1 from "../Img/slider1.jpg";
import slider2 from "../Img/slider2.jpg";
import slider3 from "../Img/1.jpg";
import slider4 from "../Img/slider4.jpg";
import { NavLink } from "react-router-dom";
function Bgslider() {
  const options = {
    items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    nav: false,
    dots: true,
    margin: 0,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
  return (
    <div>
      <div className="box two">
        <div className="bg-slider">
          <OwlCarousel className="owl-theme" {...options}>
            <div class="item">
              <img src={slider1} alt="" />
            </div>
            <div class="item">
              <img src={slider2} alt="" />
            </div>
            <div class="item">
              <img src={slider3} alt="" />
            </div>
            <div class="item">
              <img src={slider4} alt="" />
            </div>
          </OwlCarousel>
          <h6 className="mob-highlights">Highlights</h6>
        </div>
      </div>
    </div>
  );
}
export default Bgslider;
