/** js : object
 *
 *
 *
 */
var player = {
  name: "",
  level: 80,
  class: "scholar",
  hp: 1000,
  mp: 10000,
};

//console.log(player.level);

var players = [];

for (var i = 0; i < 100; i++) {
  players.push(player);
}

//console.log(players);

/**
 * array.push()
 *
 */
var array = [4, 5, 6, 6, 7, 10, 8, 9, 11];
array.push(1);

//console.log(array);
array.push(2);
//console.log(array);

//console.log("array pop :", array.pop());
//console.log(array);

//console.log("array shift : ", array.shift());
//console.log(array);

//console.log(array.splice(1));
//console.log(array);
//console.log(array.splice(3, 3));

/**
 * c 의 문자열
 * char '문자 하나만 들어가는' 자료형
 * char[]  : 문자열, 끝에 null이 들어가야함
 *
 * null << 없다.
 */

/** 함수
 * 코드의 집합
 *
 */
function sum(number1, number2) {
  console.log(number1, "+", number2, " = ", number1 + number2);
}
sum(232795, 192641);

/**
 * 용살님 : 구구단 , 함수로 사칙연산 (), 계산기
 * 렌자/흑당 : 함수로 사칙연산 (), 계산기
 * ** 0으로는 나눌 수 없음
 */
