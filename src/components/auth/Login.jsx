import React, { useState } from 'react'
import { UseMycontext } from '../../context/context'
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const { login } = UseMycontext()
  const [formdata, setFormdata] = useState({ email: "", password: "" })
   const [message , setMesage]= useState("")
  const [bar , setBar] = useState(false)
  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
       const res = await login(formdata)
      setMesage(res.message)
      setBar(true)
      
      setTimeout(() => {
        navigate('/')
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
       <div className="container">
         {message && (
         <div className=" absolute top-10 left-[50%] translate-x-[-50%] bg-white  shadow-2xl py-2 px-3 rounded-lg flex flex-col  gap-1">
        <h6>{message}</h6>
        {bar && (
          <span className=' inline-block h-[3px]  bg-black rounded-lg animate-bar'></span>
        )}
      </div>

      )}
      <div className="w-full max-w-md ">
        <h2 className="text-[36px] font-semibold text-center text-black mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            value="Login"
            className="w-full cursor-pointer py-2 bg-black text-white font-semibold rounded-lg"
          />
        </form>

        {/* Link to Signup */}
        <p className="text-end text-gray-600 mt-4">
          Don't have an account?
          <Link
            to="/signup"
            className="ml-1 text-black hover:underline font-medium"
          >
            Signup
          </Link>
        </p>
      </div>
       </div>
    </section>
  )
}

export default Login
