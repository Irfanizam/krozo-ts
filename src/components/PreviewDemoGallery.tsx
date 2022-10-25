import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export default function SimpleSlider() {
  const AllDemos = [
    {
      imageName: "17",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
      animationDelay: "",
    },
    {
      imageName: "16",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
      animationDelay: "100",
    },
    {
      imageName: "18",
      title: "Light Theme",
      routePath: "home-light",
      animationDelay: "200",
    },

    {
      imageName: "19",
      title: "Dark Theme",
      routePath: "home-dark",
      animationDelay: "",
    },

    {
      imageName: "20",
      title: "Video Light Theme",
      routePath: "home-video-light",
      animationDelay: "100",
    },
    {
      imageName: "21",
      title: "Video Dark Theme",
      routePath: "home-video-dark",
      animationDelay: "200",
    },
  ];
  const LightDemos = [
    {
      imageName: "17",
      title: "Video Light Theme",
      routePath: "home-video-light",
      animationDelay: "",
    },
    {
      imageName: "18",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
      animationDelay: "100",
    },

    {
      imageName: "20",
      title: "Light Theme",
      routePath: "home-light",
      animationDelay: "200",
    },
  ];
  const DarkDemos = [
    {
      imageName: "16",
      title: "Dark Theme",
      routePath: "home-dark",
      animationDelay: "",
    },
    {
      imageName: "19",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
      animationDelay: "100",
    },

    {
      imageName: "21",
      title: "Video Dark Theme",
      routePath: "home-video-dark",
      animationDelay: "200",
    },
  ];
  const AnimationDemos = [
    {
      imageName: "20",
      title: "Dark Theme Animation",
      routePath: "home-dark-animation",
      animationDelay: "",
    },
    {
      imageName: "16",
      title: "Light Theme Animation",
      routePath: "home-light-animation",
      animationDelay: "100",
    },
  ];

  return (
    <>
      <div className="portfolio-filter-01">
        <Tabs>
          <TabList className="filter d-flex justify-content-center">
            <Tab>All</Tab>
            <Tab>Light</Tab>
            <Tab>Dark</Tab>
            <Tab>Animation Effect</Tab>
          </TabList>
          {/* End tablist */}

          <TabPanel>
            <div className="row">
              {AllDemos.map((val, i) => (
                <div
                  className="col-lg-4 col-md-6 m-15px-tb"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDelay}
                >
                  <div>
                    <div className="single-demo">
                      <div>
                        <Link to={val.routePath} target="_blank">
                          <div className="product-img">
                            <img
                              src={`img/preview/${val.imageName}.png`}
                              alt="intro page"
                            ></img>
                          </div>
                        </Link>
                      </div>
                      <div className="title text-center">
                        <h3 className="dark-color">{val.title}</h3>
                      </div>
                    </div>
                  </div>
                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="row">
              {LightDemos.map((val, i) => (
                <div
                  className="col-lg-4 col-md-6 m-15px-tb"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDelay}
                >
                  <div>
                    <div className="single-demo">
                      <div>
                        <Link to={val.routePath} target="_blank">
                          <div className="product-img">
                            <img
                              src={`img/preview/${val.imageName}.png`}
                              alt="intro page"
                            ></img>
                          </div>
                        </Link>
                      </div>
                      <div className="title text-center">
                        <h3 className="dark-color">{val.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {DarkDemos.map((val, i) => (
                <div
                  className="col-lg-4 col-md-6 m-15px-tb"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDelay}
                >
                  <div>
                    <div className="single-demo">
                      <div>
                        <Link to={val.routePath} target="_blank">
                          <div className="product-img">
                            <img
                              src={`img/preview/${val.imageName}.png`}
                              alt="intro page"
                            ></img>
                          </div>
                        </Link>
                      </div>
                      <div className="title text-center">
                        <h3 className="dark-color">{val.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
              {AnimationDemos.map((val, i) => (
                <div
                  className="col-lg-4 col-md-6 m-15px-tb"
                  key={i}
                  data-aos="fade-right"
                  data-aos-duration="1200"
                  data-aos-delay={val.animationDelay}
                >
                  <div>
                    <div className="single-demo">
                      <div>
                        <Link to={val.routePath} target="_blank">
                          <div className="product-img">
                            <img
                              src={`img/preview/${val.imageName}.png`}
                              alt="intro page"
                            ></img>
                          </div>
                        </Link>
                      </div>
                      <div className="title text-center">
                        <h3 className="dark-color">{val.title}</h3>
                      </div>
                    </div>
                  </div>

                  {/* End .single-demo */}
                </div>
              ))}
            </div>
          </TabPanel>

          {/* End tabpanel */}
        </Tabs>
      </div>
    </>
  );
}
