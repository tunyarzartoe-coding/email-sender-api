const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const { router } = require("./routes/mail-sender.route");
require("dotenv").config();

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "5mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "5mb",
    extended: true,
  })
);

app.use(router);

// app.use("/",(req,res)=>{
//     res.send('hello world!')
// })

//port 
const port = process.env.PORT

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})