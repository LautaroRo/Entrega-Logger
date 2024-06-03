import mongoose from "mongoose"

const {Schema} = mongoose


const collection = "Users"


const schema = new Schema({

    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    number:{
        type: Number,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})


const usersModel = mongoose.model(collection, schema)

export default usersModel