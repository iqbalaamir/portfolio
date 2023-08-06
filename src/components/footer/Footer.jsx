import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
        <a href='#home' className='footer__logo'>Aamir Iqbal</a>

        <ul className='permalinks'>
            <li>
                <a href='#home'>Home</a>
            </li>
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                <a href='#experience'>Experience</a>
            </li>
            <li>
                <a href='#portfolio'>Portfolio</a>
            </li>
            <li>
                <a href='#contact'>Contact</a>
            </li>
            
        </ul>
        <div className='footer__socials'>
            <a href='https://www.linkedin.com/in/aamiriqbal1998/'>
                <BsLinkedin/>
            </a>
            <a href='https://github.com/iqbalaamir'>
                <AiFillGithub/>
            </a>
        </div>
        <div className='footer__copyright'>
            <small>&copy; Aamir Iqbal. All rights reserved.</small>
            <small>Designed with <span role='img' aria-label='love'>♥</span> by Aamir Iqbal</small>
        </div>

    </footer>
  )
}

export default footer
