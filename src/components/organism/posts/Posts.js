import Post from "./Post";

const Posts = ({ posts, deletePost, updatePost }) => {
  return (
    <div className="flex flex-col w-full bg-gray-50 border border-gray-800 rounded-lg transition-all ">
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          deletePost={deletePost}
          updatePost={updatePost}
        />
      ))}
    </div>
  );
};

export default Posts;
