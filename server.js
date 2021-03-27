const mongoose = require('mongoose');
const express = require('express');

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`HOLY COW YOU DID IT! ${PORT} BEING USED`);
})


//api routes
//workout schema finished
//db running