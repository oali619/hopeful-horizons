
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Normally we would post to an API here
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted ? (
        <div className="autism-highlight text-center py-8 animate-fade-in">
          <h3 className="text-xl font-semibold mb-2">Thank you for reaching out!</h3>
          <p>We'll get back to you as soon as possible.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-autism-sienna-gray rounded-md focus:outline-none focus:ring-2 focus:ring-autism-peach-cream"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-autism-sienna-gray rounded-md focus:outline-none focus:ring-2 focus:ring-autism-peach-cream"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">Phone (Optional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border border-autism-sienna-gray rounded-md focus:outline-none focus:ring-2 focus:ring-autism-peach-cream"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 border border-autism-sienna-gray rounded-md focus:outline-none focus:ring-2 focus:ring-autism-peach-cream"
              >
                <option value="">Please select</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Services Information">Services Information</option>
                <option value="Appointment Request">Appointment Request</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full p-3 border border-autism-sienna-gray rounded-md focus:outline-none focus:ring-2 focus:ring-autism-peach-cream"
            ></textarea>
          </div>
          
          <div className="flex justify-center md:justify-start">
            <button type="submit" className="autism-btn-primary">
              Send Message
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default ContactForm;
