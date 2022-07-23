import { Button,Text, Flex, Heading, Spacer ,useBreakpointValue} from "@chakra-ui/react";
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'

export default function Stack1 (){4
  const text=useBreakpointValue({
   base:"Base",
   sm:"Small",
   md:"medium"
  })
  return (
<>
  
  <Text textStyle="subtitle2">hELLO WORLD</Text>
  <Text textStyle="subtitle2">Hello brothers</Text>
  <Flex gap="1rem" my="1rem">
    <Heading>My app</Heading>
    <Spacer />
    <Button>SIGN IN</Button>
    <Button>SIGN out</Button>
  </Flex>

  <Stack sx={{border:"1px black solid"}} gap="1rem" spacing="2rem" direction={{base:"column",md:"row"}}>
   <Button>{text}</Button>
   <Button>Hello</Button>
   <Button>World</Button>
  </Stack>

  <Flex sx={{border:"1px red solid"}} gap="1rem" my="2rem" direction={{base:"column",md:"row"}}>
   <Button>Felx one</Button>
   <Spacer/>
   <Button>Hello</Button>
   <Spacer/>
   <Button>World</Button>
  </Flex>
  
  <Grid
  h='400px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={2}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={2} bg='papayawhip' />
  <GridItem colSpan={4} bg='tomato' />
</Grid>
 <br/>
 <br/>

 <Grid
  templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
  gridTemplateRows={'50px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='orange.300' area={'header'}>
    Header
  </GridItem>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' bg='green.300' area={'main'}>
    Main
  </GridItem>
  <GridItem pl='2' bg='blue.300' area={'footer'}>
    Footer
  </GridItem>
</Grid>
<br/>
<br/>
<br/>

  </>
  )
}