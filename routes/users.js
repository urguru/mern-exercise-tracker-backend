const router = require("express").Router();
const User = require("../models/user.model");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users)
  } catch (e) {
      res.status(400).send(e)
  }
});

router.post('/add',async (req,res)=>{
    const username=req.body.username;
   

    try{
        const user = await User.findOne({ username });
        if (user) {
          return res.status(400).send({error: "The username already exists" });
        }
        const newUser = new User({
          username,
        });
        await newUser.save()
        res.send({res:"User has been added"})
    }
    catch(e){
        res.status(400).send(e)
    }
})

module.exports=router;