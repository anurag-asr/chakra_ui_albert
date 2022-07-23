import { Box, SimpleGrid } from "@chakra-ui/react";

export default function LayOut (){
  const item = new Array(12).fill(0).map((a,i)=>i+1)

  return (
    <Box>
      <SimpleGrid  columns={{
          base:'2',
          sm: '2',
          md: '3',
          lg: '4',
          xl: '5',
          '2xl': '6',
      }} spacing={10}>
      {
         item.map((elem)=>(<Box>{elem}</Box>))
       }
      </SimpleGrid>
      
    </Box>
  )
}