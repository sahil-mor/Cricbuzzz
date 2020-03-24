var request = require('request')
var apiKey = ""

mInfo = (req,res) => {
    var matchInfo = "http://api.sportradar.us/cricket-t2/en/matches/" + req.params.id + "/timeline.json?api_key=" + apiKey
    request(matchInfo,function(err,response,body){
        if(!err && response.statusCode == 200){
            parsedMatchInfo = JSON.parse(body)
            res.render("Matches/matchInfo", { matchInfo : parsedMatchInfo})
        }
        else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = mInfo
