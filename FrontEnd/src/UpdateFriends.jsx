import React from "react";
import { Link, useNavigate } from 'react-router-dom';
class Friend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        UserID : props.UserID
      };

  }
  render() {
    return (
      <div>
        <button
          type="button"
          onClick={navigate('/DirectMessage')}
        >{this.state.UserID}</button>
      </div>
    );
  }
}
export default Friend;
