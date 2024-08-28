import React from 'react'
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Hero.jsx/Hero.css'
import img from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/WhatsApp Image 2024-08-08 at 12.45.47 PM-2.png'
import { Link } from 'react-scroll'
import Facts from '../facts/Facts'
const Hero = () => {
  return (
    <section id='hero' className='flex blur-effect'>
      <div className='container'>
        <div className='column hero-image'>
          <img src={img} alt='Hero' />
        </div>
        <div className='column hero-text'>
          <h1 className='heading-1'>
            Hello I'm Prathik  
            <span className='gradient-text'>
              Thelkar Frontend
            </span>
            Developer
          </h1>
 
          <Facts />
          <div className='flex-center buttons-wrapper' id='new'>
            <Link to='project' smooth={true} className='btn' id='link' >My Projects</Link>
            <Link to='contact' smooth={true} className='btn primary' id='link'>Hire me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;