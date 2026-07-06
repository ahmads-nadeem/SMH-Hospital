import { useEffect, useState } from 'react';
import './App.css';
import './Register.css';
import img from './assets/header_logo.jpg'
import imgtrans from './assets/transparant img.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



function Register() {
    const [formData, useformData] = useState({
        name: '',
        mail: '',
        password: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        useformData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    async function handleRegister(e) {
        e.preventDefault()
        const api = 'http://localhost:1189/auth/register'
        const result = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                formData
            }),
        })
        const response = await result.json()
    }
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            {/* <Header /> */}
            <img className="transparent-img" src={imgtrans} alt="" />
            <img className="transparent-img trans2" src={imgtrans} alt="" />
            <img className="transparent-img trans3" src={imgtrans} alt="" />

            <form className='registerForm' action="">
                <div className='registerLogo'>
                    <img src={img} alt="" />
                    <h2>
                        Welcome to Salma Medernity Hospital
                    </h2>
                    <br />
                    <h2>Register</h2>
                </div>
                <div className="inputFields">
                    <label htmlFor="nameInput">Name:</label>
                    <input
                        id='nameInput'
                        name='name'
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete='ture'
                        required
                    />
                </div>
                <div className="inputFields">
                    <label htmlFor="mailInput">Gmail:</label>
                    <input
                        id='mailInput'
                        name='mail'
                        type="email"
                        value={formData.mail}
                        onChange={handleChange}
                        autoComplete='ture'
                        required
                    />
                </div>
                <div className="inputFields">
                    <label htmlFor="passwordInput">Password:</label>
                    <div className="pass">
                        <FontAwesomeIcon onClick={togglePasswordVisibility} icon={showPassword ?  faEye: faEyeSlash} className='passwordHide'/>
                        <input
                            id='passwordInput'
                            name='password'
                            type={showPassword ? 'text' : 'password'}
                            value={formData.password}
                            onChange={handleChange}
                            autoComplete='ture'
                            required
                        />
                    </div>
                </div>
                <button onClick={handleRegister}>Create Account</button>
                <h3>Already have an account? <Link to="/login">Login</Link></h3>
            </form>
        </>
    );
}
export default Register;