import { Box, Text,Flex,Spacer} from '@chakra-ui/react'
import {Link} from "react-router-dom"
function UserNavbar() {
    return (
        
   
   <Box bg='red.300' w='100%' p={4} color='white'>
    <Flex>
      <Link to='/login' ><Text> Signup</Text></Link>
      <Spacer />
      <Link to='/dashboard'><Text>Sigin/Login</Text></Link>
      <Spacer />
      <Link to='/reports'><Text>Movies</Text></Link>
    </Flex>
 </Box>
    );
  }
  
  export default UserNavbar;