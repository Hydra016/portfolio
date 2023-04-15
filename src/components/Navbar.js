import React, { useState } from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='navbar'>
        <Link className='navbar-link hvr-underline-from-left' href='/'>About Me</Link>
        <Link className='navbar-link hvr-underline-from-left' href='#projects-page'>Projects</Link>
        <Link className='navbar-link hvr-underline-from-left' href='#skills-page'>Skills</Link>
        <Link className='btn btn-contained hvr-sweep-to-right navbar-link' href='#contact-page'>Get In Touch</Link>

    </nav>
  )
}

export default Navbar