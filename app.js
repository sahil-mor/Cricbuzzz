var express = require("express");
var bodyParser = require("body-parser");
var request = require("request")
var app = express();

app.set("view engine","ejs");
app.use(express.static("public"));
var apiKey = "z596fg3uue8nczghnrbcwpsd";
app.get("/",function(req,res){
    var tournamentList = "http://api.sportradar.us/cricket-t2/en/tournaments.json?api_key="
    tournamentList += apiKey;
    request(tournamentList,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedList = JSON.parse(body)
            res.render("home", { list : parsedList})
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

//check the type of the match and update scores accordingly

function teamInfo(id){
    var teamInfo = "http://api.sportradar.us/cricket-t2/en/teams/" + id +  "/profile.json?api_key=" + apiKey;
    request(teamInfo,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedTeamInfo = JSON.parse(body)
            console.log("IN THE FUNCTION ============================")
            console.log(parsedTeamInfo)
            return parsedTeamInfo
        }
        else{
            console.log(err)
        }
    })
}

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

app.listen(1000,function(){
    console.log("Cricbuzz server started")
})