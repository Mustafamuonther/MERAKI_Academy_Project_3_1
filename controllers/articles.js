// 1. this function return all articles
const articleController = require("../models/articleSchema");

const getAllArticles = async (req, res) => {
  try {
    const articles = await articleController.find();
    res.status(200).json({
      success: true,
      message: 'All the articles',
      articles,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      err: error.message,
    });
  }
};

const createNewArticle = async (req, res) => {
  const { title, description, author } = req.body;

  try {
    const newArticle = new articleController({ title, description, author });

    const result = await newArticle.save();

    res.status(201).json({
      success: true,
      message: 'Article created',
      article: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      err: err.message,
    });
  }
};

const getArticlesByAuthor = async (req, res) => {
  const authorId = req.query.author;

  try {
    const articles = await articleController.find({ author: authorId });

    if (articles.length > 0) {
      res.status(200).json({
        success: true,
        message: `All the articles for the author: ${authorId}`,
        articles,
      });
    } else {
      res.status(404).json({
        success: false,
        message: `The author => ${authorId} has no articles`,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Server Error',
      err: error.message,
    });
  }
};

module.exports = {
  getAllArticles,
  createNewArticle,
  getArticlesByAuthor
};