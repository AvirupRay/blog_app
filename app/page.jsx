'use client'

import BlogItem from "@/components/BlogItem";
import Header from "@/components/Header";
import axios from "axios";
import { useEffect, useState } from "react";



export default function Home() {

  const [email, setEmail] = useState("")
  const [blogs, setBlogs] = useState([]);

  const clicked=async()=>{
    const data={email:email}
    await axios.post("/api/newUser",data)
    .then((res)=>console.log(res.body))
    .catch((err)=>console.log(err))
  }

  const items=async()=>{
    try {
        const response = await axios.get("/api/uploadBlog");
        setBlogs(response.data);
        console.log(response.data); // Use response.data to access the response body
      } catch (err) {
        console.error(err); // Use console.error for better error visibility
      }
  }
  
  useEffect(() => {
    items()
  }, [])
  



  return (
    <>
    <Header/>

    <div className="flex flex-col items-center justify-center gap5">
      <h1 className=" text-3xl font-medium">Latest Blogs</h1>
      <p className="mt-5 max-w-[740px] m-auto text-s">Read latest blogs, and write your own blog and make sure to subscribe!!!</p>
      <form action="" className=" border border-white w-auto mx-auto mt-5 shadow-[-4px_4px_0px_#fff]">
        <input type="email" placeholder="Enter your Email" className="p-2 bg-[#141414] outline-none" onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit" className="p-2 border-l active:bg-white active:text-black" onClick={clicked}>Subscribe</button>
      </form>
    </div>


    {blogs.map((item) => (
        <div key={item.id} className="flex gap-5 items-center justify-center">
          <BlogItem title={item.title} desc={item.details} pic={item.image}/>
        </div>
    ))}

    <button className="btn btn-outline btn-secondary">hello moto</button>
    
    


    </>
  );
}
