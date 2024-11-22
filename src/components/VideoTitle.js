import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute bottom-24 left-10 text-white z-20 ">
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="py-3 w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-md px-9 py-3 hover:opacity-75">
          <FontAwesomeIcon icon={faPlay} /> Play
        </button>
        <button className="mx-2 bg-gray-500 text-white  text-lg bg-opacity-50 rounded-md px-9 py-3">
          <FontAwesomeIcon
            icon={faCircleInfo}
            className="mr-1.5
          "
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
