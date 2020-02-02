var express = require("express");
var bodyParser = require("body-parser");
var request = require("request")
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));

var apiKey = ""; //write your api key here
app.get("/",function(req,res){
   res.render("home")
})

app.get("/scheduleOf/:id",function(req,res){
    schedule = "http://api.sportradar.us/cricket-t2/en/teams/" + req.params.id + "/schedule.json?api_key=" + apiKey
    request(schedule,function(err,response,body){
        if(!err && response.statusCode == 200){
            data = JSON.parse(body)
            res.render("schedule",{ data : data })
        }else{
            console.log(err)
            res.render("index")
        }
    })
})

app.get("/recentTournaments",function(req,res){
    var tournamentList = "http://api.sportradar.us/cricket-t2/en/tournaments.json?api_key="
    tournamentList += apiKey;
    request(tournamentList,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedList = JSON.parse(body)
            res.render("tournaments", { list : parsedList})
        }
        else{
            console.log(error)
            res.render("index")
        }
    })
})

app.get("/tournamentInfo/:id",function(req,res){
    var tournamentInfo = "http://api.sportradar.us/cricket-t2/en/tournaments/";
    tournamentInfo += req.params.id +  "/schedule.json?api_key=";
    tournamentInfo += apiKey
    request(tournamentInfo, function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedInfo = JSON.parse(body)
            res.render("tournamentInfo", { info : parsedInfo})
        }
        else{
            console.log(error)
            res.render("index")
        }
    })
})

app.get("/tournamentStandings/:id",function(req,res){
    url = "http://api.sportradar.us/cricket-t2/en/tournaments/";
    url += req.params.id;
    url += "/standings.json?api_key=";
    url += apiKey;
    request(url,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedStandings = JSON.parse(body)   
            console.log(parsedStandings)
            res.render("tournamentStandings", { standings : parsedStandings})
        }
        else{
            console.log(err)
            res.render("index")
        }
    })
})

app.get("/matchInfo/:id",function(req,res){
    var matchInfo = "http://api.sportradar.us/cricket-t2/en/matches/";
    matchInfo += req.params.id + "/summary.json?api_key=";
    matchInfo += apiKey;
    request(matchInfo,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedMatchInfo = JSON.parse(body)
            res.render("matchInfo", { matchInfo : parsedMatchInfo})
        }
        else{
            console.log(err)
            res.render("index")
        }
    })
})

app.get("/playerInfo/:id",function(req,res){
    var playerInfo = "http://api.sportradar.us/cricket-t2/en/players/";
    playerInfo += req.params.id + "/profile.json?api_key=" + apiKey;
    request(playerInfo,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedPlayerInfo = JSON.parse(body)
            res.render("playerInfo",{ playerInfo : parsedPlayerInfo})
        }
        else{
            console.log(err)
            res.render("index")
        }
    })
})

app.get("/matchProbabilities/:id",function(req,res){
    probabilities = "http://api.sportradar.us/cricket-t2/en/matches/" + req.params.id  +"/probabilities.json?api_key=" + apiKey
    request(probabilities,function(err,response,body){
        if(!err && response.statusCode === 200){
            parsedProbabilities = JSON.parse(body)
            res.render("matchProbabilities",{ data : parsedProbabilities })
        }else{
            console.log(err)
            res.render("index")
        }
    })
})
port = process.env.PORT || 5000;

app.listen(port,function(){
    console.log("Cricbuzz server started for " + port)
})
