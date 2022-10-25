import TextLoop from "react-text-loop";
import Social from "../Social";

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section
        id="home"
        className="home-banner overlay video-banner slider-three-animation"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/banner/1.jpg"
          })`,
        }}
      >
        <div className="frame-layout__particles"></div>
        {/* End particle animation */}
        <div className="container">
          <div className="row align-items-center full-screen">
            <div className="col-md-12 col-lg-7">
              <div className="hb-typo text-left">
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  Spongebob 
                </h1>
                <h2
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <TextLoop>
                    <span className="loop-text">Web Developer</span>
                    <span className="loop-text"> UI/UX Designer</span>
                    <span className="loop-text"> App Developer</span>
                  </TextLoop>{" "}
                </h2>
                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  I design and develop websites that met client's requirements.
                </p>
                <div
                  className="btn-bar"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <a className="px-btn px-btn-theme btn-md" href="#about">
                    More Info 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}

        <div className="scroll-bottom go-to">
          <a href="#about">Scroll</a>
        </div>

        {/* End bottom scroll */}

        <Social />
        {/* End social slide  */}
      </section>
      {/* End Home Banner  */}
    </>
  );
};

export default Slider;
