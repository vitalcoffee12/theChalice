var readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

var job = "미정";
var qlevel = 1;
console.clear();
console.log("당신은 딜러입니까? (yes/no)");
rl.on("line", function(line){
    if(line === "close"){
        rl.close()
    }

    if(job === "미정" && line === "yes" && qlevel === 1){
        job = "딜러";
        console.log("당신은 근딜입니까? (yes/no)");
    }
    else if(line === "no" && qlevel === 1){
        console.clear();
        console.log("딜러가 아니면 알고싶지 않습니다.");
        process.exit(1);
    }
    else if(job === "딜러" && line === "yes" && qlevel === 2){
        job = "근딜";
        console.log("당신은 가끔 검기10을 손해봅니까? (yes/no)");
    }
    else if(job === "딜러" && line === "no" && qlevel === 2){
        job = "원딜";
        console.log("당신은 유격대 입니까? (yes/no)");
    }
    else if(job === "원딜" && line === "yes" && qlevel === 3){
        job = "유격대";
        console.log("당신은 새로운 악기가 나올 때마다 버프받았네 라는 말을 듣습니까? (yes/no)");
    }
    else if(job === "원딜" && line === "no" && qlevel === 3){
        job = "캐스터";
        console.log("당신은 빰빰빰 빰빰빠밤? (yes/no)");
    }
    else if(job === "캐스터" && line === "yes" && qlevel === 4){
        job = "소환사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "캐스터" && line === "no" && qlevel === 4){
        console.log("당신은 가끔 D2자리가 많이 탐납니까? (yes/no)");
    }
    else if(job === "캐스터" && line === "yes" && qlevel === 5){
        job = "흑마도사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "캐스터" && line === "no" && qlevel === 5){
        console.log("당신은 가끔 뒤로 점프하다 죽습니까? (yes/no)");
    }
    else if(job === "캐스터" && line === "yes" && qlevel === 6){
        job = "적마도사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "캐스터" && line === "no" && qlevel === 6){
        job = "청마도사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "유격대" && line === "yes" && qlevel === 4){
        job = "음유시인";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "유격대" && line === "no" && qlevel === 4){
        console.log("당신은 일단 춤을 춥니까? (yes/no)");
    }
    else if(job === "유격대" && line === "yes" && qlevel === 5){
        job = "무도가";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "유격대" && line === "no" && qlevel === 5){
        job = "기공사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "근딜" && line === "yes" && qlevel === 3){
        job = "사무라이";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "근딜" && line === "no" && qlevel === 3){
        console.log("당신은 '점프쿨이 돌았았는데 목숨이 중요한가?'라고 생각합니까? (yes/no)");
    }
    else if(job === "근딜" && line === "yes" && qlevel === 4){
        job = "용기사";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "근딜" && line === "no" && qlevel === 4){
        console.log("당신은 자기 머리위 토끼를 보면 짜증이 납니까? (yes/no)");
    }
    else if(job === "근딜" && line === "yes" && qlevel === 5){
        job = "닌자";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else if(job === "근딜" && line === "no" && qlevel === 5){
        job = "몽크";
        console.log("당신은",job,"입니다.");
        process.exit(1);
    }
    else{
        console.clear();
        console.log("잘못 입력하셨습니다.");
        process.exit(1);
    }
    qlevel ++;
}).on("close", function(){
    console.log("input event closed");
});