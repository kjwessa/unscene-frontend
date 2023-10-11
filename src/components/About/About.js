import React from "react";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Unscene</h2>
      <p className="about__description">
        Unscene is an immersive exploration of Earth's most captivating visual experiences. We bring
        forward the unnoticed beauty of our planet, sourced from the expansive galleries of
        Unsplash. Dive deep and be a part of the Unscene.
      </p>

      <h3 className="about__subtitle">Technologies Used</h3>
      <ul className="about__tech-list">
        <li>React</li>
        <li>react-router-dom</li>
        <li>Unsplash API</li>
        <li>Custom CSS with BEM methodology</li>
      </ul>

      <h3 className="about__subtitle">Roadmap</h3>
      <ol className="about__roadmap">
        <li>User account creation and authentication</li>
        <li>Photo favoriting and personalized collections</li>
        <li>Enhanced filters and categories for exploration</li>
        <li>Integration with other photo platforms</li>
        <li>Personalized photo recommendations based on user preferences</li>
      </ol>
    </section>
  );
}

export default About;
