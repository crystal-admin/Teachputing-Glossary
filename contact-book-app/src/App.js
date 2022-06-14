import React, { useState } from "react";

class App extends React.Component{
  constructor(props){
    super(props);
  }
  this.state=({
    input:"",
    email:"",
    phone:"",
  })

  this.handleChange=this.handleChange.bind(this);
  this.handleClick=this.handleClick.bind(this);
}
export default App;