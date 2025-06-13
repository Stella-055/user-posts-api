import express from "express"
import { PrismaClient } from "@prisma/client";
const app = express()
app.use(express.json())
const prisma = new PrismaClient

app.get("/",(_req,res)=>{
    res.send("<h1> Welcome user </h1>")
})

app.post("/users",async(req,res)=>{
try {
    const {firstName,lastName,emailAddress,username}= req.body
    const user = await prisma.users.create({data:{firstName,lastName,emailAddress,username}})
    res.status(200)
        .json(user)
} catch (error) {
    console.log(error)
}
})

app.get("/users",async(_req,res)=>{
    try {
        
        const user = await prisma.users.findMany({
            include: {
                posts: true
              } }
        )
        res.status(200)
            .json(user)
    } catch (error) {
        console.log(error)
    }
    })


 app.get("/users:id",async(req,res)=>{
        try {
           
            console.log(id)
            const user = await prisma.users.findFirst({
                where: { id },
                include: {
                    posts: true
                  } }
            )
            user? res.json(user):res.json({message:"something might have gone wrong"})
        } catch (error) {
            console.log(error)
        }
})    
const port= process.env.PORT || 5000
app.listen(port,()=>{

    console.log("server is up and running")
})