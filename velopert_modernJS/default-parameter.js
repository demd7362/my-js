function calculateCircleArea(r = 1){
    return Math.PI * r * r;
}

const area = calculateCircleArea(); // 인자를 넣지 않아도 default값이 1이기 때문에 에러가 나지 않는다.
console.log(area);
