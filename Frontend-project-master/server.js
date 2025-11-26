const fs = require("fs");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

var jsonParser = bodyParser.json();

app.get("/", (request, response) => {
    response.sendFile(__dirname + "/index.html");

})

app.post("/", (request, response) => {
    response.send("app.post")
    response.sendFile(__dirname + "/index.html");

})

app.get("/blog", (request, response) => {
    response.sendFile(__dirname + "/public/blog.html");

})

app.post("/", (request, response) => {
    response.send("app.post")
    response.sendFile(__dirname + "/public/blog.html");

})
app.post("/blog/comment", jsonParser, (request, response) => {
    var comments = fs.readFileSync("./comments.json", "utf-8");
    var commentsArray = [];
    try {
        commentsArray = JSON.parse(comments);
    } catch (jsonError) {
        /* Ignore missing JSON */
    }
    console.log(commentsArray);
    var comment = request.body;
    // TODO add timestamp
    commentsArray.push(comment);
    fs.writeFile("comments.json", JSON.stringify(commentsArray), function(err) {
        if (err) {
            console.log(err);
        }
    });

    response.send("success!");
})

app.get("/blog/comment", (request, response) => {
    var comments = fs.readFileSync("./comments.json", "utf-8");
    var commentsArray = [];
    try {
        commentsArray = JSON.parse(comments);
    } catch (jsonError) {
        /* Ignore missing JSON */
    }

    // TODO send only the latest 5 comments
    response.send(commentsArray);
})

app.listen(3000, function() {
    console.log('app listening on port 3000!')
})