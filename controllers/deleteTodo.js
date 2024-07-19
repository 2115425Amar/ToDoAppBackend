//import the model
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        //create a new Todo obj and insert in db
         await Todo.findByIdAndDelete(id);
        //send a success response with json flag
        res.status(200).json({
            success:true,
            message:'Todo Deleted Successfully'
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