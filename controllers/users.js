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

module.exports = { register };



