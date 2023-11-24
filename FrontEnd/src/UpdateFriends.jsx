import React from "react";
import DirectMessage from './DirectMessage'
import { Link, useNavigate } from 'react-router-dom';
// import { ReactDOM } from "react";
// import createRoot from ReactDOM
// import { React } from "react";
import { createRoot } from "react-dom/client";

class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        UserID : props.UserID
      };}
  function_madu = () =>{
    console.log("called")
    const root = createRoot(document.getElementById('messagemadu'));
  root.render(    
  <div>
    <p>Hello madu</p>
    <h4>this.state.UserID</h4>
    <DirectMessage/>    
  </div>
  );


  }

  render() {
    return (
      <div id="messagemadu">
        <button
          type="button"
          onClick={this.function_madu}
        >{this.state.UserID}</button>
      </div>
    );
  }
}
export default Friend;
