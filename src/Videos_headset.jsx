import React from "react";
// import { vid } from "..videos_headset.js";
// import { vid } from "./videos_headset";
import Video from "./video.jsx";

import "./video.css"
// import { vidd } from "./Videos_headset.js";
import { vid } from "./Video.js";

const Videos_headset = () => {
  return (
    <div className="videosmain">
      <div className="subvideo">
        {vid.map((videosvalue)=>(
            <Video vide={videosvalue.vide}
            playback={videosvalue.playback}/>
        ))}
      </div>
    </div>
  );
};

export default Videos_headset;
