import React, {useState} from 'react'
import Logo from '../images/logo.png'
import Avatar from '../images/avatar.png'
import {IoSearch, IoNotifications} from 'react-icons/io5';

import './Header.css'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
  
      <div className={isScrolled ? "nav nav_black" : " nav "}>
        <div className='left'>
          <div className="logo_container">
          <img className='img' src={Logo} alt="img" />

          </div>

          <div className="nav_items">

            <div className="links">Home</div>
            <div className="links">TV Shows</div>
            <div className="links">Movies</div>
            <div className="links">New & Popular</div>
            <div className="links">My List</div>
          </div>

        </div>

        <div className="right">
          
            <div className="search">
             
            <input type="text" className={`${isOpen? "search_input" : ""}` } placeholder='Titles, people, genres' />

            <IoSearch onClick={()=>setIsOpen(!isOpen)} className='search_icon'/>
            

            </div>

          <IoNotifications className='icon' />
          
          <div className="profile">
            <img className='avatar' src={Avatar} alt="img" />

          </div>

        </div>
      </div>
   
  )
}

export default Header
