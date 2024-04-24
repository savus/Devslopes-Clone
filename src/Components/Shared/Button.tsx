export const Button = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  return <button className={`btn btn-primary ${className}`}>{text}</button>;
};
