'use client'

import BlogItem from "@/components/BlogItem";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Header/>

    <div className="flex flex-col items-center justify-center gap5">
      <h1 className=" text-3xl font-medium">Latest Blogs</h1>
      <p className="mt-5 max-w-[740px] m-auto text-s">Read latest blogs, and write your own blog and make sure to subscribe!!!</p>
      <form action="" className=" border border-white w-auto mx-auto mt-5 shadow-[-4px_4px_0px_#fff]">
        <input type="email" placeholder="Enter your Email" className="p-2 bg-[#141414] outline-none"/>
        <button type="submit" className="p-2 border-l active:bg-white active:text-black">Subscribe</button>
      </form>
    </div>

    <BlogItem/>


    </>
  );
}
