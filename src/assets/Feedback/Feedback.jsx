import React from 'react'
import '/Users/prathik/Desktop/portfolio/prathik/src/assets/Feedback/Feedback.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import user1 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/user-1.jpeg';
import user2 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/user-2.jpeg'
import user3 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/user-3.jpeg'
import user4 from '/Users/prathik/Desktop/portfolio/prathik/src/assets/img/user-4.jpeg'
const Feedback = () => {
  const settings = {
    pauseOnHover: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
      { 
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
           
        }
      },
      { 
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
           
        }
      },
    ]
  };
  return (
    <section id='feedbacks'>
    <div className='container'>
      <div className='section-header'>
        <h1 className="heading-1 gradient-text">Feedback</h1>
        <p className='muted'>The feedback provided was constructive and highlighted the strengths of the project while also suggesting valuable improvements for future iterations.</p>
      </div>
      <Slider {...settings} className='feedbacks-container'>
        {/* Feedback Block 1 */}
        <div className='feed-block'>
          <div className='profile'>
            <img src={user1} alt='User 1' />
          </div>
          <div className='details'>
            <p className='muted'>The web development service provided an exceptional experience, with a user-friendly interface and seamless navigation that exceeded my expectations.</p>
          </div>
          <div className='bottom'>
            <div className='flex-center stars-container'> 
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h2 className='name'>John Doe</h2>
            <p className='muted'>CEO</p>
          </div>
        </div>

        {/* Feedback Block 2 */}
        <div className='feed-block'>
          <div className='profile'>
            <img src={user2} alt='User 2' />
          </div>
          <div className='details'>
            <p className='muted'>The website's design and functionality were outstanding, making it easy for users to access information and complete tasks efficiently.</p>
          </div>
          <div className='bottom'>
            <div className='flex-center stars-container'> 
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h2 className='name'>Jane Smith</h2>
            <p className='muted'>CTO</p>
          </div>
        </div>

        {/* Feedback Block 3 */}
        <div className='feed-block'>
          <div className='profile'>
            <img src={user3} alt='User 3' />
          </div>
          <div className='details'>
            <p className='muted'>The web development project demonstrated exceptional attention to detail, featuring a user-friendly interface, seamless navigation, and responsive design that ensured an optimal experience across all devices.</p>
          </div>
          <div className='bottom'>
            <div className='flex-center stars-container'> 
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h2 className='name'>Alice Johnson</h2>
            <p className='muted'>COO</p>
          </div>
        </div>

        {/* Feedback Block 4 */}
        <div className='feed-block'>
          <div className='profile'>
            <img src={user4} alt='User 4' />
          </div>
          <div className='details'>
            <p className='muted'>The website showcased impressive web development skills, with a clean design, intuitive layout, and responsive elements that adapted beautifully to various screen sizes and devices.</p>
          </div>
          <div className='bottom'>
            <div className='flex-center stars-container'> 
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <h2 className='name'>Bob Williams</h2>
            <p className='muted'>CMO</p>
          </div>
        </div>
      </Slider>
    </div>
  </section>
  )
}

export default Feedback