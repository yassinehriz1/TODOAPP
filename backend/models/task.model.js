const mongoose = require("mongoose")

let taskSchema = new mongoose.Schema({
    title:String
})

module.exports = mongoose.model('Task',taskSchema)