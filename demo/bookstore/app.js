const express = require("express");
const mongoose = require("mongoose");
const indextRouter = require("./route/index");
const bookRouter = require("./route/book");

mongoose.connect(
    "mongodb://localhost/sample2", { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

const app = express();
app.set("views, ejs ");
app.set("views, path.join(__dirname, 'views') ");
app.use("/", indextRouter);
app.use("/books", bookRouter);
app.use('', (req, res, next) => {
    res.send("page Not  Found");
});
app.use('', (err, req, res, next) => {
    res.send(err);
});
app.listen(2300, () => {
    console.log('Server is running on port 2300');
});