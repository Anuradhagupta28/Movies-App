
import { FormControl,FormLabel,Button,Input,Center,Text,VStack,Select} from '@chakra-ui/react';
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

function Dashboard() {
    return (
        
   
 <div>
    <Text mt='20px'fontWeight="bold"  fontSize='3xl'> Dashboard</Text>
     
        
   <Center mt='20px' >
   
   <FormControl w='35%' h='590px' mb='20px' border='1px' borderColor='gray.400' borderRadius='10px' p='5' isRequired>
<FormLabel>Poster Image</FormLabel>
<Input placeholder='Poster Image' />
<FormLabel>Movie Title </FormLabel>
<Input placeholder='Movie Title' />
<FormLabel>Director</FormLabel>
<Input placeholder='Director' />
<FormLabel>Year</FormLabel>
<Input type='num' placeholder='Year' />
<FormLabel>Genre</FormLabel>
<Select border='1px' borderColor='gray.400' placeholder='Genre'>
   <option>Action</option>
   <option>Comedy</option>
   <option>Horror</option>
   <option>Romance</option>
</Select>
<FormLabel>IMDB Rating</FormLabel>
<Input type='num' placeholder='IMDB Rating' />
<FormLabel>Ticket Cost</FormLabel>
<Input  type='num' placeholder='Ticket Cost' />
<Button mt='10px' bgColor='green.300' w='200px' border='1px' borderColor='gray.400' borderRadius='10px' >Submit</Button>
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
        <Th fontWeight="bold"  fontSize='1xl'>Title</Th>
        <Th fontWeight="bold"  fontSize='1xl' >Director</Th>
        <Th  fontWeight="bold"  fontSize='1xl' isNumeric>Year</Th>
        <Th  fontWeight="bold"  fontSize='1xl'>Genre</Th>
        <Th   fontWeight="bold"  fontSize='1xl' isNumeric>IMDB Rating</Th>
        <Th  fontWeight="bold"  fontSize='1xl'>Edit</Th>
        <Th  fontWeight="bold"  fontSize='1xl'>Delete</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td><Button>Edit</Button></Td>
        <Td><Button>Delete</Button></Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td><Button>Edit</Button></Td>
        <Td><Button>Delete</Button></Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td>inches</Td>
        <Td><Button>Edit</Button></Td>
        <Td><Button>Delete</Button></Td>
      </Tr>
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
    );
  }
  
  export default Dashboard;