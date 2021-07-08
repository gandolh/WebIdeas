import React from "react";
const GoNextButton = () => {
  return (
    <button
      className="GoNextProject"
      onClick={(e) => {
        e.preventDefault();
        const scrollingSize= window.innerHeight -
        document.getElementsByClassName("navbar")[0].clientHeight;
        window.scrollTo({
          top: Math.floor(window.pageYOffset /scrollingSize +1)*scrollingSize, 
          behavior: "smooth",
        });
      }}
    >
      <h3>Go next project</h3>
    </button>
  );
};

export default GoNextButton;
