import React from 'react'
import "./Footer.css"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
        <div className='flex'>
            <a href="https://www.facebook.com/sinisky/?locale=it_IT"><FaFacebook className='icon' /></a>
            <a href="https://www.instagram.com/sinisky_computergraphics/"><FaInstagram className='icon' /></a>
            <a href="/"><FaWhatsapp className='icon' /></a>
        </div>

    </footer>
  )
}

export default Footer
