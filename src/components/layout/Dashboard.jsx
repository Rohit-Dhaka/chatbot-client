import React from 'react'
import Sidebar from './Sidebar'
import Chat from '../chat/Chat.jsx'
import Navbar from './Navbar.jsx'




const Dashboard = () => {
  return (
    <div className=' bg-[#000000d9]'>
       <div className="flex  ">
        
            {/* <div className=" "> */}
            
              <Sidebar />
            {/* </div> */}
        
        
            <div className="w-full">
              <Navbar/>
              <Chat/>
            </div>
        
       </div>
    </div>
  )
}

export default Dashboard