import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onVideoClick = (videoInfo) => {
    this.setState({ selectedVideo: videoInfo });
  };

  onSearchSubmit = async (query) => {
    this.setState({ searchTerm: query });
    const response = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] });
  };

  displayVideo = () => {
    if (this.state.selectedVideo) {
      return <VideoDetail selectedVideo={this.state.selectedVideo} />;
    }
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">{this.displayVideo()}</div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoClick={this.onVideoClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
