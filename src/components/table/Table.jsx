import './table.scss';
import { useState } from 'react';


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







const Tables = () => {
  const [list, setList] = useState(items)
  return (
    <>
      <table id="customers">
        <tbody>
          <tr id='tableHead'>
            <th>#ID</th>
            <th>Customer Name</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
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
                  <td>{data.date}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default Tables