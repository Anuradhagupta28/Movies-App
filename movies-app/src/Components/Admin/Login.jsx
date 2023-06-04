import { FormControl,FormLabel,Input,Center,Text} from '@chakra-ui/react'

function Login() {
    return (
        
   <Center>
    <Text>Login Form</Text>
      <FormControl w='30%' isRequired>
  <FormLabel>First name</FormLabel>
  <Input placeholder='First name' />
</FormControl>
</Center>
    );
  }
  
  export default Login;