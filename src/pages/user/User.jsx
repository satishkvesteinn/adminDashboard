import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './user.scss'

const User = () => {
    return (
        <div className='appContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="appContentContainer">
                    <div className='user'>
                        <div className="left">
                            <div className="top">
                                <img src="https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-1.png" alt="" />
                                <h1>Jone Doe</h1>
                                <h4>Front End web developer</h4>
                                <p>Bay Area, San Francisco, CA</p>
                            </div>
                            <hr className='middleLine'></hr>
                            <div className="bottom"></div>
                        </div>
                        <div className="right">
                            <form className="top">
                                <div className="inputField">
                                    <label>First Name</label>
                                    <span className='inputSection'>
                                        <input type="text" placeholder='John Doe' />
                                    </span>
                                </div>

                                <div className="inputField">
                                    <label>Email</label>
                                    <span className='inputSection'>
                                        <input type="email" placeholder='example@gmail.com' />
                                    </span>
                                </div>


                                <div className="inputField">
                                    <label>Phone</label>
                                    <span className='inputSection'>
                                        <input type="tel" placeholder='1234567890' />
                                    </span>
                                </div>


                                <div className="inputField">
                                    <label>Mobile</label>
                                    <span className='inputSection'>
                                        <input type="text" placeholder='1234567890' />
                                    </span>
                                </div>


                                <div className="inputField">
                                    <label>Address</label>
                                    <span className='inputSection'>
                                        <input type="text" placeholder='Bay Area, San Francisco, CA' />
                                    </span>
                                </div>

                                <div className="inputField">
                                    <label></label>
                                    <span className='inputSection'>
                                        <button>Save Changes</button>
                                    </span>
                                </div>
                            </form>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User