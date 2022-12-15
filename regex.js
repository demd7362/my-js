let userName = '정지훈';
const regex = new RegExp('^[가-힣]{2,4}$');
	
console.log(regex.test(userName));

