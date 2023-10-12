//* Import React
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//* Import the components
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Preloader from "../Preloader/Preloader";

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handlePreviousPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  console.log("Rendering App component...");

  return (
    <Router>
      <div className="app">
        <Header />

        {isLoading ? (
          <Preloader />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                photos.length > 0 && (
                  <Main
                    mainPhoto={photos[currentIndex]}
                    nextPhoto={photos[(currentIndex + 1) % photos.length]}
                    prevPhoto={photos[(currentIndex - 1 + photos.length) % photos.length]}
                    onNextClick={handleNextPhoto}
                    onPrevClick={handlePreviousPhoto}
                  />
                )
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
