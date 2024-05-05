import "./css/main.css";
import "./css/theme.css";
import { TopHeader } from "./Components/TopHeader";
import { VideoSection } from "./Components/VideoSection";
import { FeaturesSection } from "./Components/FeaturesSection";
import { FeaturedCourses } from "./Components/FeaturedCourses";
import FeaturedCourse from "./Components/FeaturedCourse";

function App() {
  return (
    <>
      <TopHeader />
      <VideoSection />
      <FeaturesSection />
      <FeaturedCourses>
        <FeaturedCourse>
          <></>
        </FeaturedCourse>
      </FeaturedCourses>
    </>
  );
}

export default App;
