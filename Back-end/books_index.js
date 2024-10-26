const express= require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const booksModel=require('./Models/Books')


const app=express()
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/books")
.then(() => console.log("books connected"))
.catch(err =>console.log(err))


app.listen(3001,()=>{
    console.log('server is runningss books');
})

