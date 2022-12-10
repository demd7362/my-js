function Person(n, f, s, t) { // constructor function. 생성자 함수 == 클래스
    this.name = n;
    this.firstScore = f;
    this.secondScore = s
    this.thirdScore = t;
    this.sum = function(){
        return 1;
    }

}


Person.prototype.sum = function(){ 
    // 원형 함수(클래스)에 sum이 있다면 적용되지 않는다
    return this.firstScore + this.secondScore + this.thirdScore;
}

let kim = new Person('kim',10,20,30);
let lee = new Person('lee',20,40,50);
kim.sum= function(){ // 자바의 오버라이드. 한마디로 재정의가 가능하다
    return 10;
}

console.log('kim.sum() : '+kim.sum());
console.log('lee.sum() : '+lee.sum());