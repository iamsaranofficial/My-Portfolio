import { useState } from "react";

const Contact = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is just a demo form. No message will be sent.");
    setFormData(initialState);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2 className="contact-title">
          Let's Develop Together
        </h2>
        <p className="contact-description">
          I'd love to hear about your project or idea. Drop a message and I'll
          respond soon.
        </p>
      </div>

      <div className="contact-form-wrapper">
        <form
          onSubmit={handleSubmit}
          className="contact-form"
          noValidate
        >
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            className="form-input"
            required
            minLength={2}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="form-input"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Subject / Title"
            className="form-input"
            required
            minLength={3}
          />
          <textarea
            name="message"
            placeholder="Enter Your Message"
            rows="5"
            className="form-textarea"
            required
            minLength={10}
          />
          <button
            type="submit"
            className="form-submit"
          >
            Send Message
          </button>
        </form>

        <p className="form-disclaimer">
          (Demo Only) This form is for UI display — it doesn't send messages.
        </p>
      </div>
    </section>
  );
};

export default Contact;
