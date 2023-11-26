const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
  const data = fs.readFileSync("./json/counter.json", "utf-8");
  let dataObj = JSON.parse(data);
  dataObj.main = dataObj.main + 1;
  fs.writeFileSync("./json/counter.json", JSON.stringify(dataObj, null, 3));
  res.send(
    `<h1>Main </h1>\ <a href ="/about">To about</a> \<h1>Число открытий страницы ${dataObj.main}</h1>`
  );
});
app.get("/about", (req, res) => {
  const data = fs.readFileSync("./json/counter.json", "utf-8");
  let dataObj = JSON.parse(data);
  dataObj.counter = dataObj.counter + 1;
  fs.writeFileSync("./json/counter.json", JSON.stringify(dataObj, null, 3));
  res.send(
    `<h1>About </h1> <a href ="/">To main</a> \<h1>Число открытий страницы ${dataObj.counter}</h1>`
  );
});



app.listen(3000);
