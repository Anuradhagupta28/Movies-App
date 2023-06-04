import {Routes,Route} from "react-router-dom"
import AdminSection from '../Components/Admin/AdminSection'
import User from '../Components/User'
function Allroute() {
    return (
      <div >
        <Routes>
            <Route path='/admin' element={<AdminSection/>}>Admin</Route>
            <Route path='/user' element={<User/>}>User</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default Allroute;