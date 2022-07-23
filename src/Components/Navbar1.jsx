import {
  Menu, MenuButton, MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,Button
} from '@chakra-ui/react'
import {ChevronDownIcon} from "@chakra-ui/icons"


export default function Navbar1(){
  return (

    <div className="main_div">
    <div className="navbar_1">
       <img className="navbar_1img" width="155px" src="https://assets.www.happyfox.com/v2/images/site-nav/topbar-logo-black.svg" alt="error"/>
       
<Menu >
  <MenuButton  className="navbar_1menu" _hover={{ bg: 'transparent' }}  bg='transparent'  _expanded={{ color: 'black' }}  as={Button} rightIcon={<ChevronDownIcon />}>
  Customer Service
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
  It Support
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>
<Menu >
  <MenuButton _hover={{ bg: 'transparent' }} bg='transparent'  _expanded={{ color: 'black' }} className="navbar_1menu" as={Button} rightIcon={<ChevronDownIcon />}>
Operation Support
  </MenuButton>
  <MenuList>
  <div className="div">tere bin</div> 
  </MenuList>
</Menu>



 </div>
 <div>
<Button  _hover={{ bg: 'white' }} className="navbar_1btn">Login</Button>
</div>
 </div>
  )
}