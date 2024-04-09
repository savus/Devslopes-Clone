export const TrigramButton = ({
  ariaExpandedState,
  setAriaExpandedState,
}: {
  ariaExpandedState: "true" | "false";
  setAriaExpandedState: (ariaExpandedState: "true" | "false") => void;
}) => {
  const trueOrFalse = (stringState: string) =>
    stringState === "true" ? "false" : "true";
  return (
    <button
      className="trigram btn"
      aria-expanded={ariaExpandedState}
      onClick={() => setAriaExpandedState(trueOrFalse(ariaExpandedState))}
    >
      <a href="#">
        <div className="icon-group">
          <i className="fa-solid fa-x"></i>
          <i className="fa-solid fa-bars"></i>
        </div>
        <span>Menu</span>
      </a>
    </button>
  );
};
