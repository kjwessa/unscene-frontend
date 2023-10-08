//* Import React
import React, { useState, useEffect } from "react";

//* Import the Styles
import "../../index.css";

//* Import the Components
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
