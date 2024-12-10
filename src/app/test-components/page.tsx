import React from 'react'
import Divider from '../components/Divider/Divider'
import Box from '../components/Box/Box'

const Home = () => {
  return (
    <div>
      <h1>Testing Components</h1>
      <Divider>Hello Divider</Divider>
      <Box
          filledBackground= {true}  
          rounded= {true} 
          type= "alert"
          className='w-1/2' 
      
      >
        Conteúdo Box com Alert
      </Box>
    </div>
  )
}

export default Home
