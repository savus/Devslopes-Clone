import mobile from "../assets/images/mobile-devices.png";
import techLogo from "../assets/images/tech-logo.png";

export const FeaturesIntro = () => {
  return (
    <article className="features-intro container container-md">
      <div className="headings-container">
        <h2 className="features-heading">Engaged Hands-on Learning</h2>
        <h3 className="features-subheading">Professional Developer Training</h3>
      </div>
      <div className="intro-body">
        <div className="intro-content">
          <p>
            Build real applications. Learn the frameworks and languages needed
            to build professional web applications.
          </p>
          <p>
            Devslopes brings guided learning in the most effective, engaging,
            and fun way possible.
          </p>
        </div>
        <div className="intro-images">
          <img
            src={mobile}
            alt="mobile-devices-image"
            className="mobile-devices"
          />
          <img
            src={techLogo}
            alt="development-languages-icons"
            className="development-languages"
          />
        </div>
      </div>
    </article>
  );
};
