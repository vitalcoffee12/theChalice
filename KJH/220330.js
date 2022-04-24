/**js object
 * 
 */
var player = {
    id : 0,
    name : "Black Sugar",
    level : 80,
    class : " Dark knight",
    hp  : 200000,
    mp : 10000,

}

console.log(player.level);

var players = [];
for(var i = 0; i < 100; i++){
    player.id = i;
    players.push(player);
}

console.log(players);

var array = [0, 1, 2, 3, 4, 5, 6];
array.push(1);
console.log(array);

array.push(3);
console.log(array);

array.pop(2);
console.log(array);

console.log("array pop : ", array.pop());

array.splice(0, 1);
console.log("array : ", array);

/** 
 * 함수 메소드
 * 객체 오브젝트
 * 
 */


/**
 * 함수
 * 코드의 집합
 * 
 * 
 */

function sum(number1, number2){
    console.log(number1, "+", number2, "=", number1 + number2)
}
sum(23123123123, 123123);

function multiple(number1, number2){
    console.log(number1, "*", number2, "=", number1/number2)
}
multiple(1551,9)

/**
 * 함수로 사칙연산, 계산기
 */