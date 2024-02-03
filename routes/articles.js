const express = require("express");
const { getAllArticles ,createNewArticle} = require("../controllers/articles");

// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);
articlesRouter.post("/articles",createNewArticle)


module.exports = articlesRouter;
