import { Router } from "express";
import userController from "../dao/controllers/user.controller.js";
const registerRouter = Router()

registerRouter.post("/", async (req,res) => {
    
    const {first_name, last_name, number, email,age,role, password} = req.body

    if(!first_name || !last_name || !number || !email ||!age || !role || !password || role !== "Admin" && role !== "Usuario") {
        req.logger.error("Error no se enviaron los parametros suficientes en el register")
        return res.json({error: "No se cumple con las condiciones"})
    }

    const obj = {
        first_name,
        last_name,
        number,
        age,
        email,
        role,
        password
    }
    await userController.createUser(obj)

    return res.json({message:"Usuario creado con exito"})
})

export default registerRouter