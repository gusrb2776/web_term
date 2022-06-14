const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/search',function(req,res){
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://openapi.naver.com/v1/search/webkr.json',
      'headers': {
        'X-Naver-Client-Id': '_RYfTjJFqH4g27dvl9iI',
        'X-Naver-Client-Secret': '4M1XXWMtVk'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
      res.send(response.body);
  });
})


app.get('/weather', function(req,res){
  //단기예보 사용
  var request = require('request');
  var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=b%2Bao0jzmKlibKYe2VH9yWXQ0rG%2Bky2p90KBBowNLlrfd4A1u%2FiHrhynKLOdRoDL0rzZI4%2B3gjM8K5%2B1VMLKeyw%3D%3D';


  var base_date = req.query.base_date;
  var base_time = req.query.base_time;
  var nx = req.query.nx;
  var ny = req.query.ny;
  var dataType = req.query.dataType;

  url = url + "&base_date=" + base_date +"&base_time=" + base_time +"&nx=" + nx +"&ny=" + ny +"&dataType=" + dataType;
  
  var options = {
    'method': 'GET',
    'url': url
  };

  request(options, function (error, response) {
    if (error) throw new Error(error);
    //console.log(response.body);
    res.send(response.body);
  });
})

app.get('/Path1', function (req, res) {
        res.send("GET Path1");
    })
app.get('/Path2', function(req,res) {
        res.send("GET Path2 : " + Date());
    })
app.put('/Path1', function (req, res) {
        res.send("PUT Path1");
    })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))