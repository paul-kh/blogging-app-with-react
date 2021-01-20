import React, { Component } from "react";

class FullPost extends Component {
  render() {
    let post = <p>Please select a Post!</p>;
    post = (
      <div className="FullPost u-text-black">
        <h1 className="heading-primary--main">Title</h1>
        <p className="paragraph u-margin-bottom-small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat
        </p>
        <div className="Edit">
          <button className="btn btn--red">Delete</button>
        </div>
      </div>
    );
    return post;
  }
}

export default FullPost;
