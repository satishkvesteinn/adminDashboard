import { AccountCircleOutlined, BarChartOutlined, ChatBubbleOutlineOutlined, CurrencyRupeeOutlined, EmailOutlined, Logout, GridViewOutlined, HeadsetMicOutlined, Home, LiveHelpOutlined, LockOutlined, MonetizationOnOutlined, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import './sidebar.scss';
import { Link, useNavigate } from 'react-router-dom'


const Sidebar = () => {

    const navigate = useNavigate()

    return (
        <div className='sidebar'>
            <div className="wrapper">
                <div className="logo">
                    <h1>Admin</h1>
                </div>
                <div className="menu">
                    <ul className="menuItem">
                        <Link to="/">
                            <li className="items">
                                <Home className='icon' />
                                <span className="itemName">Dashboard</span>
                            </li>
                        </Link>

                        <Link to="/transations">
                            <li className="items">
                                <CurrencyRupeeOutlined className='icon' />
                                <span className="itemName">Transations</span>
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className="items">
                                <ShoppingBagOutlined className='icon' />
                                <span className="itemName">Product List</span>
                            </li>
                        </Link>

                        <Link to='/user'>
                            <li className="items">
                                <AccountCircleOutlined className='icon' />
                                <span className="itemName">User Profile</span>
                            </li>
                        </Link>

                        <li className="items">
                            <ShoppingCartOutlined className='icon' />
                            <span className="itemName">Orders</span>
                        </li>

                        <li className="items">
                            <LiveHelpOutlined className='icon' />
                            <span className="itemName">FAQ</span>
                        </li>
                        <li className="items">
                            <HeadsetMicOutlined className='icon' />
                            <span className="itemName">Supports</span>
                        </li>
                        <li className="items">
                            <GridViewOutlined className='icon' />
                            <span className="itemName">Application</span>
                        </li>
                        <li className="items">
                            <LockOutlined className='icon' />
                            <span className="itemName">Authentication</span>
                        </li>
                        <li className="items">
                            <MonetizationOnOutlined className='icon' />
                            <span className="itemName">Sales</span>
                        </li>
                        <li className="items">
                            <BarChartOutlined className='icon' />
                            <span className="itemName">Analytics</span>
                        </li>
                        <li className="items">
                            <EmailOutlined className='icon' />
                            <span className="itemName">Email</span>
                        </li>
                        <li className="items">
                            <ChatBubbleOutlineOutlined className='icon' />
                            <span className="itemName">Chat box</span>
                        </li>
                        <li className="items" onClick={() => {
                            localStorage.clear();
                            navigate("/account")
                        }}>
                            <Logout className='icon' />
                            <span className="itemName">Log out</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar