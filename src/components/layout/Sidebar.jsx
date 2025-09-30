  import React, { useEffect, useState } from "react";
  import { MiniLogo } from "../../common/icon";
  import { PanelLeft, LogOut ,  X } from "lucide-react";
  import { UseMycontext } from "../../context/context";

  const Sidebar = () => {
    const { getuser, user ,logout  , show, setShow } = UseMycontext();
    // const [show, setShow] = useState(false);
    

    useEffect(() => {
      getuser();
    }, []);

    return (
      <div className={` ${show ? "lg:w-[10%] max-lg:absolute w-[60%] max-lg:z-20  max-lg:px-2  " : "lg:w-[3%]  left-[-30%]  "}  duration-300 h-screen  px-1 bg-[#222222] fixed  top-0`}>
        <div className=" flex justify-between flex-col  h-full lg:pt-16 pt-4">
         <div className=" flex  justify-between items-center">
           
          <div
            onClick={() => setShow(!show)}
            className={`${show ?  " justify-start" :"justify-end"}   relative group hover:cursor-w-resize  flex items-center   p-1`}
          >
            <div className="block group-hover:hidden duration-300">
              <MiniLogo className="" />
            </div>
            <PanelLeft className="text-white w-[30px] h-[30px] hidden group-hover:block  duration-300" />
          </div>
          <div className="" onClick={() => setShow(!show)}>
            < X className=" text-white"/>
          </div>
         </div>
          <div className="pb-2  flex justify-center">
            {show ? (
              <button className="flex  gap-4 text-black bg-white py-2 px-4 rounded-[8px] cursor-pointer " onClick={logout}>
                <LogOut /> Logout
              </button>
            
            ) : (
            
              
              <div className="flex justify-end">
                <div className="text-white bg-blue-800 rounded-full w-8 h-8 flex items-center justify-center   ">
                  <div className="text-[18px]">
                    {user && user.name ? user.name.charAt(0).toUpperCase() : ""}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

  
    );
  };

  export default Sidebar;
