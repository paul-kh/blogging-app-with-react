import React, { Component } from "react";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Paul",
  };

  render() {
    return (
      <div className="NewPost u-text-black">
        <h1 className="heading-primary--main">Add a Post</h1>
        <label className="paragraph">Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label className="paragraph">Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label className="paragraph">Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}
        >
          <option value="Paul">Paul</option>
          <option value="Tom">Tom</option>
        </select>
        <button className="btn btn--black u-margin-top-medium">Add Post</button>
      </div>
    );
  }
}

export default NewPost;
