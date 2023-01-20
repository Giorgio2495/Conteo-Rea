import React from 'react'
import { Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'

const Login = () => {
  return (
    <div>
    <Text fontSize={2*1}>
        Login
    </Text>  
    <hr />
    <Button variant="outline" colorScheme="blue" type ="submit">
        Login
    </Button>  
    </div>
  )
}

export default Login