import { Box, Text,Flex} from '@chakra-ui/react'
import {Link} from "react-router-dom"
function Login() {
    return (
        
   
   <Box bg='red.300' w='100%' p={4} color='white'>
    <Flex>
      <Link to='/login'><Text> Login</Text></Link>
      <Link to='/dashboard'><Text>Dashboard</Text></Link>
      <Link to='/reports'><Text>Reports</Text></Link>
    </Flex>
 </Box>
    );
  }
  
  export default Login;