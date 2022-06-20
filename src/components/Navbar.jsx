import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';
  import { ChevronDownIcon, ChevronRightIcon } from '@chakra-ui/icons';
  import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>

        <div className='leftnavbar'>
        <div className='logodiv'>
            <img className='logo' src="data:image/png;base64,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" alt="logo" />
        </div>

        <div className='menubttndiv'>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    className='menubttn'
  >
    Start <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Start your business</MenuItem>
    <MenuDivider />
    <MenuItem>Branding <ChevronRightIcon /></MenuItem> 
    <MenuItem>Online presence <ChevronRightIcon /></MenuItem>
    <MenuItem>Store set up <ChevronRightIcon /></MenuItem>
  </MenuList>
</Menu>
        </div>

        <div className='menubttndiv'>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    className='menubttn'
  >
    Sell <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Sell everywhere</MenuItem>
    <MenuDivider />
    <MenuItem>Online store <ChevronRightIcon /></MenuItem>
    <MenuItem>Point of Sale <ChevronRightIcon /></MenuItem>
    <MenuItem>Buy Button <ChevronRightIcon /></MenuItem>
    <MenuItem>Checkout <ChevronRightIcon /></MenuItem>
    <MenuItem>Sales channel <ChevronRightIcon /></MenuItem>
    <MenuItem>Wholesale marketplace <ChevronRightIcon /></MenuItem>
    <MenuItem>Custom storefront tools <ChevronRightIcon /></MenuItem>
    <MenuItem>International commerce <ChevronRightIcon /></MenuItem>
  </MenuList>
</Menu>
        </div>

        <div className='menubttndiv'>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    className='menubttn'
  >
    Market <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Market your business</MenuItem>
    <MenuDivider />
    <MenuItem>Email marketing</MenuItem>
    <MenuItem>Marketing automation</MenuItem>
    <MenuItem>Customer groups</MenuItem>
    <MenuItem>Business chats</MenuItem>
    <MenuItem>Facebook Ads</MenuItem>
  </MenuList>
</Menu>
        </div>
        <div className='menubttndiv'>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    className='menubttn'
  >
    Manage <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Manage everything</MenuItem>
    <MenuDivider />
    <MenuItem>Payments <ChevronRightIcon /></MenuItem>
    <MenuItem>Balance <ChevronRightIcon /></MenuItem>
    <MenuItem>Capital</MenuItem>
    <MenuItem>Shipping</MenuItem>
    <MenuItem>Ecommerce automation</MenuItem>
  </MenuList>
</Menu>
        </div>
        </div>

<div className='rightnavbar'>

<div className='menulinkndiv'>
        <div>
        <Link className='navbarlinks' to="/pricing" >Pricing</Link>
        </div>
        </div>

        <div className='menubttndiv'>
        <Menu>
  <MenuButton
    px={4}
    py={2}
    transition='all 0.2s'
    className='menubttn'
  >
    Learn <ChevronDownIcon />
  </MenuButton>
  <MenuList>
    <MenuItem>Help center</MenuItem>
    <MenuItem>Blog <ChevronRightIcon /></MenuItem>
    <MenuItem>Business courses</MenuItem>
    <MenuItem>Guides</MenuItem>
    <MenuItem>Shipping</MenuItem>
    <MenuItem>Shopify Community</MenuItem>
    <MenuItem>Free tools</MenuItem>
    <MenuItem>Podcasts</MenuItem>
    <MenuItem>Business encyclopedia</MenuItem>
    <MenuItem>Community Events</MenuItem>
    <MenuItem>Research</MenuItem>
  </MenuList>
</Menu>
        </div>

        <div className='menulinkndiv'>
        <div>
        <Link className='navbarlinks' to="/login" >Login</Link>
        </div>
        </div>

        <div className='startfreetrialdiv'>
            <button className='startfreetrialbttn'>Start free trial</button>
        </div>
        </div>

        </div>
  )
}

export default Navbar;