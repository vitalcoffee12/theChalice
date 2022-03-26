/** while 문
 * while(참일때){실행}
 * 탈출 조건이 잘 설정되어야함, 아니면 무한 루프 버그 위험
 * */


/**  단축키설정
 * 
 *  ctrl+c 무한루프 탈출~
 * 
 *  alt + 방향키 그 줄 문장이 전체로 이동~~
 * 
 * ctrl + alt + shift + 방향키  = 여러줄 선택 가능 그 후 중복 문장 쓸수있음~~
 * 
 * ctrl + space = 자동입력 나옴~~
*/

//구구단을 while문 2개만 써서 만들어 보자!

console.log ("!!while 문 구구단 숙제!!")

var i=2 ;
var j=1 ;

while (i<=9){
    while (j<=9) {//이 while문에서 최종 j 결과값이 10이 되니까 3단부터는 실행이 안됨
        console.log(i, "X", j, "=", i*j);
        j++;
    };
    i++;
    j=j-9
};




//배열!!!!!!!!!!!!
//Array

//자유부대원 들!!

var fcMembers = ["녹차", "흑당", "렌쟈", "레터", "릴라"] ;
//녹차 >> 0, 흑당 >> 1, 렌쟈 >> 2 ...
console.log (fcMembers);
console.log (fcMembers[0]);

for ( var arrayAddr = 0 ; arrayAddr < fcMembers.length; arrayAddr++) {
    console.log (fcMembers[arrayAddr]);
}

/** 숙제
 * 1. while문으로 구구단
 * 2. 홀수번/짝수번 부대원의 이름을 출력하기.
 *  출력결과 :> 녹차,렌쟈,릴라
 *            > 흑당, 레터
 */

console.log("!!숙제 결과 홀수 멤버!!")

for ( var oddMembers = 0 ; oddMembers < fcMembers.length; oddMembers=oddMembers+2) {
    console.log (fcMembers[oddMembers]);
}

console.log("!!숙제 결과 짝수 멤버!!")
for ( var evenMembers = 1 ; evenMembers < fcMembers.length; evenMembers=evenMembers+2) {
    console.log (fcMembers[evenMembers]);
}