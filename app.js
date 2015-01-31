var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var csv = require('ya-csv');


var app = express();
app.use(express.static(path.join(__dirname,"")));

app.use(bodyParser.urlencoded({extended:true}));

app.post("/booking", function(request, response){
    var fullName = request.body.fullName;


    var email = request.body.email;
    var datetime = request.body.datetime;

    var database = csv.createCsvFileWriter("bookings.csv", {"flags":"a"});
    var data = [fullName,email,datetime];

    database.writeRecord(data);
    database.writeStream.end();

    //response.redirect("/confirmation");
    response.send(
        "<html><head><title>confirmation</title></head><body>" +
        "Thanks " + fullName + ", your booking is confirmed." +
        "</body></html>"
    );
 });

app.get("/hello",function(request,response){
   response.sendFile(path.join(__dirname, "welcome.html"));
});

app.get("/coffee",function(request,response){
    response.sendFile(path.join(__dirname, "kopi.html"));
});

var server = app.listen(8080,function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Bob's Diner web app running at http://%s:%s",host,port);
});