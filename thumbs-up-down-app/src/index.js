import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";

const reduceOne = (prevState, groupName, otherGroupName) => {
  prevState[groupName].wasClicked
    ? prevState[groupName].count = prevState[groupName].count - 1
    : prevState[groupName].count = prevState[groupName].count + 1;
  prevState[groupName].wasClicked = !prevState[groupName].wasClicked;
  if (prevState[otherGroupName].wasClicked) {
    prevState[otherGroupName].count = prevState[otherGroupName].count - 1;
    prevState[otherGroupName].wasClicked = false;
  }
  return prevState;
};

const reducer = action =>
  (prevState, props) =>
    action.type === "TOGGLE_LIKE"
      ? reduceOne(prevState, "like", "dislike")
      : reduceOne(prevState, "dislike", "like");

class App extends Component {
  state = {
    like: {
      count: 0,
      wasClicked: false,
    },
    dislike: {
      count: 0,
      wasClicked: false,
    },
  };

  toggleLike = () => this.setState(reducer({ type: "TOGGLE_LIKE" }));
  toggleDislike = () => this.setState(reducer({ type: "TOGGLE_DISLIKE" }));
};  

export default Likes(); {
  return(
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Like - Dislike</h1>
      </header>
      <p className="App-intro">
        <button className="like-button" onClick={this.toggleLike}>
          👍 | {this.state.like.count}
        </button>
        <button className="dislike-button" onClick={this.toggleDislike}>
          👎 | {this.state.dislike.count}
        </button>
      </p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Likes />);