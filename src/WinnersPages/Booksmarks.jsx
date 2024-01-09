import React, { useState } from "react";
import "../WinnersPages/Bookmark.css";
import { Mdata } from "./Allmarketobject";

function Boookmark() {
  function Modal1() {
    document.getElementById("modal-box").classList.add("on-modal");
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

  function test() {
    document.getElementById("all_btn").style.display = "block";
  }
  function Cls() {
    document.getElementById("all_btn2").style.display = "none";
    setCountcls("count");
  }

  return (
    <>
      <div className="winner-main-box book-main">
        <ul>
          <li className="bookmark">
            <button>
              Bookmaker (0% Commission Fast Bets Confirm){" "}
              <div className="i-btn3" onClick={Modal1}>
                <p className="i-btn3-p">i</p>
              </div>
            </button>
            <p className="book-match">
              Matched <span>€ 2.1 M</span>
            </p>
          </li>

          <li className="mix book">
            <button>Back</button>
            <button>Lay</button>
            <p className="mix-book-p">
              Min/Max<span>1-0</span>
            </p>
          </li>
          {Mdata.map((crtdata) => {
            const [data, setData] = useState();

            function Plus() {
              setData(data + 1);
            }
            function Minus() {
              setData(data - 1);
            }
            function test() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count6);
            }
            function test2() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count5);
            }
            function test3() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count4);
            }
            function test4() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count3);
            }
            function test5() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count2);
            }
            function test6() {
              document.getElementById("all_btn2").style.display = "block";
              setData(crtdata.count1);
            }

            return (
              <div>
                <li className="mix2 book2">
                  <div className="inner-num">
                    <h6>
                      {crtdata.country}{" "}
                      <span className="arrow-num">
                        <i class="fa fa-arrow-right"></i> 0.00
                        <h5 className={countcls}>(-{input1})</h5>
                      </span>
                    </h6>
                  </div>
                  <div className="win-all-btn all-book-btn">
                    <div className="book-bg">
                      <button onClick={test} className="uniqe">
                      {crtdata.count6}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                      <button onClick={test2} className="uniqe">
                      {crtdata.count5}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                      <button onClick={test3} className="uniqe uniqe2">
                      {crtdata.count4}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                    </div>

                    <div className="book-bg book-bg-2">
                      <button onClick={test4} className="uniqe uniqered">
                      {crtdata.count3}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                      <button onClick={test5} className="uniqe">
                      {crtdata.count2}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                      <button onClick={test6} className="uniqe">
                      {crtdata.count1}
                        <span className="inner-text-mix">
                        {crtdata.innercount6}
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <div className="sub-lists" id="all_btn2">
                  <div className="counter-btn-box">
                    <div className="counter-first-box">
                      <button className="cancel-btn" onClick={Cls}>Cancel</button>
                      <div className="counter-input-box">
                        <button onClick={Minus}>
                          <i class="fa-solid fa-minus"></i>
                        </button>
                        <input
                          type="number"
                          value={data}
                          onChange={(e) => setOne(e.target.value)}
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
                      <button className={place} id="cls">Place Bets</button>
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
                          value={data}
                          onChange={(e) => setOne(e.target.value)}
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
export default Boookmark;
