import React from "react";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit}></SearchBar>
        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        ></VideoList>
      </div>
    );
  }
}

export default App;
