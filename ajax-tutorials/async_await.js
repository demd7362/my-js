let timer = (time)=>{
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(time);
        }, time);
    });
}
// console.log('start');
// timer(1000)
//     .then((time)=>{
//         console.log('time:'+time);
//         return timer(time+1000);
//     })
//     .then((time)=>{
//         console.log('time:'+time);
//         return timer(time+1000);
//     }).then((time)=>{
//         console.log('time:'+time);
//         console.log('end');
//     });



const run = async()=>{
    console.log('start');
    let time = await timer(1000);
    console.log('time:'+time);

    time = await timer(time+1000);
    console.log('time:'+time);

    time = await timer(time+1000);
    console.log('time:'+time);

    console.log('end');
}
// console.log('parent start');
// console.log(run()); // promise를 암시적으로 리턴

// console.log('parent end');

async function run2(){
    console.log('parent start');
    await run(); // await을 붙이면 프로미스를 리턴하게 되는구나
    console.log('parent end');
}
run2();
