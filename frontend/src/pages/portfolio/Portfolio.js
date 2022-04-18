import React from 'react'
import './/Portfolio.css'
import { useEffect} from "react";
const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio | Magicarnival"
  }, [])
  return (
    <div>
        <h1>Portfolio.</h1>
        <div id="cont">Here is a collection of the work we have done for our clients.</div><br />
        <div className="flex-container">
          <div className="flex-item" id="flex-item-1"><iframe width={560} height={315} src="https://www.youtube.com/embed/7fxPkhhgk2E" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-item" id="flex-item-2"><iframe width={560} height={315} src="https://www.youtube.com/embed/v9qShXwDx8I" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-item" id="flex-item-3"><iframe width={560} height={315} src="https://www.youtube.com/embed/KgR4_BEbieY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-item" id="flex-item-4"><iframe width={560} height={315} src="https://www.youtube.com/embed/RWTvcm6EB_A" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-item" id="flex-item-5"><iframe width={560} height={315} src="https://www.youtube.com/embed/yMZ9RGmyf40" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
          <div className="flex-item" id="flex-item-6"><iframe width={560} height={315} src="https://www.youtube.com/embed/lkv2SrDzR2w" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
        </div><br /><br /><br />
      </div>
  )
}

export default Portfolio