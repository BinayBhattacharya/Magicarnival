import React, { useEffect } from 'react'
import "./Header.css"
import Logo from "files/logonew.png"

const Header = () => {

  return (<nav>
    <a href="home.html" className="menu"><img src={Logo} id="Magicarnival_menu" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="portfolio.html" className="menu">PORTFOLIO</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="aboutus.html" className="menu">ABOUT US</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="faq.html" className="menu">FAQ</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="blog.html" className="menu">BLOG</a>&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="getstarted.html" className="menu" id="getStarted">GET STARTED</a>
  </nav>
  )
}

export default Header