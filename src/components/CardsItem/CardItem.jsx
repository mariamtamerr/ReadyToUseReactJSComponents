import React from 'react'
import './CardItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons'

const CardItem = () => {
  return (
    <>
      

<div className="container" >
      <div className="card-deck  d-flex mb-3 text-center" style={{gap:"70px"}}>
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <i className="fas fa-shield-alt fa-4x com-icon"></i>
            <FontAwesomeIcon icon={faUser} className='medium-icon text-success'/>
            <h5 className="card-title fw-bolder pricing-card-title">Password Help</h5>
            <p className="mt-3 mb-4 text-secondary fw-bold">Reset, change, or unlock your NT/Login password.</p>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <i className="fas fa-cloud fa-4x com-icon"></i>
            <FontAwesomeIcon icon={faUser} className='medium-icon text-success'/>
            <h4 className="card-title pricing-card-title">Cloud Conferencing Support</h4>
            <p className="mt-3 mb-4">Setup or schedule a Webex or other video conference.</p>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-body">
            <i className="fas fa-laptop fa-4x com-icon"></i>
            <FontAwesomeIcon icon={faUser} className='medium-icon text-success'/>
            <h4 className="card-title pricing-card-title">Order New Hardware</h4>
            <p className="mt-3 mb-4">
Order a new laptop, phone, or other hardware.
            </p>
          </div>
        </div>
      </div>
</div>



    </>
  )
}

export default CardItem
