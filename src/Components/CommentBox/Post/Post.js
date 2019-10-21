import React, { Component } from 'react';
import PropTypes from "prop-types";


class Post extends Component {
    render() {
      return (
        <div className="post">
          <h2 className="postAuthor">{this.props.user}</h2>
          <span className="postBody">{this.props.content}</span>
          {this.props.children}
        </div>
      );
    }
  }

  Post.propTypes = {
    user: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  };

export default Post;