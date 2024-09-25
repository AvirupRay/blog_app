import connectDb from "@/database/db"
export const GET=async()=>{
    const db=await connectDb()
    const [emails] = await db.query("select * from users;")
    return Response.json(emails);
}