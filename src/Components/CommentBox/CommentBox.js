import React, { Component } from 'react';
import PropTypes from "prop-types";
import Post from './Post/Post';
import Comment from './Comment/Comment';
import CreateComment from './CreateComment/CreateComment';

class CommentBox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        comments: this.props.comments
      };
      this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
    }
    handleCommentSubmit(comment) {
      const comments = this.state.comments;
      comment.id = Date.now();
      const newComments = comments.concat([comment]);
      this.setState({
        comments: newComments
      });
    }
    render() {
      return (
        <div className="commentBox">
          <Post
            id={this.props.post.id}
            content={this.props.post.content}
            user={this.props.post.user}
          />
          {this.state.comments.map(function(comment) {
            return (
              <Comment
                key={comment.id}
                content={comment.content}
                user={comment.user}
              />
            );
          })}
          <CreateComment onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  }

  CommentBox.propTypes = {
    post: PropTypes.object,
    comments: PropTypes.arrayOf(PropTypes.object)
  };

export default CommentBox;