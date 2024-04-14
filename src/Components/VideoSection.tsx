import { ReactNode } from "react";
import "../css/video-section.css";

export const VideoSection = ({ children }: { children: ReactNode }) => {
  return <section className="video-section">{children}</section>;
};
