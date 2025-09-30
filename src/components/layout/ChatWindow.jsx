import React, { useEffect, useRef, useState } from "react";
import { UseMycontext } from "../../context/context";
import MessageInput from "./MessageInput";

const ChatWindow = () => {
  const { getchat, chats } = UseMycontext();
  const bottomRef = useRef(null);
  const containerRef = useRef(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    getchat();
  }, [chats]);

  
  const handleScroll = () => {
    if (!containerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;

    
    if (scrollHeight - scrollTop - clientHeight < 50) {
      setAutoScroll(true);
    } else {
      setAutoScroll(false);
    }
  };

  
  useEffect(() => {
    if (autoScroll) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chats, autoScroll]);

  return (
    <section
      ref={containerRef}
      onScroll={handleScroll}
      className="h-[100vh] overflow-y-scroll lg:ms-[18%] no-scrollbar"
    >
      <div className="container py-4 pb-24 pt-20">
        {chats.length === 0 ? (
          <div className="w-full h-[80vh] flex flex-col justify-center items-center">
            <h4 className="text-white font-semibold text-[32px] pb-[32px] text-center">
              Ready when you are.
            </h4>
            <div className="lg:w-[70%] w-full">
              <MessageInput />
            </div>
          </div>
        ) : (
          <div>
            {chats.map((chat, i) => (
              <div
                key={i}
                className={`flex mb-3 ${
                  chat.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-3 rounded-2xl text-[16px] text-white ${
                    chat.sender === "user"
                      ? "bg-[#323232D9] text-right"
                      : "bg-[#1e1e1e] text-left"
                  }`}
                >
                  {chat.text}
                </div>
              </div>
            ))}

            {/* dummy div for auto scroll */}
            <div ref={bottomRef} />

            <div className="fixed bottom-8 lg:w-[60%] max-sm:left-0 max-lg:right-0 max-sm:px-3">
              <MessageInput chats={chats} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChatWindow;
