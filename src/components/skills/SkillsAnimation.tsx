const Skills = () => {
  return (
    <>
      <div className="row">
        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          <div className="sm-title">
            <h4 className="font-alt">Education</h4>
          </div>

          <ul className="aducation-box theme-bg">
            <li>
              <span className="dark-bg">1980 - 2029</span>
              <h6>Front-end and Back-end engineer</h6>
              <p>University of International</p>
            </li>

            <li>
              <span className="dark-bg">2020 - 2022</span>
              <h6>Bachelor's Degree in Computer Science</h6>
              <p>UUM</p>
            </li>

            <li>
              <span className="dark-bg">2019 - 2021</span>
              <h6>Graphic Designer</h6>
              <p>UniKL</p>
            </li>
          </ul>

          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          <div className="sm-title">
            <h4 className="font-alt">Experience</h4>
          </div>
          <ul className="aducation-box dark-bg">
            <li>
              <span className="theme-bg">2018 - 2022</span>
              <h6>Software Developer and Mobile Application </h6>
              <p>Silicon Valley</p>
            </li>

            <li>
              <span className="theme-bg">2015 - 2040</span>
              <h6>Data Analysis</h6>
              <p>Petronas Data Department</p>
            </li>

            <li>
              <span className="theme-bg">2003 - 2022</span>
              <h6>React Developer</h6>
              <p>Oxford University</p>
            </li>
          </ul>
          {/* End  .aducation-box */}
        </div>
        {/* End .col */}

        <div
          className="col-lg-4 ml-auto my-3"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="sm-title">
            <h4 className="font-alt">My Skills</h4>
          </div>
          <div className="gray-bg skill-box">
            <div className="skill-lt">
              <h6>React js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>WordPress</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 75 + "%" }}
                >
                  <span>75%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>Vue js</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 86 + "%" }}
                >
                  <span>86%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>UI/UX</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 88 + "%" }}
                >
                  <span>88%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}

            <div className="skill-lt">
              <h6>CSS3</h6>

              <div className="skill-bar">
                <div
                  className="skill-bar-in theme-bg"
                  style={{ width: 92 + "%" }}
                >
                  <span>92%</span>
                </div>
              </div>
            </div>
            {/* End skill-lt */}
          </div>
        </div>
        {/* End .col */}
      </div>
    </>
  );
};

export default Skills;
