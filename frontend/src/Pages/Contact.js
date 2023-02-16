import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2 className="contact-title">Contact Info</h2>
              <div className="contact-info-warp">
                <h4>Location</h4>
                <div className="contact-info">
                  <img src="img/icons/1-dark.png" alt="" />
                  <div className="cf-text">
                    <p>1525 Awesome Lane, Los Angeles, CA</p>
                  </div>
                </div>
              </div>
              <div className="contact-info-warp">
                <h4>Subscriptions</h4>
                <div className="contact-info">
                  <img src="img/icons/2-dark.png" alt="" />
                  <div className="cf-text">
                    <p>+1 (603)535-4592</p>
                    <p>+1 (603)535-4556</p>
                  </div>
                </div>
              </div>
              <div className="contact-info-warp">
                <h4>E-mail</h4>
                <div className="contact-info">
                  <img src="img/icons/3-dark.png" alt="" />
                  <div className="cf-text">
                    <p>Contact@xgym.com</p>
                    <p>www.xgym.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <h2 className="contact-title">Get in touch</h2>
              <form className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input type="text" placeholder="Your name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Your e-mail" />
                  </div>
                  <div className="col-md-12">
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Message" defaultValue={""} />
                    <button className="site-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14376.077865872314!2d-73.879277264103!3d40.757667781624285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1546528920522"
            style={{ border: 0 }}
            allowFullScreen=""
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
