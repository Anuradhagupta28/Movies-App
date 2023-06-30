import { FormControl,FormLabel,Button,Input,Center,Text,VStack} from '@chakra-ui/react'
import UserNavbar from './UserNavbar';

import { useState ,useEffect} from 'react';

function Signup() {

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")

  const handleForm=async()=>{
    let res= await fetch(' https://movie-json-2wa0.onrender.com/users',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({username,email,password})
     })
     let data=await res.json();
     console.log("data",data)
     
  }


    return (

      <div>
        <UserNavbar/>
<div>
<Text mt='40px'fontWeight="bold"  fontSize='4xl'> Signup</Text>
<Center mt='60px' >
   
   <FormControl w='35%' h='300px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>
   <FormLabel>Username</FormLabel>
<Input placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}} />
<FormLabel>Email</FormLabel>
<Input placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
<FormLabel>Password</FormLabel>
<Input placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}  />
<Button mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' onClick={handleForm} >Submit</Button>

</FormControl>
</Center>
</div>
</div>
    );
  }
  
  export default Signup;