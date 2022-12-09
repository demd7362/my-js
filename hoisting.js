func1(); // 함수는 호이스팅이 가능하다.

// var는 선언까지만 호이스팅이 가능하다. 
console.log(var1); // 그러므로 undefined
var var1 = '100';
var func1 = function(){ // 함수 표현식은 호이스팅에 영향을 받지 않는다
    console.log('나는 var func1');
}

function func1(){ // 함수 선언식은 호이스팅에 영향을 받는다
    console.log('나는 function func1');
}



func1(); // 나는 var func1
