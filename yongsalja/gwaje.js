var dragoneye= "1";
var buffcooldown= "20"
switch(dragoneye){
    default:
        console.log("용눈 갯수와 버프 쿨타임을 확인하세요")
        break;

  case "1":
  if(buffcooldown >= "17"){
      console.log("느린 버스트");
    }

  else if(buffcooldown < "17"){
      console.log("붉은 용혈 진입");
    }

  break;

  case "2":
    if(buffcooldown >= "17"){
        console.log("느린 버스트");
      }
  
    else if(buffcooldown < "17"){
        console.log("붉은 용혈 진입");
      }
  
    break;
}
