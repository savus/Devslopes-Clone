import "../css/features-section.css";
import mobile from "../assets/images/mobile-devices.png";
import techLogo from "../assets/images/tech-logo.png";
export const FeaturesSection = () => {
  return (
    <section className="features-section container container-lg">
      <article className="features-header">
        <h2 className="features-heading">Engaged Hands-on Learning</h2>
        <h4 className="features-subheading">Professional Developer Training</h4>
        <p>
          Build real applications. Learn the frameworks and languages needed to
          build professional web applications.
        </p>
        <p>
          Devslopes brings guided learning in the most effective, engaging, and
          fun way possible.
        </p>
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
      </article>
    </section>
  );
};
