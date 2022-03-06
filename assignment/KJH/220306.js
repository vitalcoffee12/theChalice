// if문 스위치로 바꾸고 복합 사용

var invincibletime= "10";
var getdamage= "X"
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