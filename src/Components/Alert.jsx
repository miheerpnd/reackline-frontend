import React, { useState } from "react";
import "../Components/Alert.css";
import Logo from "../Img/logo.png";
import { useNavigate } from "react-router";
import '../Components/Alert.css'

function Alert() {

  const navigate = useNavigate()

  let [close, setClose] = useState("close");
  let [login, setLogin] = useState("Login");

  
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  let id = "login@123"
  let b = "tls@123"

  function Mobile_login(){
    if(name==id && pass==b){
      document.getElementById("login_alert").classList.add("sub-main");
      navigate("/User",{state : { a : id}})
    }
    else{
      alert(
        "please enter valid User'id or Password"
      )
    }
  }


  function Close() {
    document.getElementById("close").classList.remove("new1");
    document.getElementById("loginbox").classList.remove("remove");
  }

  function Exit() {
    document.getElementById("close").classList.remove("new1");
  }

  function Login() {
    setLogin("onLogin");
    document.getElementById("loginbox").classList.add("remove");
    document.getElementById("close").classList.remove("new1");
  }
  return (
    <div>
      <div id="login_alert">
      <div className="alert-main" >
        <div className={close} id="close">
          <i class="fa-solid fa-xmark" onClick={Close}></i>
          <h3>Non-Gambling Territories.</h3>
          <hr />
          <h4>
            Connecting to our site from non gambling countries, it will be
            User's responsibility to ensure that their use of the service is
            lawful.
          </h4>
          <h5>Underage gambling is prohibited.</h5>
          <hr />
          <h4>Please confirm if you are 18 years old and above as of today.</h4>
          <div className="form-btns">
            <button onClick={Login}>Confirm</button>
            <button className="Exit" onClick={Exit}>
              Exit
            </button>
          </div>
        </div>
      </div>
      <div className="login-main-box" id="loginbox">
        <div className={login}>
          <div className="Close-icon">
            <i class="fa-solid fa-xmark" onClick={Close}></i>
          </div>
          <div className="form-box">
            <img src={Logo} alt="" />
            <h3>Please login to continue</h3>


            <input type="text" placeholder="Username"
             value={name} onChange={(e) => setName(e.target.value)} required />

            <input type="password" placeholder="Password"
             value={pass} onChange={(e) => setPass(e.target.value)} required />
            <button onClick={Mobile_login}>Login</button>
            
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Alert;
