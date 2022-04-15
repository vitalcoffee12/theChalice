// 반복문!

/* for (변수 선언 초기화식 ; 조건 검사 조건식 ;반복 후 식) {
  실행 코드
}
조건 검사식 검사 시 참일 때 한번 더 반복
*/

//index, "i", "j", "k" = 보통 반복문 변수 선언 시 사용
for (var index=0 ; index <5 ; index ++) {
    console.log ("반복");
}
//초읽기 만들기~

//var timer = 21 ;

for (var timer=21 ; timer>=0 ; timer --){
    if (timer == 21)console.log("초읽기 시작");
    else if (timer ==20) console.log (timer, "초");
    else if (timer <21 && timer >15){}
    else if (timer ==15)console.log(timer, "초");
    else if (timer <15 && timer>10){}
    else if (timer <=10, timer>0)console.log (timer,"초");
    else console.log ("출발!!!!!")
}


// 변수%n == 0 : 변수 나누기 n 했을때 나머지가 0, 즉 변수는 n의 배수 

/**
 *  구구단 만들기
 * - 1단 9단까지 출력되도록 만들기
 * - for문 딱 두개만
 */

for (var i = 2 ; i <= 9 ; i++) {
    for (var j = 1 ; j <=9 ; j++){
        console.log(i,"X", j , "=" , i*j)
    }
}

// for문 다른 조건으로 탈출하는 식
