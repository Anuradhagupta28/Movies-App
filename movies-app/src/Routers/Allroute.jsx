import {Routes,Route} from "react-router-dom"
import AdminSection from '../Components/Admin/AdminSection'
import UserSection from '../Components/User/UserSection'
import Signin from "../Components/User/Signin";
import Signup from "../Components/User/Signup";
import Movies from "../Components/User/Movies";
import Login from "../Components/Admin/Login";
import Dashboard from "../Components/Admin/Dashboard";
import Reports from "../Components/Admin/Reports";
function Allroute() {
 
    return (
      <div >
        <Routes>
            <Route path='/admin' element={<AdminSection/>}>Admin</Route>
            <Route path='/user' element={<UserSection/>}>User</Route>
            <Route path='/signin' element={<Signin/>}>Signin</Route>
            <Route path='/signup' element={<Signup/>}>Signup</Route>
            <Route path='/movies' element={<Movies/>}>Movies</Route>
            <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
            <Route path='/reports' element={<Reports/>}>Reports</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default Allroute;