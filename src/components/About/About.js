import React from "react";

function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Unscene</h2>
      <p className="about__description">
        Unscene is a tribute to our planet's astonishing beauty. In today's digital age, while we're
        often engulfed in the humdrum of everyday life, we sometimes forget to pause and appreciate
        the natural splendors surrounding us. Unscene offers that serene pause, acting as a window
        to the breathtaking landscapes that our world hosts.
      </p>

      <h3 className="about__subtitle">Technologies Used</h3>
      <ul className="about__tech-list">
        <li>React</li>
        <li>Vanilla JS</li>
        <li>Unsplash API</li>
        <li>CSS with BEM methodology</li>
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
