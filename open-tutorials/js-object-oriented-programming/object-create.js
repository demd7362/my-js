var superObj = {
    superVal : 'super'
}

var subObj = Object.create(superObj);
subObj.subVal ='sub';
console.log(subObj); // 내용이 없다
console.log(subObj.superVal); // 사용은 된다... -> proto와 같다

var kim = {
    name : 'kim',
    first : 10,
    second : 20,
    sum : function(){
        return this.first+this.second;
    }
}
var lee = {
    name : 'lee',
    first : 10,
    second : 20,
    // sum : function(){
    //     return 100;
    // }, // 이경우 __proto__는 100이 출력된다.
    avg : function(){
        return (this.first+this.second)/2;
    }
}

lee = Object.create(kim); 

// 이경우 상속받는 객체에 없는 프로퍼티는 가져와지지 않는다.
// 또한 객체의 프로퍼티가 가져와질뿐 오버라이드되진 않는다.
// Object.create와 __proto__는 다르다

// 프로토타입 객체 및 속성(optional) 을 갖는 새 객체 를 만들어준다


lee.__proto__ = kim; // avg()가 잘 출력이 된다. 
// 상속받는 객체와 링크된다. 오버라이드가 된다.

console.log(lee.sum());

