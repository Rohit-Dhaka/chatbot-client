import React, { useEffect, useState } from "react";
import { MiniLogo } from "../../common/icon";
import { PanelLeft, LogOut } from "lucide-react";
import { UseMycontext } from "../../context/context";

const Sidebar = () => {
  const { getuser, user } = UseMycontext();
  const [show, setShow] = useState(false);

  useEffect(() => {
    getuser();
  }, []);
  return (
    <div
      className={`${
        show ? " start-0 " : "absolute"
      }  start-[-12%]  duration-300 w-[15%] border-r-[1px] border-solid border-gray-400 h-[100vh] bg-[#000000d9] `}
    >
      <div className="flex flex-col justify-between h-full">
        <div
          onClick={() => setShow(!show)}
          className="relative group hover:cursor-w-resize  flex items-center  justify-end p-1"
        >
          <div className="block group-hover:hidden duration-300">
            <MiniLogo className="" />
          </div>
          <PanelLeft className="text-white w-[32px] h-[32px] hidden group-hover:block  duration-300" />
        </div>

     <div className="pb-5 ">
           {show ? (
          <button className="flex  gap-4 text-black bg-white py-4 px-6 rounded-xl mx-2 mb-5">
            
            <LogOut /> Logout
          </button>
        ) : (
            <div className="flex justify-end">

                                               
          <div className="text-white bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center   ">
            <div className="text-[18px]">{user.name.charAt(0).toUpperCase()}</div>
          </div>
          </div> 
        )}
     </div>
      </div>
    </div>
  );
};

export default Sidebar;
