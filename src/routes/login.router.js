import { Router } from "express";
import userController from "../dao/controllers/user.controller.js";

const loginRouter = Router()


loginRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email, !password) {

            req.logger.error("Error no se enviaron los parametros suficientes en el login")
            return res.json({ error: "No se enviaron los parametros" })
        }

        const findEmail = await userController.FindUser(email)

        if (!findEmail) {
            req.logger.error("Error no se encontro ningun usuario con ese email")
            return res.json({ error: "No se encontro ningun usuario" })
        }

        if (findEmail.password !== password){

            req.logger.error("Error el password es incorrecto")
            return res.json({ error: "Contraseña incorrecta" })
        } 


        return res.json({ message: `Bienvenido ${findEmail.first_name}`, status: "Logeado con exito" })

    } catch (error) {
        req.logger.error("Error")
        res.send({message: "Error al logearse"})
    }
})

export default loginRouter