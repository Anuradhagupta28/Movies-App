import { Flex, Spacer,Box, Text,Center,VStack} from '@chakra-ui/react'

function Home() {
    return (
        
        <VStack  h='100vh' >
            <Center  w='100%'  bg='red.300'><Text fontWeight="bold"  fontSize='2xl'>Movies App</Text></Center> 
        
           <Flex  h='100%' w='100%'>
        <Center  w='50%'  bg='green.500'><Text fontWeight="bold"  fontSize='2xl'>Admin Section</Text></Center>
        <Center   w='50%' bg='blue.500'><Text fontWeight="bold" fontSize='2xl'>User Section</Text></Center>
      </Flex>
        
     
      </VStack>
    //   dhfjghj
      
    );
  }
  
  export default Home;