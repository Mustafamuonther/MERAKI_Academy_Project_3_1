const express = require("express");
const { getAllArticles ,
      createNewArticle,
      getArticlesByAuthor,
      getArticleById,
} = require("../controllers/articles");

// create articles router
const articlesRouter = express.Router();

// endpoint for the GET request
articlesRouter.get("/", getAllArticles);
articlesRouter.post("/articles",createNewArticle)
articlesRouter.get("/search_1",getArticlesByAuthor );
articlesRouter.get("/search_2/:id",getArticleById );
module.exports = articlesRouter;
