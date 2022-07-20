import React from "react";

export default class SearchBar extends React.Component {
  state = {query: ""}

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.onSearchSubmit(this.state.query)
  }

    render() {
    return (
      <div className="ui segment search-bar">
        <form 
        className="ui form"
        onSubmit={this.onFormSubmit}
        >
          <div className="field">
            <label>Video Search</label>
            <input 
            type="text"
            value={this.state.query} 
            onChange={(e) => this.setState({query: e.target.value})}

            />
          </div>
        </form>
      </div>
    );
  }
}
