import { Box, Text,Flex,Spacer} from '@chakra-ui/react'
import {Link} from "react-router-dom"
function AdminNavbar() {
    return (
        
   
   <Box bg='red.300' w='100%' p={4} color='white'>
    <Flex>
      <Link to='/login' ><Text> Login</Text></Link>
      <Spacer />
      <Link to='/dashboard'><Text>Dashboard</Text></Link>
      <Spacer />
      <Link to='/reports'><Text>Reports</Text></Link>
    </Flex>
 </Box>
    );
  }
  
  export default AdminNavbar;