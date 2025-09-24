import React, { useState } from 'react'
import { UseMycontext } from '../../context/context'
import { Link } from "react-router-dom"

const Signup = () => {
  const { signup } = UseMycontext()
  const [formdata, setFormdata] = useState({ name: "", email: "", password: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      signup(formdata)
      setFormdata({ name: "", email: "", password: "" })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <section className="h-screen flex items-center justify-center bg-gray-50">
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
