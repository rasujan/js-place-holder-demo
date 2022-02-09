import React, { useState } from "react";

import { Button, InputField } from "../../modules";

const AddPost = ({ onAdd }) => {
  const initalValue = {
    id: +Date.now(),
    user: 12,
    title: "",
    body: "",
  };
  const [formData, setFormData] = useState(initalValue);

  const handleChange = (e) => {
    e.persist();
    setFormData((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();

    onAdd(formData);
  }

  return (
    <div className="flex flex-col w-full mb-2 shadow-lg bg-gray-50 border border-gray-800 rounded-lg ">
      <form onSubmit={handleSubmit}>
        <InputField
          name="title"
          label="Title"
          value={formData.title}
          onChange={handleChange}
        />

        <InputField
          name="body"
          label="Body"
          value={formData.body}
          onChange={handleChange}
        />

        <Button label="Post" type="submit" color="Success" />
      </form>
    </div>
  );
};

export default AddPost;
