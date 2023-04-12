import React from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';


const Logo = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="px-3">
        <p className="text-sm">Write</p>
    </div>
    <div className="px-3">
        <p className="text-sm">Sign Up</p>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost normal-case text-xl">DABBBA</a>
  </div>
  <div className="navbar-end">
    <div className="px-2">
    <FaInstagram />
    </div>
    <div className="px-2">
    <FaTwitter />
    </div>
    <div className="px-2">
    <FaSearch />
    </div>
  </div>
</div>
  )
}

export default Logo