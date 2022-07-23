import {
  Menu, MenuButton, MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"


export default function Navbar2(){
  return (

    <div className="main_div1">
    <div className="navbar_2">
       <img className="navbar_1img" width="155px" src="https://assets.www.happyfox.com/v2/images/site-nav/helpdesk-logo.svg" alt="error"/>
       
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Feature
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  Solving
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
Pricing
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
Resources
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>




 </div>
 <div>
<Button  colorScheme='orange'  >Get Demo</Button>
</div>
 </div>
  )
}