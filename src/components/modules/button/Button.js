import classnames from "classnames";
import React from "react";

const Button = (props) => {
  const { label, onClick, color, type, ...rest } = props;
  return (
    <>
      <button
        className={classnames(
          "flex h-10 m-2 p-2 border rounded-md bg-black text-white align-middle",
          {
            "bg-red-400": color === "Error",
            "bg-blue-400": color === "Primary",
            "bg-green-400": color === "Success",
            "bg-yellow-400": color === "Warning",
          }
        )}
        onClick={onClick}
        type={type}
        {...rest}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
