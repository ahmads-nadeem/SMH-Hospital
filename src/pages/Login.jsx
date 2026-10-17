import '../App.css'
import './Login.css'
import img from '../assets/header_logo.jpg'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';


function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    let [logStatus, setStatus] = useState(false);
    const [showPass, setShowPass] = useState(false)
    const [session, setSession] = useState(null)
    useEffect(() => {
        async function check() {
            const req = await fetch(`${import.meta.env.VITE_API_BASE_URL}/islogin/pre-auth`, {
                method: 'GET',
                credentials: 'include',
            });
            setSession(req.ok)
        }
        check()
    }, [])
    // if (session === null) {
    //     return <Loading/>;
    // }
    if (session) {
        navigate('/');
    }
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
        if (res.status == 200) {
            navigate('/');
            dispatch(setUserData(data.user))
        } else {
            alert(data.message || "Invalid Username or Password!");
        }
    }
    return (
        <>  {
            !logStatus ? (
                <section id='login-section'>
                    <div className="animation">
                        <div className="logo-animation-logo">
                            <figure>
                                <img className='mx-auto' src={img} alt="" />
                            </figure>
                            <h2>Salma Hospital</h2>
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
                            {/* form-input2 */}
                            <div className="inline bg-amber-300">
                                <label htmlFor="password">Password:</label>
                                <span className='relative bg-amber-300'>
                                    <input
                                        className='text-black'
                                        type={showPass ? 'text' : 'password'}
                                        placeholder='Enter Your Password'
                                        value={password}
                                        onChange={(e) => { setPassword(e.target.value) }}
                                    />
                                    <span className='absolute right-28 bottom-3 font-bold cursor-pointer' onClick={() => setShowPass(!showPass)}>{showPass ? <span>Hide</span> : <span>Show</span>}</span>
                                </span>
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
                        <Loading />
                    </div>
                )
        }

        </>
    )
}
export default Login;










