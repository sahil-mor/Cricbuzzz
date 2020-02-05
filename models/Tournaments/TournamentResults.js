var request = require('request')
var apiKey = "xbdeqe5aq3zb6t8rfezgw65f"
tournamentResults = (req,res)=>{
    var results = "http://api.sportradar.us/cricket-t2/en/tournaments/" + req.params.id + "/results.json?api_key=" + apiKey
    request(results,(err,response,body)=>{
        if(!err && response.statusCode == 200){
            var parsedData = JSON.parse(body)
            res.render("Tournaments/tournamentResults",{ data : parsedData })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = tournamentResults