var request = require('request')
var apiKey = "xbdeqe5aq3zb6t8rfezgw65f"
schedule = (req,res)=>{
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
}
module.exports = schedule