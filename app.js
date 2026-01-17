const req = require("express/lib/request");
const routes = require("./routes/index");

const express = require("express");


const app = express()
app.use("/", routes)


app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
})