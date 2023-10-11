import React from "react";

function Main({ mainPhoto, nextPhoto, prevPhoto, onNextClick, onPrevClick }) {
  return (
    <main className="main">
      {mainPhoto && (
        <img className="main__image" src={mainPhoto?.urls?.full} alt={mainPhoto?.alt_description} />
      )}

      <div className="main__thumbnails">
        <div
          className={`main__button main__button--previous ${
            !prevPhoto ? "main__button--inactive" : ""
          }`}
          onClick={onPrevClick}>
          {/* SVG for left arrow */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {prevPhoto && (
          <img
            className="main__thumbnail"
            src={prevPhoto?.urls?.small}
            alt={prevPhoto?.alt_description}
          />
        )}
        <img
          className="main__thumbnail main__thumbnail--active"
          src={mainPhoto?.urls?.small}
          alt={mainPhoto?.alt_description}
        />
        {nextPhoto && (
          <img
            className="main__thumbnail"
            src={nextPhoto?.urls?.small}
            alt={nextPhoto?.alt_description}
          />
        )}

        <div
          className={`main__button main__button--next ${
            !nextPhoto ? "main__button--inactive" : ""
          }`}
          onClick={onNextClick}>
          {/* SVG for right arrow */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}

export default Main;
