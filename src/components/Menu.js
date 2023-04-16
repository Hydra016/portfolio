import Link from "next/link";
import React, { useState } from "react";

const Menu = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="menu">
      <div className="hamburger menu-icon" onClick={() => setOpen(!open)}>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
        <div className='menu-line'></div>
      </div>
        <div className={`${open ? 'menu-opened' : 'menu-opened-out'}`}>
          <img src="https://img.icons8.com/ios-filled/256/cancel.png" className="cancel hamburger cancel" onClick={() => setOpen(false)}></img>
          <div className="menu-links">
            <Link onClick={() => setOpen(false)} className="menu-link" href="#home-page">
              Home
            </Link>
            <Link onClick={() => setOpen(false)} className="menu-link" href="#skills-page">
              Skills
            </Link>
            <Link onClick={() => setOpen(false)} className="menu-link" href="#projects-page">
              Projects
            </Link>
            <Link onClick={() => setOpen(false)} className="menu-link" href="#contact-page">
              Contact
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Menu;
