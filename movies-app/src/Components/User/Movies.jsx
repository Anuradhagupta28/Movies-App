import { Flex, Spacer,Box, Text,Center,VStack,Image,Button } from '@chakra-ui/react'
import UserNavbar from './UserNavbar';

function Movies (){
    return(
        <div>
            <UserNavbar/>
        <div>
            <Flex bgColor='black' border='solid black'w='35%' m='30px'>
            <Box>
             <Image  w='230px' h='250px' alt='doctor' src='https://m.media-amazon.com/images/M/MV5BNWM0ZGJlMzMtZmYwMi00NzI3LTgzMzMtNjMzNjliNDRmZmFlXkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_FMjpg_UX1000_.jpg'></Image>
            </Box>
            <Box color='white' m='30px'>
              <Text fontWeight="bold"  >Doctor Strange</Text>
              <Text>Directed By: <span></span></Text>
              <Text>Year:<span></span></Text>
              <Text>Genre:<span></span></Text>
              <Text>IMDB Rating:<span></span></Text>
              <Text>Cost: ₹<span></span></Text>
              <Button w='150px' bgColor='green.400'h='30px'>Book now</Button>
            </Box>
            </Flex>
         
        </div>
        </div>
    )
}
export default  Movies;