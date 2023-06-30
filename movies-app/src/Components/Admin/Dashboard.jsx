
import { FormControl,FormLabel,Button,Input,Center,Text,VStack,Select} from '@chakra-ui/react';
import { Modal,ModalOverlay, ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton,useDisclosure} from '@chakra-ui/react'
// import { useDisclosure  } from '@chakra-ui/react';
import * as React from 'react'

import { useState ,useEffect} from 'react';
import {
   Table,
   Thead,
   Tbody,
   Tfoot,
   Tr,
   Th,
   Td,
   TableCaption,
   TableContainer,
 } from '@chakra-ui/react'
import AdminNavbar from './AdminNavbar';

function Dashboard() {
  const [posterImage,setPosterImg]=useState("")
  const [movieTitle,setMovieTitle]=useState("")
  const [director,setDirector]=useState("")
  const [year,setYear]=useState(0)
  const [genre,setGenre]=useState("")
  const [imdbRating, setImdb]=useState(0)
  const [ticketCost,setTicketCost]=useState("")
  const [checkId,setCheckId]=useState("")

const handleIdForEdit=(_id,posterImage,movieTitle,director,year,genre,imdbRating,ticketCost)=>{
  setCheckId({_id,posterImage,movieTitle,director,year,genre,imdbRating,ticketCost})

}
console.log("checkId",checkId)


const handleForm=async()=>{
  let res= await fetch('http://localhost:8080/adddata',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({posterImage,movieTitle,director,year,genre,imdbRating,ticketCost})
   })
   let data=await res.json();
   console.log("data",data)
   getData()
}

const[state,setState]=useState([])
useEffect(()=>{
    getData()
},[])
// http://localhost:8080/getData

const getData = async () => {
    var res = await fetch("http://localhost:8080/getData");
    var tabledata = await res.json();
    console.log("tabledata",tabledata);
    setState(tabledata); // Update Phase
  };

  const deleteHandle=async(id)=>{
    let res= await fetch(`http://localhost:8080/delete/${id}`,{
      method:'DELETE',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify()
     })
 var deleteDataId=await res.json();
 console.log("deleteDataId",deleteDataId);
 getData()
  }

  const editHandle=async(id)=>{
    let res= await fetch(`http://localhost:8080/update/${id}`,{
      method:'PATCH',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({posterImage,movieTitle,director,year,genre,imdbRating,ticketCost})
     })
 var editData=await res.json();
 console.log("editData",editData);
 getData()
  }



  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

    return (
      <div>
        <AdminNavbar/>
   
 <div>
    <Text mt='20px'fontWeight="bold"  fontSize='3xl'> Dashboard</Text>
     
        
   <Center mt='20px' >
   
   <FormControl w='35%' h='590px' mb='20px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>
<FormLabel>Poster Image</FormLabel>
<Input placeholder='Poster Image' onChange={(e)=>{setPosterImg(e.target.value)}} />
<FormLabel>Movie Title </FormLabel>
<Input placeholder='Movie Title' onChange={(e)=>{setMovieTitle(e.target.value)}} />
<FormLabel>Director</FormLabel>
<Input placeholder='Director' onChange={(e)=>{setDirector(e.target.value)}}/>
<FormLabel>Year</FormLabel>
<Input type='num' placeholder='Year' onChange={(e)=>{setYear(e.target.value)}}/>
<FormLabel>Genre</FormLabel>
<Select border='1px' borderColor='gray.400' placeholder='Genre' onChange={(e)=>{setGenre(e.target.value)}}>
   <option value='Action'>Action</option>
   <option  value='Comedy'>Comedy</option>
   <option  value='Horror'>Horror</option>
   <option  value='Romance'>Romance</option>
</Select>
<FormLabel>IMDB Rating</FormLabel>
<Input type='num' placeholder='IMDB Rating' onChange={(e)=>{setImdb(e.target.value)}}/>
<FormLabel>Ticket Cost</FormLabel>
<Input  type='num' placeholder='Ticket Cost' onChange={(e)=>{setTicketCost(e.target.value)}} />
<Button onClick={handleForm} mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' >Submit</Button>
</FormControl>
</Center>

{/* fffffffffffffffffffffffffffffff */}
<Text mt='20px'fontWeight="bold"  fontSize='2xl'> Movies Data Table</Text>

<Center mb='50px' mt='20px'>
<TableContainer>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>


      <Tr>
         
        <Th fontWeight="bold"  fontSize='1xl'>Id</Th>
        <Th fontWeight="bold"  fontSize='1xl'>Movie Title</Th>
        <Th fontWeight="bold"  fontSize='1xl' >Director</Th>
        <Th  fontWeight="bold"  fontSize='1xl' isNumeric>Year</Th>
        <Th  fontWeight="bold"  fontSize='1xl'>Genre</Th>
        <Th   fontWeight="bold"  fontSize='1xl' isNumeric>IMDB Rating</Th>
        <Th   fontWeight="bold"  fontSize='1xl' isNumeric>Ticket Cost</Th>
        <Th  fontWeight="bold"  fontSize='1xl'>Edit</Th>
        <Th  fontWeight="bold"  fontSize='1xl' >Delete</Th>
        <Th fontWeight="bold"  fontSize='1xl'>Poster Image</Th>
      </Tr>
    
     
    </Thead>
   
     
    <Tbody>
    {state.map((el)=>{
    return(
<>
          <Tr>
          
        
        <Td>{el._id}</Td>
        <Td isNumeric>{el.movieTitle}</Td>
        <Td>{el.director}</Td>
        <Td>{el.year}</Td>
        <Td>{el.genre}</Td>
        <Td>{el.imdbRating}</Td>
        <Td>{el.ticketCost}</Td>
        <Td><Button onClick={onOpen}   >Edit</Button></Td>
        {/* <Td><Button onClick={()=>editHandle(el._id)}   >Edit</Button></Td> */}
        {/* <Td><Button   onClick={()=>{onOpen() ;handleIdForEdit(el._id,el.posterImage,el.movieTitle,el.director,el.year,el.genre,el.imdbRating,el.ticketCost) }} >Edit</Button></Td> */}
        <Td><Button onClick={()=>deleteHandle(el._id)}>Delete</Button></Td>
        <Td>{el.posterImage}</Td>
        {/* handleIdForEdit(el._id) */}
      </Tr>
      <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}

      >
        <ModalOverlay />
        <ModalContent  border='solid pink' >
          <ModalHeader>Edit Data</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={2}>
            <FormControl>
              <FormLabel>Poster Image</FormLabel>
              <Input ref={initialRef} placeholder='Poster Image'  onChange={(e)=>{setPosterImg(e.target.value)}} value={checkId.posterImage} />
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Movie Title </FormLabel>
              <Input placeholder='Movie Title' onChange={(e)=>{setMovieTitle(e.target.value)}} value={checkId.movieTitle}/>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Director</FormLabel>
              <Input ref={initialRef} placeholder='Director' onChange={(e)=>{setDirector(e.target.value)}} value={checkId.director}/>
            </FormControl>

            <FormControl mt={2}>
              <FormLabel>Year</FormLabel>
              <Input ref={initialRef} placeholder='Year' onChange={(e)=>{setYear(e.target.value)}} value={checkId.year}/>
            </FormControl>

            <FormLabel mt={2}>Genre</FormLabel>
            <Select  placeholder='Genre' onChange={(e)=>{setGenre(e.target.value)}} value={checkId.genre}>
   <option value='Action'>Action</option>
   <option  value='Comedy'>Comedy</option>
   <option  value='Horror'>Horror</option>
   <option  value='Romance'>Romance</option>
          </Select>

            <FormControl mt={2}>
              <FormLabel>IMDB Rating</FormLabel>
              <Input ref={initialRef} placeholder='IMDB Rating' onChange={(e)=>{setImdb(e.target.value)}} value={checkId.imdbRating}/>
            </FormControl>
           

            <FormControl mt={2}>
              <FormLabel>Ticket Cost</FormLabel>
              <Input ref={initialRef} placeholder='Ticket Cost' onChange={(e)=>{setTicketCost(e.target.value)}} value={checkId.ticketCost}/>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={()=>editHandle(el._id)}  >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </>

      </>
      )
   })} 
     
    </Tbody>


   
    {/* <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot> */}
  </Table>
   </TableContainer>
   </Center>



 </div>
 </div>
    );
  }
  
  export default Dashboard;