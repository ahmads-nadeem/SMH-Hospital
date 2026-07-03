import { useEffect, useState } from 'react';
import './App.css';
import './Register.css';
import img from './assets/Logo.jpg'
import { Link } from 'react-router-dom';


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
        const result =await fetch(api, {
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
    return (
        <>
            {/* <Header /> */}
            <form className='registerForm' action="">
                
                <div className='registerLogo'>
                    <img src={img} alt="" />
                    <h2>
                        SMH
                    </h2>
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
                    <input
                        id='passwordInput'
                        name='password'
                        type="text"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete='ture'
                        required
                    />
                </div>
                <button onClick={handleRegister}>Submit</button>
            </form>

        </>
    );
}
export default Register;