import { Flex, Spacer,Box, Text,Center,VStack,Image,Button } from '@chakra-ui/react'
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
        
      //   <VStack  h='100vh' >
      //       <Center  w='100%'  bg='red.300'><Text fontWeight="bold"  fontSize='2xl'>Movies App</Text></Center> 
        
      //      <Flex  h='100%' w='100%'>
      //   <Center  onClick={handleAdmin} w='50%'  bg='green.500'><Text fontWeight="bold"  fontSize='2xl'>Admin Section</Text></Center>
      //   <Center   onClick={handleUser} w='50%' bg='blue.500'><Text fontWeight="bold" fontSize='2xl'>User Section</Text></Center>
      // </Flex>
        
     
      // </VStack>

      <Flex w='100%'  bg='#e26068' 	gap='1050px'>
       <Box>
        <Image w='100px' h='40px' alt='movies' src='https://static.vecteezy.com/system/resources/previews/005/567/681/original/video-recorder-icon-in-flat-style-with-shadow-on-red-background-video-camera-free-vector.jpg'></Image>
        {/* <Image w='100px' h='50px' alt='movies' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMHaPGqwc3PFkUfsPO1kbp7MFtZ42YQqidO0qtGBzUtWO1eiq54Neb82jV1ZL3BfazC8w&usqp=CAU'></Image> */}
       </Box>
       <Box>
        <Flex 	gap='20px' >
        <Button   onClick={handleAdmin}  bgColor='red.300'>Admin</Button>
        <Button   onClick={handleUser} bgColor='red.300'>User</Button>
        </Flex>
        
       </Box>

      </Flex>
   
      
    );
  }
  
  export default Home;