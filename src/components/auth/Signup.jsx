import React, { useState } from 'react'
import { UseMycontext } from '../../context/context'
import { Link, useNavigate } from "react-router-dom"

const Signup = () => {
  const { signup } = UseMycontext()
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" })
  const [message , setMesage]= useState("")
  const [bar , setBar] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    
    e.preventDefault()
    try {
      const res = await signup(formdata)
      setMesage(res.message)
      setBar(true)
      
      setTimeout(() => {
        navigate('/login')
        setMesage("")        
        setBar(false)
        setFormdata({ name: "", email: "", password: "" })
        
      }, 2000);
    }
    catch (error) {
      console.log(error)
       setMesage(error.message)
      setBar(true)

      setTimeout(() => {

        
      }, 2000);
    }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50 relative">
      {message && (
         <div className=" absolute top-10 left-[50%] translate-x-[-50%] bg-white  shadow-2xl py-2 px-3 rounded-lg flex flex-col  gap-1">
        <h6>{message}</h6>
        {bar && (
          <span className=' inline-block h-[3px]  bg-black rounded-lg animate-bar'></span>
        )}
      </div>

      )}
     
      <div className="max-w-[35%]">
        <h2 className="text-[36px] font-semibold text-center text-black mb-6">
          Signup
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            value={formdata.name}
            placeholder="Enter your name"
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Email */}
          <input
            type="email"
            value={formdata.email}
            placeholder="Enter your email"
            onChange={(e) => setFormdata({ ...formdata, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Password */}
          <input
            type="password"
            value={formdata.password}
            placeholder="Enter your password"
            onChange={(e) => setFormdata({ ...formdata, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg 
                       focus:outline-none focus:ring-1 focus:ring-black"
          />

          {/* Submit */}
          <input
            type="submit"
            value="Signup"
            className="w-full cursor-pointer py-2 bg-black text-white font-semibold rounded-lg"
          />
        </form>

        <p className="text-end text-gray-600 mt-4">
          Already have an account?
          <Link
            to="/login"
            className="text-black hover:underline font-medium ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  )
}

export default Signup
