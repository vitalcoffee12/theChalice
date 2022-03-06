
// == 는 같다, <= 작거나 같다, !=같지않다, > 크다, >= 크거나 같다
// && 그리고, || 또는, ! 아니다

/* 여러줄 주석
입니다!!
*/


console.log(3<=4);
console.log(3==3);

console.log(2!=2);
console.log(!(3!=4));
console.log(!(!(3!=4)));
console.log(3==3 && 4==6);
console.log(3==3 || 3==6);


if(false){console.log("정답입니다~");}
else if(true){console.log("else if");}
else if(true){console.log("else if 2");}
else {console.log("else");}
/*
var math=70;

if(math==100){
    console.log("A등급입니다.");
}
else if(math<100 && math>=80){
    console.log("B등급입니다.");
}
else if(math<80 && math>=60){
    console.log("C등급입니다.");
}
else {
    console.log("재수강하십쇼.");
}
*/

/*
조금만 간단히 말하자면 조건이1개다 = if문
조건이 2개 . 1개의 조건과 조건 이외의 값 을 걸러내고싶다 = if /else 문
조건이 3개이상이다 if /else if / else 문
*/

var 렌쟈 = "16길"

if(렌쟈=="16길" || 렌쟈=="백마도사"){console.log("참담한 마음")}

//숙제 기공사의 광역 딜 사이클

var BioblasterGCD = 8
var HeatGauge = 30
var FlamethrowerGCD = 7

if(BioblasterGCD < 2.5){console.log("Cast-Bioblaster")}
else if (BioblasterGCD > 9 && HeatGauge >= 50){console.log("Buff-Overheated and Cast-Auto Crossbow");}
else if (BioblasterGCD > 9 && HeatGauge < 50 && FlamethrowerGCD < 2.5){console.log("Cast-Flamethrower");}
else if (BioblasterGCD <=9 && BioblasterGCD >=2.5){console.log("Cast-Spread Shot and Cast-Bioblaster after", BioblasterGCD, "seconds");}
else {console.log("Cast-Spread Shot")}



var readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    console.log("you entered", line);
    if (line === "cloes") {
        rl.close();
    }
}).on("close", function() {
    console.log("input event closed");
});

