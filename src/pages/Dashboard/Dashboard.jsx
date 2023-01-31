import React from 'react'
import Sidebar from  './Sidebar';
import Top from './Top';
import './dashboard.scss'
import Header from './Header';
import users from '../../assets/users.json'
import vector from '../../assets/Vector2.png'


const Dashboard = () => {

    const usersPerPage =10;
    const currentPage = 1;

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    // console.log(usersPerPage, indexOfFirstUser, indexOfLastUser, currentPage, currentUsers)

  return (
    <>
      <Top />
      <main className="main">
        <Sidebar />
        <div className='dashboard__container'>
          <Header />
          <div className="dashboard__container-body">

            <table>
                        <tr>
                          <th>ORGANIZATION
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                          <th>USERNAME 
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                          <th>EMAIL
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                          <th>PHONE NUMBER
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                          <th>DATE JOINED
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                          <th>STATUS
                            &nbsp; &nbsp;
                            <img src={vector} alt="vector icon" />
                          </th>
                        </tr>

                        {/* // the dynamic table rows */}
            {
                currentUsers.map(({profile, id, phoneNumber, createdAt, email, orgName}) => {
                  return (    
                    <>
                      <tr className="row" key={id} > 
                            <td>{orgName}</td>
                            <td>{profile.firstName + ' ' + profile.lastName}</td>
                            <td>{email}</td>
                            <td>{phoneNumber}</td>
                            <td>{createdAt}</td>
                            <td>&nbsp;&nbsp;&nbsp; Active &nbsp;&nbsp;&nbsp;</td>
                        </tr>
                    </>
                  )
                })
            }
            </table>  
            
          </div>
        </div>
      </main>
      
    </>
  )
}


export default Dashboard