document.addEventListener("DOMContentLoaded", () => {
  const useJavascript = false;
  if (useJavascript) {
    const trigramButton = document.querySelector(".trigram");
    trigramButton.addEventListener("click", () => {
      const valueToSet =
        trigramButton.getAttribute("aria-expanded") === "true"
          ? "false"
          : "true";
      trigramButton.setAttribute("aria-expanded", valueToSet);
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 767) {
        trigramButton.setAttribute("aria-expanded", "false");
      }
    });
  }
});
