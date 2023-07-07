import { Flex, Spacer,Box, Text,Center,VStack,Image,Button,HStack,Grid } from '@chakra-ui/react'
import UserNavbar from './UserNavbar';
import {useState,useEffect} from "react"


function Movies (){

    const[state,setState]=useState([])
    useEffect(()=>{
        getData()
    },[])

    const getData = async () => {
        var res = await fetch("http://localhost:8080/getData");
        var moviesdata = await res.json();
        console.log("moviesdata",moviesdata);
        setState(moviesdata); // Update Phase
      };
    return(
        <div>
            <UserNavbar/>
            {/* <div style={{display:'grid' ,border:'solid black', templateColumns:'repeat(2, 1fr)'}}> */}
            <Grid templateColumns='repeat(3, 1fr)' >
            {state.map((el)=>{
                return(
                    <div    >
                    <Flex bgColor='black' w='400px' m='20px' >
                    <Box>
                     <Image  w='230px' h='260px' alt='doctor' src={el.posterImage}></Image>
                    </Box>
                    <Box color='white' m='30px'>
                      <Text fontWeight="bold"  >{el.movieTitle}</Text>
                      <Text>Directed By: <span>{el.director}</span></Text>
                      <Text>Year:<span>{el.year}</span></Text>
                      <Text>Genre:<span>{el.genre}</span></Text>
                      <Text>IMDB Rating:<span>{el.imdbRating}</span></Text>
                      <Text>Cost: ₹<span>{el.ticketCost}</span></Text>
                      <Button w='150px' bgColor='green.400'h='30px'>Book now</Button>
                    </Box>
                    </Flex>
                 
                </div>
                )
            })}
            </Grid>
       
        </div>
    )
}
export default  Movies;

{/* <div>
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

</div> */}