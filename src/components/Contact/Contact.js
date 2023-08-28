import React, {useRef, } from 'react'
import './Contact.css'
import Walmart from '../../assets/walmart.png'
import Adobe from '../../assets/adobe.png'
import Microsoft from '../../assets/microsoft.png'
import Facebook from '../../assets/facebook.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef(); 
  const sendEmail = (e) => {
    e.preventDefault(); 

    emailjs.sendForm('template_rkcn3o7', form.current, 'qpnccglxZolCrZgt6CGBi')
       .then((result) => {
           console.log(result.text);
        }, (error) => {
          console.log(error.text);
    });
  }; 
  return (
    <section id='contactPage'> 
        <div id='clients'>
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className='clientDesc'>
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies I have worked with includes 
            </p>
            < div className='clientImgs'>
                <img src={Walmart} alt='client' className='clientImg' />
                <img src={Adobe} alt='client' className='clientImg' />
                <img src={Microsoft} alt='client' className='clientImg' />
                <img src={Facebook} alt='client' className='clientImg' />
            </div>
        </div>
        <div id='contact'>
          <h1 className='contactPageTitle'>Contact Me</h1>
          <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
          <form className='contactForm' ref={form} onSubmit={sendEmail}> 
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your Email' name='your_email'/>
            <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
              <img src={FacebookIcon} alt='Facebook' className='link' />
              <img src={TwitterIcon} alt='Twitter' className='link' />
              <img src={YoutubeIcon} alt='youtube' className='link' />
              <img src={InstagramIcon} alt='Instagram' className='link' />
            </div>
          </form>

        </div>

    </section>
  )
}

export default Contact