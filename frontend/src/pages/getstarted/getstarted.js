import React, { useState } from "react";
import "./getstarted.css";
import { useEffect} from "react";
import Submission from "../Submission/Submission";

const Getstarted = () => {
  useEffect(() => {
    document.title = "Request a Quote | Magicarnival"
  }, [])
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    email: "",
    contact: "",
    budget: "",
    description: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

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
              <div className="app-title" style={{display:"flex", flexDirection:"column", alignItems:"flex-start",}}>
                <span>CONTACT</span>
                <span>US</span>
                <span style={{fontWeight:"700", fontSize:"15px", paddingTop:"10px",}}>WE REPLY WITHIN 12 HOURS</span>
              </div>
              <div className="app-contact" style={{ fontSize: "10px" }}>
                CONTACT INFO : +91 7979033873
              </div>
            </div>
            <form onClick={Submission} method>
              <div className="screen-body-item">
                <div className="app-form">
                  <div className="app-form-group">
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="first name"
                      name="fname"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="last name"
                      name="lname"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="email"
                      className="app-form-control"
                      placeholder="Email ID"
                      name="email"
                    />
                  </div>
                  <div className="app-form-group">
                    <input
                      type="text"
                      className="app-form-control"
                      placeholder="Contact No."
                      name="contact"
                    />
                  </div>
                  <div className="app-form-group message">
                    <input
                      className="app-form-control"
                      placeholder="Describe your project"
                    />
                  </div>
                  <br />
                  <br />
                  <div>
                    <label htmlFor="budget" className="formtext">
                      Enter your budget
                    </label>
                    <br />
                    <br />
                    <br />
                    <select required id="dropdown">
                      <option value>ENTER YOUR BUDGET</option>
                      <option value={1}>???30,000 - ???1,00,000</option>
                      <option value={2}>???1,00,000 - ???5,00,000</option>
                      <option value={3}>???5,00,000 - ???10,00,000</option>
                      <option value={4}>+ ???10,00,000</option>
                    </select>
                  </div>
                  <br />
                  <br />
                  <div className="app-form-group buttons">
                    
                    <button className="app-form-button">SEND</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Getstarted;
