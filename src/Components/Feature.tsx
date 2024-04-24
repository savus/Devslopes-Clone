import { ReactNode } from "react";

export const Feature = ({
  children,
  image,
}: {
  children: ReactNode;
  image: string;
}) => {
  return (
    <article className="feature">
      {image !== "" && (
        <div className="image-container container-lg">
          <img src={image} alt="top image of feature" />
        </div>
      )}

      {children}
    </article>
  );
};
