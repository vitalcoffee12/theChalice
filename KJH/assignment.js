//탱커의 무적기 특징에 대하여 220227

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
else {
  console.log("일대일대결");
}
