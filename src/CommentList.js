import React from "react";

function CommentList({ comments }) {
  return (
    <div className="right-side">
      <h2>Comments</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            {comment.name}: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;
