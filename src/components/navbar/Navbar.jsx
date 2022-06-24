import { ChatBubbleOutline, GridViewOutlined, Notifications, SearchOutlined } from '@mui/icons-material'
import './navbar.scss'
import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="left">
                <div className="searchBox">
                    <input type="text" className='searchInput' placeholder='Type to search...' />
                    <SearchOutlined className='icon' />
                </div>
            </div>
            <div className="right">
                <div className="items">
                    <div className='item'>
                        <GridViewOutlined className="icon" />
                    </div>
                    <div className='item'>
                        <Notifications className='icon' />
                        <span className="count">2</span>
                    </div>
                    <div className="item">
                        <ChatBubbleOutline />
                        <span className="count">3</span>
                    </div>
                </div>
                <div className="user">
                    <img src="https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-1.png" alt="" />
                    <div className="userInformation">
                        <h3 className='title'>Satish kumar</h3>
                        <p className='desc'>Front End web developer</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar