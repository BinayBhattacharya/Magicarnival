import React from 'react'
import './/getstarted.css'

const getstarted = () => {
    return (
        <div className="background">
        <div className="container">
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
                <div className="app-title">
                  <span>CONTACT</span>
                  <span>US</span>
                </div>
                <div className="app-contact" style={{fontSize: '10px'}}>CONTACT INFO : +91 7979033873</div>
              </div>
              <form action="submission.html" method>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input type="text" className="app-form-control" placeholder="first name" name="fname" />
                    </div>
                    <div className="app-form-group">
                      <input type="text" className="app-form-control" placeholder="last name" name="lname" />
                    </div>
                    <div className="app-form-group">
                      <input type="email" className="app-form-control" placeholder="Email ID" name="email" />
                    </div>
                    <div className="app-form-group">
                      <input type="text" className="app-form-control" placeholder="Contact No." name="contact" />
                    </div>
                    <div className="app-form-group message">
                      <input className="app-form-control" placeholder="Describe your project" />
                    </div>
                    <br />
                    <br />
                    <div>
                      <label htmlFor="budget" className="formtext">Enter your budget</label><br />
                      <br /><br />
                      <select required id="dropdown">
                        <option value>ENTER YOUR BUDGET</option>
                        <option value={1}>₹30,000 - ₹1,00,000</option>
                        <option value={2}>₹1,00,000 - ₹5,00,000</option>
                        <option value={3}>₹5,00,000 - ₹10,00,000</option>
                        <option value={4}>+ ₹10,00,000</option>
                      </select>
                    </div>
                    <br /><br />
                    <div className="app-form-group buttons">
                      <button className="app-form-button">CANCEL</button>
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div></form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default getstarted