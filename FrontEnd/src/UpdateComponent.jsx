import axios from "axios";
import React from "react";
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.likes,
      comments: props.comments,
      liked : false,
      postId:props.PostId
      // post :
    };
  }
  // parseInt(this.props.likes, 10)+1
  changeColor = () => {
    console.log("called ")
    if( this.liked ==  true)
    {
      console.log("removed liked")
      this.setState({likes: parseInt(this.props.likes, 10)});
      this.liked = false
      
    }
    
    else
    {
      console.log("reached")
      console.log("liked")
      this.setState({likes: parseInt(this.props.likes, 10)+1});
      this.liked = true
    }
  }

  static getDerivedStateFromProps(props, state) {
    
    axios.post('http://localhost:3000/GetLikes',this.PostId)
        .then(res => {
            if (res.data === "Success"){
                // navigate('/Home',{state:{id:1,name:values.UserName}});

            }
            else{
                alert("failed to login")
            }}
            )
        .catch(err => console.log(err));
    return {favoritecolor: props.favcol };
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
          onClick={this.changeColor}
        >like madu</button>
      </div>
    );
  }
}
export default Post;
