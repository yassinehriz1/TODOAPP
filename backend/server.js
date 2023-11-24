const express = require("express")
const mongoose = require("mongoose")
const app = express()
const cors = require("cors")

require('dotenv').config()
const port = 5000;
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.ATLAS_URI)
mongoose.connection.once('open',()=>{
    console.log('Connected to MongoDB 🌿')
})
const taskRouter = require("./routes/task")
app.use('/',taskRouter)
app.listen(port , ()=>{
    console.log(`App listening to port ${port}`)
})