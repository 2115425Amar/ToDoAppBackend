//import the model
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        //extract title and description from request body
        const {title,description}=req.body;
        //create a new Todo obj and insert in db
        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updateAt:Date.now()},

        );
        //send a success response with json flag
        res.status(200).json({
            success:true,
            data:todo,
            message:'Updated Successfully'
        });
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}