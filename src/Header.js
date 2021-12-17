import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
        <div className="conatiner-fluid Header col4 cover-fill">
            <img className='logo' src="https://cdn-icons-png.flaticon.com/512/3100/3100802.png" height="80px"  width="100px"
             />
             <div className="header_2 col3" >
             <Link to="/" className='Chpater_nav'>
                 <h2 >Sloks/verses</h2>
             </Link>
             <Link to="/chapter" className='Chpater_page'>
             <h2>Chapters</h2>
             </Link>
             <Link to="/contact" className='Contact'> <h2>Contact us</h2>
             </Link>
             </div>

        

        </div>
            
        </div>
    )
}

export default Header
