import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <div className=" container-fluid Header">
        <Link to="/">
            <img className="logo" src="https://cdn-icons-png.flaticon.com/512/3100/3100802.png" height="80px"  width="100px"
             />
             </Link>
             <div className="header_2 container-fluid col">
             <Link to="/" className="Chpater_nav">
                 <p >Home</p>
             </Link>
             <Link to="/chapter/2" className="Chpater_page">
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
