const { on } = require("events");
var readline = require("readline");
const { isFloat32Array } = require("util/types");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// ------------------------------------------------------
console.log("지금부터 세가지 질문을 드리겠습니다. 대답은 YES OR NO 로만 입력해주세요.");



var a=0;
var firstanswer;
var secondanswer;
var thirdanswer;

//if(a==1){
    rl.on("line",function(line){
        console.log("you entered",line);

      
        if(a==0){
            console.log("첫번째질문");
            }    

        else if(a==1){
            console.log("두번째질문");   
            }   
            
        else if(a==2){
             console.log("세번째질문");   
            }     
        
           
        
       
        if(line==="YES"){
            
            
            if(a==1){
                firstanswer=line;
                
            }
            else if(a==2){
                secondanswer=line;
                
            }
            else if(a==3){
                thirdanswer=line;
                
            }
            a++;
            
        }
        else if(line=="NO"){
           
            
            if(a==1){
                firstanswer=line;
                
            }
            else if(a==2){
                secondanswer=line;
                
            }
            else if(a==3){
                thirdanswer=line;
                
            }
            a++;
            
        }
        else if(line!="YES" && line!="NO" ){
                console.log("YES,NO만 입력해주세요.");
            
            //rl.close();
        }
        else
            rl.close();  


        if(a==4){
            console.log("당신의 첫질문 답변은" + firstanswer + "두번째 질문 답변은" + secondanswer +"세번째 질문 답변은" + thirdanswer +"입니다.");
            rl.close();
        }

        
        }

        
    )

/*else{
    rl.on("close",function(){
        console.log("input event closed");
    }*/