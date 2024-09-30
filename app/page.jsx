"use client";

import BlogItem from "@/components/BlogItem";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [blogs, setBlogs] = useState([]);

  let clk = false;

  const clicked = async () => {
    clk = true;
    const data = { email: email };
    await axios
      .post("/api/newUser", data)
      .then((res) => console.log(res.body))
      .catch((err) => console.log(err));
  };

  const items = async () => {
    try {
      const response = await axios.get("/api/uploadBlog");
      setBlogs(response.data);
      console.log(response.data); // Use response.data to access the response body
    } catch (err) {
      console.error(err); // Use console.error for better error visibility
    }
  };

  useEffect(() => {
    items();
  }, []);

  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className=" text-3xl font-medium">Latest Blogs</h1>
        <p className="mt-5 max-w-[740px] m-auto text-s">
          Read latest blogs, and write your own blog and make sure to
          subscribe!!!
        </p>
        <form action="" className="flex mt-5 gap-2 flex-col lg:flex-row">
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Email"
              required="required"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button type="submit" className="btn" onClick={clicked}>
            Subscribe
          </button>
        </form>
        <div
          role="alert"
          className={`alert alert-success w-auto -mt-3  ${
            email != "" && clk ? "block" : "hidden"
          }`}
        >
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
          <span>Your purchase has been confirmed!</span>
        </div>
      </div>

      {blogs.map((item) => (
        <div key={item.id} className="flex gap-5 items-center justify-center">
          <BlogItem title={item.title} desc={item.details} pic={item.image} />
        </div>
      ))}
    </>
  );
}
