const express = require("express");
const cors = require("cors");
const mongoose=require('mongoose')
const usersRouter=require('./routes/users')
const exercisesRouter=require('./routes/exercises')

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const mongoose_url=process.env.MONGODB_URL
mongoose.connect(mongoose_url,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
})
const connection=mongoose.connection
connection.once('open',()=>{  
  console.log("MongoDB database connection established successfully");
})


app.use(cors());
app.use(express.json());
app.use('/exercises',exercisesRouter)
app.use('/users',usersRouter)




app.listen(port, () => {
  console.log("Server is up and running on port ", port);
});
