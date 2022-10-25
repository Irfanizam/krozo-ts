const About = () => {
  return (
    <>
      <div className="row align-items-center justify-content-center">
        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          <div className="img-box">
            <img src="img/about/1.jpg" alt="smiling a girl" />
          </div>
        </div>

        <div
          className="col-lg-6 my-3"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="typo-box about-me">
            <h3>Spongebob</h3>
            <h5>
              A freelancer <span className="color-theme">UX &amp; UI</span> designer
              that based in <span className="color-theme">Malaysia.</span>
            </h5>
            <p>
              I design and develop websites with design given from client or myself <br></br>
              &amp; also troubleshoots problem and fixes them.
            </p>
            <div className="row about-list">
              <div className="col-md-6">
                <div className="media">
                  <label>Birthday</label>
                  <p>13th December 1930</p>
                </div>
                <div className="media">
                  <label>Age</label>
                  <p>92 Years old</p>
                </div>
                <div className="media">
                  <label>Residence</label>
                  <p>Malaysia</p>
                </div>
                <div className="media">
                  <label>Address</label>
                  <p>Bangi, Selangor</p>
                </div>
              </div>
              {/* End .col */}

              <div className="col-md-6">
                <div className="media">
                  <label>E-mail</label>
                  <p>irfanizam34@gmail.com</p>
                </div>
                <div className="media">
                  <label>Phone</label>
                  <p>023-23929394</p>
                </div>
                <div className="media">
                  <label>Skype</label>
                  <p>Unavailable</p>
                </div>
                <div className="media">
                  <label>Freelance</label>
                  <p>Currently</p>
                </div>
              </div>
              {/* End .col */}
            </div>
            {/* End .row */}
            <div className="btn-bar">
              <a className="px-btn px-btn-theme" href="img/resume.png" download>
                Download the CV here !
              </a>
            </div>
          </div>
          {/* End .about me */}
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default About;
