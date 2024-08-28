import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import './Contact.css'; // Assuming the CSS file is correctly linked

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_5jtlo9v', // Replace with your EmailJS service ID
      'template_7lu5l7s', // Replace with your EmailJS template ID
      formData,
      'wPY5UV-dCre443vUP' // Replace with your EmailJS user ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (err) => {
      console.error('FAILED...', err);
      alert('Failed to send message. Please try again later.');
    });
  };

  return (
    <section id='contact'>
      <div className='container'>
        <div className='column contact-options'>
          <h1 className='heading-1'>
            <span className='gradient-text'>Let's work together</span>
          </h1>
          <p className='muted'>
            I'm currently available to take new projects, so feel free to send me a message about anything you would like to discuss.
            You can contact me anytime, 24/7.
          </p>
          <div className='options'>
            <a href='#' className='flex-option'>
              <div className='flex-center icon-wrapper'>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <span>prathikthelkar760@gmail.com</span>
            </a>

            <a href='#' className='flex-option'>
              <div className='flex-center icon-wrapper'>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>+91 6361770366</span>
            </a>

            <a href='#' className='flex-option'>
              <div className='flex-center icon-wrapper'>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <span>Bengaluru, Karnataka</span>
            </a>
          </div>
        </div>
        <div className='column contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='top'>
              <p className='muted'>
                Need Help? Reach out for any project or inquiries. I am here for you.
              </p>
            </div>
            <div className='middle'>
              <div className='flex row'>
                <input type='text' placeholder='First name' name='firstName' value={formData.firstName} onChange={handleChange} className='control'/>
                <input type='text' placeholder='Last name' name='lastName' value={formData.lastName} onChange={handleChange} className='control'/>
              </div>
              <div className='flex row'>
                <input type='email' placeholder='Email address' name='email' value={formData.email} onChange={handleChange} className='control'/>
                <input type='tel' placeholder='Phone number' name='phone' value={formData.phone} onChange={handleChange} className='control'/>
              </div>
              <textarea placeholder='Message' name='message' value={formData.message} onChange={handleChange} cols={30} rows={10} className='control'></textarea>
            </div>
            <div className='flex-center bottom'>
              <button type='submit' className='btn primary'>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
