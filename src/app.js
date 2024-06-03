import express from "express"
import mongoose from "mongoose"
import loginRouter from "./routes/login.router.js"
import registerRouter from "./routes/register.router.js"
import testRouter from "./routes/test.router.js"
import cluster from "cluster"
import { cpus } from "os"
import { addLoger } from "./logger/logger.js"


const numbersCops = cpus().length
if (cluster.isPrimary) {
    console.log("Proces primario")
    for (let i = 0; numbersCops > i; i++) {
        cluster.fork()
    }
    cluster.on("message", (message) => {
        console.log("mensaje desde worker: " + message.process.pid)
    })
} else {

    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(addLoger)
    app.get("/", (req,res) => {
        process.send({
            pid:process.pid,
            message:"Peticion atendidad por el proceso worker"
        })
        res.send({status: "succes"})
    })

    mongoose.connect("mongodb+srv://Lautaro:Ors6E5ixvF0N1pVh@cluster0.beeo5kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")



    app.use("/api/sessions/login", loginRouter)
    app.use("/api/sessions/register", registerRouter)
    app.use("/api/test/user", testRouter)
    app.listen(3000, () => console.log("corriendo"))
}