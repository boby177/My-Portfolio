import React, { useRef } from "react";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
  
    emailjs.sendForm('service_e6nm4h2', 'portfolio_template', form.current, 'COT4kQ8Qq8av44T7E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      alert('Your email has been submitted')
      form.current.reset()
  }

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Contact Me</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Did you interested about me?</h3>
          <p className="contact__details">
            Let's send me an email right now.
          </p>
        </div>

        <form className="contact__form" onSubmit={sendEmail} ref={form}>
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Insert your name"
                name="name"
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Insert your email"
                name="email"
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              className="contact__form-input"
              placeholder="Insert your subject"
              name="subject"
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="contact__form-input"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
