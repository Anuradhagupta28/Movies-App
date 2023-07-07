import { FormControl,FormLabel,Button,Input,Center,Text,VStack,useToast} from '@chakra-ui/react'
import UserNavbar from './UserNavbar';
import { useState ,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function Signin() {
    const [emailC,setEmailC]=useState("")
    const [passwordC,setPasswordC]=useState("")
    const[stateC,setStateC]=useState([])
    const navigate=useNavigate();
    const toast = useToast()
    

    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        var res = await fetch("https://movie-json-2wa0.onrender.com/users");
        var tabledata = await res.json();
        console.log("tabledata",tabledata);
        setStateC(tabledata); // Update Phase
      };
      const statuses = [ 'error']

        const authFun=()=>{
        stateC.map((ele)=>{
            console.log("ele",ele.email)
            if(emailC==ele.email && passwordC==ele.password){
            
                toast({
                    title: 'You are succesfully login',
                 
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                  })
                navigate('/movies')
            }
            else{
                {statuses.map((status, i) => (
                  toast({
                            title: `${status} in credentials`,
                            status: status,
                            isClosable: true,
                          })
                 ))}
                // toast({
                //     title: 'You are not succesfully login',
                 
                //     status: 'success',
                //     duration: 9000,
                //     isClosable: true,
                //   })
             
            }
        
        })
      
      }

    return (
        <div>
<UserNavbar/>
      
<div>
<Text mt='40px'fontWeight="bold"  fontSize='3xl'> Login to your account</Text>
<Center mt='60px' >
   
   <FormControl w='35%' h='240px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>

<FormLabel>Email</FormLabel>
<Input placeholder='Email' onChange={(e)=>{setEmailC(e.target.value)}}  />
<FormLabel>Password</FormLabel>
<Input placeholder='Password' onChange={(e)=>{setPasswordC(e.target.value)}}  />
<Button mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' onClick={authFun}>Submit</Button>

</FormControl>
</Center>
</div>
</div>

    );
  }
  
  export default Signin;