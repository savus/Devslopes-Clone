import { MainSection } from "./Components/MainSection";
import { TopHeader } from "./Components/TopHeader";
import "./css/main.css";
import "./css/theme.css";
import "./css/responsive.css";
import { VideoSection } from "./Components/VideoSection";

function App() {
  return (
    <>
      <MainSection>
        <TopHeader />
        <VideoSection />
      </MainSection>
    </>
  );
}

export default App;
