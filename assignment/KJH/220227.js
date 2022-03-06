//탱커의 무적기 특징에 대하여 220227

var invincibletime = 101;
var getdamage = "x";

if(invincibletime==10 && getdamage=="x"){
  console.log("천하무적");
}
else if(invincibletime==10 && getdamage!="x"){
  console.log("산송장");
}
else if(invincibletime==8 && getdamage=="x"){
  console.log("폭발유성");
}
else if(invincibletime==8 && getdamage!="x"){
  console.log("일대일대결");
}
else {
  console.log("지속시간이랑 데미지 여부를 다시 확인해 주세요!");
}