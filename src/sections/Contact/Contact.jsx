import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs.send('service_rt47vyr', 'template_07rkytf', formData, 'yU4QWqaq4RhTqxDbf')
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section id='contact' className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      {submitted && <p>Thank you for your message! We will get back to you soon.</p>}
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='name' hidden>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name'
            required
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='email' hidden>Email</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='message' hidden>Message</label>
          <textarea
            id='message'
            name='message'
            placeholder='Message'
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <input className='hover' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
