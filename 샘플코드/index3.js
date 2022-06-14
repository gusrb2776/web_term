const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000


/*
이것도 postman의 코드 생성기능을 쓸거야.
nodeJS request를 활용할꺼야
이건 추가 모듈이라서 설치를 해줘야해
*/


app.use(express.static('public')) 

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/Path1', (req, res) => res.send('Get path1'))

app.get('/Path2', (req, res) => res.send('Get path2'))

app.put('/Path1', (req, res) => res.send('Put path1'))  


//새로 추가한 코드 (라우팅만 추가하고 안에 postman코드를 넣으면 됨.)
// 여기에다가 코드를 복사 붙여넣을꺼야 http://localhost:3000/webapi를 쓰면됨.
app.get('/webapi',function(req,res){
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=Vnrso4ayvW2S%2B26mo5JHOJpGzpXdp4H88RzhvTm0MoSVUKDszT5983m0mC0gkZ3ktiBKAyUYmzJjfzOU%2FP%2BK6Q%3D%3D&base_date=20220529&base_time=1600&nx=98&ny=77&dataType=JSON',
      'headers': {
        'Cookie': 'JSESSIONID=kawSMKhmVC7bmq2EyvBuqcp8z3luUC5TSWVKyVymjI2TUMcl7bx6wz56hsWc88Az.amV1c19kb21haW4vbmV3c2t5Mw=='
      }
    };
    //여기가 결과가 잘 왔을 때 실행하는 부분임.
    //response.body에 결과값이 들어있ㅇ므.
    request(options, function (error, response) {
      if (error) throw new Error(error);
        console.log(response.body); // 콘솔에다가 찍으니까 
        res.send(response.body);    //이걸 클라이언트에도 보내는 코드
    });
    
})
/* 서버에서 실행하니까 이제 결과가 잘 받아지는걸 볼 수 있음
이젠 클라이언트에서 노드랑 연동만 하면 돼.
MyJS3.html을 보자.
*/

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
