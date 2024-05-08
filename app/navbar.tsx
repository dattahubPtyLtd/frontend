"use client";
import Icon from "./dhl";
import React, { useState } from 'react'; 

const DHNavbar = () => {
const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <Icon/>
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li>
                     <a href="/" className="py-2 px-6 flex">
                         Home
                     </a>
     </li>
      <li>
                     <a href="/products" className="py-2 px-6 flex">
                         Products
                     </a>
     </li>
      <li>
                     <a href="/people" className="py-2 px-6 flex">
                         People
                     </a>
     </li>
      <li>
                     <a href="/contact" className="py-2 px-6 flex">
                         Contact
                     </a>
     </li>
      <li>
                     <a href="/career" className="py-2 px-6 flex">
                         Career
                     </a>
     </li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">DattaHub Consulting</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
                     <a href="/" className="py-2 px-6 flex">
                         Home
                     </a>
     </li>
      <li>
                     <a href="/products" className="py-2 px-6 flex">
                         Products
                     </a>
     </li>
      <li>
                     <a href="/people" className="py-2 px-6 flex">
                         People
                     </a>
     </li>
      <li>
                     <a href="/contact" className="py-2 px-6 flex">
                         Contact
                     </a>
     </li>
      <li>
                     <a href="/career" className="py-2 px-6 flex">
                         Career
                     </a>
     </li>
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>

  )
}

export default DHNavbar
