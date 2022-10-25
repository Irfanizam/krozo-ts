const ServiceContent = [
  {
    icon: "ti-ruler-pencil",
    no: "01",
    service: "RESPONSIVE LAYOUT",
    title: "Create layout that are responsive.",
    desc: `Able to provide customers that order a responsive layout.`,
    animationDelay: "",
  },
  {
    icon: "ti-image",
    no: "02",
    service: "DEVELOPMENT",
    title: "Develop the websites from scratch or from a ready made foundation.",
    desc: `Build a website from the ground until the finished product.`,
    animationDelay: "150",
  },
  {
    icon: "ti-layout",
    no: "03",
    service: "GRAPHIC",
    title: "Create the visual representation of the website.",
    desc: `Satisfying visual quality is provided.`,
    animationDelay: "300",
  },
  {
    icon: "ti-brush-alt",
    no: "04",
    service: "WEB DESIGN",
    title: "Provide web design ideas.",
    desc: `Give several design ideas to customers to choose from.`,
    animationDelay: "",
  },
  {
    icon: "ti-camera",
    no: "05",
    service: "MOTION GRAPHY",
    title: "Animation features for website.",
    desc: `Animation that can highlight important information.`,
    animationDelay: "150",
  },
  {
    icon: "ti-world",
    no: "06",
    service: "PHOTOGRAPHY",
    title: "Images on top of description.",
    desc: `Helps in describing certain matter.`,
    animationDelay: "300",
  },
];

const ServiceTwoAnimation = () => {
  return (
    <>
      <div className="row gy-4">
        {ServiceContent.map((val, i) => (
          <div
            className="col-sm-6 col-lg-4"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.animationDelay}
          >
            <div className="feature-box-02">
              <div className="icon">
                <i className={val.icon}></i>
              </div>
              <h6>
                <span>{val.no}.</span> {val.service}
              </h6>
              <h5>{val.title}</h5>
              <p>{val.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceTwoAnimation;
