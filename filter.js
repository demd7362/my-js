let arr = [10,20,30,40,50];

let filteredArr = arr.filter((v,i,a) =>{
    return v % 4 == 0;
})

console.log(filteredArr);

// 3) 배열.filter( (value, index, array)=>{...반복 수행 코드...} )

// : forEach와 동일(순회 방식, 콜백함수 매개변수 등)

// : 다른점 => 각 콜백함수에서 return하는 값이 true일 때만, 그때의 value 값들로 새로운 배열을 만들어 반환한다.