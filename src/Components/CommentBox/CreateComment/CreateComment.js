import React, { Component } from 'react';


class CreateComment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        content: "",
        user: ""
      };
      this.handleUserChange = this.handleUserChange.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUserChange(event) {
      this.setState({
        user: event.target.value
      });
    }
    handleTextChange(event) {
      this.setState({
        content: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault();
      this.props.onCommentSubmit({
        user: this.state.user.trim(),
        content: this.state.content.trim()
      });
      this.setState({
        user: "",
        content: ""
      });
    }
    render() {
      return (
        <form onSubmit={this.handleSubmit} className="createComment">
          <input
            value={this.state.user}
            onChange={this.handleUserChange}
            placeholder="Your name"
            type="text"
          />
          <input
            value={this.state.content}
            onChange={this.handleTextChange}
            placeholder="Thoughts?"
            type="text"
          />
          <button type="submit">Post</button>
        </form>
      );
    }
  }

export default CreateComment;