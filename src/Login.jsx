import './App.css'
import './Login.css'
import Header from './Header';
import img from './assets/header_logo.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [status, setStatus] = useState(false);
    async function handleLogin(e) {
        e.preventDefault();
        setStatus(true);
        let api = `${import.meta.env.VITE_API_BASE_URL}/auth/login`;
        let res = await fetch(api, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            }),
            credentials: 'include'
        });
        const data = await res.json();
        setStatus(false);
        if (res.status === 200) {
            navigate('/');
            localStorage.setItem('userLoggedIn', 'true');
        } else {
            alert(data.message || "Invalid Username or Password!");
        }
    }
    return (
        <>  {
            !status ? (
                <section id='login-section'>
                    <div className="animation">
                        <div className="logo-animation-logo">
                            <figure>
                                <img src={img} alt="" />
                            </figure>
                            <h2>Salma Medernity Hospital</h2>
                        </div>
                    </div>
                    <div className="form">
                        <form action="">
                            <div className="form-input1">
                                <label htmlFor="username">Username/Gmail:</label>
                                <input
                                    type="text"
                                    id="username"
                                    placeholder='Enter Your Username'
                                    value={username}
                                    onChange={(e) => { setUsername(e.target.value) }}
                                />
                            </div>
                            <div className="form-input2">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="text"
                                    placeholder='Enter Your Password'
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                />
                            </div>
                            <button onClick={handleLogin}>Login</button>
                            <div className="line"></div>
                            <p className='para'>Don't have an account</p>
                            <button id='registerBtn'><Link to='/register'>Register</Link></button>
                        </form>
                    </div>

                </section>
            ) :
                (
                    <div className="loader-container">
                        <div className="loader">
                            <p>Logging in...</p>
                        </div>
                    </div>
                )
        }

        </>
    )
}
export default Login;










