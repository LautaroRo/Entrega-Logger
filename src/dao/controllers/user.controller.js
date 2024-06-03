import usersModel from "../models/users.model.js";

class controler {
    constructor(){}

    createUser(user){
        usersModel.create(user)

        return user
    }

    async getUser(){
        const users = await usersModel.find()
        return users
    }

    async FindUser(email){
        const user = await usersModel.findOne({email: email})

        return user
    }
}

export default new controler()