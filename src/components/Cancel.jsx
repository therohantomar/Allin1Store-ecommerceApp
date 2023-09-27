
import { Link } from 'react-router-dom'
const Cancel = () => {
  return (
    <div className='min-h-screen font-ubuntu flex flex-col items-center justify-center font-bold '>
      Your transaction has been canceled 
      <button className='w-max px-4 py-2 rounded hover:bg-gray-800 my-2 border-2 bg-black text-white'><Link to={"/"} >keep Shopping</Link></button>
    </div>
  )
}

export default Cancel
