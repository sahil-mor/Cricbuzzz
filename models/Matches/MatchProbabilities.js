var request = require('request')
var apiKey = ""

mProbabilities = (req,res) => {
    probabilities = "http://api.sportradar.us/cricket-t2/en/matches/" + req.params.id  +"/probabilities.json?api_key=" + apiKey
    request(probabilities,function(err,response,body){
        if(!err && response.statusCode === 200){
            parsedProbabilities = JSON.parse(body)
            res.render("Matches/matchProbabilities",{ data : parsedProbabilities })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = mProbabilities
