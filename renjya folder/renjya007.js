// 객체(object)

var player = {
    name : "렌쟈" , 
    level : 80 ,
    class : "Bard" ,
    hp : 1234,
    mp : 10000 ,

};

console.log (player);

var players = [] ;
players.push (player)

//.push 는 배열에 뒤에 하나씩 추가되어 들어감
//.pop 은 마지막 배열을 삭제. .pop출력시 pop된 배열 출력

console.log(players);


//함수
// function 은 함수 만드는 명령어 ~-~
function sum (number1, number2) {
    console.log(number1, "+", number2, "=", number1 + number2);
}

sum(1203948, 44521);

//숙제 !! 함수로 사칙연산 만들기, 계산기 만들기 !!


function sub (number1, number2) {
    console.log(number1, "-", number2, "=", number1 - number2);
}

function multiply (number1, number2) {
    console.log(number1, "X", number2, "=", number1 * number2);
}

function divide (number1, number2) {
    console.log(number1, "÷", number2, "=", number1 / number2);
}

//값, 연산, 값 3개 선언
var n1 = 1
var operater = "/" // +, -,*, / 중 1택
var n2 = 0


if (operater=="+"){sum(n1,n2)}
else if (operater=="-"){sub(n1,n2)}
else if (operater=="*"){multiply(n1,n2)}
else if (operater=="/"){
    if (n1==0 ||n2==0) {console.log("0으로 나눌 수 없습니다!!")}
    else {divide(n1, n2)}
}


