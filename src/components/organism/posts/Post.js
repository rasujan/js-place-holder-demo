import { useState } from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import classNames from "classnames";

import { UpdatePost } from "../../organism";

const Post = ({ post, deletePost, updatePost }) => {
  const [showUpdatePost, setShowUpdatePost] = useState(false);
  console.log(
    "🚀 ~ file: Post.js ~ line 9 ~ Post ~ showUpdatePost",
    showUpdatePost
  );

  return (
    <div
      className={classNames(
        "flex m-1 p-2 w-full  justify-between items-center  shadow-md"
      )}
    >
      {showUpdatePost ? (
        <UpdatePost
          onUpdate={updatePost}
          originalData={post}
          onCancel={() => {
            console.log("he");
            setShowUpdatePost(false);
          }}
          setShowUpdatePost={setShowUpdatePost}
        />
      ) : (
        <div>
          <div className="w-full overflow-auto">
            <h3 className="text-lg"> {post.title}</h3>
            <p className="">{post.body}</p>
          </div>

          <div className="flex">
            <div className="w-9 h-9 m-2 border-black border-1 rounded-full shadow-md">
              <FiTrash2
                className="text-red-600 w-8 h-8 cursor-pointer"
                onClick={() => deletePost(post.id)}
              />
            </div>

            <div className="w-9 h-9 m-2 border-black border-1 rounded-full shadow-md">
              <FiEdit
                className="text-blue-600 w-8 h-8 cursor-pointer"
                onClick={() => setShowUpdatePost(true)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
