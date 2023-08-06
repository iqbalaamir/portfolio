import React from 'react'
import './About.css'
import ME from '../../asset/aamir.jpg';
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {GoProjectSymlink} from 'react-icons/go'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>20+ Clients</small>
            </article>
            <article className="about__card">
              <GoProjectSymlink className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Projects</small>
            </article>
          </div>
          <p>
          I am a tech enthusiast with 3 years of experience in Laravel and MERN Stack. Certified MERN Stack developer from IIT Madras. Worked in EdTech and Fintech companies, creating innovative solutions. Skilled in front-end, back-end, database management, and API integration. Detail-oriented problem solver with a user-centric approach
          </p>
        </div>
      </div>

    </section>
  )
}

export default About
