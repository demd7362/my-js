fetch('https://jsonplaceholder.typicode.com/posts') // fetch는 promise라는 데이터타입을 리턴
.then((response)=>{
    return response.json(); // q1. 리턴값 이것도 promise인가? 뭘 넣어도 promise로 리턴되나?
})
.catch((e)=>{
    console.log(e); // q2. 에러가 발생하지 않아서 출력안됨?
})
.then((result) =>{
    console.log(result);
})

let fetched = fetch('https://jsonplaceholder.typicode.com/posts'); // 리턴값 promise
console.log('fetched : '+fetched);



// 함수의 리턴값이 프로미스면 그 함수는 비동기적으로 동작하는 함수일 가능성이 매우 높다
// 그 함수가 리턴한 값은 두개의 함수를 사용 가능하다.
// 하나는 then이고, 하나는 catch. 둘 다 콜백함수이다.

// fetch를 통해서 실행한 결과가 성공 -> then으로 전달된 콜백함수가 호출
// 그리고 그 결과값이 있다면 파라미터로 받을 수 있다
// 결과가 실패 -> catch안으로 전달된 콜백함수가 호출, 그 파라미터로 이유를 알려줄 것이다