//텍스트 RPG


var i = 1


console.log ("++타이탄 토벌전++")
console.log (i + "턴, 행동선택")
console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")


var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const player = {
    name : "렌쟈",
    hp : 120,
    skill1 : "육중한 사격"
};

const monster = {
    name : "타이탄",
    hp : 1600,
    skill1 : "휘두르기" ,
    skill2 : "산사태"
};

function getDamage0 (target, active, damage) {
  target.hp -= damage;
  console.log(active.name + " 이(가)" , active.skill1 + " 을(를) 시전했다!");
  console.log(target.name + " 은(는)", damage + "의 대미지를 입었다!");
};//플레이어,타이탄평타 공격

function getDamage1 (target, active, damage) {
  target.hp -= damage;
  console.log(active.name + " 이(가)" , active.skill1 + " 을(를) 시전했다!");
  console.log(target.name + " 은(는)", active.skill1 +" 을(를) 회피했다!", damage + "의 대미지를 입었다!");
};//플레이어,타이탄평타 회피

function getDamage2 (target, active, damage) {
  target.hp -= damage;
  console.log(active.name + " 이(가)" , active.skill2 + " 을(를) 시전했다!");
  console.log(target.name + " 은(는) 낙사하여 죽었다!");
};//플레이어, 타이탄산사태 공격

function getDamage3 (target, active, damage) {
  target.hp -= damage;
  console.log(active.name + " 이(가)" , active.skill2 + " 을(를) 시전했다!");
  console.log(target.name + " 은(는)", active.skill2 +" 을(를) 회피했다!");
};//플레이어, 타이탄산사태 회피

//  console.log ("현재", player.name, "hp : ", player.hp)

rl.on("line", function (line) { { 
  console.log("you entered", line);
    if (line === "공격하기" && i%4!=0) {
        getDamage0(monster,player,200);
        getDamage0(player,monster,20);
        ++i
        console.log ("현재", player.name, "hp : ", player.hp)
        console.log (i + "턴, 행동선택")
        console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")
    }
    else if (line === "회피하기" && i%4!=0) {
      getDamage1(player,monster,0);
      ++i
      console.log ("현재", player.name, "hp : ", player.hp)
      console.log (i + "턴, 행동선택")
      console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")
    }
    else if (line === "회피하기" && i%4==0) {
      getDamage3(player,monster,0);
      ++i;
      console.log ("현재", player.name, "hp : ", player.hp)
      console.log (i + "턴, 행동선택")
      console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")
    }
    else if (line === "회복하기" && i%4!=0) {
      console.log("포션을 먹어 hp를 10 회복 하였습니다.");
      player.hp = player.hp + 10
      ++i
      console.log ("현재", player.name, "hp : ", player.hp)
      console.log (i + "턴, 행동선택")
      console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")
    }
    else if (line === "회복하기" && i%4==0) {
      console.log("포션을 마시다가", monster.name + "의", monster.skill2 + "에 의해 낙사하였습니다.")
      player.hp = 0
    }
    else if (line === "공격하기" && i%4==0) {
      getDamage2(player,monster,9999);
    }
    if (player.hp<=0) {
      console.log ("GAME OVER"); 
      console.log("재시작");
      i=1;
      player.hp=120
      monster.hp=1600
      console.log (i + "턴, 행동선택")
      console.log ("공격하기, 회피하기, 회복하기 중 입력하세요.")
    }
    else if (player.hp>0 && monster.hp<=0) {
      console.log ("GAME CLEAR!\n타이탄을 토벌했습니다!")
      line = "close"
    }
    //console.log ("현재", player.name, "hp : ", player.hp)

  } 
  if (line === "close") {
    rl.close();
  }
}).on("close", function () {
  console.log("input event closed");
});