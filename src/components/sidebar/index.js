import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FaHome, FaUserAlt, FaEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo' />
            <img className='sub-logo' src={LogoSubtitle} alt='logo' />
        </Link>
        <nav>
          <NavLink exact='true' activeclassname='active' to='/'>
            <FaHome color='#4d4d4e'/>
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
            <FaUserAlt color='#4d4d4e'/>
          </NavLink>
          <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
            <FaEnvelope color='#4d4d4e'/>
          </NavLink>
        </nav>
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/bobangajicsm"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar