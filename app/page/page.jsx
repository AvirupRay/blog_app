import React from "react";

function page() {
  async function newBlog(formData) {
    "use server";
    console.log("helloaa");
    const file = formData.get("image");
    console.log(file);
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    console.log(buffer);
  }

  return (
    <div className="flex flex-col justify-center items-center h-[80vh]">
      <form
        action={newBlog}
        className="flex flex-col gap-6 w-2/4 justify-center items-center"
      >
        <button className=" bg-base-content p-2 mb-5 text-base-300 text-xl rounded-lg w-full text-center font-mono font-extrabold">
          Add a new blog
        </button>
        {/* title */}
        <label className="input input-bordered flex items-center gap-2 w-full">
          Title
          <input
            type="text"
            className="grow"
            placeholder="Write your Blog Title"
          />
        </label>
        {/* description */}
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text">Description</span>
          </div>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Write in details about the blog"
          ></textarea>
          {/* image */}
        </label>
        <div className="flex w-full flex-col justify-center items-center border-opacity-50">
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Select an image</span>
            <input
              type="file"
              accept="image/*"
              name="image"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </label>
          <div className="divider">OR</div>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Paste image link</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </form>
    </div>
  );
}

export default page;
