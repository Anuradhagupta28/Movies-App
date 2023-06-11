import { FormControl,FormLabel,Button,Input,Center,Text,VStack,useToast } from '@chakra-ui/react'


import AdminNavbar from './AdminNavbar';
import {useEffect,useState} from "react"
import { useNavigate } from 'react-router-dom';

function Login() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    const navigate=useNavigate();
    const toast = useToast()

    const loginToken =async()=>{
      let res= await fetch('https://reqres.in/api/login',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({email,password})
       })
       let data=await res.json();
     console.log("data",data)
     if(data.hasOwnProperty('token')){
        // alert('Hii Admin,you are succesfully login')
        toast({
            title: 'Hii Admin ,you are succesfully login',
         
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        
        navigate('/dashboard')

     }
    
    }

    const handleSubmit=()=>{
        loginToken()

        }

    return (


<div>
<AdminNavbar/>
<div>

<Text mt='40px'fontWeight="bold"  fontSize='4xl'> Login</Text>
<Center mt='60px' >
   
   <FormControl w='35%' h='240px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>
<FormLabel>Email</FormLabel>
<Input placeholder='Email'  onChange={(e)=>{setEmail(e.target.value)}}/>
<FormLabel>Password</FormLabel>
<Input onChange={(e)=>{setPassword(e.target.value)}} placeholder='Password' />
<Button onClick={handleSubmit } mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' >Submit</Button>

</FormControl>
</Center>
</div>
</div>

    );
  }
  
  export default Login;