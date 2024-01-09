import React, { useState } from "react";
import { Mdata } from "./Allmarketobject";
import "../WinnersPages/Allfancy.css";
import infoimg from "../Img/info.png"
function Allfancy() {
  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
  }
  const Alert1=()=> {
    let h22 = document.getElementById("close");
    h22.classList.add("new1");
  }
  const infofun = ()=>{
    document.getElementById("info_box").classList.add("on_info")
  }
  const info = ()=>{
    document.getElementById("info_box").classList.remove("on_info")
  }
  const [btnvalue1, setBtnvalue1] = useState(1000);
  const [btnvalue2, setBtnvalue2] = useState(5000);
  const [btnvalue3, setBtnvalue3] = useState(25000);
  const [btnvalue4, setBtnvalue4] = useState(50000);
  const [btnvalue5, setBtnvalue5] = useState(100000);
  const [btnvalue6, setBtnvalue6] = useState(200000);
  const [btnvalue7, setBtnvalue7] = useState(400000);
  const [btnvalue8, setBtnvalue8] = useState(500000);
  const [input1, setInput1] = useState(0);
  const [countcls, setCountcls] = useState("count");
  const [place, setPlace] = useState("place-bets");

  function value1() {
    setCountcls("countshow");
    setInput1(btnvalue1);
  }
  function value2() {
    setCountcls("countshow");
    setInput1(btnvalue2);
  }
  function value3() {
    setCountcls("countshow");
    setInput1(btnvalue3);
  }
  function value4() {
    setCountcls("countshow");
    setInput1(btnvalue4);
  }
  function value5() {
    setCountcls("countshow");
    setInput1(btnvalue5);
  }
  function value6() {
    setCountcls("countshow");
    setInput1(btnvalue6);
  }
  function value7() {
    setCountcls("countshow");
    setInput1(btnvalue7);
  }
  function value8() {
    setCountcls("countshow");
    setInput1(btnvalue8);
  }

  function Cls() {
    document.getElementById("all_btn3").style.display = "none";
    setCountcls("count");
  }

  return (
    <>
      <div className="winner-main-box Allfancy">
        <ul>
          <li className="mix Allfan1">
            <button>No</button>
            <button>Yes</button>
            <p className="All-fancy-p">Min/Max</p>
          </li>
          {Mdata.map((crtdata) => {
            const [two, setTwo] = useState(crtdata.count3);

            function Plus() {
              setTwo(two + 1);
            }
            function Minus() {
              setTwo(two - 1);
            }
            function subli() {
              document.getElementById("all_btn3").style.display = "block";
              setTwo(crtdata.count3);
            }
            function subli2() {
              document.getElementById("all_btn3").style.display = "block";
              setTwo(crtdata.count4);
            }
            
            return (
              <div>
                <li className="mix2">
                  <div className="inner-num">
                    <h6>
                      {crtdata.country}{" "}
                      <span className="arrow-num">
                        <i class="fa fa-arrow-right"></i> 0.00
                        <h5 className={countcls}>(-{input1})</h5>
                      </span>
                    </h6>
                  </div>

                  <div className="win-all-btn fanAll">
                    <div className="book-btn-box">
                      <button className="book-btn" onClick={Alert1}>Book</button>
                      <img src={infoimg} alt="" onClick={infofun}/>
                      <div className="info-box" id="info_box">
                        <div className="info-text">
                        <p>Min/Max</p>
                        <h5>100-2500</h5>
                        </div>

                        <i class="fa-solid fa-x" onClick={info}></i>
                      </div>
                    </div>
                    <button onClick={subli} className="uniqe fancy-btn1">
                      {crtdata.count3}
                      <span className="inner-text-mix">
                        {crtdata.innercount3}
                      </span>
                    </button>

                    <button onClick={subli2} className="uniqe">
                      {crtdata.count4}
                      <span className="inner-text-mix">
                        {crtdata.innercount4}
                      </span>
                    </button>
                    <p className="fancy-p">100-25000</p>
                  </div>
                </li>
                <div className="sub-lists" id="all_btn3">
                  <div className="counter-btn-box">
                    <div className="counter-first-box">
                      <button className="cancel-btn" onClick={Cls}>
                        Cancel
                      </button>
                      <div className="counter-input-box">
                        <button onClick={Minus}>
                          <i class="fa-solid fa-minus" onClick={info}></i>
                        </button>
                        <input
                          type="number"
                          value={two}
                          onChange={(e) => setTwo(e.target.value)}
                        />
                        <button onClick={Plus}>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                      <input
                        type="number"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                      />
                      <button className={place} id="cls">
                        Place Bets
                      </button>
                    </div>
                  </div>








                  <div className="counter-btn counter-btn-all">

                  <div className="counter-input-box mob-beat" id="mob-beat">
                  <div className="mob-d-flex">
                        <button onClick={Minus}>
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          value={two}
                          onChange={(e) => setTwo(e.target.value)}
                        />
                        <button onClick={Plus}>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>

                      <div className="d-flex-btn2">
                        <button>
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                        type="number"
                        value={input1}
                        onChange={(e) => setInput1(e.target.value)}
                      />
                        <button>
                          <i class="fa-solid fa-plus"></i>
                        </button>
                      </div>
                  </div>
                    <button onClick={value1}>{btnvalue1}</button>
                    <button onClick={value2}>{btnvalue2}</button>
                    <button onClick={value3}>{btnvalue3}</button>
                    <button onClick={value4}>{btnvalue4}</button>
                    <button onClick={value5}>{btnvalue5}</button>
                    <button onClick={value6}>{btnvalue6}</button>
                    <button onClick={value7}>{btnvalue7}</button>
                    <button onClick={value8}>{btnvalue8}</button>

                    <button
                      className="cancel-btn mob-cls-btn"
                      onClick={Cls}
                      style={{ fontSize: "15px" }}
                    >
                      Cancel
                    </button>
                    <button
                      className="pls-beat"
                      id="cls"
                      style={{
                        fontSize: "15px",
                        background:
                          "linear-gradient(-180deg, #2ed3d2 0, #189191 100%)",
                        color: "white",
                      }}
                    >
                      Place Bets
                    </button>
                  
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Allfancy;
