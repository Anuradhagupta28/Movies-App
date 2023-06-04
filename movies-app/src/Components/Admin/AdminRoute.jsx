import {Routes,Route} from "react-router-dom"
import Login from './Login'
import Dashboard from './Dashboard'
import Reports from './Reports'

function AdminRoute() {
    return (
      <div >
        <Routes>
            <Route path='/login' element={<Login/>}>Login</Route>
            <Route path='/dashboard' element={<Dashboard/>}>Dashboard</Route>
            <Route path='/reports' element={<Reports/>}>Reports</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default AdminRoute;