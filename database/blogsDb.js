import mysql from "mysql2/promise"
const blogConnectDb=async()=>{
    try{
        const conInst=mysql.createConnection({
            host: process.env.dbHost,
            user: process.env.dbUser,
            password: process.env.dbPass,
            database: process.env.dbName,
        })

        console.log("connected")
        return conInst
    }catch(err){
        console.log(err)
        throw new Error("Not connected")
    }
}

export default blogConnectDb;