import React from "react";

const NasaImages = ({ images, num }) => {
  return (
    <li className={`img img${num}`}>
      <a href="details.html">
        <img src={images.links[0].href} alt={images.data[0].title} />
      </a>
    </li>
  );
};

const ImageContents = ({ images }) => {
  return (
    <div className="img__contents container">
      <ul className="img__inner">
        {images.map((images, index) => (
          <NasaImages key={index} images={images} num={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default ImageContents;
