var request = require('request')
var apiKey = "xbdeqe5aq3zb6t8rfezgw65f"
recent = (req,res)=>{
    var tournamentList = "http://api.sportradar.us/cricket-t2/en/tournaments.json?api_key="
    tournamentList += apiKey;
    request(tournamentList,function(error,response,body){
        if(!error && response.statusCode == 200){
            parsedList = JSON.parse(body)
            res.render("Tournaments/tournaments", { list : parsedList})
        }
        else{
            console.log(error)
            res.render("index")
        }
    })
}
module.exports = recent