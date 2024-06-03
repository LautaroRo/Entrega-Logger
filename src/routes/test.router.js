import { Router } from "express";
import { createUsers } from "../utils/faker.js";
import userController from "../dao/controllers/user.controller.js";

const testRouter = Router()


testRouter.get("/", async (req,res) => {
    const result =await  userController.getUser()

    return res.send(result)
})

testRouter.post("/", async (req,res) => {
    const result = createUsers()

    const create = await userController.createUser(result)
    return res.send(create)
})

export default testRouter