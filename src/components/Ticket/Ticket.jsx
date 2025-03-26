import React from 'react'
import Text from './Text'
import Scene from './Scene'

const Ticket = () => {
  return (
    <div className='h-[90vh] w-[90vw] mx-auto my-4 border border-gray-400 flex items-center justify-center'>
      <div className='bg-yellow-300 h-[80%] w-[80%] relative overflow-hidden'>
        <Text />
        <Scene />
      </div>
    </div>
  )
}

export default Ticket
