// 반복문
// for

// var index = 0;

// index [index], "i" , "j" , "k",
//
var timer = 21;
/**
 * 초읽기 만들기
 *
 * timer  변수를 셉니다.
 * 거꾸로 세는데,
 * 10초까지는 5의 배수일때만 출력
 * ex ) 20, 15, 10
 * 10초부터는 10, 9, 8, 으로 1초마다 출력
 * 0초일때는 출발! 이라는 단어가 나오도록
 */

for (var i = 1; i <= 9; i++) {
  console.log("2 * ", i, " = ", i * 2);

  /**
   * index = 1
   *    2 * 1 = (2)
   * index = 2
   *    2 * 2 = (4)
   * idnex = 3
   * index = 4
   * index = 5
   * ....
   * index = 9
   *    2 * 9 = 18
   * index = 10;
   *
   */
}

for (timer = 22; timer >= 0; timer--) {
  if (timer >= 10 && timer % 5 == 0) console.log(timer, "초");
  else if (timer < 10 && timer != 0) {
    console.log(timer, "초");
  } else if (timer == 0) {
    console.log("시작");
  }
  // n 숫자로 나눈 나머지가 0이면 n의 배수
  // TODO : 개선이 필요한 초읽기, 가장 시작초가 안나오는 버그가 있음
}

/**
 *  구구단 만들기
 * - 2단 9단까지 출력되도록 만들기
 * - for문 딱 두개만
 */

// for 문의 사용
var i = 0;
for (;;) {
  console.log(i);
  i = i + 20;

  if (i < 20) {
    break;
  }
}
