import React from 'react'
import './/Submission.css'

const Submission = () => {
  return (
    <div className="background">
    <div className="container1">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close" />
            <div className="screen-header-button maximize" />
            <div className="screen-header-button minimize" />
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis" />
            <div className="screen-header-ellipsis" />
            <div className="screen-header-ellipsis" />
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-contact" style={{fontSize: '10px'}}>CONTACT INFO : +91 7979033873</div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <span id="success">Submitted Successfully. We will contact you within 12 hours.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Submission