import React from 'react'

const Board = ({square, handleClick}) => {
  return (
    <div className=' grid grid-cols-3 w-96 h-96 gap-5'>
        {square.map((square, index)=> {
            return <div className='text-5xl w-24 h-24 border-4 hover:border-dashed border-sky-300 flex justify-center items-center cursor-pointer select-none p-5 bg-gray-100' key={index} onClick={()=> handleClick(index)} >
                {square}
            </div>
        })}
    </div>
  )
}

export default Board