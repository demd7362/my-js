// 서버를 띄우기 위한 express 라이브러리 기본 세팅
const express = require('express');
const app = express();

app.listen(7362, function(){ // 서버띄울 포트번호, 띄운 후 실행할 코드  
    console.log('listen on 7362');
});
// '/' == homepage
app.get('/', function(req, res){ // request,response
    res.sendFile(__dirname+'/index.html');
});

