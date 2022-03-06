var job="흑마도사";
var level=60;



switch(job)
{
    case "사무라이":
        if(level<10){
            console.log("뉴비사무라이");
            break;
        }
        else if(level>=10 && level<=50){
            console.log("창천 사무라이(있을리없지만)");
            break;
        }
        else if(level>50 && level<=70){
            console.log("홍련 사무라이");
            break;
        }
        else if(level>70 && level<=80){
            console.log("칠흑 사무라이");
            break;
        }    
    
    case "건브레이커":
        if(level<10){
            console.log("뉴비건브");
            break;
        }
        else if(level>=10 && level<=50){
            console.log("창천 건브(있을리없지만)");
            break;
        }
        else if(level>50 && level<=70){
            console.log("홍련 건브");
            break;
        }
        else if(level>70 && level<=80){
            console.log("칠흑 건브");
            break;
        } 
    
    case "백마도사":
        if(level<10){
            console.log("뉴비백마");
            break;
        }
        else if(level>=10 && level<=50){
            console.log("창천 백마");
            break;
        }
        else if(level>50 && level<=70){
            console.log("홍련 백마");
            break;
        }
        else if(level>70 && level<=80){
            console.log("칠흑 백마");
            break;
        } 
    
    case "흑마도사":
        if(level<10){
            console.log("뉴비흑마");
            break;
        }
        else if(level>=10 && level<=50){
            console.log("창천 흑마");
            break;
        }
        else if(level>50 && level<=70){
            console.log("홍련 흑마");
            break;
        }
        else if(level>70 && level<=80){
            console.log("칠흑 흑마");
            break;
        } 
    default :
        break;
}