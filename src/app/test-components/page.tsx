import React from 'react'
import Divider from '../components/Divider/Divider'
import Box from '../components/Box/Box'
import Notice from '../components/Notice/Notice'
const Home = () => {
  return (
    <div>
      <h1>Testing Components</h1>
      <Divider>Hello Divider</Divider>
      <Box
        filledBackground={true}
        rounded={true}
        type='alert'
        className='w-1/2'
      >
        Conteúdo Box com Alert
      </Box>
      <Notice message='alo' type='success'>
        <div className={'mx-auto'}>
          <p>Este é o conteúdo passado como children para o Notice.</p>
          <button className='bg-blue-500 text-white rounded p-2'>Ação</button>
        </div>
      </Notice>
    </div>
  )
}

export default Home
