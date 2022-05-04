/**텍스트 알피티 
 * if for 객체 이용하기
*/

/**입출력 코드 */


function timeout(ms) {
  return new Promise((res) => setTimeout(res, ms));
}

async function sleep(fn, ms, ...args) {
  await timeout(ms);
  return fn(...args);
}

function printString(times, string) {
  for (var i = 0; i < times; ++i) {
    console.log(string);
  }
}

const hero = {
  name: "빛전",
  level: 1,
  hp: 10,
  weapon: "마법",
};

const monster = {
  name: "마수왕 라이언",
  level: 1,
  hp: 10000,
  weapon: "도끼",
};

function getDamage(target, active, damage) {
  target.hp -= damage;
  console.log(
    target.name + " 은 ",
    active.name,
    " 의 ",
    active.weapon,
    " 에 맞아 ",
    damage,
    " 의 대미지를 입었다!"
  );
  console.log("현재 hp");
  console.log(target.name, " ", target.hp);
  console.log(active.name, " ", active.hp);
}

var qlevel = 1;
console.clear();
const { hasUncaughtExceptionCaptureCallback } = require("process");
var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


console.log("<주의> 꼭 Select가 나오고 입력해주세요!")
console.log("당신은 적마도사 입니다.")
console.log('\x1b[33m%s\x1b[0m', "일기토 신청을 눌러주세요.");
console.log("<주의> 꼭 Select가 나오고 입력해주세요!")

sleep(printString, 1500, 1, "Select 일기토 신청")
rl.on("line", function (line) {
    console.log(line,"을/를 입력했습니다.");
  if(line==="일기토 신청" && qlevel === 1){
      console.clear();
      if(Math.floor(Math.random()*10)<5){
        console.log('\x1b[33m%s\x1b[0m', "당신은 일기토에서 떨어졌습니다")
        console.log("일기토 신청은 실패했지만 용감도가 1 상승했습니다")
        console.log('\x1b[35m%s\x1b[0m', "또 도전해주세요!")
        sleep(printString, 1500, 1, "전투퇴장을 눌러주세요")
    }    
    else{
      console.log("빛전의 강함", hero.level)
      console.log('\x1b[31m%s\x1b[0m', "당신은 마수왕 라이언 일기토에 당첨되었습니다.")
      sleep(printString, 1500, 1, "1번 소지품과 2번 소지품 중 선택해주세요.")
      sleep(printString, 3000, 1, "<1번>: 힘의 환혹약, 커피쿠키")
      sleep(printString, 3000, 1, "<2번>: 지능의 환혹약, 훈제 치킨")
      sleep(printString, 3000, 1, "Select 1번 or 2번")}
    qlevel++
}
if(line==="1번" && qlevel === 2){
    console.clear();
    console.log("빛전의 강함", hero.level)
    sleep(printString, 1500, 1, "마법의 원천, 배수의 경지, 타오르는 별, 연속시전, 엑셀런스를 챙기셨나요?")
    sleep(printString, 3000, 1, "Select yes or no")
    qlevel++
  }
else if(line==="2번" && qlevel === 2){
    console.clear();
    hero.level++
    console.log("빛전의 강함", hero.level)
    sleep(printString, 1500, 1, "마법의 원천, 배수의 경지, 타오르는 별, 연속시전, 엑셀런스를 챙기셨나요?")
    sleep(printString, 3000, 1, "Select yes or no")
    qlevel++
}

else if(line==="yes" && qlevel === 3){
  hero.level++
  console.clear();
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "기타 버프와 포션을 사용했습니까")
  sleep(printString, 1500, 1, "버프: 브레이브, 프로테스2, 셀2, 버블")
  sleep(printString, 1500, 1, "포션: 리레이저, 포션키트, 에테르키트, 사제의 영약")
  sleep(printString, 3000, 1, "Select yes or no")
  qlevel++
}  
else if(line==="no" && qlevel === 3){
  console.clear();
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "기타 버프와 포션을 사용했습니까")
  sleep(printString, 1500, 1, "버프: 브레이브, 프로테스2, 셀2, 버블")
  sleep(printString, 1500, 1, "포션: 리레이저, 포션키트, 에테르키트, 사제의 영약")
  sleep(printString, 3000, 1, "Select yes or no")
  qlevel++
}  
  

else if(line==="yes" && qlevel === 4){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "빛의 장막을 챙기셨습니까")
  sleep(printString, 3000, 1, "Select yes or no")
  qlevel++
}  
else if(line==="no" && qlevel === 4){
  console.clear();
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "빛의 장막을 챙기셨습니까")
  sleep(printString, 3000, 1, "Select yes or no") 
  qlevel++
}  


else if(line==="yes" && qlevel === 5){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[33m%s\x1b[0m', "저런... 라이언에서는 빛의 장막이 필요 없습니다.")
  sleep(printString, 1500, 1, "디스펠을 챙기셨습니까")
  sleep(printString, 3000, 1, "Select yes or no")
  qlevel++
}  
else if(line==="no" && qlevel === 5){
  console.clear();
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "디스펠을 챙기셨습니까")
  sleep(printString, 3000, 1, "Select yes or no")
  qlevel++
}  

else if(line==="yes" && qlevel === 6){
  console.clear();
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "10초가 남았습니다. 무엇을 하시겠습니까?")
  sleep(printString, 3000, 1, "1. 전투입장")
  sleep(printString, 3000, 1, "2. 엑셀런스")
  sleep(printString, 3000, 1, "Select 1 or 2")
  qlevel++
 }  
else if(line==="no" && qlevel === 6){
  console.clear();
  monster.level=monster.level + 5
  console.log("빛전의 강함", hero.level)
  sleep(printString, 1500, 1, "10초가 남았습니다. 무엇을 하시겠습니까?")
  sleep(printString, 3000, 1, "1. 전투입장")
  sleep(printString, 3000, 1, "2. 엑셀런스")
  sleep(printString, 3000, 1, "Select 1 or 2")
  qlevel++
  
} 

else if(line==="1" && qlevel === 7){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log("10초동안 주위 유저의 응원을 받읍시다.")
  console.log('\x1b[33m%s\x1b[0m',"응원")
  qlevel++
 }  
else if(line==="2" && qlevel === 7){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  console.log("5초가 남았습니다. 전투입장을 합시다.")
  console.log('\x1b[33m%s\x1b[0m',"전투입장")
  qlevel++
} 

else if(line==="응원" && qlevel === 8){
  console.clear();
  console.log("빛전의 강함전", hero.level)
  console.log('\x1b[31m%s\x1b[0m',"전투가 시작되었습니다")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 3000, 1, "1. 환혹약 먹고 때린다")
  sleep(printString, 3000, 1, "2. 환혹약 먹고 배수의 경지!")
  sleep(printString, 3000, 1, "Select 1 or 2")
  qlevel++
 }  
else if(line==="전투입장" && qlevel === 8){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[31m%s\x1b[0m',"전투가 시작되었습니다")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 3000, 1, "1. 환혹약 먹고 때린다")
  sleep(printString, 3000, 1, "2. 환혹약 먹고 배수의 경지!")
  sleep(printString, 3000, 1, "Select 1 or 2")
  qlevel++
} 


else if(line==="1" && qlevel === 9){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  console.log('\x1b[31m%s\x1b[0m',"라이언의 3번 연속의 평타")
  sleep(printString, 3000, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 5000, 1, "1. 마법!")
  sleep(printString, 5000, 1, "2. 배수의 경지!")
  sleep(printString, 5000, 1, "3. 버케알!")
  sleep(printString, 5000, 1, "Select 1 or 2 or 3")
  qlevel++
} 
else if(line==="2" && qlevel === 9){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[33m%s\x1b[0m',"필사의 경지는 전투중에만 사용할수 있습니다.")
  console.log('\x1b[31m%s\x1b[0m',"라이언의 3번 연속의 평타")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 5000, 1, "1. 마법!")
  sleep(printString, 5000, 1, "2. 배수의 경지!")
  sleep(printString, 5000, 1, "3. 버케알!")
  sleep(printString, 5000, 1, "Select 1 or 2 or 3")
  qlevel++
} 








else if(line==="1" && qlevel === 10){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  getDamage(hero, monster, 6);
  console.log('\x1b[31m%s\x1b[0m', "라이언의 염제 열파충")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 연속시전!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 
else if(line==="2" && qlevel === 10){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  getDamage(hero, monster, 6);
  console.log('\x1b[31m%s\x1b[0m', "라이언의 염제 열파충")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 연속시전!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 

else if(line==="3" && qlevel === 10){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(hero, monster, 6);
  console.log(hero.hp)
  console.log("버케알 발동!")
  hero.hp = hero.hp + 3
  console.log("빛전의 현재hp", hero.hp)
  console.log('\x1b[31m%s\x1b[0m',"라이언의 염제 열파충")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 연속시전!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 







else if(line==="1" && qlevel === 11){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  console.log('\x1b[31m%s\x1b[0m',"외각에 즉사 장판이 생성되었습니다")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 마법의 원천!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 
else if(line==="2" && qlevel === 11){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[31m%s\x1b[0m',"외각에 즉사 장판이 생성되었습니다")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 마법의 원천!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 

else if(line==="3" && qlevel === 11){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log(hero.hp)
  console.log("버케알 발동!")
  hero.hp = hero.hp + 3
  console.log("빛전의 현재hp", hero.hp)
  console.log('\x1b[31m%s\x1b[0m',"외각에 즉사 장판이 생성되었습니다")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 마법의 원천!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 







else if(line==="1" && qlevel === 12){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  console.log('\x1b[33m%s\x1b[0m',"라이언: 힘이여 솟아라!!")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 열제 염기소를 시전합니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 타오르는 별!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 
else if(line==="2" && qlevel === 12){
  console.clear();
  hero.level++
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[33m%s\x1b[0m',"라이언: 힘이여 솟아라!!")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 열제 염기소를 시전합니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 타오르는 별!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 

else if(line==="3" && qlevel === 12){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log(hero.hp)
  console.log("버케알 발동!")
  hero.hp = hero.hp + 3
  console.log("빛전의 현재hp", hero.hp)
  console.log('\x1b[33m%s\x1b[0m',"라이언: 힘이여 솟아라!!")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 열제 염기소를 시전합니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 로스트 타오르는 별!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 










else if(line==="1" && qlevel === 13){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  console.log('\x1b[33m%s\x1b[0m',"라이언의 무기가 강화되었습니다.")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 강화된 평타를 때립니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 디스펠!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
} 
else if(line==="2" && qlevel === 13){
  console.clear();
  monster.level= monster.level + 1
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  console.log('\x1b[33m%s\x1b[0m',"라이언의 무기가 강화되었습니다.")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 강화된 평타를 때립니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 디스펠!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
  
} 

else if(line==="3" && qlevel === 13){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log(hero.hp)
  console.log("버케알 발동!")
  hero.hp = hero.hp + 3
  console.log("빛전의 현재hp", hero.hp)
  console.log('\x1b[33m%s\x1b[0m',"라이언의 무기가 강화되었습니다.")
  console.log('\x1b[31m%s\x1b[0m',"라이언이 강화된 평타를 때립니다.")
  sleep(printString, 1500, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 3000, 1, "1. 마법!")
  sleep(printString, 3000, 1, "2. 디스펠!")
  sleep(printString, 3000, 1, "3. 버케알!")
  sleep(printString, 3000, 1, "Select 1 or 2 or 3")
  qlevel++
  
} 









else if(line==="1" && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(monster, hero, 100);
  getDamage(hero, monster, monster.level*100);
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")

  qlevel++
} 
else if(line==="2" && monster.level === 1 && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[33m%s\x1b[0m',"디스펠이 발동해 라이언의 평타가 약해졌습니다.")
  getDamage(hero, monster, 2); 
  console.log('\x1b[31m%s\x1b[0m',"라이언이 패왕환영법을 사용합니다.")
  sleep(printString, 3000, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 5000, 1, "1. 선이 연결되지 않은 라이언 뒤로 간다")
  sleep(printString, 5000, 1, "2. 선이 연결된 라이언 뒤로 간다")
  sleep(printString, 5000, 1, "3. 라이언과 분신의 중간에 있는다")
  sleep(printString, 5000, 1, "Select 1 or 2 or 3")

  qlevel++
} 

else if(line==="2" && monster.level === 2 && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  console.log('\x1b[33m%s\x1b[0m',"디스펠이 발동해 라이언의 평타가 약해졌습니다.")
  getDamage(hero, monster, 2);
  console.log('\x1b[31m%s\x1b[0m',"라이언이 패왕환영법을 사용합니다.")
  sleep(printString, 3000, 1, "당신은 무엇을 하시겠습니까?")
  sleep(printString, 5000, 1, "1. 선이 연결되지 않은 라이언 뒤로 간다")
  sleep(printString, 5000, 1, "2. 선이 연결된 라이언 뒤로 간다")
  sleep(printString, 5000, 1, "3. 라이언과 분신의 중간에 있는다")
  sleep(printString, 5000, 1, "Select 1 or 2 or 3")

  qlevel++
} 

else if(line==="2" && monster.level === 6 && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(hero, monster, monster.level*100);
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  qlevel++
} 

else if(line==="2" && monster.level === 7 && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  console.log('\x1b[33m%s\x1b[0m',"당신은 디스펠을 가져오지 않았습니다")
  console.log('\x1b[33m%s\x1b[0m',"라이언의 무기가 강화되었습니다.")
  getDamage(hero, monster, monster.level*100);
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  qlevel++
} 

else if(line==="3" && qlevel === 14){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(hero, monster, monster.level*100);
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")

  qlevel++
} 








else if(line==="1" && monster.level === 1 && qlevel === 15){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log("당신은 선이 연결되지 않은 라이언 뒤로 갔습니다")
  console.log('\x1b[33m%s\x1b[0m',"당신은 선이 연결된 라이언의 귀곡혈산참을 맞았습니다.")
  hero.hp=hero.hp-1
  console.log("귀곡혈산참 데미지", 1,"빛전의 hp", hero.hp)
  console.log('\x1b[31m%s\x1b[0m',"라이언이 당신이 자리를 외우지 못한 지령맥을 사용합니다.")
  sleep(printString, 3000, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 5000, 1, "1. 마법")
  sleep(printString, 5000, 1, "2. 칼콤보")
  sleep(printString, 5000, 1, "Select 1 or 2")
  qlevel++
} 
else if(line==="1" && monster.level === 2 && qlevel === 15){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  console.log("당신은 선이 연결되지 않은 라이언 뒤로 갔습니다")
  console.log('\x1b[33m%s\x1b[0m',"당신은 선이 연결된 라이언의 귀곡혈산참을 맞았습니다.")
  hero.hp=hero.hp-1
  console.log("귀곡혈산참 데미지", 1,"빛전의 hp", hero.hp)
  console.log('\x1b[31m%s\x1b[0m',"라이언이 당신이 자리를 외우지 못한 지령맥을 사용합니다.")
  sleep(printString, 3000, 1, "당신은 무엇을 하시겠습니까?")

  sleep(printString, 5000, 1, "1. 마법")
  sleep(printString, 5000, 1, "2. 칼콤보")
  sleep(printString, 5000, 1, "Select 1 or 2")
  qlevel++
} 
else if(line==="2" && qlevel === 15){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log("당신은 선이 연결된 라이언 뒤로 갔습니다")
  console.log('\x1b[33m%s\x1b[0m',"당신은 선이 연결되지 않은 라이언의 귀곡혈산참을 맞았습니다.")
  hero.hp=hero.hp-100
  console.log("귀곡혈산참 데미지", 100,"빛전의 hp", hero.hp)
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  
  qlevel++
} 

else if(line==="3" && qlevel === 15){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log("당신은 가만히 있었습니다.")
  console.log('\x1b[33m%s\x1b[0m',"당신은 양 라이언의 귀곡혈산참을 맞았습니다.")
  hero.hp=hero.hp-101
  console.log("귀곡혈산참 데미지", 101,"빛전의 hp", hero.hp)
  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  
  qlevel++
} 




else if(line==="1" && monster.level === 1 && qlevel === 16){
  console.clear();
  console.log("빛전의 강함", hero.level)
 

  getDamage(hero, monster, monster.level*100);
  console.log('\x1b[33m%s\x1b[0m',"당신은 지령맥을 피하지 못했습니다.")
  hero.hp=hero.hp-100
  console.log("지령맥 데미지", 100,"빛전의 hp", hero.hp)

  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  qlevel++
} 
else if(line==="2" && monster.level === 1 && qlevel === 16){
  console.clear();
  console.log("빛전의 강함", hero.level)
  getDamage(hero, monster, monster.level*300);
  console.log('\x1b[33m%s\x1b[0m',"당신은 지령맥을 피하지 못했습니다.")
  hero.hp=hero.hp-1
  console.log("지령맥 데미지", 1,"빛전의 hp", hero.hp)

  console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
  sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  qlevel++
} 

else if(line==="1" && monster.level === 2 && qlevel === 16){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  if(monster.hp<=0){
    console.log('\x1b[33m%s\x1b[0m',"라이언이 사망했습니다")
    console.log('\x1b[33m%s\x1b[0m',"<성공> 전율하는 백수의 왕'마수왕 라이언'")
    console.log('\x1b[33m%s\x1b[0m',"전과 (3,375,000), 묵시 (30), 고원의 잠긴상자 (99), 전과기록 라이언2")
    sleep(printString, 3000, 1, "주위의 유저들이 감사와 축하의 마음을 점프로 전합니다")
    sleep(printString, 5000, 1, "전투퇴장을 눌러주세요")
    }

    if(monster.hp>0){
      getDamage(hero, monster, monster.level*300);
      console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
      sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
    }
 


  qlevel++
} 
else if(line==="2" && monster.level === 2 && qlevel === 16){
  console.clear();
  console.log("빛전의 강함", hero.level)
  console.log('\x1b[35m%s\x1b[0m',"라이언에게 로스트 타오르는별의 지속 데미지가 들어갑니다.")
  monster.hp = monster.hp - hero.level*275
  console.log("로스트 타오르는별", hero.level*275, "라이언의 남은 HP", monster.hp)
  if(monster.hp<=0){
    console.log('\x1b[33m%s\x1b[0m',"라이언이 사망했습니다")
    console.log('\x1b[33m%s\x1b[0m',"<성공> 전율하는 백수의 왕'마수왕 라이언'")
    console.log('\x1b[33m%s\x1b[0m',"전과 (3,375,000), 묵시 (30), 고원의 잠긴상자 (99), 전과기록 라이언2")
    sleep(printString, 3000, 1, "주위의 유저들이 감사와 축하의 마음을 점프로 전합니다")
    sleep(printString, 5000, 1, "전투퇴장을 눌러주세요")
    }

  if(monster.hp>0){
    getDamage(hero, monster, monster.level*300);
    console.log('\x1b[41m%s\x1b[0m',"YOU DiED")
    sleep(printString, 3000, 1, "전투퇴장을 눌러주세요")
  }

  qlevel++
} 

  
  if (line === "전투퇴장") {
    rl.close();
  }
}).on("전투퇴장", function () {
  console.log("일기토를 퇴장했습니다.");
});