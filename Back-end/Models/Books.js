
const mongoose = require('mongoose');

const bookSchema =new mongoose.Schema({
    bookname:String,
    description:String,
    price:Number,
    image:String
  })
  
  const bookmodel =mongoose.model('books_details',bookSchema)
  module.exports=bookmodel