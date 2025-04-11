import React from 'react'
import '../tailwindcss.css';

function Header() {
  return (
    <nav className='flex justify-between items-center px-10 py-5 bg-black z-10'>
      {/* Left Button */}
      <button className='text-white px-10 py-5 rounded-full border-white border' type='button'>
        Darpan
      </button>

      {/* Logo Section */}
      <div className="flex justify-center items-center">
        <img src="sparklLogo.svg" alt="logo" className="h-28 w-auto" />
        {/* You can try h-24 or h-32 based on your preference */}
      </div>

      {/* Right Button */}
      <button className='text-black px-10 py-5 bg-yellow-100 rounded-full'>
        Sign Up
      </button>
    </nav>
  )
}

export default Header;
