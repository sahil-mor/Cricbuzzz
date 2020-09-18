var request = require('request')
var apiKey = ""
var Dates = new Date()
var date = Dates.getDate()
var month = Dates.getMonth() + 1
if(month < 10){
    month = "0" + month
}
var year = Dates.getFullYear()
var DateIs = Dates.getDate()
DateIs -= 1
if(DateIs < 10){
    DateIs = "0" + DateIs
}
result = (req,res)=>{
    var dailyResults = "http://api.sportradar.us/cricket-t2/en/schedules/" + year + "-" + month + "-" + DateIs + "/results.json?api_key=" + apiKey
    request(dailyResults,(err,response,body)=>{
       if(!err && response.statusCode == 200){
           dataResults = JSON.parse(body)
            res.render("results",{ results : dataResults.results })
       }else{
           console.log(err)
            res.render("index")
       }
   })
}
module.exports = result
