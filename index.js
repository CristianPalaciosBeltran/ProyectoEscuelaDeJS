const express = require("express");
const app = express();

const { config } = require("./config/index");

const moviesApi = require("./routes/movies");
const trailersApi = require("./routes/trailers");

//body parser
app.use(express.json());

moviesApi(app);
trailersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
