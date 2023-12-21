import React from 'react'
import NavItem from './NavItem'
import {Link} from 'react-router-dom'
import NavIcons from './NavIcons'
const Navigation = () => {
    return (
        <>
             <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
        <div className="container">
            
         
            <Link className="navbar-brand logo-image" to="/"><img src="images/logo.svg" alt="alternative" /></Link>  

           
           

            <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav ml-auto">
                    <NavItem  name="Home" link="#header"/>
                    <NavItem  name="About" link="#about" />
                    <NavItem name="Services" link="#services" />
                    <NavItem name="Projects" link="#projects"/>        
                    <NavItem name="Testimonial" link="#testimonial"/>        
                    <NavItem name="FAQ" link="#faq"/>
                    <NavItem name="Contact" link="#contact"/>
                </ul>
                <span className="nav-item social-icons">
                  <NavIcons name="facebook-f" link="facebook.com"/>
                  <NavIcons name="twitter" link="twitter.com"/>
                </span>
            </div> 
        </div> 
    </nav> 
        </>
    )
}

export default Navigation