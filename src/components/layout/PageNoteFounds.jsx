import React from 'react'
import { Link } from 'react-router-dom'

const PageNoteFounds = () => {
  return (
    <section className='  h-screen flex flex-col items-center justify-center'>
        <h3 className='text-[82px] text-red-300'>404</h3>
        <h6 className='text-[43px] text-black' >Page Not Found</h6>
        <Link to='/login'>Going to Login page</Link>
        

    </section>
  )
}

export default PageNoteFounds