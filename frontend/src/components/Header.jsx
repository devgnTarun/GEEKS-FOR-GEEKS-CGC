import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'


const Header = () => {

  const [scrolled, setScrolled] = useState(false)
  const [navList, setNavList] = useState("navList flex gap-7 items-center navList_changed close_nav")


  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 100) {
      setScrolled(true)
    }
    else {
      setScrolled(false)
    }
  }

  useEffect ( () => {
      window.addEventListener('scroll' , handleScroll)
  })

  const toggleNav = () => {
      if(navList === "navList flex gap-7 items-center navList_changed close_nav" ) {
        setNavList("navList flex gap-7 items-center navList_changed ")
      }
      else {
        setNavList("navList flex gap-7 items-center navList_changed close_nav")
      }
  }
 
  return (
   <>
    <nav className={`navBar w-full h-[80px] bg-white  flex justify-between px-7 items-center overflow-hidden ${scrolled? "shadow-md" : ""}`}>
     <div className="logo w-[80px] h-[80px]">
           <button className='toggle_btn' type='button' onClick={toggleNav}>
            <i className="fa-solid fa-bars"></i>
           </button>
          <img className='object-contain w-100' src={logo} alt="" />
     </div>
     <div className={navList}>
      <a className='text-m  text-gray-500 hover:text-[#2f8d46] transition-all mx-2' href="#about">About Us</a>
      <a className='text-m text-gray-500 hover:text-[#2f8d46] transition-al mx-2'  href="#team">Team</a>
      <a className='text-m text-gray-500 hover:text-[#2f8d46] transition-all mx-2'  href="#event">Events</a>
     </div>

     <div className="sidebtn" >
      <a className='bg-[#2f8d46] text-m text-white border rounded-3xl py-2 px-7 hover:bg-[#2f8d37]' href="#contact">Contact</a>
     </div>
      </nav>
   </>
  )
}

export default Header