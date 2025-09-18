import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [isFormOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
    closeForm();
  };

  const contacts = [
    {
      title: "📧 Email",
      value: "jafrincarolina6@gmail.com",
      link: "mailto:jafrincarolina6@.com",
    },
    {
      title: "📱 Phone",
      value: "+91 26378 63653",
      link: "tel:+9126378 63653",
    },
    {
      title: "📸 Instagram",
      value: "@jafrin.codes",
      link: "https://instagram.com/jafrin.codes",
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>📬 Contact Me</h2>
      <p className="contact-intro">
        Let's connect! Reach me via any of these options or send me a message directly. 💬
      </p>

      <div className="contact-boxes">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-box"
          >
            <h3>{contact.title}</h3>
            <p>{contact.value}</p>
          </a>
        ))}
      </div>

      <button className="open-form-btn" onClick={openForm}>Send a Message 📩</button>

      {isFormOpen && (
        <div className="form-popup-overlay" onClick={closeForm}>
          <div className="form-popup-box" onClick={(e) => e.stopPropagation()}>
            <h3>📥 Send Me a Message</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="form-buttons">
                <button type="submit">Send</button>
                <button type="button" onClick={closeForm} className="cancel-btn">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
