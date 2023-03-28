import React from 'react'

const Restart = ({resetGame}) => {
  return (
    <button className='p-4 bg-red-700 outline-none text-white' onClick={resetGame}>Restart</button>
  ) 
}

export default Restart