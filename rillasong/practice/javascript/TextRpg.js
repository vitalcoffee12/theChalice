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


//게임에 사용될 유저의 스펙 , 몬스터의 스펙 선언


var readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//입출력 관련 객체 선언

console.log("지금부터 TEXT RPG를 시작합니다.");
text();

//게임시작 텍스트출력 (반복X)

rl.on("line", function (line) { 
  console.log("당신의 선택지는 ", line);
  text();
//rl 에서 입력되는 값을 line <- 에 저장하기때문에 if문의 값을 line 으로 비교하여 사용하고싶은 함수 출력
  if(line==1){
    attack(monster);
    beattacked(hero);
  }  
  else if(line==2){
    rest(hero);
  }  
  else if(line==3){
    state();
  };

  // 게임이 끝나는 조건을 정해줌 (용사가 죽거나 몬스터를 잡았을시에 종료)
  if(hero.hp<=0){
    console.log("영웅이 죽었습니다.");
    rl.close();//종료하는 함수
  }
  else if(monster.hp<=0){
    console.log("몬스터를 죽였습니다. 승리!");
    rl.close();//종료하는 함수
  }

  if (line === "4") {
    rl.close();//입력을 4번으로 받을시 게임을 종료함
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
// 위에서 4줄을 사용하는것보다 함수로 선언해두고 위에서 한줄로 표현했을때 가독성이 좋아서 함수에 구현

function attack(hp){
    const damage = Math.floor(Math.random() * 10);
    console.log("몬스터를 "+damage+" 수치 만큼 가격했습니다.");
    hp.hp = hp.hp- damage;
    console.log("몬스터의 hp ="+ hp.hp);
}

// 유저가 몬스터를 공격하는 함수

function beattacked(hp)
{
  const damage = Math.floor(Math.random() * 10);
    console.log("몬스터에게 "+damage+"의 데미지를 받았습니다");
    hp.hp = hp.hp- damage;
    console.log("플레이어의 hp ="+ hp.hp);
}

//몬스터가 유저를 공격하는 함수

function rest(hp){
  hp.hp += 3;
  console.log("체력을 3회복했습니다. 당신의 hp : " + hp.hp);  
}

// 휴식입력시 유저의 hp를 회복시켜줌


