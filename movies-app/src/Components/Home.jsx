// import { Flex, Spacer,Box, Text,Center,VStack,Image,Button } from '@chakra-ui/react'
// import { useNavigate } from "react-router-dom";

// import {Link} from "react-router-dom"
// function Home() {

//     const navigate = useNavigate();

//     const handleAdmin = () => {
//       navigate("/admin/login"); // Navigates to the "/dashboard" route
//     };
//     const handleUser = () => {
//         navigate("/user/signup"); // Navigates to the "/dashboard" route
//       };

//     return (
        
//       //   <VStack  h='100vh' >
//       //       <Center  w='100%'  bg='red.300'><Text fontWeight="bold"  fontSize='2xl'>Movies App</Text></Center> 
        
//       //      <Flex  h='100%' w='100%'>
//       //   <Center  onClick={handleAdmin} w='50%'  bg='green.500'><Text fontWeight="bold"  fontSize='2xl'>Admin Section</Text></Center>
//       //   <Center   onClick={handleUser} w='50%' bg='blue.500'><Text fontWeight="bold" fontSize='2xl'>User Section</Text></Center>
//       // </Flex>
        
     
//       // </VStack>

//       <Flex w='100%'  bg='#e26068' 	gap='1050px'>
//        <Box>
//         <Image w='100px' h='40px' alt='movies' src='https://static.vecteezy.com/system/resources/previews/005/567/681/original/video-recorder-icon-in-flat-style-with-shadow-on-red-background-video-camera-free-vector.jpg'></Image>
//         {/* <Image w='100px' h='50px' alt='movies' src='https://i.pinimg.com/originals/bf/f6/24/bff624daf429c4df3813352de04b6383.jpg'></Image> */}
//        </Box>
//        <Box>
//         <Flex 	gap='20px' >
//         <Button  borderRadius='30px' onClick={handleAdmin}  bgColor='red.300'>Admin</Button>
//         <Button   borderRadius='30px' onClick={handleUser} bgColor='red.300'>User</Button>
//         </Flex>
        
//        </Box>

//       </Flex>
   
      
//     );
//   }
  
//   export default Home;

  import { ReactNode } from 'react';
  import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
  Text
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();


  const handleAdmin = () => {
          navigate("/admin/login"); // Navigates to the "/dashboard" route
        };
        const handleUser = () => {
            navigate("/user/signup"); // Navigates to the "/dashboard" route
           };


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box><Image w='100px' h='40px' src='https://www.linkpicture.com/q/meetup_1.png'></Image></Box>
          {/* <Text>Movies App</Text> */}

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={handleAdmin} >Admin </Button>
              <Button onClick={handleUser}>User</Button>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}