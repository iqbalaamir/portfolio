import React from 'react'
import './Portfolio.css'
import CDE from '../../asset/CDE.jpg'
import Digital from '../../asset/digital.jpeg'
import Edtech from '../../asset/edtech.jpeg'

const Portfolio = () => {
  const portfolioItems = [
    {
      title: 'CRM - Customer Relationship Management',
      image: 'https://w0.peakpx.com/wallpaper/694/230/HD-wallpaper-top-5-reasons-why-you-need-a-crm-aacesoft-business-management-software-erp.jpg',
      github: 'https://github.com/iqbalaamir/CRM-Frontend',
      demo: 'https://crm-guvi.netlify.app/'
    },
    {
      title: 'OMS - Order Management System',
      image: 'https://dynamics.folio3.com/blog/wp-content/uploads/2021/04/order-management-software.jpg',
      github: 'https://github.com/iqbalaamir/Frontend-Order-Management-System',
      demo: 'https://scintillating-meerkat-476e4b.netlify.app/'
    },
    {
      title: 'Chat App',
      image: 'https://camo.githubusercontent.com/1edd6e0eb545997223d470c8143f9d863a7003469b38190310eee2afade49ae8/68747470733a2f2f692e696d6775722e636f6d2f566b6477416d652e706e67',
      github: 'https://github.com/iqbalaamir/chat-app',
      demo: 'https://github.com/iqbalaamir/chat-app'
    },
    {
      title: 'Digital Savers ',
      image: Digital,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.digitalsavers.in/'
    },
    {
      title: 'EdtechSavers - Educational Technology',
      image: Edtech,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.edtechsavers.in/'
    },
    {
      title: 'Career Dreams Education - Educational Portal',
      image: CDE,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.careerdreams.co.in/'
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {portfolioItems.map((item, index) => (
          <article key={index} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className='portfolio__item-cta'>
              <a href={item.github} className='btn' target='_blank' rel="noreferrer">Github</a>
              <a href={item.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio
