import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("cats");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search}></SearchBar>
      <VideoDetail video={selectedVideo}></VideoDetail>
      <VideoList
        onVideoSelect={(video) => {
          setSelectedVideo(video);
        }}
        videos={videos}
      ></VideoList>
    </div>
  );
};

export default App;
