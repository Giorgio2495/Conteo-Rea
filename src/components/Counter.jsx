import React, { useState } from 'react'
import { Button } from '@chakra-ui/button'


const Counter = () => {
    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
        counter4: 40,
        
    })

    const { counter1 } = counter

  return (
    <div>
        <h1>Counter: {counter1}</h1>
        <hr />
        <Button colorScheme="green" onClick={() =>
        setCounter({
            ...counter, 
            counter1: counter1+1
        })
        }>  
            +1

        </Button>
    </div>
  )
}

export default Counter