var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });