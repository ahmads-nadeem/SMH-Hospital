import './App.css'
import './Login.css'
import Header from './Header';
import img from './assets/Logo.jpg'

function Login(){

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
                        <input type="text" placeholder='Enter Your Username'/>
                        <br />
                        <label htmlFor="">Password</label>
                        <br />
                        <input type="text" placeholder='Enter Your Password'/>
                        <br />
                        <button>Login</button>
                    </form>
                </div>

            </section>
        </>
    )
}
export default Login;