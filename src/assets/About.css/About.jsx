import React from 'react'
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/About.css/About.css'
import amazon from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/amazon.png'
import facebook from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/facebook.png'
import google from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/google.png'
import linkedin from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/linkedin.png'
import microsoft from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/microsoft.png'
import netflix from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/netflix.png'
import samsung from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/samsung.png'
import skpe from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/skype.png'
import whatsapp from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/whatsapp.png'
import paypal from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/paypal.png'
const About = () => {
  return (
    <section id='about'>
      <div className='container'>
        <div className='section-wrapper'>
          <h3 className='sub-title primary'>About Me</h3>
          <h1 className='heading-1'>
            I am Prathik <span className='primary'>Thelkar</span>
          </h1>
          <p className='muted'>
          I am a skilled front-end developer with expertise in HTML, CSS, and JavaScript. My experience extends to the React framework, where I build dynamic and responsive web applications. I am passionate about creating user-friendly interfaces that provide seamless user experiences. With a strong foundation in modern web technologies, I am committed to delivering high-quality code and innovative solutions.
          </p>
          <div className='flex-center buttons-wrapper'>
            <a href='#' className='btn primary readmore-btn'>Read More</a>
          </div>
        </div>
      
      <div className='brands-container'>
       <div className='logos-slide gray-scale'>
        <img src={amazon} alt='amazon'></img>
        <img src={facebook} alt='facebook'></img>
        <img src={google} alt='google'></img>
        <img src={linkedin} alt='linkedin'></img>
        <img src={microsoft} alt='microsoft'></img>
        <img src={netflix} alt='netflix'></img>
        <img src={paypal} alt='paypal'></img>
        <img src={samsung} alt='samsung'></img>
        <img src={skpe} alt='skpe'></img>
        <img src={whatsapp} alt='whatsapp'></img>
       </div>

       <div className='logos-slide gray-scale'>
        <img src={amazon} alt='amazon'></img>
        <img src={facebook} alt='facebook'></img>
        <img src={google} alt='google'></img>
        <img src={linkedin} alt='linkedin'></img>
        <img src={microsoft} alt='microsoft'></img>
        <img src={netflix} alt='netflix'></img>
        <img src={paypal} alt='paypal'></img>
        <img src={samsung} alt='samsung'></img>
        <img src={skpe} alt='skpe'></img>
        <img src={whatsapp} alt='whatsapp'></img>
       </div>
       </div>
       <div className='education-experience-container'>
       <div className='column'>
        <h2 className='gradient-text heading-1'>EDUCATION</h2>
        <div className='contents'>
          <div className='box'>
            <h4>2008 - 2018</h4>
            <h3>High School</h3>
            <h4><i>Sri Ramakrishna Vidyanikethan High School</i></h4>
            <p>In high school, I actively participated in extracurricular activities, served on the student council organizing events, excelled academically in challenging subjects like math and science, and took on leadership roles in group projects to foster teamwork.</p>
          </div>

          <div className='box'>
            <h4>2018 - 2020</h4>
            <h3>Pre-University Course</h3>
            <h4><i>Vikasa PU College</i></h4>
            <p>During my Pre-University Course, I deepened my understanding of advanced subjects in sciences and humanities, honed my singing abilities by performing at college events, and led study groups to support my peers in their coursework.</p>
          </div>

          <div className='box'>
            <h4>2020 - 2023</h4>
            <h3>Bachelor of Commerce (Accounting and Finance)</h3>
            <h4><i>Edurite College Of Management Studies </i></h4>
            <p>While pursuing my Bachelor of Commerce in Accounting and Finance, I mastered complex financial concepts, nurtured my passion for singing through university performances, and led project work by guiding peers in financial analyses and collaborative presentations.</p>
          </div>
        </div>
       </div>
       
       <div className='column'>
        <h2 className='gradient-text heading-1'>EXPERIENCE</h2>
        <div className='contents'>
        <div className='box'>
            <h4>2024 Jan - 2024 Feb</h4>
            <h3>Web developer Intern</h3>
            <h4><i>Codsoft</i></h4>
            <p>During my one-month internship as a Web Developer, I gained hands-on experience in coding and designing responsive websites, applied problem-solving skills to debug and optimize applications, and collaborated with a team of developers, enhancing my understanding of both front-end and back-end development.</p>
          </div>

          <div className='box'>
            <h4>2024 Mar - 2024 May</h4>
            <h3>Full stack Web developer Intern</h3>
            <h4><i>Kodnest</i></h4>
            <p>As a Full Stack Web Developer intern at a learning platform, I gained comprehensive experience in both front-end and back-end development by working on real-world educational projects, developing and optimizing interactive user interfaces, managing server-side operations for a seamless user experience, and collaborating with cross-functional teams to contribute to the platform's growth while enhancing my skills in web development and project management.</p>
          </div>

          <div className='box'>
            <h4>2024 July - 2024 Oct</h4>
            <h3>Frontend developer Intern</h3>
            <h4><i>Parkqwik Private Limited</i></h4>
            <p>During my internship as a Frontend Developer, I specialized in React and React Native by building responsive web and mobile applications, designing dynamic user interfaces to enhance user experience across devices, and collaborating with senior developers to optimize code and integrate new features into the mobile apps.</p>
          </div>
        </div>
       </div>
       </div>
      </div>
    </section>

     
 
  )
}

export default About