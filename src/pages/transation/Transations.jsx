import { DeleteOutlined, ModeEditOutlineOutlined, VisibilityOutlined } from '@mui/icons-material'
import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './transations.scss'


const items = [
    {
        id: 1,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-1.png",
        card: "Master Card",
        status: "paid",
        date: "12 Apr 2022",
    },

    {
        id: 2,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-2.png",
        card: "Master Card",
        status: "failed",
        date: "12 Apr 2022",
    },

    {
        id: 3,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-3.png",
        card: "Debit Card",
        status: "pending",
        date: "12 Apr 2022",
    },

    {
        id: 4,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-4.png",
        card: "Master Card",
        status: "paid",
        date: "12 Apr 2022",
    },

    {
        id: 5,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-5.png",
        card: "Master Card",
        status: "failed",
        date: "12 Apr 2022",
    },

    {
        id: 6,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-6.png",
        card: "Debit Card",
        status: "pending",
        date: "12 Apr 2022",
    },

    {
        id: 7,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-7.png",
        card: "Master Card",
        status: "paid",
        date: "12 Apr 2022",
    },

    {
        id: 8,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-8.png",
        card: "Master Card",
        status: "failed",
        date: "12 Apr 2022",
    },

    {
        id: 9,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-9.png",
        card: "Debit Card",
        status: "pending",
        date: "12 Apr 2022",
    },

    {
        id: 10,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-10.png",
        card: "Master Card",
        status: "paid",
        date: "12 Apr 2022",
    },

    {
        id: 11,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-11.png",
        card: "Master Card",
        status: "failed",
        date: "12 Apr 2022",
    },

    {
        id: 12,
        name: "Thomas Hardy",
        amount: 854.00,
        userImg: "https://codervent.com/dashtreme-angular/demo/vertical/assets/images/avatars/avatar-12.png",
        card: "Debit Card",
        status: "pending",
        date: "12 Apr 2022",
    },
]


const Transations = () => {

    const [list, setList] = useState(items)

    const handleDelete = (id) => {
        setList(
            list.filter((item) => {
                return (
                    (id !== item.id)
                )
            })
        )
    }

    return (
        <div className='appContainer'>
            <Sidebar />
            <div className="container">
                <Navbar />
                <div className="appContentContainer">
                    <div className="transationItem">
                        {/* <div className="top">top</div> */}
                        <div className="bottom">
                            <table id="customers">
                                <tbody>
                                    <tr>
                                        <th>#ID</th>
                                        <th>Customer Name</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Method</th>
                                        <th>Date</th>
                                        <th>Action</th>
                                    </tr>
                                    {
                                        list.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>#8562</td>
                                                    <td style={{ display: "flex", alignItems: "center" }}>
                                                        <img src={data.userImg} alt="" className="image" />
                                                        <span>{data.name}</span></td>
                                                    <td>${data.amount}.00</td>
                                                    <td>
                                                        <span className={`status ${data.status}`}>
                                                            {data.status}
                                                        </span>
                                                    </td>
                                                    <td>{data.card}</td>
                                                    <td>{data.date}</td>
                                                    <td>
                                                        <div className="editSection">
                                                            <span className='eye'><VisibilityOutlined /></span>
                                                            <span className='pencil'><ModeEditOutlineOutlined /></span>
                                                            <span onClick={() => { handleDelete(data.id) }} className='delete'><DeleteOutlined /></span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transations