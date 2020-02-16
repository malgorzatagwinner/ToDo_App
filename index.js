var express = require("express");
var bodyParser = require("body-parser");
var app = express();
let zadanie = new (require('./zadanie'))();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
//render css files
app.use(express.static("public"));

//post route for adding new task 
app.post("/addtask", function(req, res) {
    var newTask = req.body.newtask;
    zadanie.dodaj(newTask);
    res.redirect("/");
});

app.post("/removetask", function(req, res) {
    var completeTask = req.body.check;
    zadanie.usun(completeTask)
    res.redirect("/");
});

app.post("/unchecktask", function(req, res) {
    var completeTask = req.body.check;
    zadanie.przywroc(completeTask);
    res.redirect("/");
});

app.get("/cleartask", function(req, res) {
	zadanie.wyczysc();
	res.redirect("/");
});
//render the ejs and display added task, completed task
app.get("/", function(req, res) {
    res.render("app", { task: zadanie.task, complete: zadanie.complete });
});

//set app to listen on port 3000
app.listen(3000, function() {
    console.log("server is running on port 3000");
});
