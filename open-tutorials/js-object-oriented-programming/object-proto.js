var superObj = {
    superVal : 'super'
}

var subObj = {
    subVal : 'sub'
}


subObj.__proto__ = superObj;
console.log(subObj); // 'sub'만 보이지만

console.log(subObj.superVal); // 'super'가 출력된다

subObj.superVal = 'subObj의 superVal 재정의'
console.log(subObj);

console.log(superObj); 


