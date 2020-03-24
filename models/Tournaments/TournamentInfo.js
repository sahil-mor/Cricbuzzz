var request = require('request')
var apiKey = ""

tInfo = (req,res) => {
    var tournamentInfo = "http://api.sportradar.us/cricket-t2/en/tournaments/";
    tournamentInfo += req.params.id +  "/schedule.json?api_key=";
    tournamentInfo += apiKey
    request(tournamentInfo, function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedInfo = JSON.parse(body)
            res.render("Tournaments/tournamentInfo", { info : parsedInfo})
        }
        else{
            console.log(error)
            res.render("index")
        }
    })
}
module.exports = tInfo
