const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false

});

const apiRoutes = require("./routes/api.js");
app.use(apiRoutes)
require("./routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on localhost:${PORT}`);
});
