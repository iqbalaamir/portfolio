import React from 'react'
import './Header.css'
import CTA from './CTA';
import ME from '../../asset/ME.png';
import HeaderSocials from './HeaderSocials';
const Header = () => {
  return (
    <div>
      <header id='home'>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aamir Iqbal</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
      
      </header>
    </div>
  )
}

export default Header
