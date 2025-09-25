import React, { useEffect } from 'react'
import { UseMycontext } from '../../context/context'
import { Link } from 'react-router-dom'



const Navbar = () => {
  const {logout , isLogin} = UseMycontext()


  return (
    <nav className='bg-[#0000 00d9] bg-[#292929] py-4  right-0 w-full  fixed border-b-[0.5px]'>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to='/' className='text-white  font-medium text-[20px]'> ChatGPT </Link>
      
          {isLogin ? ( <div> <button  onClick={logout} className='bg-white text-black py-[5px] px-4 rounded-full font-semibold '>Logout</button>  </div> ) : (<div> <Link to="/login" className='text-black bg-white py-[5px] px-4 rounded-full leading-3 font-semibold'>Login</Link> </div>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar


 