import React from 'react'
import Sidebar from './Sidebar'
import Chat from '../chat/Chat.jsx'




const Dashboard = () => {
  return (
    <div>
       <div className="flex">
        
            <Sidebar/>
        
        <div className="w-full">
            <Chat/>
        </div>
       </div>
    </div>
  )
}

export default Dashboard