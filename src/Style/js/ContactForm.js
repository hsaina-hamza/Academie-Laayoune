import React, { useRef } from 'react';
import "../css/ContactForm.css";
import Header from './header';
import Footer from './Footer';

const ContactForm = () => {
  const formRef = useRef(null);
  return (
    <>
    <Header />
    <div className="container mt-5">
    <form ref={formRef} id="contact_form" action="/submit" method="post" className="p-4 rounded shadow-s">
      <h2 className="text-center mb-4">Contact Form</h2>
      <div className="mb-3">
        <label htmlFor="first_name" className="form-label">First Name:</label>
        <input type="text" name="first_name" id="first_name" className="form-control " />
      </div>
      <div className="mb-3">
        <label htmlFor="last_name" className="form-label">Last Name:</label>
        <input type="text" name="last_name" id="last_name" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email:</label>
        <input type="email" name="email" id="email" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone:</label>
        <input type="text" name="phone" id="phone" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address:</label>
        <input type="text" name="address" id="address" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="city" className="form-label">City:</label>
        <input type="text" name="city" id="city" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="zip" className="form-label">ZIP Code:</label>
        <input type="text" name="zip" id="zip" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary w-50">Submit</button>
    </form>
    <div id="success_message" className="alert alert-success mt-4" style={{ display: 'none' }}>
      Form successfully submitted!
    </div>
  </div>

  <div>
  <Footer />
  </div>
    </>
   
  );
};

export default ContactForm;