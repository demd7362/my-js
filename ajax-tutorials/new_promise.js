function job1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("job1 ok!");
        }, 2000);
    });
}

function job2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("job2 fail!");
        }, 2000);
    });
}

job1()
    .then((data) => {
    console.log('data1',data);
    return job2()
    .catch((reason)=>{
        console.log('reason',reason);
        return Promise.resolve(reason);
    })
    .then((data)=>{
        console.log('data2',data);
    })
});
