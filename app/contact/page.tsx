'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone) => {
    if (phone === '') return true // Phone is optional
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    return phoneRegex.test(phone)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Real-time validation
    if (name === 'email') {
      if (value && !validateEmail(value)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }))
      } else {
        setErrors(prev => ({
          ...prev,
          email: ''
        }))
      }
    }

    if (name === 'phone') {
      if (value && !validatePhone(value)) {
        setErrors(prev => ({
          ...prev,
          phone: 'Please enter a valid phone number'
        }))
      } else {
        setErrors(prev => ({
          ...prev,
          phone: ''
        }))
      }
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Final validation check
    if (formData.email && !validateEmail(formData.email)) {
      setErrors(prev => ({ ...prev, email: 'Invalid email address' }))
      return
    }
    
    if (formData.phone && !validatePhone(formData.phone)) {
      setErrors(prev => ({ ...prev, phone: 'Invalid phone number' }))
      return
    }

    // Submit form if all validations pass
    const form = e.target
    form.submit()
  }

  return (
    <main>
      <section 
        className="hero"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(15, 23, 42, 0.8) 0%, rgba(30, 64, 175, 0.8) 100%), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p className="hero-subtitle">Let's Discuss Your Legal Needs</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Contact Shivraage Legal</h2>
          <div className="contact-wrapper">
            <div className="contact-info">
              <h3>Our Details</h3>
              
              <div className="info-block">
                <label>Email</label>
                <p><a href="mailto:contact@shivraagelegal.com">contact@shivraagelegal.com</a></p>
              </div>

              <div className="info-block">
                <label>Phone</label>
                <p><a href="tel:+91 8375007787">+91 8375007787</a></p>
              </div>

              <div className="info-block">
                <label>WhatsApp</label>
                <p>
                  <a 
                    href="https://wa.me/91 8375007787?text=Hello%20Shivraage%20Legal,%20I%20need%20legal%20consultation%20and%20compliance%20services." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-link"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </p>
              </div>

              <div className="info-block">
                <label>Location</label>
                <p>New Delhi, India</p>
              </div>

              <div className="info-block">
                <label>Services</label>
                <p>
                  Corporate & Commercial Law · POSH Compliance · Internal Committee Support · Employee Training · Compliance Audit · Legal Advisory
                </p>
              </div>
            </div>

            <div className="contact-form">
              <h3>Send us a Message</h3>
              <form action="https://formsubmit.co/contact@shivraagelegal.com" method="POST" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input 
                      type="text"
                      name="firstName" 
                      placeholder="Your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input 
                      type="text"
                      name="lastName" 
                      placeholder="Your last name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input 
                    type="email"
                    name="email" 
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                  {errors.email && <p className="error-message">{errors.email}</p>}
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input 
                    type="tel"
                    name="phone" 
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <p className="error-message">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label>Service of Interest *</label>
                  <select 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate & Commercial Law</option>
                    <option value="posh">POSH Compliance</option>
                    <option value="committee">Internal Committee Support</option>
                    <option value="training">Employee Training</option>
                    <option value="audit">Compliance Audit</option>
                    <option value="advisory">Legal Advisory</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Please Explain Your Issue *</label>
                  <textarea 
                    name="message" 
                    placeholder="Tell us about your legal matter..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
