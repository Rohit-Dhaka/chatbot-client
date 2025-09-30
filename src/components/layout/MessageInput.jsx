import React, { useEffect, useState } from "react";
import { UseMycontext } from "../../context/context";
import { ArrowUp } from "lucide-react";

const MessageInput = () => {
  const { addchat } = UseMycontext();
  const [formdata, setFormdata] = useState({ message: "" });

  const token = localStorage.getItem("token");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!token) {
      console.log("Firstly login");
      return;
    }
    try {
      addchat(formdata);
      setFormdata({ message: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex bg-[#202020] border shadow-input border-gray-300 p-2 rounded-full"
      >
        <input
          type="text"
          placeholder={token ? "Enter your text" : "Login to start chatting"}
          className="w-full bg-transparent outline-none text-white ps-4 disabled:opacity-50"
          value={formdata.message}
          onChange={(e) =>
            setFormdata({ ...formdata, message: e.target.value })
          }
          onKeyDown={handleKeyDown}
          disabled={!token} // disable input if no login
        />
        <button
          type="submit"
          className="bg-white rounded-full p-2 cursor-pointer shadow hover:bg-gray-100 ml-2 disabled:opacity-50"
          disabled={!token} // disable button if no login
        >
          <ArrowUp className="w-5 h-5 text-black" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
