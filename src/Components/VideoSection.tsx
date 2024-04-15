import "../css/video-section.css";
import { VideoPlayButton } from "./VideoPlayButton";

export const VideoSection = () => {
  return (
    <section className="video-section">
      <VideoPlayButton />
      <h2 className="video-header">Learn / Code / Create</h2>
      <h3 className="video-subheader">Blockchain * Apps * Games * Web</h3>
    </section>
  );
};
