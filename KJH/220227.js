
console.log(3 >= 4);
console.log(5 != 4);

console.log(!(3 != 4))
console.log((3 == 3 && 4 == 4))
console.log(!(3 == 3 || 4 == 4))

/** 
 * 
 * */ 
if(3 == 3){console.log("정답입니다")}

if (false) {
    console.log("정답입니다");
  } else if (true) {
    console.log("else if");
  } else if (true) {
    console.log("else if 2");
  } else {
    console.log("else");
  }


/** 0이랑 ""은 false 취급
 * var nodata; 
 * 
 * 
 */

//탱커의 무적기 특징에 대하여

 var invincibletime = 10;
 var getdamage = "x";

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
