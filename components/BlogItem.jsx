import React from "react";

const BlogItem = (prop) => {
  return (
    <div className=" flex flex-col items-center justify-center w-1/4 border border-base-content mx-auto mt-5 cursor-pointer">
      <img src={prop.pic} alt="" />
      <h1 className=" text-2xl font-semibold font-mono">{prop.title}</h1>
      <p>{prop.desc}</p>
    </div>
  );
};

export default BlogItem;
