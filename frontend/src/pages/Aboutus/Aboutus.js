import React from "react";
import ".//Aboutus.css";
import { useEffect} from "react";
import steve from "../../files/steve.jpg";
import bill from "../../files/billgates.jpg";
import mark from "../../files/mark.jpg";


const Aboutus = () => {
  useEffect(() => {
    document.title = "About Us | Magicarnival"
  }, [])
  return (
    <div>
      <div>
        <header-component />
      </div>
      <h1>About Us.</h1>
      <div id="cont1">
        We are a leading Video Agency that connects brands and people through
        customized video content.
        <br />
        <br />
        We are trusted by brands worldwide, providing video content services
        from small startups to established companies.
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
            src={bill}
            alt="Bill Gates"
            className="imgsize"
          />
          <br />
          <div className="title">Binay Bhattacharya</div>
          <div className="describe">Founder and CEO, Magicarnival</div>
        </div>
        <div className="flex-item" id="flex-item-2">
          <img
            src={steve}
            alt="Steve Jobs"
            className="imgsize"
          />
          <br />
          <div className="title">Ujjwal Raj</div>
          <div className="describe">Senior Web Developer, Magicarnival</div>
        </div>
        <div className="flex-item" id="flex-item-3">
          <img
            src={mark}
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
