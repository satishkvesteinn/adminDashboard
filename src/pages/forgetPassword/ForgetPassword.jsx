import { ArrowBack } from '@mui/icons-material'
import './forgetpassword.scss'
import { Link } from 'react-router-dom'
import React from 'react'


const ForgetPassword = () => {
    return (
        <div className='forgetPassword'>
            <div className="forgetPasswordContainer">
                <div className="forgetPassordWrapper">
                    <div className="img">
                        <img src="https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/forgot-2.png" alt="" />
                    </div>
                    <h2>Forgot Password?</h2>
                    <h4>Enter your registered email ID to reset the password</h4>

                    <form action="">
                        <div>Email Id</div>
                        <input type="text" placeholder='example@gmail.com'></input>
                        <button type="Submit">Send</button>
                    </form>
                    <Link to="/login" className='forgetBack'><ArrowBack className='icon'/><span>Back to login</span></Link>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword