const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
    res.send({test : "helloWorld"});
});

// router.get("/", (req, res) => {
//     const p = path.join(__dirname, "../client/public/index.html");
//     res.send(p);
// });


module.exports = router;