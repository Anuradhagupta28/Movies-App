import { FormControl,FormLabel,Button,Input,Center,Text,VStack} from '@chakra-ui/react'

function Signin() {
    return (

      
<div>
<Text mt='40px'fontWeight="bold"  fontSize='4xl'> Signin/Login</Text>
<Center mt='60px' >
   
   <FormControl w='35%' h='260px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>

<FormLabel>Email</FormLabel>
<Input placeholder='Email' />
<FormLabel>Password</FormLabel>
<Input placeholder='Password' />
<Button mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' >Submit</Button>

</FormControl>
</Center>
</div>

    );
  }
  
  export default Signin;