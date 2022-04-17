import React from 'react'
import './/Home.css'
import backWall from "../../files/dora3.PNG"


const Home = () => {
  return (
    <div>
      <img src={backWall} alt="back image" id="backimage" />
      <header className="headerclass">
        
        <h1 style={{color: 'white', fontWeight: '200%', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'}}>Professional Animated<br />Videos for your Brand.</h1><br />
        <h6>Elevate your brand with us</h6><br />
        <span id="midget">
          <a href="getstarted.html" id="ff">Get Started</a>
        </span>
        <br />
        <span className="contacts">
          Call Us&nbsp;&nbsp;&nbsp;&nbsp;7979033873
        </span>
        <br />
        <span className="contacts">
          Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;info@magicarnival.com
        </span>
        <br />
      </header>
      <main>
        <div id="contpara1">Let's partner up to create <b>out-of-the-box</b> videos that convey an idea, educate, and promote your brand and values. We are an Explainer Video Production Company that's here to help you succeed!</div>
        <div className="flex-containerHome">
          <div className="flex-itemHome" id="flex-item-1"><iframe width={560} height={315} src="https://www.youtube.com/embed/7fxPkhhgk2E" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-itemHome" id="flex-item-2"><iframe width={560} height={315} src="https://www.youtube.com/embed/v9qShXwDx8I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-itemHome" id="flex-item-3"><iframe width={560} height={315} src="https://www.youtube.com/embed/KgR4_BEbieY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-itemHome" id="flex-item-4"><iframe width={560} height={315} src="https://www.youtube.com/embed/RWTvcm6EB_A" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-itemHome" id="flex-item-5"><iframe width={560} height={315} src="https://www.youtube.com/embed/yMZ9RGmyf40" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-itemHome" id="flex-item-6"><iframe width={560} height={315} src="https://www.youtube.com/embed/lkv2SrDzR2w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
        </div>
        <div id="contpara2">Trusted By Brands.</div>
        <div id="contpara3">We’re not just looking for clients… We’re looking for partners. That’s the mindset that has led us to work with hundreds of brands from all over the globe, providing animation and explainer video services from small startups to Fortune 500 companies.</div>
        <br /><br /><br /><br /><br />
      </main>
    </div>
  )
}

export default Home