import React from "react";

const Aboutusnav = () => {
  return (
    <div>
      <section className="about-section">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-5">
              <div className="section-title text-center">
                <h2>
                  <span>We care</span> about your health
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="about-text">
                <p>
                  Donec nec sapien in urna fermentum ornare. Morbi vel ultrices
                  leo. Sed eu turpis eu arcu vehicula frin-gilla ut vitae orci.
                  Donec eget efficitur ex. Donec eget dolor vitae eros feugiat
                  tristique id vitae massa. Proin vulputate congue rutrum. Fusce
                  lobor-tis a enim eget tempus. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-text">
                <p>
                  Suspendisse potenti. Ut gravida mattis magna, non varius lorem
                  sodales nec. In libero orci, onec nec sapien in urna fermentum
                  ornare. Morbi vel ultrices leo. Sed eu turpis eu arcu vehicula
                  fringilla ut vitae orci. Donec eget efficitur ex. Donec eget
                  dolor vitae eros feugiat tristique id vitae massa. Proin
                  vulputate congue rutrum. Fusce lobortis a enim eget tempus.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="about-img">
                <img src="img/about-img.png" alt="" />
              </div>
            </div>
          </div>
          <div className="text-center pt-4">
            <a href="#" className="site-btn">
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutusnav;
