import React from 'react';
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Services/Services.css';

const Services = () => {
  return (
    <section id='services'>
      <div className='container'>
        <div className='section-header'>
          <h1 className='heading-1'>
            <span className='gradient-text'>My Services</span>
          </h1>
          <p className='muted'>
            I specialize in creating visually engaging and user-friendly web and mobile applications, leveraging my skills in front-end development with React.js and React Native. My services ensure your digital presence is both functional and captivating across all platforms.
          </p>
        </div>
        <div className='services-container'>
          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>1 .</h1>
              <h2 className='title'>Research and Analysis</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              Research and development involves systematically investigating and innovating to create new products or improve existing ones, ultimately driving technological advancement and enhancing competitive advantage.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects</a>
            </div>
          </div>
          {/* end */}


          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>2 .</h1>
              <h2 className='title'>Wireframe</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              A wireframe is a visual blueprint or schematic representation of a web page or application, outlining its structure, layout, and functionality without focusing on design elements, serving as a foundational guide for developers and designers during the development process.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects </a>
            </div>
          </div>
          {/* end */}


          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>3 .</h1>
              <h2 className='title'>Visual Design</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              Visual design is the art of enhancing a product's aesthetic appeal and usability through the effective use of colors, typography, imagery, and layout, ultimately creating a cohesive and engaging user experience.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects</a>
            </div>
          </div>
          {/* end */}

          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>4 .</h1>
              <h2 className='title'>Interaction design</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              Interaction design focuses on creating engaging interfaces with well-thought-out behaviors and actions, ensuring that users can easily navigate and interact with a product or system in an intuitive and efficient manner.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects </a>
            </div>
          </div>
          {/* end */}


          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>5 .</h1>
              <h2 className='title'>UI Development</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              UI development involves the creation of visually appealing and user-friendly interfaces for software applications, ensuring that users can effectively engage with the product through intuitive design and seamless interactions.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects </a>
            </div>
          </div>
          {/* end */}


          {/* start */}
          <div className='flex-service'>
            <div className='flex top'>
              <h1 className='muted'>6 .</h1>
              <h2 className='title'>Usability Testing</h2>
            </div>
            <div className='middle'>
              <p className='muted'>
              Usability testing is a method used to evaluate a product's user interface by observing real users as they interact with it, helping identify any issues and ensuring the design meets user needs and expectations.
              </p>
            </div>
            <div className='bottom'>
              <a href='www' className='flex-center btn'>Explore projects </a>
            </div>
          </div>
          {/* end */}
        </div>
      </div>
    </section>
  );
}

export default Services;
