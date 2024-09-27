import connectDb from "@/database/blogsDb"
export const GET=async()=>{
    const db=await connectDb()
    const [item] = await db.query("select * from blogdet;")
    return Response.json(item);
}