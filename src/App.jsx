import './App.css'
import Header from './Header/Header'
import Home from "./pages/Home"
import Play from './pages/Inplay'
import Sports from './pages/Sports'
import Multi from './pages/Multi'
import User from './pages/User'
import Footer from './Footer/Footer'
import {Routes, Route } from "react-router-dom";
import Nav2 from "./Components/Nav2";
import Todaylist from './Components/Todaylist'
import Tomorrowlist from './Components/Tomorrowlist'
import Cricket from './pages/Cricket'
import Tennis from './pages/Tennis'
import Soccer from './pages/Soccer'
import './pages/MediaScreen.css'
import MobileCricket from './MobileComponents/MoblieCricket'
import MobileSoccer from './MobileComponents/MobileSoccer'
import MobileTennis from './MobileComponents/MobileTennis'
import Fullmarket from './pages/Fullmarket'
import MyProfile from './AccountComponet/MyProfile'
import Rolling from './AccountComponet/Rolling'
import AccountStatement from './AccountComponet/AccountStatement'
import BetsHistory from './AccountComponet/BetsHistory'
import ProfitLoss from './AccountComponet/ProfitLoss'
import PasswordHistory from './AccountComponet/PasswordHistory'
import LoginActivity from './AccountComponet/LoginActivity'
import UserProps from './Props/Userprops'
import Winners from './WinnersPages/WinnersPages'


function App() {
  return(
    <div>
      {/* <Header/> */}
     <div className='allnav'>
     <Nav2/>
     </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="inplay" element={<Play/>}/>
          <Route path="Sports" element={<Sports/>}/>
          <Route path="Multi" element={<Multi/>}/>
          <Route path="User" element={<User/>}/>
          <Route path="Today" element={<Todaylist/>}/>
          <Route path="tomorrow" element={<Tomorrowlist/>}/>
          <Route path="Cricket" element={<Cricket/>}/>
          <Route path="Tennis" element={<Tennis/>}/>
          <Route path="Soccer" element={<Soccer/>}/>
          <Route path="MobileCricket" element={<MobileCricket/>}/>
          <Route path="MobileSoccer" element={<MobileSoccer/>}/>
          <Route path="/MobileTennis" element={<MobileTennis/>}/>
          <Route path="/Fullmarket" element={<Fullmarket/>}/>

          <Route path="/myprofile" element={<MyProfile/>}/>
          <Route path="/rolling" element={<Rolling/>}/>
          <Route path="/AccountStatement" element={<AccountStatement/>}/>
          <Route path="/BetsHistory" element={<BetsHistory/>}/>
          <Route path="/ProfitLoss" element={<ProfitLoss/>}/>
          <Route path="/PasswordHistory" element={<PasswordHistory/>}/>
          <Route path="/LoginActivity" element={<LoginActivity/>}/>
          <Route path="/Account" element={<UserProps/>}/>
          <Route path="/Account" element={<UserProps/>}/>
        </Routes>
      <Footer/>
    </div>
  )

}

export default App
