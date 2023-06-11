import { Box, Text,Flex,Spacer} from '@chakra-ui/react'
import {Link} from "react-router-dom"
function UserNavbar() {
    return (
        
   
   <Box bg='#e26068' w='100%' p={4} color='white' h='40px'>
    <Flex>
      <Link to='/signup' ><Text> Signup</Text></Link>
      <Spacer />
      <Link to='/signin'><Text>Signin</Text></Link>
      <Spacer />
      <Link to='/movies'><Text>Movies</Text></Link>
    </Flex>
 </Box>
    );
  }
  
  export default UserNavbar;