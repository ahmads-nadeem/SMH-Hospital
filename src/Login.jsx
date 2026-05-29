import './App.css'
import './Login.css'
import Header from './Header';
import img from './assets/Logo.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    async function handleLogin(e){
        e.preventDefault();
        let res = await fetch('http://localhost:1190/users/login',{
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
        if (res.status === 200) {
            // alert("Login Successful!");
            
            navigate('/'); 
            localStorage.setItem('userLoggedIn', 'true');
            // console.log(localStorage.getItem('userLoggedIn'));
            // window.location.href = '/';
        } else {
            alert(data.message || "Invalid Username or Password!");
        }
    }




    return(
        <>
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
                        <label htmlFor="">Username</label>
                        <br />
                        <input
                        type="text" 
                        placeholder='Enter Your Username'
                        value={username}
                        onChange={(e)=>{setUsername(e.target.value)}}
                        />
                        <br />
                        <label htmlFor="">Password</label>
                        <br />
                        <input
                        type="text" 
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e)=>{setPassword(e.target.value)}}
                        />
                        <br />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>

            </section>
        </>
    )
}
export default Login;