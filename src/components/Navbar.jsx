import React from 'react'
import { Image } from '@chakra-ui/image'
import { Flex, Text, Box, Link} from '@chakra-ui/layout'


const Navbar = () => {
  return (
    <Flex 
    bg="tomato"
    w="100%"
    px={5}
    py={4}
    justifyContent="space-between"
    alignItems="center"
    >

    <Flex
    flexDirection="row"
    justifyContent="left"
    alignItems="center"
    >
        <Image 
        maxWidth="5%" 
        src="https://www.zarla.com/images/zarla-zona-alegra-1x1-2400x2400-20210915-qrwqpxb4kp83pxcfhgj8.png?crop=1:1,smart&width=250&dpr=2"
        size={30}>
        </Image>
        <Text 
        color="white"
        pl={3}
        fontSize="20px"
        >
            MI PRIMER NAVBAR CON CHAKRA
        </Text>
    </Flex>
    <Box display="flex"
    justifyContent="space-around"
    >
    <Link
    
    to="/Home"
    >
    </Link>
    </Box>
    </Flex>
  )
}

export default Navbar