// 숙제 1단부터 9단까지 구구단 만들기

for (var GG = 1; GG <= 9; GG++)
for (var TT = 1; TT <= 9; TT++){
    console.log( GG, "*", 1*TT, "=", GG*TT)
    if(1*TT == 9){console.log("-", GG, "단 완료-")}
}