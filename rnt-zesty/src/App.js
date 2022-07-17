import React, { useState } from "react";

import "./App.css";
import "./assets/style/style.css";

import apple from "./assets/images/image1.jpg";
import mango from "./assets/images/image2.jpg";
import banana from "./assets/images/image3.jpg";
import cherry from "./assets/images/image4.jpg";
import peach from "./assets/images/image5.jpg";
import avocado from "./assets/images/image6.jpg";

const images = [apple, mango, banana, cherry, peach, avocado];

const Loading = ({ calculatedWidth }) => (
  <aside>
    <div className="loading-bar">
      <label htmlFor="images-loaded">Loading all your favorite images...</label>
      <progress id="images-loaded" max="100" value={calculatedWidth}></progress>
    </div>
  </aside>
);

const App = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numLoaded, setNumLoaded] = useState(0);

  const handleClick = () => {
    const length = images.length - 1;

    setCurrentImage((currentImage) =>
      currentImage < length ? currentImage + 1 : 0
    );
  };

  const handleImageLoad = () => {
    setNumLoaded((numLoaded) => numLoaded + 1);
  };

  return (
    <section>
      <header>
        <h1 className="animate-charcter">Zesty</h1>
        <h2>
          A photography project <br /> by RNT Creative
        </h2>
      </header>

      <figure>
        {numLoaded < images.length && (
          <Loading calculatedWidth={(numLoaded / images.length) * 100} />
        )}

        <figcaption>
          {currentImage + 1} / {images.length}
        </figcaption>
        <figcaption className="title-word-4" onClick={handleClick}>
          <h4>Touch me</h4>
        </figcaption>
        {images.map((imageURL, index) => (
          <img
            alt=""
            key={imageURL}
            src={imageURL}
            onClick={handleClick}
            onLoad={handleImageLoad}
            className={currentImage === index ? "display" : "hide"}
          />
        ))}
      </figure>
    </section>
  );
};

export default App;
