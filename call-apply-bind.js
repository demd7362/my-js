const obj = { name : 'tom'}
const say = function(city){
	console.log('this=>'+this);
	console.log('this.city=>'+city);
}

	say('seoul');
	say.call(obj,'seoul');
	say.apply(obj,['seoul']);
	const boundSay1 = say.bind(obj,['seoul']);
	boundSay1('hi');
	
	const boundSay2 = say.bind(obj); // 당장 파라미터를 입력하지 않고
	boundSay2('busan'); // 나중에 바인딩해도 된다

/* call과 apply의 유일한 차이점은, 첫 번째 인자(this를 대체할 값)를 제외하고, 실제 say에 필요한 parameter를 입력하는 방식이다. call과는 다르게 apply함수는 두 번째 인자부터 모두 배열에 넣어야 한다.
bind함수가 call, apply와 다른 점은 함수를 실행하지 않는다는 점이다. 
대신 bound함수를 리턴한다. 이 bound함수(boundSay)는 이제부터 this를 obj로 갖고 있기 때문에 나중에 사용해도 된다. 
bind에 사용하는 나머지 rest 파라미터는 call과 apply와 동일하다 => parameter를 입력하는 방식은 string,array 둘 다 가능하다 */
