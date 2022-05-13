const express = require('express')
const app = express();
const MensRanking = require("../src/models/mens");
const router = require("./routers/men")

const PORT = process.env.port || 5000;
require("../src/db/conn")

app.use(router)

app.use(express.json())


app.listen(PORT, () => {
    console.log(`Connection is live at port number ${PORT}`);
})