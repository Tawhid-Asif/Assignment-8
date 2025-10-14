import React from 'react';
import { Link, NavLink } from 'react-router';


const Navbar = () => {
  return (
    <div className=" bg-white">
      <div className='navbar   container mx-auto'>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
              <NavLink to='/' className='pr-3 text-lg'>Home</NavLink>
              <NavLink to='/apps' className='pr-3 text-lg'>Apps</NavLink>
              <NavLink to='/installation' className='pr-3 text-lg'>Installation</NavLink>
            </ul>
          </div>
          <div className='flex flex-row items-center'>
            <img className='h-15 w-15' src="/logo.png" alt="" />
            <Link to='/' className=" text-2xl font-black">App Store</Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <nav>
              <NavLink to='/' className='pr-3 text-lg'>Home</NavLink>
              <NavLink to='/apps' className='pr-3 text-lg'>Apps</NavLink>
              <NavLink to='/installation' className='pr-3 text-lg'>Installation</NavLink>
            </nav>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='https://github.com/Tawhid-Asif'>
            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><img src="/fi_2111432.svg" alt="" /> Contribute</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;