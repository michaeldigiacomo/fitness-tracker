const mongoose = require('mongoose');
const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api"))
app.use(require("./routes/html"))

app.listen(PORT, () => {
    console.log(`Running on ${PORT}`);
})


//api routes
//workout schema finished
//db running