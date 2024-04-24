export const Feature = ({
  heading,
  description,
  image,
}: {
  heading: string;
  description: string;
  image: string;
}) => {
  return (
    <article className="feature container-lg">
      <div className="image-container">
        <img src={image} alt="top image of feature" />
      </div>
      <div className="content-container">
        <h2 className="feature-heading">{heading}</h2>
        <p className="feature-description">{description}</p>
      </div>
    </article>
  );
};
