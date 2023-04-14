import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link className='navbar-link' href='/'>About Me</Link>
        <Link className='navbar-link' href='#projects-page'>Projects</Link>
        <Link className='navbar-link' href='#skills-page'>Skills</Link>
        <Link className='btn btn-contained hvr-sweep-to-right navbar-link' href='#contact-page'>Get In Touch</Link>
    </nav>
  )
}

export default Navbar