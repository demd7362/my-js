/**
 * Fisrt 클래스입니다.
 */

class First {
    constructor(one, two) {
        this.one = one;
        this.two = two;
    }
    talk() {
        console.log(this.one, this.two);
    }
}
var first = new First("안녕", "하세요");
first.talk();

First.prototype.name = new First("반갑", "습니다");

console.log(first.name);
