import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);
  return (
    <div className="w-screen h-screen overflow-hidden ">
      <iframe
        className="w-[200%] h-[200%]"
        style={{
          transform: "translate(-25%, -25%)",
        }}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
// every youtube video has a key
// inside jsx, you always have to use camel casing
//separation of concerns
// all the videos have aspect ratio of 16/9 : The aspect-ratio property in CSS sets the width-to-height ratio of an element
// autoplay youtube embed video
