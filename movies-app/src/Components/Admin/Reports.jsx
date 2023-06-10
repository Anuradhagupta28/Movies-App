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
   Button,
   Text,Center
 } from '@chakra-ui/react'

function Reports() {
    return (
        
   
 <div>

    <Text mt='20px'fontWeight="bold"  fontSize='2xl'> Reports Table</Text>

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
  
  export default Reports;