var request = require('request')
var apiKey = "z596fg3uue8nczghnrbcwpsd"

pInfo = (req,res) => {
    var playerInfo = "http://api.sportradar.us/cricket-t2/en/players/";
    playerInfo += req.params.id + "/profile.json?api_key=" + apiKey;
    console.log(playerInfo)
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
}
module.exports = pInfo
