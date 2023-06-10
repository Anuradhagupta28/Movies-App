import {Routes,Route} from "react-router-dom"
import Signin from './Signin'
import Signup from './Signup'
import Movies from './Movies'

function AdminRoute() {
    return (
      <div >
        <Routes>
            <Route path='/Signin' element={<Signin/>}>Signin</Route>
            <Route path='/signup' element={<Signup/>}>Signup</Route>
            <Route path='/movies' element={<Movies/>}>Movies</Route>
        </Routes>
     
       
      </div>
    );
  }
  
  export default AdminRoute;