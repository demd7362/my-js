let kim = {
    name : 'kim',
    firstScore : 10,
    secondScore : 20,
    thirdScore : 30,
    sum : function() { 
        return this.firstScore+this.secondScore+this.thirdScore;
    }
}

let lee = { // 같은 형태의 객체 모두에게 수정작업을 거쳐야하는 것이 불편하다.
    // 때문에 객체를 찍어내는 공장이 필요하다.
    name : 'lee',
    firstScore : 10,
    secondScore : 10,
    thirdScore : 10,
    sum : function() { 
        return this.firstScore+this.secondScore;
    }
}

//////////////////////////////////////////////////////////////////////

class Person {
    constructor(n,f,s,t){
        this.name=n;
        this.firstScore=f;
        this.secondScore=s
        this.thirdScore=t;
    }
    sum(){ // 객체 안에 존재하니까 function이 아님. 메소드이다.
        return this.firstScore + this.secondScore + this.thirdScore;
    }
}

let park = new Person('park',30,45,60);

console.log(park);

// function person(n,f,s,t){
//     this.name=n;
//         this.firstScore=f;
//         this.secondScore=s
//         this.thirdScore=t;
//     this.sum = function(){
//         return this.firstScore + this.secondScore + this.thirdScore;
//     }
    
// }

// console.log(person('jeong',40,30,40));