//숙제 220206

console.log("\n      ♪      ○ \n         /l__l__/l    ♪ \n       /         l      \"Hello World!\"\n      ( ﾐ⌒ ●⌒ ﾐ  )  /   ★ Ku Po ★")


//숙제 220218

var pom ="       ♪      ○ "
var ear ="\n         /l__l__/l    ♪ "
var head ='\n        /         l      Hello World!'
var smile ="\n       ( ﾐ⌒ ●⌒ ﾐ  )  /   ★ Ku Po ★"
console.log(pom+ear+head+smile);





//탱커의 무적기 특징에 대하여 220228

var invincibletime = 10;
var getdamage = "X";

if(invincibletime==10 && getdamage=="X"){
  console.log("천하무적");
}
else if(invincibletime==8 && getdamage=="X"){
  console.log("폭발유성");
}
else if(invincibletime==10 && getdamage!="X"){
  console.log("산송장");
}
else if(invincibletime==8 && getdamage!="x"){
  console.log("일대일대결");
}
else {
  console.log("지속시간이랑 데미지 여부를 다시 확인해 주세요!");
}

// if문 스위치로 바꾸고 같이 사용 220306

var invincibletime= "10";
var getdamage= "O"
switch(invincibletime){
    default:
        console.log("지속시간이랑 데미지 여부를 다시 확인해 주세요!")
        break;

  case "10":
  if(getdamage=="X"){
      console.log("천하무적");
    }

  else if(getdamage=="O"){
      console.log("산송장");
    }

  break;

  case "8":
    if(getdamage=="X"){
        console.log("폭발유성");
      }
  
    else if(getdamage=="O"){
        console.log("일대일대결");
      }
  
    break;
}


// 숙제 1단부터 9단까지 구구단 만들기

for (var GG = 1; GG <= 9; GG++)
for (var TT = 1; TT <= 9; TT++){
    console.log( GG, "*", 1*TT, "=", GG*TT)
    if(1*TT == 9){console.log("-", GG, "단 완료-")}
}