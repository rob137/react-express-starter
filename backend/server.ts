const express = require("express");
const cors = require("cors");

const app = express();
const port = 3007;
app.use(cors());

app.get("/", (req, res) => res.send("hello world"));

app.listen(port, () => console.log(`Server is listening on port ${port}`));
