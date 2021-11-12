import logo from "./logo.png";
// import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        {data.map((movie) => {
          return (
            <div className="container">
              <h1 className="card">{movie.title}</h1>
              <p>{movie.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
