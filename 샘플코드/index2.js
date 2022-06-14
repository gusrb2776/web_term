const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))       //이걸 추가해야지 local static file들을 사용할 수 있음. 그러니까 내 public폴더에 있는 html 파일을 쓴다는 말임.
//이 경로를 static파일들은 이 폴더 안에 있따는 뜻. 요청을 따로 받는다는건 아님? --> 그냥 MyJS1.html만 쓰면 됨.

//이제 http://localhost/MyJS1.html을 치면 잘 뜸.


//MyJS1.html은 Node JS서버에서 실행될까 브라우저에서 실행되는걸까
//node js는 node서버에서 실행되는거지만
//static 파일의 처리는 브라우저에서 처리됨.

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/Path1', (req, res) => res.send('Get path1'))

app.get('/Path2', (req, res) => res.send('Get path2'))

app.put('/Path1', (req, res) => res.send('Put path1'))  


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

/* 
Javascript를 이용한 open api를 실행해볼꺼양

postman에서 잘 실행되는지 보고 오른쪽에 코드 생성해주는걸 클릭
그리고 javascript의 XHR이나 jquery를 이용

실습내용은 MyJS2.html에 있음
*/