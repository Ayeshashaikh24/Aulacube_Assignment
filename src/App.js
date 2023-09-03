import React, { useState, useEffect } from "react";
import "./App.css";
import PostList from "./PostList";
import CommentList from "./CommentList";

function App() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [postIdFilter, setPostIdFilter] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, []);

  useEffect(() => {
    if (!postIdFilter) {
      setFilteredComments([]);
    } else {
      const filteredComments = comments.filter(
        (comment) => comment.postId === parseInt(postIdFilter)
      );
      setFilteredComments(filteredComments);
    }
  }, [postIdFilter, comments]);

  const handlePostClick = (postId) => {
    setPostIdFilter(postId);
  };

  return (
    <div className="container">
      <PostList comments={comments} onPostClick={handlePostClick} />
      <CommentList
        comments={filteredComments.length > 0 ? filteredComments : comments}
      />
    </div>
  );
}

export default App;
