import React from "react";
// import ReactPlayer from "react-player";

const NasaVideos = ({ videos, num }) => {
  return (
    <li className={`video video${num}`}>
      <a href="details.html">
        <div className="video">
          <img src={videos.links[0].href} alt={videos.data[0].title} />
        </div>
        <div className="video__info">
          <div className="video__time">2:30</div>
          <div className="video__tit">{videos.data[0].title}</div>
        </div>
      </a>
    </li>
  );
};

const VideoContents = ({ videos }) => {
  return (
    <div className="video__contents container">
      <ul className="video__inner">
        {videos.map((videos, index) => (
          <NasaVideos key={index} videos={videos} num={index + 1} />
        ))}
      </ul>
    </div>
  );
};

export default VideoContents;
