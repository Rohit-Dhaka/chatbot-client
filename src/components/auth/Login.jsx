import React, { useState } from 'react'
import { UseMycontext } from '../../context/context'
import { Link } from "react-router-dom"

const Login = () => {
  const { login } = UseMycontext()
  const [formdata, setFormdata] = useState({ email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      login(formdata)
      setFormdata({ email: "", password: "" })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
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
    </section>
  )
}

export default Login
