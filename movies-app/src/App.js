import logo from './logo.svg';
import Home from './Components/Home.jsx'
import AdminSection from './Components/Admin/AdminSection.jsx'
import Allroutes from './Routers/Allroute.jsx'
import UserSection from './Components/User/UserSection.jsx'

import './App.css';
import {useState} from "react"

function App() {
  const [state,setState]=useState(false);
  return (
    <div className="App" >

{/*    
     { state? <Home/> : } */}
     {/* <AdminSection/>  */}
     {/* <UserSection/> */}


     
     <Home/>
     <Allroutes/>


     

    </div>
  );
}
// sdfghj

export default App;
