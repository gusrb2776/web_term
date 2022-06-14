const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

//지난시간에 한 예제
app.get('/market', function(req,res){
  var request = require('request');
  var options = {
    'method': 'GET',
    'url': 'http://apis.data.go.kr/6260000/BusanLifeInfoService/getLifeInfo?servicekey=1%2FrQf8T6jnJrnr11jpjmk%2FuylBLAfQH53XQD6rRqR93Ix%2Br9cvt1%2BrsvqGGAJMoQYdmrhm96xd3JpOnpaIOmvg%3D%3D&pageNo=1&numofRows=1&resultType=json',
    'headers': {  
    }
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);
  });
})


//새롭게 하는 예제
app.get('/weather', function(req,res){
  var request = require('request');
  //var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=Vnrso4ayvW2S%2B26mo5JHOJpGzpXdp4H88RzhvTm0MoSVUKDszT5983m0mC0gkZ3ktiBKAyUYmzJjfzOU%2FP%2BK6Q%3D%3D&base_date=20200607&base_time=1800&nx=100&ny=75&dataType=json'
  var url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=Vnrso4ayvW2S%2B26mo5JHOJpGzpXdp4H88RzhvTm0MoSVUKDszT5983m0mC0gkZ3ktiBKAyUYmzJjfzOU%2FP%2BK6Q%3D%3D';
  //http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst :초단기 실황 조회하는 곳의 주소/동네예보서비스의 주소/초단기 실황조회 이름
  //이 뒤는 serviceKey임.


  //function(req,res)에서 req는 클라이언트에서 보내서 서버에서 받는 데이터 , res 우리가 처리하고 보내주는 데이터
  //get방식으로 넘어온 데이터는 req.query에 데이터가 들어가있음 --> req.query.이름 으로 참조하면 됨.
  var base_date = req.query.base_date;
  var base_time = req.query.base_time;
  var nx = req.query.nx;
  var ny = req.query.ny;
  var dataType = req.query.dataType;

  //여기선 앞에 서비스키를 넣는다고 ?를 넣어서 ?없이 바로 &가옴.
  url = url + "&base_date=" + base_date +"&base_time=" + base_time +"&nx=" + nx +"&ny=" + ny +"&dataType=" + dataType;
  
  var options = {
    'method': 'GET',
    'url': url
  };
  //결과가 이제 function으로 들어옴(call back형식이니)
  request(options, function (error, response) {
    if (error) throw new Error(error);
    console.log(response.body);
    res.send(response.body);  //이걸 다시 이제 response에 보냄 --> MyJS.html의 콜백함수로 (20번쨰줄)
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