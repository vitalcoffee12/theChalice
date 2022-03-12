var readline = require("readline");

const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

var job = "미정";
var qlevel = 1;
console.clear();
console.log("당신은 탱커입니까? (yes/no)");
rl.on("line", function(line){
    if(line === "close"){
        rl.close()
    }
    switch(job)
    {
        case "미정" :
            if(line === "yes" && qlevel == 1)
            {
                console.log("당신은 방패를 사용합니까?");
                job = "탱커";
            }
            else if(line === "no" && qlevel == 1)
            {
                console.log("탱커가 아니면 알고싶지 않습니다.")
                process.exit(1);
            }
            else
            {
                console.clear();
                console.log("잘못 입력하셨습니다.");
                process.exit(1);
            }
            break;
        
        case "탱커" :
            if(line === "yes" && qlevel == 2)
            {
                console.log("당신은 나이트 입니다.");
                process.exit(1);  
            } 
            else if(line === "no" && qlevel == 2)
            {
                console.log("당신은 도끼를 사용합니까?");
            }
            else if(line === "yes" && qlevel == 3)
            {
                console.log("당신은 전사 입니다.");
                process.exit(1); 
            }
            else if(line === "no" && qlevel == 3)
            {
                console.log("당신은 대검을 사용합니까?")
            }
            else if(line === "yes" && qlevel == 4)
            {
                console.log("당신은 암흑기사 입니다.");
                process.exit(1); 
            }
            else if(line === "no" && qlevel == 4)
            {
                console.log("당신은 건브레이커 입니다.");
                process.exit(1); 
            }
            break;
        
        default :
            console.clear();
            console.log("잘못 입력하셨습니다.");
            process.exit(1);
    }
    qlevel ++;
    
    
}).on("close", function(){
    console.log("input event closed");
});