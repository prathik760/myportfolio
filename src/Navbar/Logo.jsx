import React from 'react'
import img from '/Users/prathik/Desktop/portfolio/prathik/src/Navbar/Black_and_White_Initial_P_Music_Productions_Logo-removebg-preview.png'
import '/Users/prathik/Desktop/portfolio/prathik/src/Navbar/Logo.css'
const Logo = () => {
  return (
         <> 
         <div className='logoimg'> 
        <img src={img} alt='logo'></img></div>
        <h1 class="name">Prathik</h1>
        </>
  )
}

export default Logo