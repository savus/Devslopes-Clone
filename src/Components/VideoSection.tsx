import "../css/video-section.css";
export const VideoSection = () => {
  return (
    <section className="video-section">
      <div className="video-container">
        <div className="section-content-container">
          <button className="btn play-button">
            <i className="fa fa-play"></i>
          </button>
          <h2 className="section-headings">Learn / Code / Create</h2>
          <p className="section-subheadings">Blockchain * Apps * Games * Web</p>
        </div>
      </div>
    </section>
  );
};
