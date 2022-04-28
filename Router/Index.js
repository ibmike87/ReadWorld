const express = require("express");
const path = require("path");
const router = express.Router();
const app = express();

app.use( express.static(path.join(__dirname, "../../client")) );

router.get("/", (req, res) => {
    const p = path.join(__dirname, "../../client/public/index.html");
    res.send(p);
});

module.exports = router;