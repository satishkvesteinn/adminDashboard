
import React, { useState } from 'react';
import './administrator.scss';
import { useNavigate } from 'react-router-dom'
import App from '../../App';

const Administrator = () => {

  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)
  const [sec, setSec] = useState(0)
  const [AM, setAM] = useState("AM")
  const [today, setToday] = useState(new Date())


  setTimeout(() => {
    setToday(new Date())
    setHour(today.getHours());
    setMin(today.getMinutes());
    setSec(today.getSeconds());

  }, 1000)

  if (hour > 12) {
    setHour(hour - 12)
    setAM("PM")
  }

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[today.getDay()];

  let month = months[today.getMonth()];

  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleAdministratorSubmit = (e) => {
    e.preventDefault();
    if (+pass === 1234) {
      localStorage.setItem("logged", true)
      navigate('/')
    }
    else {
      alert("Invalid PassWord")
    }

  }

  const onchange = (event) => {
    return (
      setPass(event.target.value)
    )
  }

  return (
    <div className='administrator'>
      <div className="wrapper">
        <div className='time'>
          <span>{hour < 10 ? "0" + hour : hour}</span>:
          <span>{min < 10 ? "0" + min : min}</span>:
          <span>{sec < 10 ? "0" + sec : sec}</span>
          <span>{AM}</span>
        </div>
        <div className="yearContainer">
          <span>{day}</span>,
          <span> {month} </span>
          <span>{today.getDate()}</span>,
          <span> {today.getFullYear()}</span>
        </div>
        <div className="adminImg">
          <img src="https://codervent.com/dashtreme-angular/demo/vertical/assets/images/icons/user.png" alt="" />
          <span>Administrator</span>
        </div>

        {/* if i will using DB then i use form function */}
        {/* <form method='post'>
          <input type="password" id='pass' placeholder='Password' value={pass} name="pass" onChange={e => setPass(e.target.value)} />
          <button type="submit" onSubmit={handleAdministratorSubmit} value="Login" />
        </form> */}


        <form className='form' onSubmit={handleAdministratorSubmit}>
          <input type="password" id='pass' placeholder='Password' onChange={onchange} />
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  )
}

export default Administrator