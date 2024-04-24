import "../css/features-section.css";
import { Feature } from "./Feature";
import { FeaturesIntro } from "./FeaturesIntro";
import Videos from "../assets/images/videos-feature.svg";
import Projects from "../assets/images/projects.png";
import Plan from "../assets/images/lesson-plan.svg";
import Networking from "../assets/images/networking.png";
import Rocket from "../assets/images/rocket.png";

export const FeaturesSection = () => {
  return (
    <section className="features-section container container-lg">
      <FeaturesIntro />
      <Feature
        image={Videos}
        heading="Videos & Source Code"
        description="All access to our videos and source code. We regularly maintain all our content so you’re always up to date. "
      />
      <Feature
        image={Projects}
        heading="Projects & Exercises"
        description="You’ll build real projects as you would in a job or startup. These aren’t easy, but rest assured they will prepare you for your next professional project."
      />
      <Feature
        image={Plan}
        heading="Guided Training"
        description="Content is strategically placed in each course to give you the best learning experience. It's like being taking on a learning path. "
      />
      <Feature
        image={Networking}
        heading="Networking & Help"
        description="You'll get access to our code forums where you can post questions, get help, and network with our team and the community. "
      />
      <Feature
        image={Rocket}
        heading="Get Started Now"
        description="Checkout some of the free previews on our courses and start learning today. "
      />
    </section>
  );
};
