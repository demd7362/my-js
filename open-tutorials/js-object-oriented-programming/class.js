class Father{
    constructor(n,f,s){
        this.name=n;
        this.firstScore=f;
        this.secondScore=s;
        
    }
    sum(){
        return this.firstScore+this.secondScore;
    }

} // 클래스 == 생성자 함수

class Son extends Father{
    constructor(n,f,s,t){
        super(n,f,s)
        this.thirdScore=t;
    }

    sum(){
        return super.sum()+this.thirdScore;
    }
    avg(){
        return (this.firstScore+this.secondScore+this.thirdScore)/3;
    }
}

let son = new Son('lee',30,20,40);
console.log(son.sum());

// 슈퍼에 괄호가 있으면 부모클래스의 생성자, 
// 괄호가 없으면 부모클래스 자체를 뜻한다. 만약 슈퍼라는 기능이 없으면, 
// 자식클래스에서 부모클래스의 속성과 기능에 추가적인 무언가를 넣어 활용때 
// 다시 부모클래스의 코드를 사용해야하는 중복이 발생할 것이다 
