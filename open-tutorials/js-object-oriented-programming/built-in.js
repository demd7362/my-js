console.log('Math.PI : ' + Math.PI);
console.log('Math.random() : ' + Math.random()); // method
console.log('Math.floor(3.9) : '+Math.floor(3.9)); // 객체 안에 있는 함수를 뜻함

let myMath = {
    PI : Math.PI,
    random : function(){
        return Math.random();
    },
    floor : function(val){
        return Math.floor(val);
    }
}

console.log('myMath.PI : ', myMath.PI);
console.log('myMath.random() : ', myMath.random());
console.log('myMath.floor(3.4) : ', myMath.floor(3.4));