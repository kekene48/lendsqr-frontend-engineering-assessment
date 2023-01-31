import React from 'react'
import './dashboard.scss'
import {MdPeopleAlt} from 'react-icons/md';
import {FaUsers} from 'react-icons/fa'
import {FaCoins} from 'react-icons/fa'


const Header = () => {
  return (
    <>
      <div className="dashboard__container-header">User</div>
          <div className="dashboard__container-cards">
            <article className="dashboard__container-card dashboard__container-card-1">
              <div className='dashboard__container-card-icon-box-1'>
                <MdPeopleAlt className='dashboard__container-card-icon dashboard__container-card-icon-1' />
              </div>
              <h3 className='dashboard__container-card-h3'>USERS</h3>
              <h2 className='dashboard__container-card-number'>2,453</h2>
            </article>
            <article className="dashboard__container-card dashboard__container-card-2">
              <div className='dashboard__container-card-icon-box-2'>
                <FaUsers className='dashboard__container-card-icon dashboard__container-card-icon-2' />
              </div>
              <h3 className='dashboard__container-card-h3'> ACTIVE USERS</h3>
              <h2 className='dashboard__container-card-number'>2,453</h2>
            </article>
            <article className="dashboard__container-card dashboard__container-card-3">
              <div className='dashboard__container-card-icon-box-3'>
              <FaCoins className='dashboard__container-card-icon dashboard__container-card-icon-3' />
              </div>
              <h3 className='dashboard__container-card-h3'>USERS WITH LOANS</h3>
              <h2 className='dashboard__container-card-number'>12,453</h2>
            </article>
            <article className="dashboard__container-card dashboard__container-card-4">
              <div className='dashboard__container-card-icon-box-4'>
              <FaCoins className='dashboard__container-card-icon dashboard__container-card-icon-4' />
              </div>
              <h3 className='dashboard__container-card-h3'>USERS WITH SAVINGS</h3>
              <h2 className='dashboard__container-card-number'>102,453</h2>
            </article>
          </div>
    </>
  )
}

export default Header