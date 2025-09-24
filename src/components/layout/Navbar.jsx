import React, { useEffect } from 'react'
import { UseMycontext } from '../../context/context'
import { Link } from 'react-router-dom'

import { Logo } from '../../common/icon'

const Navbar = () => {
  const {logout , isLogin} = UseMycontext()

   useEffect(() =>{
    
   },[])
  return (
    <nav className='bg-[#000000d9] py-4  border-b-[0.5px]'>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to='/'> <Logo/> </Link>
      
          {isLogin ? ( <div> <button  onClick={logout}>Logout</button>  </div> ) : (<div> <Link to="/login" className='text-black bg-white py-[5px] px-4 rounded-full leading-3 font-semibold'>Login</Link> </div>)}
        </div>
      </div>
    </nav>
  )
}

export default Navbar




// import { useState, useRef, useEffect } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [openDropdown, setOpenDropdown] = useState(null); 

//   const navItems = [
//     { name: "Home", to: "/" },
//     { name: "About", to: "/about" },
//     {
//       name: "Services",
//       dropdown: [
//         { name: "Web Development", to: "/services/web" },
//         { name: "App Development", to: "/services/app" },
//         { name: "SEO Services", to: "/services/seo" },
//       ],
//     },
//     { name: "Contact", to: "/contact" },
//     {
//       name: "Products",
//       dropdown: [
//         { name: "Mobile Accessories", to: "/products/mobile" },
//         { name: "Smart Gadgets", to: "/products/gadgets" },
//         { name: "Laptops", to: "/products/laptops" },
//       ],
//     },

//   ];

//   return (
//     <nav className="bg-white shadow-md fixed w-full top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           {/* Logo */}
//           <div className="flex items-center">
//             <span className="text-2xl font-bold text-blue-600">MyLogo</span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex space-x-6 items-center" >
//           {/* <div className="hidden md:flex space-x-6 items-center" ref={dropdownRef}> */}
//             {navItems.map((item, idx) =>
//               item.dropdown ? (
//                 <div
//                   key={idx}
//                   className="relative"
//                   onMouseEnter={() => setOpenDropdown(idx)}
//                   onMouseLeave={() => setOpenDropdown(null)}
//                 >
//                   <button className="flex items-center text-gray-700 hover:text-blue-600">
//                     {item.name} <ChevronDown size={16} className="ml-1" />
//                   </button>
//                   <div
//                     className={`absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg transition-all duration-300 overflow-hidden ${
//                       openDropdown === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     {item.dropdown.map((sub, subIdx) => (
//                       <NavLink
//                         key={subIdx}
//                         to={sub.to}
//                         className={({ isActive }) =>
//                           `block px-4 py-2 hover:bg-blue-50 ${
//                             isActive ? "text-blue-600 font-medium" : "text-gray-700"
//                           }`
//                         }
//                       >
//                         {sub.name}
//                       </NavLink>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <NavLink
//                   key={idx}
//                   to={item.to}
//                   className={({ isActive }) =>
//                     `hover:text-blue-600 ${
//                       isActive ? "text-blue-600 font-medium" : "text-gray-700"
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               )
//             )}

//             {/* Button */}
//             <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
//               Get Started
//             </button>
//           </div>

//           {/* Mobile Hamburger */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setMobileOpen(!mobileOpen)}
//               className="text-gray-700"
//             >
//               {mobileOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {mobileOpen && (
//         <div className="md:hidden bg-white shadow-lg h-[100vh] flex flex-col" >
//           {navItems.map((item, idx) =>
//             item.dropdown ? (
//               <div key={idx} className="border-t">
//                 <button
//                   onClick={() => setOpenDropdown(openDropdown === idx ? null : idx)}
//                   className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:bg-blue-50"
//                 >
//                   {item.name} <ChevronDown size={16} />
//                 </button>
//                 <div
//                   className={`transition-all duration-300 overflow-hidden ${
//                     openDropdown === idx ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
//                   }`}
//                 >
//                   {item.dropdown.map((sub, subIdx) => (
//                     <NavLink
//                       key={subIdx}
//                       to={sub.to}
//                       className={({ isActive }) =>
//                         `block px-6 py-2 hover:bg-blue-50 ${
//                           isActive ? "text-blue-600 font-medium" : "text-gray-700"
//                         }`
//                       }
//                     >
//                       {sub.name}
//                     </NavLink>
//                   ))}
//                 </div>
//               </div>
//             ) : (
//               <NavLink
//                 key={idx}
//                 to={item.to}
//                 className={({ isActive }) =>
//                   `block px-4 py-4 hover:bg-blue-50 ${
//                     isActive ? "text-blue-600 font-medium" : "text-gray-700"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             )
//           )}

//           <button className="m-4 w-[90%] bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </div>
//       )}
//     </nav>
//   );
// }
