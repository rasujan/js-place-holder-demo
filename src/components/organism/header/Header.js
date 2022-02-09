import React from "react";
import { Button } from "../../modules";

const Header = ({ title, toggleAddPost, showAddPostState }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="text-lg"> {title}</h1>

      {showAddPostState ? (
        <Button label="Close" onClick={toggleAddPost} color="Error" />
      ) : (
        <Button label="Add Post" onClick={toggleAddPost} color="Primary" />
      )}
    </div>
  );
};

export default Header;
