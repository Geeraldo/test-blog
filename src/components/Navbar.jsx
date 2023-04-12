import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full bg-slate-100 my-4 h-20 py-2">
        <div className="flex justify-center w-full py-5">
            <p className="text-sm px-5">Home</p>
            <p className="text-sm px-5">Pages</p>
            <p className="text-sm px-5">Blog</p>
            <p className="text-sm px-5">Categories</p>
            <p className="text-sm px-5">Shop</p>
            <p className="text-sm px-5">Elements</p>
        </div>
    </div>
  )
}

export default Navbar