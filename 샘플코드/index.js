const express = require('express')
const app = express()
const port = 3000

//우리가 사용할 서버에 get으로 req = 파라미터 , res = 리턴값  => res는 hello World로 설정
// '/'는 뒤 주소
app.get('/', (req, res) => res.send('Hello World!'))


//Routing
app.get('/Path1', (req, res) => res.send('Get path1'))  //get으로 path1을 입력하면(주소뒤에 /Path1 넣으면 돼) get Path1 출력

app.get('/Path2', (req, res) => res.send('Get path2'))

app.put('/Path1', (req, res) => res.send('Put path1'))  //put은 브라우저에서 불가능. 다른 자바스크립트나 postman을 통해서 해야함.
//postman으로 한번 해봄
//이제 이걸 알면 get(읽기) put(업뎃) post(생성) delete(삭제) 모두가능!!
    


//서버를 응답 대기모드로 설정 , 콘솔창에다가 아래 글자 입력
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//터미널에서 실행하면 됨
//node index.js 를 치면 서버가 실행된거다.
//http://localhost:3000 으로 입력하면 서버에 접속하게 됨
//이렇게 굉장히 쉽게 서버 구축이 가능

//여기서 서버에 대해서 뭔가를 수정하고 반영하려면 서버를 껐다가 켜야함 ctrl+c로 끄고 다시 터미널에 입력

//Routing : API 같은거에서 method와 각 리소스들의 경로가 있는데 각 메소드 들에 대해서 어떻게 처리할지 구현하는것
/*

이제 우리도 html문서를 만들어서 활용할꺼야
MyJS1.html
이걸 이용할거야.

index2.js로 가자.

*/