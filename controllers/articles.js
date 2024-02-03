// 1. this function return all articles
const articleController= require("../models/articleSchema")

const getAllArticles = (req, res) => {
  const {title,description ,author  } =req.body 


const newArticle =new articleController({title,description ,
  author
  })


  newArticle
  .save().then (result =>{

      res.status(201).json({
          success:true,
          message: "Article created",
          article :"the new article you created",
          result:result
      })

  }).catch(err=>{
      console.log(err);
      res.status(500).json({
          success: false,
          message: "Server Error",
          err: "error message",
      });
  });};



module.exports = {
  getAllArticles, 
};
