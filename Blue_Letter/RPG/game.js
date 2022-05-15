/*입출력 코드*/
var readline = require("readline");
var level = "";
var bossRSP = "";
const hero = {
    name: "주인공",
    hp: 10,
  };
  const boss = {
    name: "액체 손",
    hp: 5,
  };

const rl = readline.createInterface({   
    input: process.stdin,
    output: process.stdout,
  });

var random = Math.floor(Math.random() * 3) + 1;
function bossrandom(){
  if(random == 1){
    return "묵";
  }
  else if(random == 2){
    return "찌";
  }
  else if(random == 3){
    return "빠";
  }
}
function sloading(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {
      if(Date.now() === wakeUpTime - 5000){
        process.stdout.write("12%...");
        sloading(900);
      }
      if(Date.now() === wakeUpTime - 4000){
        process.stdout.write("38%...");
        sloading(900);
      }
      if(Date.now() === wakeUpTime - 3000){
        process.stdout.write("59%...");
        sloading(900);
      }
      if(Date.now() == wakeUpTime - 2000){
        process.stdout.write("74%...");
        sleep(900);
      }
      if(Date.now() == wakeUpTime - 1000){
        process.stdout.write("99%...");
        sleep(900);
      }
    }
}
function sleep(ms) {
    const wakeUpTime = Date.now() + ms;
    while (Date.now() < wakeUpTime) {
      if(Date.now() === wakeUpTime - 3000){
        process.stdout.write("3...");
        sleep(900);
      }
      if(Date.now() == wakeUpTime - 2000){
        process.stdout.write("2...");
        sleep(900);
      }
      if(Date.now() == wakeUpTime - 1000){
        process.stdout.write("1...");
        sleep(900);
      }
    }
}
function loading(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {
    if(Date.now() === wakeUpTime - 3000){
      process.stdout.write("···");
      sleep(900);
    }
    if(Date.now() == wakeUpTime - 2000){
      process.stdout.write("···");
      sleep(900);
    }
    if(Date.now() == wakeUpTime - 1000){
      process.stdout.write("···");
      sleep(900);
    }
  }
}
  
function getDamage(target) {
    target.hp --;
    console.log(
      target.name + "은(는) 대미지를 입었다!"
    );
}

var step = 1; 
console.clear();
console.log('\x1b[34m%s\x1b[0m',"액체 손","과 묵찌빠 전투! Game ☆");
sloading(5000);
console.clear();
console.log('\x1b[34m%s\x1b[0m',"액체 손","과 묵찌빠 전투! Game ☆");
console.log('\x1b[33m%s\x1b[0m',"100% Loading Complete!");
console.log("");
console.log("난이도를 선택하시오.");
console.log("1.Easy   2.Nomal   3.Hard");
rl.on("line", function (line) {
  console.log("line:",line,"step :",step);
  bossRSP = bossrandom();
  random = Math.floor(Math.random() * 3) + 1;
  if(line == 1 && step == 1){
    hero.hp = 10;
    step = 2;
    level = "Easy"
    console.clear();
    loading(3000);
    console.clear();
    console.log("선택 난이도 : ",level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log("안내면 진거~");
    loading(2000);
    console.log("");
    console.log("1.묵   2.찌   3.빠");
  }
  else if(line == 2 && step == 1){
    hero.hp = 5;
    step = 2;
    level = "Nomal"
    console.clear();
    loading(3000);
    console.clear();
    console.log("선택 난이도 : ", level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log("안내면 진거~");
    loading(2000);
    console.log("");
    console.log("1.묵   2.찌   3.빠");
  }
  else if(line == 3 && step == 1){
    hero.hp = 3;
    step = 2;
    level = "Hard"
    console.clear();
    loading(3000);
    console.clear();
    console.log("선택 난이도 : ",level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log("안내면 진거~");
    loading(2000);
    console.log("");
    console.log("1.묵   2.찌   3.빠");
  }
  else if(line !=1 && line !=2 && line !=3 && step == 1){
    console.clear();
    console.log("잘못 입력하셨습니다. 다시 입력해주세요.");
    sleep(3000);
    console.clear();
    console.log("난이도를 선택하시오.");
    console.log("1.Easy   2.Nomal   3.Hard");
  }

  else if(line ==1 && step ==2){
    console.clear();
    console.log("선택 난이도 : ", level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log(hero.name,":","묵");
    console.log('\x1b[34m%s\x1b[0m',boss.name,":",bossRSP);
    loading(2000);
    console.log("");
    if(bossRSP == "묵"){
      console.log("비겼다.");
      loading(2000);
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "찌"){ 
      console.log("이겼다!");
      loading(2000);
      console.clear();
      getDamage(boss);
      loading(2000);
      if(boss.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 승리했다!!!");
        loading(3000);
        console.log("");
        console.log("Game Clear");
        loading(3000);
        console.log("");
        console.log("Congratulation ☆");
        loading(3000);
        Thankyou();
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "빠"){
      console.log("졌다ㅠㅠ");
      loading(2000);
      console.clear();
      getDamage(hero);
      loading(2000);
      if(hero.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 죽어버렸다...");
        loading(3000);
        console.log("");
        console.log("Game Over");
        loading(3000);
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
  }
  else if(line ==2 && step ==2){
    console.clear();
    console.log("선택 난이도 : ", level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log(hero.name,":","찌");
    console.log('\x1b[34m%s\x1b[0m',boss.name,":",bossRSP);
    loading(2000);
    console.log("");
    if(bossRSP == "찌"){
      console.log("비겼다.");
      loading(2000);
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "빠"){ 
      console.log("이겼다!");
      loading(2000);
      console.clear();
      getDamage(boss);
      loading(2000);
      if(boss.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 승리했다!!!");
        loading(3000);
        console.log("");
        console.log("Game Clear");
        loading(3000);
        console.log("");
        console.log("Congratulation ☆");
        loading(3000);
        Thankyou();
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "묵"){
      console.log("졌다ㅠㅠ");
      loading(2000);
      console.clear();
      getDamage(hero);
      loading(2000);
      if(hero.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 죽어버렸다...");
        loading(3000);
        console.log("");
        console.log("Game Over");
        loading(3000);
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
  }
  else if(line ==3 && step ==2){
    console.clear();
    console.log("선택 난이도 : ", level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log(hero.name,":","빠");
    console.log('\x1b[34m%s\x1b[0m',boss.name,":",bossRSP);
    loading(2000);
    console.log("");
    if(bossRSP == "빠"){
      console.log("비겼다.");
      loading(2000);
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "묵"){ 
      console.log("이겼다!");
      loading(2000);
      console.clear();
      getDamage(boss);
      loading(2000);
      if(boss.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 승리했다!!!");
        loading(3000);
        console.log("");
        console.log("Game Clear");
        loading(3000);
        console.log("");
        console.log("Congratulation ☆");
        loading(3000);
        Thankyou();
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
    else if(bossRSP == "찌"){
      console.log("졌다ㅠㅠ");
      loading(2000);
      console.clear();
      getDamage(hero);
      loading(2000);
      if(hero.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 죽어버렸다...");
        loading(3000);
        console.log("");
        console.log("Game Over");
        loading(3000);
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
    }
  }
  else if(line !=1 && line !=2 && line !=3 && step ==2){
    console.clear();
    console.log("선택 난이도 : ", level);
    console.log(hero.name,"의 체력 : ",hero.hp);
    console.log("  V S    ");
    console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
    loading(2000);
    console.log("");
    console.log("잘못내서 졌다ㅠㅠ");
      loading(2000);
      console.clear();
      getDamage(hero);
      loading(2000);
      if(hero.hp == 0){
        console.clear();
        console.log(hero.name,"이(가) 죽어버렸다...");
        loading(3000);
        console.log("");
        console.log("Game Over");
        loading(3000);
        process.exit(1);
      }
      console.clear();
      console.log("선택 난이도 : ", level);
      console.log(hero.name,"의 체력 : ",hero.hp);
      console.log("  V S    ");
      console.log('\x1b[34m%s\x1b[0m',boss.name,"의 체력 : ",boss.hp);
      loading(2000);
      console.log("");
      console.log("안내면 진거~");
      loading(2000);
      console.log("");
      console.log("1.묵   2.찌   3.빠");
  }
  if (line === "close") {
    rl.close();
  }
}).on("close", function () {
  console.log("Game Over");
});


function Thankyou(){
  console.log("");
  console.log("⠀      ｡ﾟﾟ･｡･ﾟﾟ｡");
  console.log("        ﾟ。   ｡ﾟ");
  console.log("          ･｡･ﾟ Thank you for Playing!");
  console.log("             ︵    ︵");
  console.log("            (   ╲/   /");
  console.log("            ╲    ╲   /");
  console.log("          ╭ ͡ ╲    ╲ /");
  console.log("       ╭ ͡ ╲     ╲   ﾉ");
  console.log("    ╭ ͡ ╲     ╲      ╱");
  console.log("    ╲     ╲        ╱");
  console.log("      ╲           ╱")
}