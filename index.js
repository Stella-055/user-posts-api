import express from "express"
import { PrismaClient } from "@prisma/client";
const app = express()
app.use(express.json())
const prisma = new PrismaClient
const port= process.env.PORT || 5000
app.listen(port,()=>{

    console.log("server is up and running")
})