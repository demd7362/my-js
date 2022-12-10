// 1. 일반 함수에서 this -> window

// 2. 중첩 함수에서 this -> window

// 3. 이벤트에서 this -> 이벤트 객체

// 4. 메소드에서 this -> 메소드 객체

// 5. 메소드 내부의 중첩 함수에서 this -> window

let kim = {
    name : 'kim',
    firstScore : 10,
    secondScore : 20,
    sum : function() { // () => 화살표함수는 this나 super에 대한 바인딩이 없다!!!!
        // 또한 생성자(Constructor)로 사용할 수 없다!!!
        return this.firstScore+this.secondScore;
    }
}
console.log(kim.sum());