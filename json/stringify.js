// JSON 
// JavaScript Object Notation(표기법)

// 1. Object to JSON -> stringify(obj)
let json = JSON.stringify(true);
console.log(json);



let obj = [];
obj.push('apple');
obj.push('banana');
json = JSON.stringify(obj);
console.log(obj);

const rabbit = {
    name : 'tori',
    color : 'white',
    size : null,
    birthDate : new Date(),
    //symbol : Symbol('id'), // 심볼은 json에 포함되지 않는다
    jump: () => {
        console.log(`${name} can jump`);
    },
};

console.log('----------');
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit,['name']);
console.log(json);

json = JSON.stringify(rabbit, (key,value) =>{
    console.log(`key: ${key}, value : ${value}`);
    return key === 'name'? 'ellie' : value;1
});


