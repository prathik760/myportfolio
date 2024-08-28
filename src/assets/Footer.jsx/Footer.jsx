import React from 'react'
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Footer.jsx/Footer.css'
import Logo from '/Users/prathik/Desktop/portfolio/prathik/src/Navbar/Logo.jsx'
import { Link } from 'react-scroll'
import Social from '../Social/Social'

const footTabs = [
  {
    name: 'Home',
    id: 'hero'
  },
  {
    name: 'About',
    id: 'about'
  },
  {
    name: 'Skills',
    id: 'skills'
  },
  {
    name: 'Services',
    id: 'services'
  },
  {
    name: 'Projects',
    id: 'projects'
  },
  {
    name: 'Feedbacks',
    id: 'feedbacks'
  },
]

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='center-content'>
          <Logo />
          <div className='flex-center footer-tabs'>
            {footTabs.map((tab, index) => (
              <Link
                className='flex-center tab'
                to={tab.id}
                spy={true}
                smooth={true}
                key={index}
              >
                <h4>{tab.name}</h4>
              </Link>
            ))}
          </div>
          <Social />
        </div>
      </div>
      <div className='flex-center copyright'>
        <p className='muted'>Built with Love by Prathik Thelkar ❤️ </p>
        <p>Copyright &copy; All rights reserved - 2024</p>
      </div>
    </footer>
  )
}

export default Footer
