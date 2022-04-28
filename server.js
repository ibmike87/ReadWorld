const express = require("express");
const app = express();
const test = require("./Router/test");
const path = require("path");
const index = require("./Router/index");

// const http = require("http").createServer(app);
// http.listen(port, () => console.log(`${port}`));


app.use("/api", test);
app.use("/index", index);


const port = 5000;      //노드서버의 포트넘버
app.listen(port, () => console.log(`${port}`));
