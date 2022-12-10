let arr = [10,20,30];

arr.forEach(e => {
    console.log(e);
});


arr.forEach(function(e){
    console.log(e);
})

arr.forEach((v,i,a) => {
    console.log('value : '+v);
    console.log('index : '+i);
    console.log('array : '+a);
})

// 1) 배열.forEach( (value, index, array)=>{...반복 수행 코드...} )

// : 배열의 length만큼 반복하여 콜백함수를 호출한다.

// : 콜백함수의 매개변수로 value에 요소값, index에 인덱스, array에 원본배열이 들어온다.