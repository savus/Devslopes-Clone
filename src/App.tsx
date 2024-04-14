import "./css/main.css";
import "./css/theme.css";
import { TopHeader } from "./Components/TopHeader";
import { VideoSection } from "./Components/VideoSection";
import { VideoPlayButton } from "./Components/VideoPlayButton";

function App() {
  return (
    <>
      <TopHeader />
      <VideoSection>
        <VideoPlayButton />
        <div className="video-header">Learn / Code / Create</div>
        <div className="video-subheader">Blockchain * Apps * Games * Web</div>
      </VideoSection>
    </>
  );
}

export default App;
