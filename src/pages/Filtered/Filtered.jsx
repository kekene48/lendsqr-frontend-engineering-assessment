import React from 'react'
import Top from '../Dashboard/Top'
import Sidebar from '../Dashboard/Sidebar'
import './filtered.scss'
import Header from '../Dashboard/Header'

const Filtered = () => {
  return (
    <>
    <Top />
    <main className="main">  
      <Sidebar />
      <div className='filtered__container'>
        <Header />
        Filtered</div> 
      </main>
    </>
   
  )
}

export default Filtered