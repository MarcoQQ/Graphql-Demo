const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

//allow cross-origin access
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

mongoose.connect("mongodb://mongo/test");
mongoose.connection.once("open", () => {
  console.log(11);
});

app.listen(4000, () => {
  console.log("listening");
});
