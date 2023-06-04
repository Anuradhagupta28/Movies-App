import {Routes,Route} from "react-router-dom"
import Admin from '../Components/Admin'
import User from '../Components/User'
function Allroute() {
    return (
      <div >
        <Routes>
            <Route path='/admin' element={<Admin/>}>Admin</Route>
            <Route path='/user' element={<User/>}>User</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default Allroute;