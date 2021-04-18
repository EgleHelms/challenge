//packages
const express = require("express");
const cors = require("cors");
const { passwordArrayGenerator } = require("./controller/controller.js");

const app = express();

//middleware
app.use(express.json({ extended: true })); //allows nested object parsing in the query string
app.use(express.urlencoded({ extended: true }));  //allows body parsing with nexted objects
app.use(cors());  //Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. 

const PORT = process.env.PORT || 5000;

app.get("/", passwordArrayGenerator);

app.listen(PORT, () =>{
    console.log(`Server running on http://localhost:${PORT}`)});
