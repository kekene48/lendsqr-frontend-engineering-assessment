import React from 'react'
import { Link } from 'react-router-dom';
import './top.scss'
import Union from '../../assets/Union.png';
import Lendsqr from '../../assets/lendsqr.png';
import Avatar from '../../assets/image4.png';
import {GrSearch} from 'react-icons/gr'
import {AiOutlineBell} from 'react-icons/ai'
import {AiFillCaretDown} from 'react-icons/ai'

const top = () => {
  return (
    <>
        <div className="top__container">
            <Link to='/' className="logo">
                <img src={Union} alt="Union" className="logo__images logo__image-1" />
                <img src={Lendsqr} alt="Lendsquare Logo" className="logo__images logo__image-2" />
            </Link>

            <div className="search">
                <input type="text" className="search__input" placeholder='Search for anything'/>
                <div className="search__icon-box">
                    <Link to='/filtered'>
                        <GrSearch  className='search__icon' />
                    </Link>
                </div>
            </div>

            <a href="#somewhere" className="top__container-anchor">Docs</a>

            <div className="top__container-icon-box">
                <AiOutlineBell className='top__container-icon'/>
            </div>

            <div className="top__container-image-box">
                <img src={Avatar} alt="User" className="top__container-image" />
            </div>

            <h5 className='top__container-h5'>Adedeji</h5>

            <div className="top__container-icon-box top__container-icon-box-2">
                <AiFillCaretDown className='top__container-icon top__container-icon-2'/>
            </div>
        </div>
    </>
  )
}

export default top