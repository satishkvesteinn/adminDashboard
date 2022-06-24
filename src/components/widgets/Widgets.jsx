import { AccountBalanceWalletOutlined, ArrowDropUp, People, ArrowDropDown, StoreMallDirectory } from '@mui/icons-material'
import LineChartSection from '../lineChart/LineChart'
// import Linechart from '../lineChart/LineChart'
import './widgets.scss'

const Weigets = () => {
    return (
        <div className='weigets'>
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <div className="subItem">
                            <p className="itemTitle">Revenue</p>
                            <h2 className="itemIncome">$12345</h2>
                            <div className="itemUpdate">
                                <ArrowDropUp className='icon' />
                                $23 Since last week
                            </div>
                        </div>
                        <div className="iconSubItem">
                            <AccountBalanceWalletOutlined className='subIcon' />
                        </div>
                    </div>
                    <div className="item">
                        <LineChartSection />
                    </div>
                </div>

                <div className="items">
                    <div className="item">
                        <div className="subItem">
                            <p className="itemTitle">Total Customers</p>
                            <h2 className="itemIncome">8.6k</h2>
                            <div className="itemUpdate">
                                <ArrowDropUp className='icon' />
                                14 Since last week
                            </div>
                        </div>
                        <div className="iconSubItem">
                            <People className='subIcon' />
                        </div>
                    </div>
                    <div className="item">
                        <LineChartSection />
                    </div>
                </div>


                <div className="items">
                    <div className="item">
                        <div className="subItem">
                            <p className="itemTitle">Store Visitors</p>
                            <h2 className="itemIncome">50k</h2>
                            <div className="itemUpdate">
                                <ArrowDropDown className='icon' />
                                12 Since last week
                            </div>
                        </div>
                        <div className="iconSubItem">
                            <StoreMallDirectory className='subIcon' />
                        </div>
                    </div>
                    <div className="item">
                        <LineChartSection />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Weigets