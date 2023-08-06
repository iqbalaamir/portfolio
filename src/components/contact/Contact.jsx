import React,{ useRef } from 'react'
import './Contact.css'
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zb1c6bo', 'template_uoyv5zo', form.current, 'IqNbZQKtFxIKRQ449')
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aamir.iqbal040@gmail.com</h5>
            <a href="mailto:aamir.iqbal040@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            <article className="contact__option">
              <AiOutlinePhone className='contact__option-icon'/>
              <h4>Phone</h4>
              <h5>+918484867661</h5>
              <a href="tel:+918484867661" target="_blank" rel="noreferrer">Call me</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+918484867661</h5>
              <a href="https://wa.me/918484867661" target="_blank" rel="noreferrer">Send a message</a>
            </article>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <input type="text" name="name" placeholder='Your Name' required/>
              <input type="email" name="email" placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
              <button type="submit" className='btn btn-primary'>Send Message</button>
            </form>
            </div>
    </section>
  )
}

export default Contact
