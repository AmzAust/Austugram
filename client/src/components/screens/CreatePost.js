import React from "react";

const CreatePost = () => {
  return (
    <div
      className="card input-field"
      style={{
        margin: "30px auto",
        maxWidth: "400px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h2>Create Your Post</h2>
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className="btn #81d4fa light-blue lighten-3">
          <span>Upload Image</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light #81d4fa light-blue lighten-3"
        type="submit"
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
