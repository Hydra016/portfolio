import React, { useState } from 'react'
import Footer from './Footer'
import ContactForm from './ContactForm'
import Location from './Location'
import { Fade } from "react-reveal";

const Contact = () => {
  return (
    <Fade duration={1500}>
    <div id="contact-page" className='last-container'>
      <div className='contact-div'>
        <ContactForm />
        <Location />
      </div>
        <Footer />
    </div>
    </Fade>
  )
}

export default Contact