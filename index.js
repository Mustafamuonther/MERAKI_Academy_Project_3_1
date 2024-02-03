const express = require("express");
const app = express();

// import database connection
const datab = require("./models/db")
// import articles Router
const articlesRouter = require("./routes/articles");
const usersRouter=require("./routes/usersRouter")
app.use(express.json());

// articles Router
app.use("/articles", articlesRouter);
app.use("/users",usersRouter)
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`SERVER LISTENING AT http://localhost:${PORT}`);
});
