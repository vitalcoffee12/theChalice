/** WHILE
 * */
var i = 0;
while (i < 20) {
  console.log("while ", i);
  i++;
}

/**
 * 무한 루프에 빠졌을때
 * ctrl + c 로 터미널 실행 종료 가능
 * */

/**
 * while 코드를 쓰는 예시
 */
while (true) {
  // 매 프레임
  // 계산
  // 사용자의 이동, 활동, 몬스터의 반응 계산
  // 화면 그리는 코드

  if (/*게임 종료 명령*/ true) {
    break;
  }
}

/**
 * for -> while
 * 구구단
 */

/** 배열
 *
 * Array
 */
// 자유부대원 '들'
var fcMembers = [["녹차1", "녹차2"], "흑당", 3, "레터", "릴라"];
console.log(fcMembers[0]);

for (var j = 0; j < fcMembers.length; j++) {
  console.log(fcMembers[j]);
}

/** 숙제
 * 1. while문으로 구구단
 * 2. 홀수번/짝수번 부대원의 이름을 출력하기.
 *  출력결과 :> 녹차,렌쟈,릴라
 *            > 흑당, 레터
 */
