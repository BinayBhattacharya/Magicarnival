import React from "react";
import ".//Aboutus.css";

const Aboutus = () => {
  return (
    <div>
      <div>
        <header-component />
      </div>
      <h1>About Us.</h1>
      <div id="cont1">
        We are a leader Video Agency that connects brands and people through
        customized video content.
        <br />
        <br />
        We are trusted by brands worldwide, providing video content services
        from small startups to Fortune 500 companies.
        <br />
        <br />
        We strive for excellence in everything we do, and it all starts with
        transparency and a true passion for our work. We like to partner with
        companies that share those same standards and prioritize communication.
      </div>
      <br />
      <br />
      <br />
      <div id="team">Meet Our Team.</div>
      <br />
      <br />
      <div className="flex-container">
        <div className="flex-item" id="flex-item-1">
          <img
            src="../../files/billgates.jpg"
            alt="Bill Gates"
            className="imgsize"
          />
          <br />
          <div className="title">Bill Gates</div>
          <div className="describe">Founder and CEO, Magicarnival</div>
        </div>
        <div className="flex-item" id="flex-item-2">
          <img
            src="../../files/steve.jpg"
            alt="Steve Jobs"
            className="imgsize"
          />
          <br />
          <div className="title">Steve Jobs</div>
          <div className="describe">CMO, Magicarnival</div>
        </div>
        <div className="flex-item" id="flex-item-3">
          <img
            src="../../files/mark.jpg"
            alt="Mark Zuckerberg"
            className="imgsize"
          />
          <br />
          <div className="title">Mark Zuckerberg</div>
          <div className="describe">Senior Software Engineer, Magicarnival</div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Aboutus;
