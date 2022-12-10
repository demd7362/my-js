// JSON 
// JavaScript Object Notation(표기법)

// 2. JSON to object -> parse(JSON)


let json = {
    name : '정지훈',
    age : 28,
    addr : '서울',
    nickname : 'demd'
}; 

console.log(json);
console.log(typeof json); // object(json) 입니다.
json = JSON.stringify(json); 

console.log(json);
console.log(typeof json); // string 입니다.

json = JSON.parse(json);
console.log(json);
console.log(typeof json); // object로 다시 parse
