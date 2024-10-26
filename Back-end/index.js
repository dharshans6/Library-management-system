const express=require('express')
const  mongoose =require('mongoose')
const cors =require('cors')
const MemberModel=require('./Models/Member')
const BooksModel=require('./Models/Books')

const app=express()
app.use(cors())
app.use(express.json())
app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/Members")
.then(()=>console.log('connected'))
.catch(err => console.log(err))


app.get('/member',(req,res)=>{
    MemberModel.find({})
    .then(member => res.json(member))
    .catch(err => res.json(err))
})



app.get('/members/getmember/:id',(req,res)=>{
    const id=req.params.id;
    MemberModel.findById({_id:id})
    .then(member => res.json(member))
    .catch(err => res.json(err))
})

// app.delete('/members/deletemembers/:id',(req,res)=>{
//     console.log('cooons');
//     const id=req.params.id;
//     MemberModel.findByIdAndDelete({_id:id})
//     .then(res => res.json(res))
//     .catch(err => res.json(err))
// })


app.delete('/members/deletemembers/:id', (req, res) => {
    console.log('DELETE request received for ID:', req.params.id);  // Logging
    const id = req.params.id;
    MemberModel.findByIdAndDelete(id)
      .then(() => res.json({ message: 'Member deleted successfully' }))
      .catch(err => res.json(err));
  });
  

app.put('/MemberEdit/:id',(req,res)=>{
    const id=req.params.id;
    MemberModel.findByIdAndUpdate({_id:id},
        {
        name:req.body.name,
        email:req.body.email,
        age:req.body.age
        })
    .then(member => res.json(member))
    .catch(err => res.json(err))
})

app.post("/MemberCreate",(req,res)=>{
    MemberModel.create(req.body)
    .then(member_details => res.json(member_details))
    .catch(err => res.json(err))
})




// app.delete('/deletemember/:id', (req, res) => {
//     const id = req.params.id;
//     MemberModel.findByIdAndDelete({_id: id})
//       .then(() => res.json({ message: 'Member deleted successfully' }))
//       .catch(err => res.json(err));
//   });
  

// app.delete('/deletemember/:id', (req, res) => {
//     const id = req.params.id;
//     MemberModel.findByIdAndDelete({_id: id})
//       .then(() => res.json({ message: 'Member deleted successfully' }))
//       .catch(err => res.json(err));
// })  


/////////////////////////////////////// backend routing for books /////////////////////////////////

// const multer=require('multer')
// const path=require('path')

// const storage = multer.diskStorage({
//     destination:(req, file, cb) =>{
//       cb(null, "uploads/")
//     },
//     filename:(req, file, cb)=> {
//       cb(null,file.fieldname +"_"+ Date.now()+path.extname(file.originalname))
//     }
//   })
  
//   const upload = multer({ storage: storage })


// app.post("/createbooks",upload.single("file"),(req,res) =>{
//     BooksModel.create(req.body)
//     .then(book =>res.json(book))
//     .catch(err =>res.json(err))
// })

// Font-end\src\backendimages

const multer = require('multer');
const path = require('path');

// Configure multer for file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../Font-end/src/backendimages');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname);
    cb(null, file.fieldname + '_' + uniqueSuffix);
  }
});
const upload = multer({ storage: storage });

// Define book schema and model

app.use(express.urlencoded({ extended: true }));

// Route to handle book creation with file upload
app.post('/createbooks', upload.single('image'), async (req, res) => {
  const { bookname, description, price } = req.body;
  const filePath = req.file ? req.file.path : null; // Ensure file path is extracted

  if (!bookname || !description || !price || !filePath) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newBook = new BooksModel({
      bookname,
      description,
      price,
      image: filePath // Save the file path, not the file object
    });
    const savedBook = await newBook.save();
    res.json(savedBook);
  } catch (err) {
    console.error('Server Error: ', err);
    res.status(500).json({ error: err.message });
  }
});


app.get('/getbooks', async (req, res) => {
  try {
    const books = await BooksModel.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




















app.listen(3001,()=>{
    console.log('server is runningss');
})


