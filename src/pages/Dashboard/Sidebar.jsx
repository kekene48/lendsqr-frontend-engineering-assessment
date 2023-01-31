import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.scss'
import {RiLuggageDepositFill} from 'react-icons/ri'
import {AiOutlineDown} from 'react-icons/ai'
import {FaHome} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {FaUsers} from 'react-icons/fa'
import {CiBag1} from 'react-icons/ci'
import {FaHandshake} from 'react-icons/fa'
import {FaPiggyBank} from 'react-icons/fa'
import {FaHandHoldingUsd} from 'react-icons/fa'
import {BsPersonCheckFill} from 'react-icons/bs'
import {BsFillPersonXFill} from 'react-icons/bs'
import {GiBirdCage} from 'react-icons/gi'
import {FaCoins} from 'react-icons/fa'
import {MdOutlineSendToMobile} from 'react-icons/md'
import {MdMiscellaneousServices} from 'react-icons/md'
import {MdManageAccounts} from 'react-icons/md'
import {FaScroll} from 'react-icons/fa'
import {AiOutlineBarChart} from 'react-icons/ai'
import {GoSettings} from 'react-icons/go'
import {FaClipboardList} from 'react-icons/fa'
import {FiDivideCircle} from 'react-icons/fi'

const sidebar = () => {
  return (
    <>
     <div className='sidebar__container'>
        <div className="sidebar__container-main">
          <RiLuggageDepositFill  className='sidebar__container-main-icon' />
          Switch Organization
          <AiOutlineDown className='sidebar__container-main-icon' />
        </div>  
        <div className="sidebar__container-main sidebar__container-main-2">
          <FaHome  className='sidebar__container-main-icon' />
          Dashboard
        </div> 
        <h5 className='sidebar__container-h5'>CUSTOMERS</h5>
        <div className='flex'>
        <div className="sidebar__container-main-item sidebar__container-main-item-1">
          <FiUsers  className='sidebar__container-main-icon' />
          Users
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-2">
          <FaUsers  className='sidebar__container-main-icon' />
          Guarantors
        </div>
        <Link to='/details'>
          <div className="sidebar__container-main-item sidebar__container-main-item-3">
          <CiBag1  className='sidebar__container-main-icon' />
          Loans
        </div>
        </Link>
        <div className="sidebar__container-main-item sidebar__container-main-item-4">
          <FaHandshake  className='sidebar__container-main-icon' />
          Decison Models
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-5">
          <FaPiggyBank  className='sidebar__container-main-icon' />
          Savings
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-6">
          <FaHandHoldingUsd  className='sidebar__container-main-icon' />
          Loan Requests
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-7">
          <BsPersonCheckFill  className='sidebar__container-main-icon' />
          Whitelist
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-8">
          <BsFillPersonXFill  className='sidebar__container-main-icon' />
          Karma
        </div>
      </div>
      {/* Business part */}
      <div className="flex">
        <h5 className='sidebar__container-h5' style={{top:"7px"}}>BUSINESSES</h5>
        <div className="sidebar__container-main-item sidebar__container-main-item-9">
          <RiLuggageDepositFill  className='sidebar__container-main-icon' />
          Organization
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-10">
          <FaHandHoldingUsd  className='sidebar__container-main-icon' />
          Loan Products
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-11">
          <GiBirdCage  className='sidebar__container-main-icon' />
          Saving Products
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-12">
          <FaCoins  className='sidebar__container-main-icon' />
          Fees and Charges
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-13">
          <MdOutlineSendToMobile  className='sidebar__container-main-icon' />
          Transactions
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-14">
          <MdMiscellaneousServices  className='sidebar__container-main-icon' />
          Services
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-15">
          <MdManageAccounts  className='sidebar__container-main-icon' />
          Service Account
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-16">
          <FaScroll  className='sidebar__container-main-icon' />
          Settlements
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-17">
          <AiOutlineBarChart  className='sidebar__container-main-icon' />
          Reports
        </div>
      </div>
      <div className="flex">
        <h5 className='sidebar__container-h5' style={{top: "0"}}>SETTINGS</h5>
        <div className="sidebar__container-main-item sidebar__container-main-item-18">
          <GoSettings  className='sidebar__container-main-icon' />
          Preferences
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-19">
          <FiDivideCircle  className='sidebar__container-main-icon' />
          Fees and Pricing
        </div>
        <div className="sidebar__container-main-item sidebar__container-main-item-20">
          <FaClipboardList  className='sidebar__container-main-icon' />
            Audit Logs
        </div>
      </div>
      </div> 
    </>
    
  )
}

export default sidebar