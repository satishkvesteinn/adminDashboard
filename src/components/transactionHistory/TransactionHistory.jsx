import { CalendarMonthOutlined, MoreHorizOutlined } from '@mui/icons-material'
import Tables from '../table/Table'
import './transactionHistory.scss'

const TransactionHistory = () => {
    return (
        <div className='transactionHistory'>
            <div className="titleSection">
                <div className="transactionHistoryTitle">
                    <h2>Transaction History</h2>
                    <p><CalendarMonthOutlined className='icon' /> in last 30 days revenue</p>
                </div>
                <div className="transactionHistoryMenu">
                    <MoreHorizOutlined />
                </div>
            </div>
            <div className="searchSection">
                <label htmlFor="search">Search :</label>
                <input type="text" placeholder='Search...'/>
            </div>
            <div className="transactionHistoryTableSection">
                <Tables />
            </div>
        </div>
    )
}

export default TransactionHistory