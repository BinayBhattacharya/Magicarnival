import React from 'react'
import './/Faq.css'
import { useEffect} from "react";
import faqman from "../../files/faqman.png";

const Faq = () => {
  useEffect(() => {
    document.title = "Frequently Asked Questions | Magicarnival"
  }, [])
    return (
        <div>
        <h1 className="h1faq">Frequently Asked<br /> Questions.</h1>
        <img src={faqman} className="faqman"></img>

        <a href="#q1" className="links">1. Why should you work with Us?</a><br />
        <a href="#q2" className="links">2. How much does a video cost?</a><br />
        <a href="#q3" className="links">3. Who owns the Copyright of the video?</a><br />
        <a href="#q4" className="links">4. How long it takes to create a video?</a><br />
        <a href="#q5" className="links">5. How can you speed up the production process?</a><br />
        <a href="#q6" className="links">6. What is our production process?</a><br />
        <a href="#q7" className="links">7. How do revisions work?</a><br />
        <a href="#q8" className="links">8. Can you get multiple videos at the same time slot?</a><br />
        <a href="#q9" className="links">9. How does Magicarnival work?</a><br />
        <a href="#q10" className="links">10. What is the payment process?</a><br />
        <a href="#q11" className="links">11. In what format will we deliver you the video?</a><br />
        <a href="#q12" className="links">12. What types of videos we offer?</a><br />
        <a href="#q13" className="links">13. How long should your video be?</a><br />
        <a href="#q14" className="links">14. Can you use your own script for the video?</a><br />
        <a href="#q15" className="links">15. Why should you use animation?</a><br />
        <a href="#q16" className="links">16. Are Magicarnival videos fully custom made?</a><br />
        <a href="#q17" className="links">17. Do we provide high quality animation?</a><br />
        <a href="#q18" className="links">18. Why should you invest in an Animated video?</a><br /><br /><br /><br />
        <div className="quest" id="q1">1. Why should you work with Us?</div>
        <div className="ans">If you are looking for originality, customization, flawless quality animation-wise, and you want to work with a team of professionals that love what they do, then your search is over!<br /><br />
          With several videos under our belt - with clients like Adani-Indian Oil, HappiMynd, Howdies, and many other big and small names - customer satisfaction remains our primary concern. But hey! You don't have to take our word for it, see for yourself what our clients have to say about our work!<br /><br />
          We like to create evergreen video content that guarantees your marketing pushes long-term growth. Want to see what we mean? Go ahead and watch some of our latest videos.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q2">2. How much does a video cost?</div>
        <div className="ans">Many factors play a part in our service' pricing: style, run-time/length, and deadlines (how quickly you need it done) will all end up influencing the price of your video.<br /><br />
          That said, an animated video usually averages anywhere between $400 and $5,000.<br /><br />
          If you'd like an accurate quote, we are happy to give you one without much hassle! Just click on "Get Started" and get in touch.</div><br /><br /><br /><br /><br /> 
        <div className="quest" id="q3">3. Who owns the Copyright of the video?</div>
        <div className="ans">You have the absolute full rights on the final video to use however and wherever you want.</div><br /><br /><br /><br /><br /> 
        <div className="quest" id="q4">4. How long it takes to create a video?</div>
        <div className="ans">Our usual production cycle requires four weeks, plus however long it takes to integrate clients' feedback and changes into the piece. When it's all said and done, most projects take between four to six weeks from beginning to final product delivery.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q5">5. How can you speed up the production process?</div>
        <div className="ans">Of course! Keep in mind, though, that doing so increases the project's costs. Crafting a compelling, striking, and creative video takes time! So it's best not to rush the process if possible. That being said, sometimes you don't have a choice. For those special cases, we'll create a specific timeline for deliveries and reach an agreement so we can both commit to the task. Sometimes this will mean fewer rounds of changes or a 24hs feedback on your end... Let's talk to discuss your specific needs.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q6">6. What is our production process?</div>
        <div className="ans">We have a simple process that gives you ample opportunities to provide feedback and request changes. The process begins with making a script, creating a rough storyboard animation and showing it to the client. Once the client is happy with the script, we move on to create the animation. We take 50% of the money before production and the rest after the video is finished, considering all the changes that the client asks us to do.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q7">7. How do revisions work?</div>
        <div className="ans">After a part of the production is done, you'll have two rounds of feedback where you can suggest edits and changes. Once you're happy and approve it, we move forward to the next step.<br /><br />
          Do you want more rounds of corrections? You can have more! However, take into account that this will affect not only the budget but also the final deadline of the video production.<br /><br />
          If you are worried that you'll need more than 2, don't. Most of our projects only end up using 1 round of corrections.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q8">8. Can you get multiple videos at the same time slot?</div>
        <div className="ans">Yes! We can create multiple videos for you simultaneously. This will, however, slightly increase the turnaround time depending on the number of videos.
        </div><br /><br /><br /><br /><br />
        <div className="quest" id="q9">9. How does Magicarnival work?</div>
        <div className="ans">Our in-house team is made up of creative professionals with many different skills. We craft and produce all our video pieces and work with creatives all around the globe to create videos specially tailored to your needs. Leave all the work of scripting, animating, voiceover, music creation, etc. with us.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q10">10. What is the payment process?</div>
        <div className="ans">We'll send you a short contract so both parties agree to the video production and then we'll request an upfront payment of 50% to get started and the other half is required once the video is completed and approved. We accept UPI payment, bank transfers and PayPal at the moment.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q11">11. In what format will we deliver you the video?</div>
        <div className="ans">We'll deliver your video in HD format, a QuickTime animation with an H264 compression. And yes! You can upload it to YouTube or any other video hosting platform you want.<br /><br />
          If you require any other format, just let us know, and we'll make sure to also send it your way.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q12">12. What types of videos we offer?</div>
        <div className="ans">We are specialists in creating relevant video content, tailored to your business needs. Animated explainer videos, educational videos, commercials, tutorials... the list goes on! You can visit our Services page to find out more.<br /><br />
          Not sure which one you need? No problem! We can help you figure it out. Reach out and let's make that amazing video together!</div><br /><br /><br /><br /><br />
        <div className="quest" id="q13">13. How long should your video be?</div>
        <div className="ans">We recommend keeping them under 2 minutes long - 90 seconds being the sweet spot for explainer videos. 
        </div><br /><br /><br /><br /><br />
        <div className="quest" id="q14">14. Can you use your own script for the video?</div>
        <div className="ans">We primarily work with professional scriptwriters who have a lot of experience in creating scripts for these types of videos. However, if you send us a script, we'll give it a look and provide feedback on its viability for the objectives you want to accomplish.<br /><br />
          This is not going to affect the budget in any way since we are going to check the script on our end anyway :)
        </div><br /><br /><br /><br /><br />
        <div className="quest" id="q15">15. Why should you use animation?</div>
        <div className="ans">Animation has been an amazing tool to capture attention for years! Used in entertainment and education way before we began seizing its fantastic potential for marketing.<br /><br />
          It gives you ample opportunity to be as endearing, compelling, deep, funny, or powerful as your message requires. In animation, creativity is the only constraint!<br /><br />
          Oh! Did I mention it's also more affordable?<br /><br />
          A professionally animated video is a lot less expensive than a live action equivalent. And more suited to explain concepts when it comes to marketing. These types of videos are also more versatile.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q16">16. Are Magicarnival videos fully custom made?</div>
        <div className="ans">Every single video we make here at Magicarnival is entirely built from the ground up and tailored to our clients' needs!<br /><br />
          It's a necessity, otherwise, you can't capture and showcase the brand's feel, represent it accurately, and make them memorable.</div><br /><br /><br /><br /><br />
        <div className="quest" id="q17">17. Do we provide high quality animation?</div>
        <div className="ans">We don't shy away from stating it! If you decide to work with us, you'll have access to the highest standard of animation quality in the market!<br /><br />
          Once more, don't take our word for it! See what some of the companies we've worked with think of our work or, take a peek at this HubSpot article where they showcase two of our videos as some of the -Most Fabulous explainer videos on the Web-??<br /><br />
          Lastly, you can also drop by our portfolio and check the quality of our work for yourself.<br /><br />
          We guarantee you won't be disappointed!</div><br /><br /><br /><br /><br />
        <div className="quest" id="q18">18. Why should you invest in an Animated video?</div>
        <div className="ans">Using an animated explainer video has become a ubiquitous practice in today's digital marketing landscape. So much so that, just like having a proper website, it's no longer optional.<br /><br />
          At least not if you want to stand out online!
          Videos give you a better chance to get the attention of users nowadays, who would walk away from big blocks of texts on your site but are delighted to be informed and entertained with video content.</div><br /><br /><br /><br /><br />
      </div>
    )
}

export default Faq