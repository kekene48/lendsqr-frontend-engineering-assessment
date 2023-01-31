import './login.scss'
import {Link} from 'react-router-dom'
import Union from '../../assets/Union.png'
import Lendsqr from '../../assets/lendsqr.png';
import Signin from '../../assets/pablo-sign-in.png'

import React from 'react'

const Login = () => {
  return (
    <>
    <div className="Login__page">
        <div className="group">
            <div className="group__image">
                <img src={Union} alt='header-logo' className="group__image-1" />
                <img src={Lendsqr} alt="Header-logo2" className="group__image-2" />
            </div>
            <div className="group__image-big">
                <img src={Signin} alt="sign in" className="group__image-big2" />
            </div>
        </div>
        <div className="form">
            <h1 className="form__h1">Welcome!</h1>
            <h3 className="form__h3">Enter Details to Login.</h3>
            <form action="#">
                <input type="email" className="form__input" placeholder='Email' />
                <input type="password" className="form__input" placeholder='Password' />
                <h5 className="form__forgot-password">FORGOT PASSWORD?</h5>
                <Link to='/dashboard'>
                <button type="submit" className='btn btn-primary'>LOG IN</button>
                </Link>
            </form>
        </div>
    </div>
    </>
  )
}

export default Login