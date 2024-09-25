import connectDb from "@/database/db"

export const POST=async(req)=>{
    const db=await connectDb()
    
    const data=await req.json()
    const email=data.email
    const qry=db.query(`insert into users(email) values('${email}');`)
    console.log(qry)
    return Response.json(data)
}