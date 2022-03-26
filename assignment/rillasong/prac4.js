/*
var i=2;
var j=1;

while(i<=9){
    console.log("[",i,"단","]");
    while(j<=9){
        console.log(i, "*", j, "=",i*j );
        j++;
    }
    j=1;
    ++i;
}
*/ //while 문숙제

var fcMembers=["녹차","흑당","렌쟈","레터","릴라"];

for(i=0;i<fcMembers.length;i++){
    if(i%2==0)
        console.log(fcMembers[i])
}

for(i=0;i<fcMembers.length;i++){
    if(i%2==1)
        console.log(fcMembers[i])
}