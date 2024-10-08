import React from 'react'
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Skills/Skills.css'
import img from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/figma.png'
import html from  '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/html.png'
import css from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/css-3-2.png'
import js from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/js-2.png'
import react from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/science.png'
import native from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/logos/atom.png'
import java from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/java.png'
import sql from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/sql-3.png'
import bot from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/bootstrap.png'
import tailwind from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/icons8-tailwind-css-48.png'

const Skills = () => {
  return (
    <section id="skills" className="blur-effect">
  <div className="container">
    <div className="section-header">
      <h1 className="heading-1 gradient-text">My Skills</h1>
      <p className="muted">I have strong analytical skills that help me evaluate complex problems and come up with strategic solutions. I also excel in communication, which allows me to work well with diverse teams and clearly convey my ideas.</p>
    </div>
    <div className="skills-container">
      <div className="skill">
        <div className="image">
          <img src={img} alt="Figma" />
        </div>
        <div className="details">
          <h3 className="name">Figma</h3>
          <h2 className="progress">85%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={html} alt="HTML" />
        </div>
        <div className="details">
          <h3 className="name">HTML</h3>
          <h2 className="progress">90%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={css} alt="CSS" />
        </div>
        <div className="details">
          <h3 className="name">CSS</h3>
          <h2 className="progress">70%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={js} alt="JavaScript" />
        </div>
        <div className="details">
          <h3 className="name">JavaScript</h3>
          <h2 className="progress">80%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={react} alt="React" />
        </div>
        <div className="details">
          <h3 className="name">React</h3>
          <h2 className="progress">75%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={native} alt="React Native" />
        </div>
        <div className="details">
          <h3 className="name">React Native</h3>
          <h2 className="progress">75%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={java} alt="Java" />
        </div>
        <div className="details">
          <h3 className="name">Java</h3>
          <h2 className="progress">50%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={sql} alt="SQL" />
        </div>
        <div className="details">
          <h3 className="name">SQL</h3>
          <h2 className="progress">65%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={bot} alt="Bootstrap" />
        </div>
        <div className="details">
          <h3 className="name">Bootstrap</h3>
          <h2 className="progress">85%</h2>
        </div>
      </div>

      <div className="skill">
        <div className="image">
          <img src={tailwind} alt="Tailwind" />
        </div>
        <div className="details">
          <h3 className="name">Tailwind</h3>
          <h2 className="progress">80%</h2>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Skills