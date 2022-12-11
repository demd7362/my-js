var kim = {
    name : 'kim',
    first : 10,
    second : 20
}
var lee = {
    name : 'lee',
    first : 10,
    second : 10
}
function sum1(){
    return (this.first+this.second);
}
function sum2(str){
    return str+(this.first+this.second);
}


var call = sum2.call(kim,'sum.call(kim)의 결과는~~ ');
// 첫번째 인자로 그 함수의 내부적으로 this를 뭘로 할것인가가 오고
// 두번째 인자로 sum의 매개변수에 들어갈 값.
// 비슷한 기능으로 apply가 있다

console.log('sum2.call(kim,매개변수) : '+call);

var apply = sum1.apply(kim);
console.log('sum1.apply(kim) : ' +apply);

// 이 sum이라는 함수가 호출될때마다 this를 바꾸는 것이 아니라
// 내부적으로 사용할 this를 고정하는 방법이 bind!!!

var bind = sum1.bind(kim); // 새로운 함수가 만들어져서 리턴되는것. 
// sum에는 영향을 주지 않는다.

console.log('bind() : '+ bind());

console.log(typeof bind);

