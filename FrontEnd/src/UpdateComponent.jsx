import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      comments: props.comments,
      liked : false
      // post :
    };
  }
  // parseInt(this.props.likes, 10)+1
  changeColor = () => {
    console.log("called ")
    if( this.liked ===  false)
    {
      console.log("liked")
      this.setState({likes:"liked" });
      this.liked = true
    }
    
    else
    {
      console.log("removed liked")
      this.setState({likes: "removed like"});
      this.liked = false
      console.log("reached")
    }
  }
  render() {
    return (
      <div>
        <h1> {this.state.likes}</h1>
        <p>
           {this.state.comments}
          {/* {this.state.model} */}
          {/* from {this.state.year}. */}
        </p>
        <button
          type="button"
          onClick={this.changeColor()}
        >like madu</button>
      </div>
    );
  }
}
export default Post;
