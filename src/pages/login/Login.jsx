import './login.scss';
import { PersonAddAlt1Outlined } from '@mui/icons-material'
import { Link } from 'react-router-dom';
import React from 'react'


const Login = () => {
    return (
        <div className='login'>
            <h1>Welcome</h1>
            <div className="loginContainer">
                <div className="loginWrapper">
                    <h1>Login</h1>
                    <p>Don't have an account? <Link to='/signup'>Sign up here</Link> </p>
                    <button><span>Sign In with google</span></button>
                    <button><span>Sign In with facebook</span></button>
                    <div className='border'>
                        <span>OR SIGN IN WITH EMAIL</span>
                    </div>
                    <form action="">
                        <div className='formContainer'>
                            <span>Email Address</span>
                            <input type="text" placeholder='example@gmail.com' />
                        </div>

                        <div className='formContainer'>
                            <span>Password</span>
                            <input type="password" />
                        </div>

                        <div className="forgetpass">
                            <Link to='/forgetpassword'><span>Forget your password</span></Link>
                        </div>

                        <div className='formContainer'>
                            <button type="submit">
                                <PersonAddAlt1Outlined className='icon' />
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login