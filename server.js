const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
const morgan = require('morgan');
const db = require("./models");

const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.static("public"));
app.use(morgan('tiny'));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/api", require('./routes/apiRoutes'))
app.use(require('./routes/htmlRoutes'));
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);



app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });