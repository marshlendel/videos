import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";

export default class App extends React.Component {
  state = { videos: [] };

  onSearchSubmit = async (query) => {
    this.setState({ searchTerm: query });
    const response = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    this.setState({videos: response.data.items})
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
