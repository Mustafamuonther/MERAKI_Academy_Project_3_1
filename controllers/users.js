const usreModel =require("../models/userschema")

const register = (req, res) => {
    
    
    const { firstName, lastName, age, country,
        email, password } = req.body
    
    
    
    
        const newUser = new usreModel({
        firstName, lastName, age, country,
        email, password
    })


    newUser
        .save().then(result => {

            res.status(201).json({
                success: true,
                message: "Account Created Successfully",
                author: result,
            })

        }).catch(err => {
            console.log(err);
            res.status(409).json({
                success: false,
                message: "The email already exists"
            });
        });
};


const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
  console.log( { email, password } )
      const user = await usreModel.findOne({ email, password });
      if (user) {
        res.status(200).json({ success: true, message: 'Valid login credentials' });
      } else {
        res.status(401).json({ success: false, message: 'Invalid login credentials' });
      }
    } catch (error) {
      res.status(500).json({ success: false, message: 'Error during login' });
    }
  };


module.exports = { register ,loginUser};



