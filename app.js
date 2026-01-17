const req = require("express/lib/request");
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const { connectMongo } = require("./database/mongo.client");

const express = require("express");
const requestId = require("./middleware/requestId.middleware");
const errorMiddleware = require("./middleware/error.middleware");

require("dotenv").config();

const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestId);
app.use("/", routes)
app.use(errorMiddleware);

async function bootstrap() {

  await connectMongo()

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  })
}

bootstrap()


