import React, { useEffect } from "react";
import { UseMycontext } from "../../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, isLogin, show, setShow } = UseMycontext();

  return (
    <nav className="bg-[#0000 00d9] bg-[#292929] py-4  right-0 w-full  fixed border-b-[0.5px]">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center ">
            <div
              className="flex flex-col gap-[6px]  z-20 lg:hidden"
              onClick={() => setShow(!show)}
            >
              <span className="h-[2px] w-[30px] bg-white rounded-md"></span>
              <span className="h-[2px] w-[25px] bg-white rounded-md"></span>
              <span className="h-[2px] w-[20px] bg-white rounded-md"></span>
            </div>
            <Link to="/" className="text-white  font-medium text-[20px]">
              {" "}
              ChatGPT{" "}
            </Link>
          </div>

          {isLogin ? (
            <div>
              {" "}
              <button
                onClick={logout}
                className="bg-white text-black py-[5px] px-4 rounded-full font-semibold "
              >
                Logout
              </button>{" "}
            </div>
          ) : (
            <div>
              {" "}
              <Link
                to="/login"
                className="text-black bg-white py-[5px] px-4 rounded-full leading-3 font-semibold"
              >
                Login
              </Link>{" "}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
