var job="사무라이2";
var level=80;



if(job=="사무라이"){
    if(level==80){
        console.log("만랩의 사무라이 입니다.");
    }
    else{
        console.log("만랩이 아닌 사무라이 입니다.");
    }
}
else if(job!="사무라이"){
    if(level==80){
        console.log("만랩인 다른직업입니다.");
    }
    else{
        console.log("만랩이 아닌 다른직업입니다.");
    }
}
else{
    console.log("뭐고 이건...?");
}
