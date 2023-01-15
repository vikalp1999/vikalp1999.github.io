import React from 'react'
import {FaLinkedin,FaPhone} from "react-icons/fa"
import {BsGithub} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import "./contact.css"
const Contact = () => {
  return (
    <section className='section contact center' id='contact'  style={{padding:"40px", backgroundColor:"rgb(24,24,24)"}} >
      <h2 className='section__title ' style={{textAlign:"center",marginBottom:"20px",color:"white"}}>GET IN <span className='about_contact' style={{color:"white"}}>TOUCH</span> </h2>

      <div id='cont'>

        <a href="https://www.linkedin.com/in/vikalp-shandilya-623650176/" target="_blank" aria-label='linkedin' className='link link--icon' style={{marginLeft:"280px",color:"white"}}> <FaLinkedin size={60}/> </a>
        <a href="https://github.com/vikalp1999" target="_blank" aria-label='github' className='link link--icon' style={{color:"white"}}> <BsGithub  size={60}/> </a>
      
        <a href='mailto:shandilyavikalp@gmail.com' aria-label="email" className='link link--icon' style={{color:"white"}}> <MdEmail  size={60}/> </a>

         <a href='tel:+919462531637' aria-label="phone" className='link link--icon' style={{color:"white"}}> <FaPhone size={60}/> </a>
      </div>
     
    </section>
  )
}

export default Contact