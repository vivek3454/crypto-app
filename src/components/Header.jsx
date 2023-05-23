import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
  let location = useLocation();
  

  return (
    <HStack p={'4'} shadow={'base'} backgroundColor={'blackAlpha.900'}>
        <Button variant={'unstyled'} color={`${location.pathname === '/' ? 'white': 'gray.400'}`}>
            <Link to={'/'}>Home</Link>
        </Button>
        <Button variant={'unstyled'} color={`${location.pathname === '/exchanges' ? 'white': 'gray.400'}`}>
            <Link to={'/exchanges'}>Exchanges</Link>
        </Button>
        <Button variant={'unstyled'} color={`${location.pathname === '/coins' ? 'white': 'gray.400'}`}>
            <Link to={'/coins'}>Coins</Link>
        </Button>
    </HStack>
  )
}

export default Header