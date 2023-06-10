import {Routes,Route} from "react-router-dom"
import AdminSection from '../Components/Admin/AdminSection'
import UserSection from '../Components/User/UserSection'
function Allroute() {
    return (
      <div >
        <Routes>
            <Route path='/admin' element={<AdminSection/>}>Admin</Route>
            <Route path='/user' element={<UserSection/>}>User</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default Allroute;