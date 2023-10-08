//* Import React
import React, { useState, useEffect } from "react";

//* Import the components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

//* Import the Styles
import "../../index.css";

import { getPhotos } from "../../utils/api";

function App() {
  console.log("App component is being initialized...");

  const [photos, setPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("useEffect triggered to fetch photos from API...");
    async function fetchPhotos() {
      try {
        console.log("Starting the fetching process...");
        const fetchedPhotos = await getPhotos();
        console.log("Starting the fetching process...");
        setPhotos(fetchedPhotos);
      } catch (error) {
        console.error("Error fetching photos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotos();
  }, []);

  const handleNextPhoto = () => {
    console.log("Updating index to show the next photo...");
    if (currentIndex < photos.length - 1) {
      console.log("Updating index to show the next photo...");
      setCurrentIndex(currentIndex + 1);
    } else {
      console.log("Reached the end of the photo list. No more next photos.");
    }
  };

  const handlePreviousPhoto = () => {
    console.log("Previous button clicked...");
    if (currentIndex > 0) {
      console.log("Updating index to show the previous photo...");
      setCurrentIndex(currentIndex - 1);
    } else {
      console.log("Reached the start of the photo list. No more previous photos.");
    }
  };

  console.log("Rendering App component...");

  return (
    <div className="app">
      <Header />

      {isLoading ? (
        console.log("Still loading, will display photos once done...")
      ) : (
        <Main
          mainPhoto={photos[currentIndex]}
          nextPhoto={photos[currentIndex + 1]}
          prevPhoto={photos[currentIndex - 1]}
          onNextClick={handleNextPhoto}
          onPrevClick={handlePreviousPhoto}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
