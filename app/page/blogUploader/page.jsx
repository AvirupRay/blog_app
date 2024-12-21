"use client";

import React, { useState, useEffect } from "react";
import axios from "axios"; // Make sure to import axios
import ImageUploader from "@/components/ImageUploader";
import useStore from "@/store/store";

function Page() {
  const { myString, setString } = useStore();
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [succ, setSucc] = useState("");
  // const [image, setImage] = useState(null); // State to store the image file

  async function newBlog(e) {
    e.preventDefault(); // Prevent default form submission
    if (myString === "") return setError("Please upload an image");
    const formData = {
      email: email,
      title: title,
      desc: desc,
      img: myString, // Add the image URL or file reference
    };
    await axios
      .post("/api/uploadBlog", formData)
      .then((res) => {
        setSucc("Uploaded");
        setString("");
        setTitle("");
        setDesc("");
        setEmail("");
      })
      .catch((err) =>
        setError("Error: Please subscribe with your mail before uploading blog")
      );
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setSucc(""); // Hide the error message after the timeout
    }, 5000);

    return () => clearTimeout(timer);
  }, [succ]);
  useEffect(() => {
    console.log(error);

    const timer = setTimeout(() => {
      setError(""); // Hide the error message after the timeout
    }, 5000);

    return () => clearTimeout(timer);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      {/* if error */}
      {error ? (
        <div role="alert" className="alert alert-error w-1/2 mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className=" font-semibold">{error}</span>
        </div>
      ) : null}
      {succ ? (
        <div role="alert" className="alert alert-success w-1/2 mb-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{succ}</span>
        </div>
      ) : null}
      {/*  */}
      <form
        onSubmit={newBlog} // Use onSubmit for the form
        className="flex flex-col gap-6 w-2/4 justify-center items-center"
      >
        <button className=" bg-base-content p-2 mb-5 text-base-300 text-xl rounded-lg w-full text-center font-mono font-extrabold">
          Add a new blog
        </button>
        {/* Email */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          Email
          <input
            type="email"
            className="grow"
            placeholder="Write your Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update title state
            required
          />
        </label>

        {/* Title */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Write your Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)} // Update title state
            required
          />
        </label>
        {/* Description */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write in details about the blog"
            value={desc}
            onChange={(e) => setDesc(e.target.value)} // Update description state
            required
          ></textarea>
          {/* Image */}
        </label>
        <div className="flex w-full flex-col justify-center items-center border-opacity-50">
          <ImageUploader />
          <img src={myString} alt="" className="w-1/4" />
        </div>
      </form>
    </div>
  );
}

export default Page;
