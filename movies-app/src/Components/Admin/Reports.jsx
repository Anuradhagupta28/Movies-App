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

<Center  mb='50px' mt='20px'>
<TableContainer w='600px'>
  <Table variant='striped' colorScheme='teal'>
    {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    <Thead>
      <Tr>
        <Th fontWeight="bold"  fontSize='1xl'>Username</Th>
        <Th fontWeight="bold"  fontSize='1xl'>Booked Movie</Th>

      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
       
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
      
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
       
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