import React, { useEffect } from 'react'
import { UseMycontext } from '../../context/context'
import MessageInput from './MessageInput'

const ChatWindow = () => {
  const { getchat, chats } = UseMycontext()

  useEffect(() => {
    getchat()
  }, [])

  return (
    <section className=" bg-[#000000d9] ">
      <div className="container py-4 pb-24">
        {chats.map((chat, i) => (
          <div
            key={i}
            className={`flex mb-3 ${
              chat.sender === 'user' ? 'justify-end ' : 'justify-start'
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg  text-[16px] text-white ${
                chat.sender === 'user'
                  ? 'bg-[#323232D9] text-right'
                  : 'bg-[#1e1e1e] text-left'
              }`}
            >
              {chat.text}
            </div>
          </div>
        ))}
      </div>
  
    </section>
  )
}

export default ChatWindow
