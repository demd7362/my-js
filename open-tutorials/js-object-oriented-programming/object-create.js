var superObj = {
    superVal : 'super'
}

var subObj = Object.create(superObj);
subObj.subVal ='sub';
console.log(subObj); // 내용이 없다
console.log(subObj.superVal); // 사용은 된다... -> proto와 같다