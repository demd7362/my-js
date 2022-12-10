let arr = [10,20,30];


let multipleArr = arr.map((v,i,a) => {
    return v * 10; // return v % 2 == 0; // true 리턴
    
})

console.log(multipleArr);

// 2) 배열.map( (value, index, array)=>{...반복 수행 코드...} )

// : forEach와 동일(순회 방식, 콜백함수 매개변수 등)

// : 다른점 => 각 콜백함수에서 return 하는 값들으로 새로운 배열을 만들어 반환한다.