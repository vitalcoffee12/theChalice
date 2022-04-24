const hero = {
    name: "용사",
    level: 1,
    hp: 10,
    exp : 0    
  };  
  const monster = {
    name: "몬스터",
    level: 1,
    hp: 15,
        
  };
var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("지금부터 TEXT RPG를 시작합니다.");
text();

rl.on("line", function (line) {  
  console.log("당신의 선택지는 ", line);
  text();

  if(line==1){
    attack(monster.hp);
    beattacked(hero.hp);
  }  
  else if(line==2){
    rest(hero.hp);
  }  
  else if(line==3){
    state();
  };
  if(hero.hp<=0){
    console.log("영웅이 죽었습니다.");
    rl.close();
  }

  if (line === "4") {
    rl.close();
  }  
}).on("4", function () {
  console.log("게임을 종료합니다.");
});


///////////////////////////////////////////////////////////////////////////////////////////////////

function state(){    
    console.log("용사의 상태");
    console.log("이름 :"+ hero.name);
    console.log("레벨 :"+ hero.level);
    console.log("체력 :"+ hero.hp);
    console.log("경험치 :"+ hero.exp);
}

function text(){
    console.log("1. 싸우기");
    console.log("2. 휴식");
    console.log("3. 캐릭터 상태확인");
    console.log("4. 게임종료");
}

function attack(hp){
    const damage = Math.floor(Math.random() * 10);
    console.log("몬스터를 "+damage+" 수치 만큼 가격했습니다.");
    hp = hp- damage;
    console.log("몬스터의 hp ="+ hp);
}

function beattacked(hp)
{
  const damage = Math.floor(Math.random() * 10);
    console.log("몬스터에게 "+damage+"의 데미지를 받았습니다");
    hp = hp- damage;
    console.log("플레이어의 hp ="+ hp);
}

function rest(hp){
  hp += 3;
  console.log("체력을 3회복했습니다. 당신의 hp : " + hp);  
}



