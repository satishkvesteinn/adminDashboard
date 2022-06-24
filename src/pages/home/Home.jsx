import React from 'react'
import BounceRate from '../../components/bounceRate/BounceRate'
import Chart from '../../components/chart/Chart'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import TopProducts from '../../components/topProducts/TopProducts'
import TransactionHistory from '../../components/transactionHistory/TransactionHistory'
import Widgets from '../../components/widgets/Widgets'
import './home.scss'

const Home = () => {
    return (
        <div className='appContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="appContentContainer">
                    <div className="homeContainer">

                        <div className="containerTop">
                            <Widgets />
                        </div>

                        <div className="containerMiddleSection">
                            <div className="left"><Chart /></div>
                            <div className="right"><TopProducts /></div>
                        </div>

                        <div className="homeContainerMiddleTopSection">
                            <div className="left"><TransactionHistory /></div>
                            <div className="right"><BounceRate /></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home