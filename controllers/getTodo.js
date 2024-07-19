//import the model
const Todo = require("../models/Todo");

//define route handler
exports.getTodo = async(req,res)=>{
    try{
       const todos = await Todo.find({});
       //response
       res.status(200)
       .json({
        success:true,
        data:todos,
        message:"Entire todo data is fetched",
       })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:err.message,
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        //extract todoitem on the basis of id
        const id=req.params.id;
       const todo = await Todo.findById({_id:id});
        
       //not found 
       if(!data){
        return res.status(404).json({
            success:false,
            message:"No Data Found With given Id"
        })
       }
       //found
       res.status(200)
       .json({
        success:true,
        data:todo,
        message:` todo ${id} data is fetched`,
       })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:err.message,
        })
    }
}