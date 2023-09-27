import React from 'react'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className='min-h-screen font-ubuntu flex flex-col items-center justify-center font-bold '>
      Successful Transaction
      <button className='w-max px-4 py-2 rounded hover:bg-gray-800 my-2 border-2 bg-black text-white'><Link to={"/"} >keep Shopping</Link></button>
    </div>
  )
}

export default Success
