let words = ['spray','limit','elite','exuberant','destruction','present'];

let result = [];
function myFilter(origin,callback){
    for(let i of origin){
        if(callback(i)){
            result.push(i);
        }
    }
    return result;
}
// newWords = words.filter( e => e.length > 6);
newWords = myFilter(words, e=> e.length>6);
console.log(result);

// 콜백함수는 파라미터로 전달받은 함수를 말합니다.