const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    return res.json(console.log({message: "connected to server already!"}))
})


app.listen(PORT, () => console.log(`server runing on ${PORT}`));