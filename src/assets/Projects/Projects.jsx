import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Projects/Projects.css';
import project1 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/project-1.png';
import project2 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/project-2.jpg';
import project3 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/project-3.jpg';
import project4 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/project-4.png';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';

const Projects = () => {
  return (
    <section id='projects'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>Projects</span>
          </h1>
        </div>
        <div className='projects-container'>
          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project1} alt='Project management dashboard design' />
            </div>
            <div className='details'>
              <h3 className='name'>Project management dashboard design</h3>
              <p className='muted'>
                User-friendly web and mobile applications, leveraging my skills in front-end development with React.js and React Native. My services ensure your digital presence is both functional and captivating across all platforms.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project2} alt='Files storage cloud app' />
            </div>
            <div className='details'>
              <h3 className='name'>Files storage cloud app</h3>
              <p className='muted'>
                User-friendly web and mobile applications, leveraging my skills in front-end development with React.js and React Native. My services ensure your digital presence is both functional and captivating across all platforms.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project3} alt='Online payment dashboard' />
            </div>
            <div className='details'>
              <h3 className='name'>Online payment dashboard</h3>
              <p className='muted'>
                User-friendly web and mobile applications, leveraging my skills in front-end development with React.js and React Native. My services ensure your digital presence is both functional and captivating across all platforms.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex project'>
            <div className='picture'>
              <img src={project4} alt='Project management dashboard design' />
            </div>
            <div className='details'>
              <h3 className='name'>Project management dashboard design</h3>
              <p className='muted'>
                User-friendly web and mobile applications, leveraging my skills in front-end development with React.js and React Native. My services ensure your digital presence is both functional and captivating across all platforms.
              </p>
            </div>
            <div className='flex buttons-wrapper'>
              <a href='#' className='btn share-wrapper'>
                <FontAwesomeIcon icon={faShare} />
              </a>
              <a href='#' className='btn primary'>
                Demo
              </a>
            </div>
          </div>
          {/* end */}

        </div>
      </div>
    </section>
  );
}

export default Projects;
