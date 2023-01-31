import React from 'react'
import { Link } from 'react-router-dom'
import './details.scss'
import Top from '../Dashboard/Top'
import { FaArrowLeft } from 'react-icons/fa'
import Sidebar from '../Dashboard/Sidebar'


const Details = () => {
  return (
    <>
        <Top />
        <main className="main">
            <Sidebar />
            <div className='details__container'>
                <div className="details__container-child details__container-link">
                    <Link to='/dashboard'>
                        <FaArrowLeft className={{marginRight: '6px'}}/>
                        Back to User</Link>
                </div>
                <div className="details__container-child details__container-card">
                    <div className="details__container-userDetails">
                        User Details
                    </div>
                    <div className="details__container-userStatus">
                        <div className="details__container-blacklist details__container-statusBtn">
                            BLACKLIST USER
                        </div>
                        <div className="details__container-activate details__container-statusBtn">
                            ACTIVATE USER
                        </div>
                    </div>
                </div>
                    <div className="details__container-box">
                        <div className='details__container-box-profile'>Profile</div>
                        <div className="details__container-box-menu">
                            <div className="details__container-box-menu-generalDetails details__container-box-menu-btn">
                                General Details
                            </div>
                            <div className="details__container-box-menu-documents details__container-box-menu-btn">
                                Documents
                            </div>
                            <div className="details__container-box-menu-bankDetails details__container-box-menu-btn">
                                Bank Details
                            </div>
                            <div className="details__container-box-menu-loans details__container-box-menu-btn">
                                Loans
                            </div>
                            <div className="details__container-box-menu-saving details__container-box-menu-btn">
                                Savings
                            </div>
                            <div className="details__container-box-menu-appAndSystem details__container-box-menu-btn">
                                App and System
                            </div>
                        </div>
                    </div>
                    <div className="details__container-generalDetails">
                        <div className="details__container-generalDetails-personalDetails">
                            <h2>Personal Details</h2>
                            <div className="details__container-generalDetails-personalDetails-fullName">
                                <h5 className="details__container-generalDetails-personalDetails-fullName-label label">
                                    FULL NAME
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-fullName-input input">
                                    GRACE EFFIOM
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-phone">
                                <h5 className="details__container-generalDetails-personalDetails-phone-label label">
                                    PHONE NUMBER
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-phone-input input">
                                    07060780922
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-email">
                                <h5 className="details__container-generalDetails-personalDetails-email-label label">
                                    EMAIL ADDRESS
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-email-input input">
                                    GRACE@GMAIL.COM
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-bvn">
                                <h5 className="details__container-generalDetails-personalDetails-bvn-label label">
                                    BVN
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-bvn-input input">
                                    07060780922
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-gender">
                                <h5 className="details__container-generalDetails-personalDetails-gender-label label">
                                    GENDER
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-gender-input input">
                                    FEMALE
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-marital">
                                <h5 className="details__container-generalDetails-personalDetails-marital-label label">
                                    MARITAL STATUS
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-marital-input input">
                                    SINGLE
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-children">
                                <h5 className="details__container-generalDetails-personalDetails-children-label label">
                                    CHILDREN
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-children-input input">
                                    NONE
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-residence">
                                <h5 className="details__container-generalDetails-personalDetails-residence-label label">
                                    TYPE OF RESIDENCE
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-residence-input input">
                                    PARENT'S APARTMENT
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div className="details__container-generalDetails-personalDetails" style={{gridTemplateColumns: 'repeat(4, 170px'}}>
                            <h2>Education and Employment</h2>
                            <div className="details__container-generalDetails-personalDetails-fullName">
                                <h5 className="details__container-generalDetails-personalDetails-fullName-label label">
                                    LEVEL OF EDUCATION
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-fullName-input input">
                                    B.Sc
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-phone">
                                <h5 className="details__container-generalDetails-personalDetails-phone-label label">
                                    EMPLOYMENT STATUS
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-phone-input input">
                                    EMPLOYED
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-email">
                                <h5 className="details__container-generalDetails-personalDetails-email-label label">
                                    SECTOR OF EMPLOYMENT
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-email-input input">
                                    FINTECH
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-bvn">
                                <h5 className="details__container-generalDetails-personalDetails-bvn-label label">
                                    DURATION OF EMPLOYMENT
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-bvn-input input">
                                    2 YEARS
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-gender">
                                <h5 className="details__container-generalDetails-personalDetails-gender-label label">
                                    OFFICE EMAIL
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-gender-input input">
                                    GRACE@GMAIL.COM
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-marital">
                                <h5 className="details__container-generalDetails-personalDetails-marital-label label">
                                    MONTHLY INCOME
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-marital-input input">
                                    #200,000 - #400,000
                                </div>
                            </div>

                            <div className="details__container-generalDetails-personalDetails-children">
                                <h5 className="details__container-generalDetails-personalDetails-children-label label">
                                    LOAN REPAYMENT
                                </h5>
                                <div className="details__container-generalDetails-personalDetails-children-input input">
                                    #40,000
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="details__container-generalDetails-social">
                            <h2>Socials</h2>
                            <div className="details__container-generalDetails-social-twitter">
                                <h5 className="details__container-generalDetails-social-twitter-label label">
                                    TWITTER
                                </h5>
                                <div className="details__container-generalDetails-social-twitter-input input">
                                    @grace_effiom
                                </div>
                            </div>
                            <div className="details__container-generalDetails-social-facebook">
                                <h5 className="details__container-generalDetails-social-facebook-label label">
                                        FACEBOOK
                                </h5>
                                <div className="details__container-generalDetails-social-facebook-input input">
                                        GRACE EFFIOM
                                </div>
                            </div>
                            <div className="details__container-generalDetails-social-instagram">
                                <h5 className="details__container-generalDetails-social-instagram-label label">
                                        INSTAGRAM
                                </h5>
                                <div className="details__container-generalDetails-social-instagram-input input">
                                        @grace_effiom
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="details__container-generalDetails-guarantor">
                            <h2>Guarantor</h2>
                            <div className="details__container-generalDetails-guarantor-fullName">
                                <h5 className="details__container-generalDetails-guarantor-fullName-label label">
                                        FULL NAME
                                </h5>
                                <div className="details__container-generalDetails-guarantor-fullName-input input">
                                        DEBBY OGANA
                                </div>
                            </div>
                            <div className="details__container-generalDetails-guarantor-number">
                                <h5 className="details__container-generalDetails-guarantor-number-label label">
                                        PHONE NUMBER
                                </h5>
                                <div className="details__container-generalDetails-guarantor-number-input input">
                                        07060780922
                                </div>
                            </div>
                            <div className="details__container-generalDetails-guarantor-email">
                                <h5 className="details__container-generalDetails-guarantor-email-label label">
                                        EMAIL ADDRESS
                                </h5>
                                <div className="details__container-generalDetails-guarantor-email-input input">
                                        DEBBY@GMAIL.COM
                                </div>
                            </div>
                            <div className="details__container-generalDetails-guarantor-relationship">
                                <h5 className="details__container-generalDetails-guarantor-relationship-label label">
                                        RELATIONSHIP
                                </h5>
                                <div className="details__container-generalDetails-guarantor-relationship-input input">
                                        SISTER
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </main>
    </>
  )
}

export default Details