import React, { Component } from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";

class Liker extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0
    };
    this.likes = this.likes.bind(this);
    this.disLikes = this.disLikes.bind(this);
  }
  likes(){
    this.setState(state =>({
      count: state.count + 1
    }))
  }

    disLikes(){
      this.setState(state =>({
        count: state.count - 1
      }))
  }

  render(){
    return (
      <div className="Liker">
        <button onClick={this.likes}>👍</button>
        <button onClick={this.disLikes}>👎</button>
        <p>Current Likes: {this.state.count}</p>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Liker />);