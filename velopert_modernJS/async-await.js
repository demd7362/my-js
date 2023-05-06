function fn(i) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(i + '초');
            resolve();
        }, i * 1000)
    })
}
async function run(){
    await fn(1);
    await fn(2);
    await fn(3);
    console.log('last')
    
}
run();
// log가 1초 후 실행, 그 직후 2초 후 실행, 그 직후 3초 후 실행, 제일 마지막에 last가 출력되게 하려면 async 함수를 쓰는 것만으로(promise가 리턴되는 것만으로) 해결 할 수 없다.
// Promise 객체를 생성해주어야 한다. 그러므로 fn 함수는 다음과 같이 변형될 수 있다.

async function asyncFn(i) {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(i + '초');
            resolve();
        }, i * 1000)
    })
}
