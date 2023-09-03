import React, { useState, useEffect } from "react";

function PostList({ comments, onPostClick }) {
  const [uniquePosts, setUniquePosts] = useState([]);

  useEffect(() => {
    const uniquePosts = Array.from(
      new Set(comments.map((comment) => comment.postId))
    );
    setUniquePosts(uniquePosts);
  }, [comments]);

  return (
    <div className="left-side">
      <h2>Posts</h2>
      <ul>
        {uniquePosts.map((postId) => (
          <li key={postId} onClick={() => onPostClick(postId)}>
            Post ID: {postId}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
