import { MainSection } from "./Components/MainSection";
import { TopHeader } from "./Components/TopHeader";
import "./css/main.css";
import "./css/theme.css";
import "./css/responsive.css";
import { VideoSection } from "./Components/VideoSection";
import { ServicesSection } from "./Components/ServicesSection";

function App() {
  return (
    <>
      <MainSection>
        <TopHeader />
        <VideoSection />
        <ServicesSection />
      </MainSection>
    </>
  );
}

export default App;
