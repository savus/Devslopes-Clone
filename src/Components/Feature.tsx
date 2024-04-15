import { ReactNode } from "react";

export const Feature = ({
  children,
  topImage,
  bottomImage,
}: {
  children: ReactNode;
  topImage: string;
  bottomImage: string;
}) => {
  return (
    <article className="feature">
      {topImage !== "" && (
        <div className="top-image-container">
          <img src={topImage} alt="top image of feature" />
        </div>
      )}
      {children}
      {bottomImage !== "" && (
        <div className="bottom-image-container">
          <img src={bottomImage} alt="bottom image of feature" />
        </div>
      )}
    </article>
  );
};
