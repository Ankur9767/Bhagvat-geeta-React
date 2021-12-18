import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <div className=" container-fluid Header">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3100/3100802.png" height="80px"  width="100px"
             />
             <div className="header_2 container-fluid col">
             <Link to="/" className="Chpater_nav">
                 <p >Verses</p>
             </Link>
             <Link to="/chapter" className="Chpater_page">
             <p>Chapters</p>
             </Link>
             <Link to="/contact" className="Contact"> <p>Contact us</p>
             </Link>
             
             </div>
            
        

        </div>
        
            
        </div>
    )
}

export default Header
