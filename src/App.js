
import './App.css';
import React, { useContext, useEffect } from 'react';
import Home from './pages/home/Home';
import Administrator from './pages/administrator/Administrator'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import ForgetPassword from './pages/forgetPassword/ForgetPassword'
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import Products from './pages/products/Products';
import Transations from './pages/transation/Transations';
import User from './pages/user/User';
import LoginState from './context/login/loginState'
import loginContext from './context/login/loginContext';



function App() {
  const status = useContext(loginContext);
  const loggedIn = status.loginStatus
  console.log(loggedIn);

  const loggedStatus = localStorage.getItem("status")

  return (
    <>
      <Routes>
        <Route path='/account' element={<Administrator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />

        <Route path='/' element={loggedIn || loggedStatus ?
          <Home /> :
          <Navigate to='/account' replace></Navigate>
        }
        />

        <Route path='/transations' element={loggedIn || loggedStatus ?
          <Transations /> :
          <Navigate to='/account' replace></Navigate>
        }
        />


        <Route path='/user' element={loggedIn || loggedStatus ?
          <User /> :
          <Navigate to='/account' replace></Navigate>
        }
        />


        <Route path='/products' element={loggedIn || loggedStatus ?
          <Products /> :
          <Navigate to='/account' replace></Navigate>
        }
        />
        <Route path='*' element={loggedIn || loggedStatus ?
          <Navigate to='/' replace></Navigate> :
          <Navigate to='/account' replace></Navigate>
        }
        />
        {/* <Route path="/products" element={<Products />} />
          <Route path="/transations" element={<Transations />} />
          <Route path="/user" element={<User />} /> */}
        {/* </Route> : <Navigate to='/account' replace></Navigate>} /> */}
      </Routes>
    </>
  )
}

export default App;
