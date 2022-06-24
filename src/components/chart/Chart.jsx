import { ArrowDropUp, CalendarMonthOutlined, MoreHorizOutlined } from '@mui/icons-material'
import Charts from '../charts/Charts'
import './chart.scss'

const Chart = () => {
    return (
        <div className='chart'>
            <div className="titleSection">
                <div className="chartTitle">
                    <h2>Store Metrics</h2>
                    <p><CalendarMonthOutlined className='icon' /> in last 30 days revenue</p>
                </div>
                <div className="chartMenu">
                    <MoreHorizOutlined />
                </div>
            </div>

            <div className="visitorSection">
                <div className="visitorSectionleft">
                    <p className="itemTitle">Revenue</p>
                    <h2 className="itemIncome">$12345</h2>
                    <div className="itemUpdate">
                        <ArrowDropUp className='icon' />
                        $23 Since last week
                    </div>
                </div>
                <div className="visitorSectionmiddle">
                    <p className="itemTitle">Total Customers</p>
                    <h2 className="itemIncome">8.4K</h2>
                    <div className="itemUpdate">
                        <ArrowDropUp className='icon' />
                        12.3% Since last month
                    </div>
                </div>
                <div className="visitorSectionright">
                    <p className="itemTitle">Store Visitors</p>
                    <h2 className="itemIncome">59K</h2>
                    <div className="itemUpdate">
                        <ArrowDropUp className='icon' />
                        2.4% Since last month
                    </div>
                </div>
            </div>

            <div className="chartSection">
                <Charts />
            </div>
        </div>
    )
}

export default Chart