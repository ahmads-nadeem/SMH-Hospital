import { Link } from 'react-router-dom';
import './App.css'
import './Header.css'
import logo from './assets/header_logo.jpg'
import userpic from './assets/user-pic.jpg'
import { useState } from "react";
function Header() {
    let [click,updateClick] = useState(false)

    return (
        <header>
            <div className='innerheader'>
                <div className="logosection">
                    <figure> <Link to={'/'}><img id='logo-size' src={logo} alt="" /></Link></figure>  {/*width={80} height={90}*/}
                    <div className="name">
                        <h2>Salma Hospital</h2>
                        <p style={{ color: 'gray' }}>Hospital Management Dashboard</p>
                    </div>
                </div>
                <div className="profile">
                    <div className="text">
                        <h3>Welcome back,</h3>
                        <p style={{ color: 'gray' }}>Mr Ahmads</p>
                    </div>
                    <div onClick={()=>updateClick(!click)} className="accountpic">
                        <img src={userpic} alt="" />
                    </div>
                </div>
                <div className={`menu ${click ? 'menuActive':''}`}>
                    <ul>
                        <li><Link id='linktag' to={'/profile'}>Profile</Link></li>
                        <li><Link id='linktag' to={'/database'}>Database</Link></li>
                        <li><Link id='linktag' to={'/settings'}>Settings</Link></li>
                        <li><Link id='linktag' to={'/help'}>Help</Link></li>
                        <li className='lastli'><Link  className='logoutcss' to={'/login'}>LogOut</Link></li>
                        {/* id='linktag' */} 
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;