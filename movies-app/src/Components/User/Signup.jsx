import { FormControl,FormLabel,Button,Input,Center,Text,VStack} from '@chakra-ui/react'

function Signup() {
    return (

      
<div>
<Text mt='40px'fontWeight="bold"  fontSize='4xl'> Login</Text>
<Center mt='60px' >
   
   <FormControl w='35%' h='240px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>
   <FormLabel>Username</FormLabel>
<Input placeholder='Username' />
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
  
  export default Signup;