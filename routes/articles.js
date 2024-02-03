const express = require("express");
const { getAllArticles ,} = require("../controllers/articles");

// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);
articlesRouter.post("/articles",getAllArticles)


module.exports = articlesRouter;
