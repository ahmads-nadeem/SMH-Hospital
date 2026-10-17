import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
import './Header.css'
import logo from '../assets/header_logo.jpg'
import userpic from '../assets/user-pic.jpg'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {logoutUser} from '../redux/userSlice'
function Header() {
    const user = useSelector((store) => {
        return store.setUser
    })
    const dispatcher = useDispatch()

    const navigate = useNavigate();
    let [click, updateClick] = useState(false)
    async function logout() {
        const logoutReq = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/logout`, { method: 'GET', credentials: 'include' })
        const res = await logoutReq.json()
        console.log(res.message);
        if (logoutReq.status == '200') {
            navigate('/login', { replace: true })
            dispatcher(logoutUser())
        }
    }

    return (
        <header className='z-50'>
            <div className='innerheader shadow-lg'>
                <div className="logosection">
                    <figure><Link to={'/'}><img id='logo-size' src={logo} alt="" /></Link></figure>  {/*width={80} height={90}*/}
                    <div className="name">
                        <h2 className='font-bold'>Salma Hospital</h2>
                        <p style={{ color: 'gray' }}>Hospital Management Dashboard</p>
                    </div>
                </div>
                <div className="profile">
                    <div className="text">
                        <h3 className='font-bold'>Welcome back,</h3>
                        <p style={{ color: 'gray' }}>{user.userName.toUpperCase()}</p>
                    </div>
                    <div onClick={() => updateClick(!click)} className="accountpic">
                        <img src={userpic} alt="" />
                    </div>
                </div>
                <div className={`menu ${click ? 'menuActive' : ''} h-90 -bottom-92 shadow-white`}>
                    <ul>
                        <li><Link id='linktag' to={'/profile'}>Profile</Link></li>
                        <li><Link id='linktag' to={'/database'}>Database</Link></li>
                        <li><Link id='linktag' to={'/settings'}>Settings</Link></li>
                        <li><Link id='linktag' to={'/help'}>Help</Link></li>
                        <li className='lastli'><button onClick={() => logout()} className='logoutcss cursor-pointer' to={'/login'}>LogOut</button></li>
                        {/* id='linktag' */}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;