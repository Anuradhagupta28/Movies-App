import {Routes,Route} from "react-router-dom"
import Login from '../Components/Admin/Login'
import Dashboard from '../Components/Admin/Dashboard'
import Reports from '../Components/Admin/Reports'
import User from '../Components/User'
function AdminRoute() {
    return (
      <div >
        <Routes>
            <Route path='/login' element={<Login/>}>Admin</Route>
            <Route path='/dashboard' element={<Dashboard/>}>User</Route>
            <Route path='/reports' element={<Reports/>}>User</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default AdminRoute;