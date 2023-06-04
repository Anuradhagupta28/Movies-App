import { Flex, Spacer,Box, Text,Center,VStack} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"
function Home() {

    const navigate = useNavigate();

    const handleAdmin = () => {
      navigate("/admin"); // Navigates to the "/dashboard" route
    };
    const handleUser = () => {
        navigate("/user"); // Navigates to the "/dashboard" route
      };

    return (
        
        <VStack  h='100vh' >
            <Center  w='100%'  bg='red.300'><Text fontWeight="bold"  fontSize='2xl'>Movies App</Text></Center> 
        
           <Flex  h='100%' w='100%'>
        <Center  onClick={handleAdmin} w='50%'  bg='green.500'><Text fontWeight="bold"  fontSize='2xl'>Admin Section</Text></Center>
        <Center   onClick={handleUser} w='50%' bg='blue.500'><Text fontWeight="bold" fontSize='2xl'>User Section</Text></Center>
      </Flex>
        
     
      </VStack>
    //   dhfjghj
      
    );
  }
  
  export default Home;