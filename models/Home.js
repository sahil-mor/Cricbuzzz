var request = require('request')
var apiKey = "ur api key"
var Dates = new Date()
var date = Dates.getDate()
var month = Dates.getMonth() + 1
if(month < 10){
    month = "0" + month
}
if(date < 10){
    date = "0" + date
}
var year = Dates.getFullYear()
home = (req,res)=>{
    var dailySchedule = "http://api.sportradar.us/cricket-t2/en/schedules/" + year + "-" + month + "-" + date + "/schedule.json?api_key=" + apiKey
    request(dailySchedule,(err,response,body)=>{
        if(!err && response.statusCode == 200){
            dataSchedule = JSON.parse(body)
            res.render("home",{ schedule : dataSchedule.sport_events })
        }else{
            console.log(err)
            res.render("index")
        }
    })
}
module.exports = home
