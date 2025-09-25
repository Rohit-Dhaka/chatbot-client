import React, { useEffect } from 'react';
import { UseMycontext } from '../../context/context';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  const { getchat, chats } = UseMycontext();
  console.log("chats", chats);

  useEffect(() => {
    getchat();
  }, []);

  return (
    <section className="h-[100vh] overflow-y-scroll lg:ms-[18%] ms-[5%] no-scrollbar">
      <div className="container py-4 pb-24 pt-20">
        {chats.length === 0 ? (
          <div className="w-full h-[80vh] flex flex-col justify-center items-center">
            <h4 className="text-white font-semibold text-[32px] pb-[32px]">
              Ready when you are.
            </h4>
            <div className="w-[70%]">
              <MessageInput />
            </div>
          </div>
        ) : (
          <div>
            {chats.map((chat, i) => (
              <div
                key={i}
                className={`flex mb-3 ${
                  chat.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-lg text-[16px] text-white ${
                    chat.sender === 'user'
                      ? 'bg-[#323232D9] text-right'
                      : 'bg-[#1e1e1e] text-left'
                  }`}
                >
                  {chat.text}
                </div>
              </div>
            ))}
            
            <div className=" fixed bottom-8 lg:w-[60%] w-[80%]">
              <MessageInput />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatWindow;
