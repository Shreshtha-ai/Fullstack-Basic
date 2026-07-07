import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        content:{
            type: String,
            required: true,
        },
        complete:{
            type: Boolean,
            default: false,
        },
        createdBy:{
            type: mongoose.Schema.Types.ObjectId, // it is a special type of storing id
            ref: "User" // it is the name of the model to which we are referring
        },
        subTodos:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "SubTodo"
            }
        ] // array of SubTodo


    },{timestamps: true})

export const Todo = mongoose.model("Todo", todoSchema)