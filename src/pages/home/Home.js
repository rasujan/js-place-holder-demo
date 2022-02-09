import React, { useState, useEffect } from "react";
import axios from "../../utils/BaseAPI";

// import { Button, InputField } from "../../components/modules";
import { Posts, Header, AddPost } from "../../components/organism";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [showAddPost, setShowAddPost] = useState(false);

  const [call, setCall] = useState(false);

  useEffect(() => {
    getPosts();
  }, [call]);

  const toggleAddPost = () => {
    setShowAddPost(!showAddPost);
  };

  // Get All Post - Method Get
  const getPosts = async () => {
    await axios
      .get("/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // Add Post - Method Post
  const addPost = async (post) => {
    await axios
      .post("/posts", post)
      .then((res) => {
        alert("Posted Added.");
        toggleAddPost();
      })
      .catch((err) => {
        alert(err.response.data);
        toggleAddPost();
      });
    setCall(!call);
  };

  // Delete Post - Method - Delete
  const deletePost = async (id) => {
    await axios
      .delete(`/posts/${id}`)
      .then((res) => alert("Post Deleted"))
      .catch();
    setCall(!call);
  };

  // Update Post - Method - PUT
  const updatePost = async (post) => {
    await axios
      .put(`/posts/${post.id}`, post)
      .then((res) => alert("Post Updated"))
      .catch();
    setCall(!call);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container mx-auto max-w-screen-sm">
      <Header
        title="JSON DEMO"
        toggleAddPost={toggleAddPost}
        showAddPostState={showAddPost}
      />
      {showAddPost && <AddPost onAdd={addPost} />}
      <Posts posts={posts} deletePost={deletePost} updatePost={updatePost} />
    </div>
  );
};

export default Home;
