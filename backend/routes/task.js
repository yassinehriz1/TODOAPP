const router = require("express").Router();

const Task = require("../models/task.model")

router.get("/",(req,res)=>{
    Task.find()
    .then(tasks => res.json(tasks))
    .catch(err => res.status(400).json("Error : " + err))
})
router.post("/",(req,res)=>{
    const newTask = new Task({
        title:req.body.title
    })
    newTask.save().then(task => res.json(task))
})
router.delete("/:id",(req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Task deleted.'))
    .catch((err)=> res.status(400).json('Error : ' + err))
})
module.exports = router;