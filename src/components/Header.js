import React, {useState} from "react";
import {RiCloseFill, RiMenu3Fill, RiMenu4Fill} from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import {Link} from "react-router-dom";

function Header() {

    const[showHeader, setShowHeader] = useState(false);
    const path = window.location.pathname;

    return (
        <div className="header">

            {showHeader ? (
                <IoClose
                    onClick={()=>{setShowHeader(!showHeader)}}
                    className="header__menu position-fixed top-0 end-0"/>
            ) : (
                <RiMenu3Fill className="header__menu position-fixed top-0 end-0" onClick={()=>{setShowHeader(!showHeader)}}/>
                )}

            <ul className={`${showHeader ? 'show-header' : 'hide-header'} n-box1`}>
                <li className={`${path==='/' && 'active'}`}><Link to='/'>Home</Link></li>
                <li className={`${path==='/Projects' && 'active'}`}><Link to='/Projects'>Projects</Link></li>
                <li className={`${path==='/Achievements' && 'active'}`}><Link to='/Achievements'>Achievements</Link></li>
                <li className={`${path==='/Contact' && 'active'}`}><Link to='/Contact'>Contact</Link></li>
            </ul>

        </div>
    )
}



export default Header
