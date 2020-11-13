import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { relativeList: ["relative1", "relative2", "relative3"] };
  }

  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.state.relativeList.map((relatives,index) => (
            <li key={`relativeListItem${index+1}`}>{relatives}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
