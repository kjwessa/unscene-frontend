import React from "react";
import arrowLeft from "../../images/arrowLeft.png";
import arrowRight from "../../images/arrowRight.png";

function Main({ mainPhoto, nextPhoto, prevPhoto, onNextClick, onPrevClick }) {
  return (
    <main className="main">
      {mainPhoto && (
        <div
          className="main__image-container"
          style={{ backgroundImage: `url(${mainPhoto?.urls?.full})` }}>
          <img
            className="main__image"
            src={mainPhoto?.urls?.full}
            alt={mainPhoto?.alt_description}
          />
        </div>
      )}

      <div className="main__thumbnails">
        <div
          className={`main__button main__button--previous ${
            !prevPhoto ? "main__button--inactive" : ""
          }`}
          onClick={onPrevClick}>
          {/* Image for left arrow */}
          <img className="main__thumbnail_icon" src={arrowLeft} alt="Previous" />
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
          {/* Image for right arrow */}
          <img className="main__thumbnail_icon" src={arrowRight} alt="Next" />
        </div>
      </div>
    </main>
  );
}

export default Main;
