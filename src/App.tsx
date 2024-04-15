import "./css/main.css";
import "./css/theme.css";
import { TopHeader } from "./Components/TopHeader";
import { VideoSection } from "./Components/VideoSection";
import { FeaturesSection } from "./Components/FeaturesSection";

function App() {
  return (
    <>
      <TopHeader />
      <VideoSection />
      <FeaturesSection />
    </>
  );
}

export default App;
