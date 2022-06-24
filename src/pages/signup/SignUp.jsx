import { PersonAddAlt1Outlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './signup.scss'
import React from 'react'

// import Switch from '@mui/material/Switch';
// const label = { inputProps: { 'aria-label': 'Switch demo' } };

const SignUp = () => {
    return (
        <div className='signUp'>
            <h1>Welcome</h1>
            <div className="signUpContainer">
                <div className="signUpWrapper">
                    <h1>SignUp</h1>
                    <p>Already have an account? <Link to='/login'>Sign in here</Link></p>
                    <button><span>Sign Up with google</span></button>
                    <button><span>Sign Up with facebook</span></button>
                    <div className='border'>
                        <span>OR SIGN UP WITH EMAIL</span>
                    </div>
                    <form action="">
                        <div className='formContainer'>
                            <div className='nameContiner'>
                                <span className='nameContainerLeft'>
                                    <span>First name</span>
                                    <input type="text" placeholder='Jhon' />
                                </span>
                                <span className='nameContainerRight'>
                                    <span>Last name</span>
                                    <input type="text" placeholder='Doe' />
                                </span>
                            </div>
                        </div>
                        <div className='formContainer'>
                            <span>Email Address</span>
                            <input type="text" placeholder='example@gmail.com' />
                        </div>

                        <div className='formContainer'>
                            <span>Password</span>
                            <input type="password" />
                        </div>

                        {/* <div className='formContainer'>
                            <span>Country</span>
                            <input type="text" />
                        </div> */}
                        {/* 
                        <div className='agreement'>
                            <Switch {...label} size="small"/>
                            <span>I read and agree to Terms & Conditions</span>
                        </div> */}

                        <div className='formContainer'>
                            <button type="submit">
                                <PersonAddAlt1Outlined className='icon'/>
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp