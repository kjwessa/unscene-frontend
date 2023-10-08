import React from "react";

function Main({ mainPhoto, nextPhoto, prevPhoto, onNextClick, onPrevClick }) {
  return (
    <main className="main">
      {/* Display the main photo */}
      {mainPhoto && (
        <div className="main__photo-container">
          <img
            src={mainPhoto.urls.regular}
            alt={mainPhoto.alt_description}
            className="main__photo"
          />
        </div>
      )}

      {/* Display navigation buttons */}
      <div className="main__controls">
        {prevPhoto && (
          <button className="main__button main__button--prev" onClick={onPrevClick}>
            Previous
          </button>
        )}
        {nextPhoto && (
          <button className="main__button main__button--next" onClick={onNextClick}>
            Next
          </button>
        )}
      </div>

      {/* Display a small thumbnail of the next photo at the bottom */}
      {nextPhoto && (
        <div className="main__thumbnail">
          <img
            src={nextPhoto.urls.thumb}
            alt={nextPhoto.alt_description}
            className="main__thumbnail-image"
          />
        </div>
      )}
    </main>
  );
}

export default Main;
