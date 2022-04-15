
// switch

var renjya = "학자";

switch (renjya) {
    case "음유시인" : 
    console.log("바이올린연주")
    break;

    case "암흑기사" :
    console.log("영웅의 환영 소환")
    break;

    case "사무라이" :
        console.log("무쌍재 제사")
        break;

    default :
    console.log("전력질주");
    break;

}

//숙제 기공사의 광역 딜 사이클 switch 버전


var BioblasterGCD = 13
var HeatGauge = 70
var FlamethrowerGCD = 5

 console.log("BioblasterGCD :" + BioblasterGCD+",","HeatGauge :" + HeatGauge +",","FlaemthrowerGCD :" + FlamethrowerGCD)
 switch (true){
     case (BioblasterGCD<2.5) :
         console.log("Cast-Bioblaster");
     case (BioblasterGCD > 9) :
         if (HeatGauge>=50){console.log("Buff-Overheated and Cast-Auto Crossbow");}
     case (BioblasterGCD > 9) :
         if (HeatGauge<50 && FlamethrowerGCD <2.5){console.log("Cast-Flamethrower");}
     case (BioblasterGCD <= 9) :
         if (BioblasterGCD >=2.5 && BioblasterGCD <= 9){console.log("Cast-Spread Shot and Cast-Bioblaster after", BioblasterGCD, "seconds");}
     case (BioblasterGCD > 9) :
         if (BioblasterGCD > 9 && HeatGauge <50 && FlamethrowerGCD >2.5) {console.log ("Cast-Spread Shot");}
     break;       
     default :
     break;               
 }