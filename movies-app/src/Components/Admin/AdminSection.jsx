import Allroute from "../../Routers/Allroute";
import AdminNavbar from "./AdminNavbar"
import Login from "./Login";
import Dashboard from "./Dashboard";
import Reports from "./Reports";
import {Routes,Route} from "react-router-dom"
function AdminSection() {
    return (
        <div>
          <AdminNavbar/>
          {/* <Routes>
          <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
            <Route path='/reports' element={<Reports/>}>Reports</Route> 
            </Routes> */}
       
            </div>
   
   
    );
  }
  
  export default AdminSection;